# Commercial Development Roadmap: Gorur Ghash Android Mobile App

## Overview
This roadmap outlines the path from the current showcase-ready application to commercial deployment on the Google Play Store and full production scale.

---

## Phase 1 — Brand Social, Navigation & Home Experience (Completed)
* **Status**: Complete & Showcase-Ready.
* **Deliverables**:
  * **Brand Identity**: Official cow mascot and brand yellow (`#FBDD01`) integrated across app icon, native splash, header badge, and startup experience.
  * **Official Social Links**: Direct deep-linking to official Facebook (`https://www.facebook.com/gorurghash`) and Instagram (`https://www.instagram.com/gorurghash/?hl=en`).
  * **Social Media Content Integration**: Ephemeral Stories Bar with full-screen viewer (`StoryViewerModal`), shoppable tagged products, and "Shop The Look" lookbook carousel.
  * **Navigation Restructure**:
    * Moved Wishlist (♡ with badge) to top Header alongside Search and Notifications.
    * Added **Chat / GhashBot AI Style Assistant** directly to primary bottom tabs (`index`, `shop`, `chat`, `cart`, `profile`).
    * Dropped Cart from top header to eliminate duplicate touchpoints.
  * **Restricted Cleanup**: Evaluator demo passes and internal prototype switchers removed from customer-facing screens.
  * **Notification Center (`/notifications`)**: Categorized channels (Orders, Drops, Personalized) with non-intrusive permission journey and channel preference toggles.
  * **Interactive Home Experience**: Hero Motion Banner with cross-fade transitions, Campaign Marquee, Curated Streetwear Silhouettes, Dhaka Streetwear Manifesto, and Official Brand Footer.

---

## Phase 2 — Production Backend & Meta Graph API Integration
* **Estimated Effort**: 3–4 weeks.
* **Key Tasks**:
  * Implement `WooCommerceProductService` using WooCommerce REST API v3 with consumer key/secret.
  * Implement `WooCommerceOrderService` to transmit real customer checkouts to WooCommerce backend.
  * Implement backend proxy caching for Meta Graph API (Instagram posts & stories) using Redis (TTL: 15 min).
  * Implement live SMS gateway integration (e.g. Greenweb, BulkSMS BD) for OTP verification.
  * Setup secure token storage via `expo-secure-store`.

---

## Phase 3 — Payment Gateway & Logistics Courier Webhooks
* **Estimated Effort**: 2–3 weeks.
* **Key Tasks**:
  * Integrate bKash Direct Checkout Merchant SDK (Tokenized API).
  * Integrate SSLCommerz mobile redirect flow for VISA, MasterCard, and Nagad.
  * Connect Steadfast Courier & Pathao Parcel APIs for automated consignment generation and live tracking webhooks.

---

## Phase 4 — Production Hardening & Play Store Launch
* **Estimated Effort**: 2 weeks.
* **Key Tasks**:
  * Setup Firebase Cloud Messaging (FCM) & Expo Push for automated order status pushes and drop alerts.
  * Add Sentry for crash reporting and mobile telemetry.
  * Generate release `.aab` (Android App Bundle) with Google Play App Signing.
  * Google Play Store listing preparation (screenshots, feature graphic, privacy policy).
