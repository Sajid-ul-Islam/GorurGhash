# Feature Gap Analysis: Website vs. Mobile Application Prototype

## 1. Executive Summary
This document tracks the comparison between the live website (`gorurghash.com`), the mobile prototype, and the future commercial production mobile application.

---

## 2. Feature Comparison Matrix

| Feature Area | Live Website (Desktop/Mobile Web) | Mobile App Prototype (Current) | Production Mobile App (Future) | Gap & Strategy |
| :--- | :--- | :--- | :--- | :--- |
| **Catalog Browsing** | Multi-level desktop dropdowns; standard pagination | Fast 2-column infinite scroll, horizontal category pills, instant search | Paginated REST/GraphQL query with cursor caching | Prototype delivers superior mobile touch ergonomics and speed. |
| **Search & Filtering** | Standard WooCommerce search; page reload | Real-time debounced search by name, tag, category, price range, and sorting modal | Server-side Algolia / Meilisearch / Elastic search | Prototype achieves zero-latency client-side search across 100 products. |
| **Product Variations** | Dropdown select menus with slow option updates | Tactile pill buttons with real-time stock alert & visual size guide bottom sheet | Real-time inventory check against ERP/WMS | Eliminates dropdown friction common on mobile web. |
| **Social Content & "Shop The Look"** | Static Instagram feed plugin footer | Interactive `<StoriesBar />` with full-screen viewer, shoppable tagged product pills, and lookbook feed | Meta Graph API proxy with Redis caching & dynamic catalog tagging | Turns passive social browsing into immediate in-app commerce. |
| **Brand Hero & Motion** | Static slider requiring desktop bandwidth | Lightweight cross-fading `<HeroMotionBanner />` with slide indicators and direct collection CTAs | Video streaming via HLS / Cloudinary mobile-optimized video | Delivers premium streetwear brand feel with zero layout shift. |
| **AI Assistant & Support** | Static contact page with phone and email | Integrated bottom-nav **Chat Assistant (`app/(tabs)/chat.tsx`)** with sizing advice, recommendations, and 1-tap WhatsApp escalation | OpenAI / Anthropic agent connected to real-time inventory and courier APIs | High accessibility in primary bottom navigation boosts conversion. |
| **Notifications & Offers** | Generic web push popups | **Notification Center (`/notifications`)** with categorized channels (Orders, Drops, Personalized) and permission opt-in | Expo Push Notifications / Firebase Cloud Messaging (FCM) | Non-intrusive permission journey respects user attention. |
| **Wishlist / Saved Items** | Separate page requiring user login | One-tap top **Header Wishlist (♡ with count badge)** accessible across every screen | Cloud-synced user wishlist via user token | Header placement frees bottom navigation for high-value Chat assistant. |
| **Cart Experience** | Slide-in drawer (`xoo-wsc-cart`), cookie session | Dedicated **Bag Tab** with persistent offline storage, coupon validator, and free delivery meter | Synchronized user cart across devices via GraphQL/REST | Eliminates top header clutter and keeps Bag thumb-accessible. |
| **Checkout Flow** | Lengthy WooCommerce single-page form with multiple fields | Streamlined 3-step native checkout (Address -> Courier -> Payment Method) | Direct bKash / Nagad payment SDK integration, SSLCommerz gateway | Reduces checkout abandonment with pre-populated Dhaka/district options. |
| **Payment Options** | SSLCommerz, Cash on Delivery, bKash manual | Simulated bKash, Nagad, Card, and Cash on Delivery with realistic PIN/OTP modals | Production bKash Tokenized Checkout & SSLCommerz SDK | Fully prepares UX for instant gateway plug-and-play. |
| **Customer Authentication** | Standard WordPress email/password login | Clean mobile phone OTP, social sign-in (Google, Facebook) with evaluator bypass removed | Firebase Auth / Supabase Auth / SMS Gateway (Greenweb, BulkSMS BD) | Real consumer authentication without internal dev demo toggles. |
| **Order Tracking**| Static WooCommerce "My Account > Orders" table | Visual timeline tracking (Pending -> Confirmed -> Shipped -> Delivered) | Real-time courier webhooks (Steadfast, Pathao, RedX courier API integration) | Transforms static order tables into delightful consumer tracking. |
