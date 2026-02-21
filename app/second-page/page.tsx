"use client";

import { useState } from "react";
import PaystackButton from "@/components/PaystackButton";

const features = [
  {
    title: "Easy Payment",
    description: "Pay instantly with local or international options",
    Icon: () => (
      <svg
        viewBox="0 0 48 48"
        className="h-12 w-12 text-[#5ec5a7]"
        aria-hidden
      >
        <rect
          x="6"
          y="14"
          width="36"
          height="20"
          rx="4"
          fill="currentColor"
          opacity="0.2"
        />
        <rect
          x="10"
          y="18"
          width="28"
          height="12"
          rx="2"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
        />
        <circle cx="18" cy="24" r="2" fill="currentColor" />
      </svg>
    ),
  },
  {
    title: "Prescription Available",
    description: "Get your exact prescription in smart glasses",
    Icon: () => (
      <svg
        viewBox="0 0 48 48"
        className="h-12 w-12 text-[#5ec5a7]"
        aria-hidden
      >
        <path
          d="M12 20h6a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4Zm18 0h6a4 4 0 0 1 4 4v4a4 4 0 0 1-4 4h-6a4 4 0 0 1-4-4v-4a4 4 0 0 1 4-4Z"
          fill="none"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
        <path
          d="M24 24h0"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
  {
    title: "Local & International",
    description: "We support payments from Nigeria and worldwide",
    Icon: () => (
      <svg
        viewBox="0 0 48 48"
        className="h-12 w-12 text-[#5ec5a7]"
        aria-hidden
      >
        <circle cx="24" cy="24" r="12" stroke="currentColor" strokeWidth="2" fill="none" />
        <path
          d="M12 24h24M24 12c4 6 4 18 0 24"
          stroke="currentColor"
          strokeWidth="2"
          strokeLinecap="round"
        />
      </svg>
    ),
  },
];

const paymentOptions = [
  {
    title: "Local Payments",
    description: "Pay with your preferred Nigerian payment method",
    bullets: ["Debit/Credit Cards", "Bank Transfer", "USSD"],
    poweredBy: "Paystack",
  },
  {
    title: "International Payments",
    description: "Pay from anywhere in the world",
    bullets: ["International Cards", "Apple Pay", "Google Pay", "Meta Pay"],
    poweredBy: "Stripe",
  },
];

const learnArticles = [
  {
    title: "What Are Smart Glasses?",
    description: "Discover the technology behind smart eyewear and how it works.",
  },
  {
    title: "Smart Glasses for Work & Daily Life",
    description: "Learn how smart glasses can enhance your productivity and comfort.",
  },
  {
    title: "Smart Glasses for Drivers",
    description: "Safety features and benefits for road users.",
  },
  {
    title: "Prescription Smart Glasses Explained",
    description: "Everything you need to know about prescription options.",
  },
  {
    title: "How to Choose the Right Smart Glasses",
    description: "A comprehensive guide to selecting the perfect pair.",
  },
];

const products = [
  {
    name: "Phomax Smart Vision",
    description: "Prescription smart glasses for work and daily screen use.",
    price: "₦270,000",
    image:
      "https://images.unsplash.com/photo-1485163819542-13adeb5e0068?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Phomax Smart Drive",
    description: "Prescription smart glasses for drivers and road safety.",
    price: "₦590,000",
    image:
      "https://images.unsplash.com/photo-1487412720507-e7ab37603c6f?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Smart Glasses (Non-Prescription)",
    description: "Everyday smart glasses with built-in technology.",
    price: "₦95,000",
    image:
      "https://images.unsplash.com/photo-1483982258113-b72862e6cff6?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Phomax Smart Pro",
    description: "Professional smart glasses with advanced features.",
    price: "₦155,000",
    image:
      "https://images.unsplash.com/photo-1475180098004-ca77a66827be?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Phomax Smart Sport",
    description: "Athletic smart glasses with enhanced durability.",
    price: "₦145,000",
    image:
      "https://images.unsplash.com/photo-1502740479091-635887520276?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Phomax Smart Lite",
    description: "Lightweight smart glasses for all-day comfort.",
    price: "₦115,000",
    image:
      "https://images.unsplash.com/photo-1506869640319-fe1a24fd76dc?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Phomax Smart Clear",
    description: "Crystal clear lenses with smart technology.",
    price: "₦128,000",
    image:
      "https://images.unsplash.com/photo-1466921583968-f07aa80c526e?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Phomax Smart Night",
    description: "Optimized for night driving and low-light conditions.",
    price: "₦138,000",
    image:
      "https://images.unsplash.com/photo-1456327102063-fb5054efe647?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Phomax Smart Classic",
    description: "Timeless design with modern smart features.",
    price: "₦118,000",
    image:
      "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?auto=format&fit=crop&w=600&q=80",
  },
  {
    name: "Smart Glasses Premium",
    description: "Premium non-prescription smart eyewear.",
    price: "₦105,000",
    image:
      "https://images.unsplash.com/photo-1490367532201-b9bc1dc483f6?auto=format&fit=crop&w=600&q=80",
  },
];

export default function Home() {
  const [email, setEmail] = useState("customer@example.com");

  return (
    <div className="min-h-screen bg-gradient-to-b from-[#f8fbff] to-white text-[#0f2c54]">
      <div className="mx-auto flex max-w-6xl flex-col gap-20 px-6 pb-24 pt-10 sm:px-10 lg:px-12">
        <header className="flex items-center justify-between">
          <span className="text-xl font-semibold tracking-wide">Phomax</span>
          <nav className="hidden gap-10 text-sm text-[#1b3766] sm:flex">
            <a href="#products" className="hover:text-[#0f2c54]">
              Products
            </a>
            <a href="#learn" className="hover:text-[#0f2c54]">
              Learn
            </a>
            <a href="#support" className="hover:text-[#0f2c54]">
              Support
            </a>
          </nav>
        </header>

        <main className="flex flex-col items-center text-center">
          <div className="flex flex-col items-center gap-6">
            <h1 className="max-w-3xl text-4xl font-semibold leading-tight text-[#0f2c54] sm:text-5xl">
              Smart Glasses Made Easy
            </h1>
            <p className="max-w-2xl text-lg text-[#50607c]">
              Buy smart glasses—normal or prescription—and pay instantly.
            </p>
            <button className="rounded-full bg-[#2ac488] px-10 py-3 text-white shadow-md transition hover:bg-[#24b179]">
              Buy Now
            </button>
            <p className="text-sm text-[#6a7b97]">
              Secure payments. Local & international options available.
            </p>
          </div>

          <div className="mt-6 w-full max-w-md">
            <label className="mb-2 block text-left text-sm font-medium text-[#0f2c54]">
              Email for Payment
            </label>
            <input
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              type="email"
              className="w-full rounded-xl border border-[#dfe8f5] bg-white px-4 py-3 text-sm text-[#0f2c54] shadow-sm outline-none focus:border-[#2ac488] focus:ring-2 focus:ring-[#2ac488]/20"
              placeholder="customer@example.com"
            />
            <p className="mt-2 text-left text-xs text-[#6a7b97]">
              This email will be sent to Paystack for the transaction.
            </p>
          </div>

          <section className="mt-24 flex w-full flex-col items-center gap-10">
            <div className="text-sm font-semibold uppercase tracking-[0.2em] text-[#7f8cab]">Why Phomax?</div>
            <div className="grid w-full gap-12 text-left sm:grid-cols-3">
              {features.map(({ title, description, Icon }) => (
                <div key={title} className="flex flex-col items-center gap-4 text-center">
                  <div className="flex h-20 w-20 items-center justify-center rounded-full bg-[#dff6ef]">
                    <Icon />
                  </div>
                  <div>
                    <h3 className="text-base font-semibold text-[#0f2c54]">{title}</h3>
                    <p className="mt-2 text-sm text-[#5a6783]">{description}</p>
                  </div>
                </div>
              ))}
            </div>
          </section>

          <section id="products" className="mt-32 flex w-full flex-col items-center gap-10">
            <div className="text-center">
              <h2 className="text-2xl font-semibold text-[#0f2c54]">Choose Your Smart Glasses</h2>
              <p className="mt-2 text-sm text-[#5f6f8c]">Clear vision. Smart features. Easy payment.</p>
            </div>
            <div className="grid w-full gap-6 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 [grid-template-columns:repeat(auto-fit,minmax(260px,1fr))]">
              {products.map((product) => (
                <article
                  key={product.name}
                  className="flex h-full min-w-[260px] flex-col rounded-3xl border border-[#e4ecf5] bg-white text-left shadow-sm"
                >
                  <div className="overflow-hidden rounded-t-3xl">
                    <img src={product.image} alt={product.name} className="h-52 w-full object-cover" />
                  </div>
                  <div className="flex flex-1 flex-col gap-4 px-5 pb-6 pt-5 text-[#1c2f52]">
                    <div>
                      <h3 className="text-base font-semibold">{product.name}</h3>
                      <p className="mt-1 text-sm text-[#5c6b87]">{product.description}</p>
                    </div>
                    <div className="text-lg font-semibold text-[#0f2c54]">{product.price}</div>
                    <div className="flex justify-center">
                      <PaystackButton
                        email={email}
                        amount={Number(String(product.price).replace(/[^0-9]/g, ""))}
                        metadata={{ productName: product.name }}
                      />
                    </div>
                    <p className="text-center text-xs text-[#7a8aa8]">Prescription available</p>
                  </div>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-24 w-screen -mx-6 bg-[#f4f8fc] px-6 py-16 text-center text-[#0f2c54] sm:-mx-10 sm:px-12 lg:-mx-12 lg:px-24">
            <div className="mx-auto mb-14 max-w-4xl">
              <h2 className="text-2xl font-semibold">Multiple Payment Options</h2>
              <p className="mt-2 text-sm text-[#5f6f8c]">Choose the payment method that works best for you</p>
            </div>
            <div className="mx-auto grid max-w-5xl gap-8 sm:grid-cols-2">
              {paymentOptions.map((option) => (
                <article
                  key={option.title}
                  className="flex h-full flex-col rounded-3xl border border-[#d0e2f5] bg-white px-8 py-10 text-left text-[#1c2f52] shadow-sm"
                >
                  <div className="flex items-center gap-3">
                    <div className="flex h-14 w-14 items-center justify-center rounded-full bg-[#e4fbf3]">
                      <svg viewBox="0 0 48 48" className="h-7 w-7 text-[#1ab27b]" aria-hidden>
                        <rect x="8" y="15" width="32" height="18" rx="4" fill="currentColor" opacity="0.15" />
                        <rect
                          x="11"
                          y="18"
                          width="26"
                          height="12"
                          rx="2"
                          stroke="currentColor"
                          strokeWidth="2"
                          fill="none"
                        />
                        <circle cx="19" cy="24" r="1.7" fill="currentColor" />
                        <rect x="26" y="22.5" width="8" height="3" rx="1" fill="currentColor" />
                      </svg>
                    </div>
                    <div>
                      <p className="text-base font-semibold text-[#0f2c54]">{option.title}</p>
                      <p className="text-sm text-[#5c6b87]">{option.description}</p>
                    </div>
                  </div>
                  <ul className="mt-7 space-y-3 text-sm text-[#4f5f7b]">
                    {option.bullets.map((item) => (
                      <li key={item} className="flex items-center gap-2">
                        <span className="text-[#1bc48c]">•</span>
                        {item}
                      </li>
                    ))}
                  </ul>
                  <p className="mt-7 text-xs text-[#7a8aa8]">Powered by {option.poweredBy}</p>
                </article>
              ))}
            </div>
          </section>

          <section className="mt-24 w-full text-center text-[#0f2c54]">
            <h2 className="text-2xl font-semibold">Learn More About Smart Glasses</h2>
            <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
              {learnArticles.map((article) => (
                <article
                  key={article.title}
                  className="rounded-2xl border border-[#dfe8f5] bg-white px-8 py-7 text-left shadow-sm"
                >
                  <h3 className="text-lg font-semibold text-[#0f2c54]">{article.title}</h3>
                  <p className="mt-3 text-sm text-[#5c6b87]">{article.description}</p>
                  <button className="mt-5 inline-flex items-center gap-2 text-sm font-medium text-[#16b57d]">
                    Read More <span aria-hidden>→</span>
                  </button>
                </article>
              ))}
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
