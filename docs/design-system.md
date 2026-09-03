# Gorur Ghash Mobile Design System

## 1. Design Philosophy
The Gorur Ghash mobile design system captures authentic Dhaka streetwear culture: bold, playful, subversive, yet unapologetically premium. The visual identity reflects the official brand's iconic mascot, signature brand yellow (`#FBDD01`), deep streetwear black (`#000000`), and clean functional surfaces that prioritize effortless product discovery.

---

## 2. Brand Visual Identity & Color Palette

### 2.1 Brand Signature Accents
* **Gorur Ghash Brand Yellow**: `#FBDD01` / `#FBDD02`
  * Official cow logo backdrop, launch banners, action badges, notification indicators, and drop pill tags.
* **Streetwear Onyx / Black**: `#000000` / `#111827`
  * Primary CTAs, brand typography, active selection states, contrast headers.
* **Sale / Drop Accent Red**: `#E53935`
  * Flash sales, wishlist badge, stock urgency indicators.
* **Success Mint**: `#10B981`
  * Courier on-spot trial badges, in-stock indicators, verified order milestones.

### 2.2 Neutrals & Surfaces
* **Canvas Background**: `#F8F9FA` (Soft neutral canvas for clear image contrast).
* **Card Surface**: `#FFFFFF` (Clean crisp cards with subtle 1px `#E5E7EB` border).
* **Surface Alt**: `#F1F3F5` (Category pills, suggestion chips, input containers).
* **Text Primary**: `#111827` (High-contrast deep charcoal).
* **Text Secondary**: `#4B5563` (Subtitles, product specs, descriptive copy).
* **Text Muted**: `#9CA3AF` (Timestamps, placeholders, inactive icons).

---

## 3. Typography Hierarchy
System font stack tuned for high-density mobile displays:

| Token | Size | Weight | Line Height | Usage |
| :--- | :--- | :--- | :--- | :--- |
| `display` | 26px | 900 (Black) | 32px | Hero motion banners, brand drop titles |
| `heading1` | 22px | 800 (ExtraBold) | 28px | Screen titles, product name headers |
| `heading2` | 18px | 800 (Bold) | 24px | Section headers, modal titles, card names |
| `heading3` | 15px | 700 (Bold) | 20px | List titles, prices, tab headers |
| `body` | 14px | 400 (Regular) | 20px | Product descriptions, chat bubbles, policies |
| `bodyMedium`| 13px | 600 (SemiBold)| 18px | Filter chips, buttons, metadata |
| `caption` | 11px | 500 (Medium) | 15px | Tags, timestamps, courier notices |

---

## 4. Navigation Architecture
Optimized specifically for native Android interaction conventions:

### 4.1 Top Navigation (Header)
* **Left**: Official Gorur Ghash cow mascot on `#FBDD01` badge + **GORUR GHASH** typography + Bengali tagline (**গরুর ঘাস • DHAKA STREETWEAR**).
* **Right Actions**:
  1. `Search` (Opens full catalog search)
  2. `Wishlist` (♡ icon with real-time saved count badge)
  3. `Notifications` (🔔 icon with real-time unread alerts badge)

### 4.2 Bottom Navigation Bar
* **Home (`index`)**: Editorial hero experience, stories, new drops, curated silhouettes, social feed, and brand footer.
* **Shop (`shop`)**: Filterable catalog with category pills, price range, and search.
* **Assistant (`chat`)**: 24/7 GhashBot AI Style Advisor + 1-tap WhatsApp human escalation.
* **Bag (`cart`)**: Real-time cart management, promo coupons, and order summary.
* **Account (`profile`)**: Orders hub, delivery addresses, official social links, and notification channel controls.

---

## 5. UI Components & Motion Standards
* **Stories Bar (`StoriesBar.tsx`)**: Unviewed stories framed by `#FBDD01` active rings; interactive tap-to-open viewer with product tags.
* **Hero Motion Banner (`HeroMotionBanner.tsx`)**: Smooth cross-fade animation every 5.5s with slide indicator pills and drop exploration CTAs.
* **Campaign Marquee (`CampaignMarquee.tsx`)**: Horizontal ticker highlighting on-spot trial, 48-hr exchange, and same-day dispatch.
* **Social Feed Section (`SocialFeedSection.tsx`)**: "Shop The Look" carousel connecting Instagram posts to product detail views.
* **Brand Footer (`BrandFooter.tsx`)**: Dark onyx `#111827` footer with direct Facebook, Instagram, and WhatsApp launch buttons.
