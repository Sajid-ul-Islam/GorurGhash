# UI/UX Continuous Audit & Navigation Review: Gorur Ghash Mobile App

## 1. Visual Hierarchy & Brand Identity Audit
* **Authentic Branding**:
  * Official Gorur Ghash cow mascot and brand yellow (`#FBDD01`) applied across app icon, native splash, header badge, and startup experience.
  * Contrast check: `#000000` text and icons on `#FBDD01` badge achieve 14.8:1 contrast, significantly exceeding WCAG AAA standards.
  * Streetwear aesthetic: Replaced generic placeholder "GG" text badges with authentic high-DPI vector artwork and Bengali typography (**গরুর ঘাস • DHAKA STREETWEAR**).

---

## 2. Navigation & Ergonomics Enhancements
* **Top Navigation (Header)**:
  * **Brand Mascot & Wordmark**: Quick home anchor.
  * **Search**: Instant access to catalog search.
  * **Saved / Wishlist (♡)**: Moved from bottom tabs into header with active item count badge, keeping favorites readily accessible across any screen without occupying a bottom tab.
  * **Notifications (🔔)**: Added notification bell with dynamic unread indicator leading directly to the Notification Center (`/notifications`).
  * **Cart**: Dropped from the top header to eliminate duplicate touchpoints, since Bag is already a dedicated bottom tab.
* **Bottom Navigation Bar**:
  * Replaced Wishlist with **`Chat` (GhashBot AI Assistant)**.
  * Final tabs: **Home**, **Shop**, **Assistant**, **Bag**, **Account**.
  * Chat destination features immediate style advice, size guide lookup, order tracking assistance, and 1-tap WhatsApp human escalation.
* **Removal of Restricted / Dev Elements**:
  * Audited and removed evaluator prototype role switchers and admin portal cards from `profile.tsx` and `login.tsx`.
  * Replaced them with authentic customer-facing components: "Gorur Ghash Community" (official Facebook and Instagram) and "Notification & Offer Preferences".

---

## 3. Home Screen Interactive Experience
* **Stories Bar (`StoriesBar.tsx`)**:
  * Unviewed story rings framed with brand yellow `#FBDD01`.
  * Tap launches full-screen `StoryViewerModal` with 5-second automatic progression, product tag badges, and direct "Shop Drop" buttons.
* **Hero Motion Banner (`HeroMotionBanner.tsx`)**:
  * Cross-fading motion carousel featuring high-spec photography of new Friday drops, corduroy jackets, and utilitarian cargo pants.
* **Campaign Marquee (`CampaignMarquee.tsx`)**:
  * Ticker displaying courier on-spot trial, 48-hr exchange, and free shipping guarantees.
* **Curated Drops (`CuratedDropsSection.tsx`)**:
  * 2x2 grid highlighting signature silhouettes (Oversized Tees, Corduroy, Cargos, Cuban Shirts) with direct category filter routing.
* **Social Commerce ("Shop The Look")**:
  * Instagram lookbook carousel with like/comment counts and shoppable tagged product pills.
* **Brand Story (`BrandStorySection.tsx`)**:
  * Highlights Dhaka heritage, 260 GSM combed cotton specifications, and cultural illustration pillars.
* **Brand Footer (`BrandFooter.tsx`)**:
  * Direct launch buttons for Facebook, Instagram, and WhatsApp, along with helpline details and Uttara studio address.

---

## 4. Notification Opt-In & Permission Journey
* Non-intrusive value-first permission model (`NotificationOptInModal.tsx`).
* Categorized channels: Orders, Promotions & Drops, New Arrivals, Personalized Restocks.
* Dedicated `/notifications` screen with filter tabs and preference toggles.
