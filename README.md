🛒 NexShop

Live Demo: https://nexshop-lyart.vercel.app

NexShop is a modern full-stack eCommerce web application built with Next.js, Clerk authentication, Stripe payments, and Sanity CMS. It provides a fast, secure, and scalable shopping experience with real-time cart management and order tracking.

🚀 Features
🔐 Authentication with Clerk (Sign in / Sign up / User management)
🛍️ Product listing with dynamic CMS (Sanity)
🛒 Cart system with Zustand state management
💳 Secure Stripe payment integration
📦 Order tracking system
❤️ Wishlist / Favourite products
🔍 Search functionality
📱 Fully responsive UI (mobile-first design)
⚡ Fast performance with Next.js App Router
☁️ Deployed on Vercel
🧰 Tech Stack
Frontend
Next.js (App Router)
React.js
Tailwind CSS
Lucide Icons
Framer Motion
Backend / Services
Sanity CMS (Product & content management)
Clerk Authentication
Stripe Payment Gateway
State Management
Zustand (Cart & global state)

📁 Project Structure

nexshop/
├── app/
│ ├── (client)/
│ ├── success/
│ ├── orders/
│ ├── shop/
├── components/
│ ├── Header.tsx
│ ├── CartIcon.tsx
│ ├── FavouriteButton.tsx
│ ├── SignIn.tsx
├── store/
│ ├── index.ts
├── sanity/
│ ├── lib/
│ ├── queries/
├── lib/
├── public/
├── styles/
⚙️ Environment Variables

Create a .env.local file and add:

NEXT_PUBLIC_CLERK_PUBLISHABLE_KEY=your_clerk_key
CLERK_SECRET_KEY=your_clerk_secret

NEXT_PUBLIC_SANITY_PROJECT_ID=your_sanity_project_id
NEXT_PUBLIC_SANITY_DATASET=production

STRIPE_SECRET_KEY=your_stripe_secret
NEXT_PUBLIC_STRIPE_PUBLISHABLE_KEY=your_stripe_public_key

SANITY_API_READ_TOKEN=your_sanity_token
🛠️ Installation & Setup

1. Clone the repository
   git clone https://github.com/tajulislamshuvo/nexshop
   cd nexshop
2. Install dependencies
   npm install
3. Run development server
   npm run dev

App runs at:

http://localhost:3000
💳 Stripe Payment Flow
User adds products to cart
Proceeds to checkout
Stripe Checkout session is created
User completes payment
Redirected to /success
Order is saved & cart is cleared
🧠 Key Features Explained
🛒 Cart System

Built using Zustand, allowing:

Add / remove products
Quantity update
Persistent state
🔐 Authentication

Powered by Clerk:

Secure login/signup
User session handling
Protected routes (orders, checkout)
🗂️ CMS

Products are managed using Sanity:

Real-time product updates
Category-based filtering
Scalable content structure
💳 Payments

Handled via Stripe:

Secure checkout sessions
Webhook support (order confirmation)
Payment success redirect
📦 Pages Overview
Page Description
/ Home page with featured products
/shop Product listing page
/product/[slug] Product details
/cart Cart management
/success Payment success page
/orders User order history
🧪 Build & Deployment
Build for production:
npm run build
Start production server:
npm start
Deploy:
Hosted on Vercel
Auto CI/CD from GitHub
📸 Screenshots

<p align="center">
  <img src="/images/nexshop-home.png" width="300"/>
</p>

🔥 Future Improvements
AI product recommendations
Admin dashboard
Order tracking with courier API (Bangladesh integration)
Email notifications
Coupon / discount system
🤝 Contributing

Pull requests are welcome. For major changes, please open an issue first.
