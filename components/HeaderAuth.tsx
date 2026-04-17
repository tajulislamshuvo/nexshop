"use client";

import { useUser, UserButton, } from "@clerk/nextjs";
import Link from "next/link";
import { Logs } from "lucide-react";
import SignIn from "./SignIn";
import { Order } from "@/sanity.types";

const HeaderAuth = ({ orders }: { orders: Order | null }) => {
  const { isSignedIn, isLoaded } = useUser();

  // 🔥 VERY IMPORTANT (prevents hydration error)
  if (!isLoaded) return null;

  return (
    <>
      {isSignedIn ? (
        <>
          <Link
            href="/orders"
            className="group relative hover:text-shop_light_green hoverEffect"
          >
            <Logs className="h-5 w-5" />
            {(orders?.length) > 0 && (
              <span className="absolute -top-1 -right-1 bg-shop_btn_dark_green  text-white h-3.5 w-3.5 rounded-full text-xs font-semibold flex items-center justify-center">
                {orders.length}
              </span>
            )}
          </Link>

          <UserButton />
        </>
      ) : (
        <SignIn />
      )}
    </>
  );
};

export default HeaderAuth;