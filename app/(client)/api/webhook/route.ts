import stripe from "@/lib/stripe";
import { backendClient } from "@/sanity/lib/backendClient";
import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

export async function POST(req: NextRequest) {
  const body = await req.text();
  const sig = req.headers.get("stripe-signature");

  if (!sig) return NextResponse.json({ error: "Missing signature" }, { status: 400 });

  const webhookSecret = process.env.STRIPE_WEBHOOK_SECRET;
  if (!webhookSecret) return NextResponse.json({ error: "Missing secret" }, { status: 400 });

  let event: Stripe.Event;

  try {
    event = stripe.webhooks.constructEvent(body, sig, webhookSecret);
  } catch (err) {
    console.error("Webhook signature error:", err);
    return NextResponse.json({ error: "Invalid webhook" }, { status: 400 });
  }

  try {
    if (event.type === "checkout.session.completed") {
      const session = event.data.object as Stripe.Checkout.Session;

      await createOrder(session);
    }

    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("WEBHOOK HANDLER ERROR:", err);
    return NextResponse.json({ error: "Webhook failed" }, { status: 500 });
  }
}
// ===========================
// CREATE ORDER FUNCTION
// ===========================
type ParsedItem = {
  productId: string;
  quantity: number;
};

async function createOrder(session: Stripe.Checkout.Session) {
  try {
    const metadata = session.metadata;

    if (!metadata?.items) {
      console.log("❌ No items in metadata");
      return;
    }

    let items: ParsedItem[] = [];

    try {
      items = JSON.parse(metadata.items);
    } catch (err) {
      console.log("❌ Invalid JSON in metadata.items", err);
      return;
    }

    if (!Array.isArray(items) || items.length === 0) {
      console.log("❌ Empty items");
      return;
    }

    const order = await backendClient.create({
      _type: "order",
      orderNumber: metadata.orderNumber || `order-${Date.now()}`,
      stripeCheckoutSessionId: session.id,
      stripePaymentIntentId: session.payment_intent,
      stripeCustomerId: session.customer,
      customerName: metadata.customerName || "Unknown",
      email: metadata.customerEmail || "Unknown",
      totalPrice: (session.amount_total || 0) / 100,
      status: "paid",
      paymentStatus: "paid",
      orderDate: new Date().toISOString(),

      products: items.map((i) => ({
        _key: i.productId,
        product: {
          _type: "reference",
          _ref: i.productId,
        },
        quantity: i.quantity,
      })),
    });

    console.log("✅ ORDER CREATED:", order._id);
  } catch (err) {
    console.error("CREATE ORDER FAILED:", err);
  }
}