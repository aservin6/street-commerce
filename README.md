# Street Commerce

A modern streetwear e-commerce storefront built with **Next.js**, **TypeScript**, **Sanity CMS**, and **Stripe Checkout**. The project focuses on a clean shopping experience, responsive navigation, dynamic product content, and a recruiter-friendly demonstration of full-stack product thinking.

**Live demo:** https://street-commerce.vercel.app

## Overview

Street Commerce is a portfolio e-commerce app for browsing apparel products by category, viewing product details, adding items to a persistent cart, and checking out through Stripe. Product data and homepage imagery are managed through Sanity, making the storefront content-driven instead of hardcoded.

## Key Features

- Dynamic product catalog powered by Sanity CMS
- Category routes for Men, Women, Shoes, Accessories, and All products
- Product detail pages generated from Sanity slugs
- Shopping cart drawer with persisted cart state
- Stripe Checkout integration using product price IDs
- Responsive desktop and mobile navigation
- Optimized product and hero images with `next/image`
- Custom streetwear-inspired visual style using Tailwind CSS
- Separate Sanity Studio included in the `sanity/` directory

## Tech Stack

| Area | Technology |
| --- | --- |
| Framework | Next.js 15 App Router |
| Language | TypeScript |
| UI | React 19, Tailwind CSS 4 |
| CMS | Sanity / next-sanity |
| Payments | Stripe, use-shopping-cart |
| Icons | React Icons |
| Tooling | ESLint, Prettier |

## Project Structure

```txt
street-commerce/
├── app/                  # Next.js storefront routes and components
│   ├── [category]/       # Dynamic category pages
│   ├── product/[slug]/   # Dynamic product detail pages
│   ├── components/       # Reusable UI and cart components
│   ├── lib/sanity.ts     # Sanity client and image URL builder
│   └── stripe/           # Checkout success and error pages
├── sanity/               # Sanity Studio and content schemas
│   └── schemaTypes/      # Product, category, and hero image schemas
├── public/               # Static assets and custom fonts
└── README.md
```

## Getting Started

### Prerequisites

- Node.js 18+
- npm
- A Sanity project/dataset
- A Stripe account with product price IDs

### Installation

```bash
git clone <your-repository-url>
cd street-commerce
npm install
```

Create a `.env.local` file in the project root:

```env
NEXT_PUBLIC_STRIPE_KEY=your_stripe_publishable_key
```

The Sanity project configuration currently lives in `app/lib/sanity.ts`. If you fork or reuse this project, update the `projectId`, `dataset`, and `apiVersion` values to match your Sanity setup.

### Run the Storefront

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) in your browser.

### Run Sanity Studio

```bash
cd sanity
npm install
npm run dev
```

## Available Scripts

```bash
npm run dev      # Start the Next.js development server
npm run build    # Build the production app
npm run start    # Start the production server
npm run lint     # Run linting
```

## What This Project Demonstrates

- Building a production-style storefront with the Next.js App Router
- Integrating a headless CMS into a React application
- Fetching and shaping CMS data with GROQ queries
- Managing cart state and checkout flow with Stripe tooling
- Creating responsive layouts and interactive navigation components
- Structuring a project so the frontend and CMS studio can evolve independently

## Notes

This is a portfolio project intended to demonstrate e-commerce architecture, frontend implementation, CMS integration, and payment flow setup. Product data, imagery, and Stripe price IDs are managed externally through Sanity and Stripe.
