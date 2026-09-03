# Gorur Ghash Mobile Application Architecture

## 1. Architectural Principles
The Gorur Ghash Android application is engineered according to a **backend-agnostic, domain-driven, modular architecture**.
The app provides an authentic, high-fashion streetwear customer journey, AI shopping assistant, and notification center today, while establishing strict interface contracts so that connecting a real production backend requires zero modifications to the UI layer.

```
┌─────────────────────────────────────────────────────────────────────────┐
│                           UI / Screens Layer                            │
│   (Expo Router: Home, Shop, Assistant, Bag, Account, Notifications)    │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ (hooks & contexts)
┌────────────────────────────────────▼────────────────────────────────────┐
│                         State & Context Layer                           │
│       (CartContext, WishlistContext, AuthContext, OrderContext)         │
└────────────────────────────────────┬────────────────────────────────────┘
                                     │ (AsyncStorage persistence)
┌────────────────────────────────────▼────────────────────────────────────┐
│                          Service & Domain Layer                         │
│     (IProductService, ISocialService, INotificationService, IAuth)      │
└──────────────────┬──────────────────────────────────┬───────────────────┘
                   │                                  │
┌──────────────────▼─────────────────┐ ┌──────────────▼───────────────────┐
│        Mock / Local Adapters       │ │       Production Backend        │
│   (Catalog JSON, MockSocialService, │ │   (WooCommerce, Meta Graph API, │
│    NotificationService, Auth Mock) │ │     Expo Push, Gateway SDKs)    │
└────────────────────────────────────┘ └──────────────────────────────────┘
```

---

## 2. Directory Structure

```
GorurGhash/
├── app/                        # Expo Router file-based routes
│   ├── (tabs)/                 # Main bottom tab navigator
│   │   ├── _layout.tsx         # Bottom tab configuration (Home, Shop, Assistant, Bag, Account)
│   │   ├── index.tsx           # Home feed (Stories, Hero Motion, Marquee, Drops, Social, Footer)
│   │   ├── shop.tsx            # Shop catalog (Search, Filters, Sort, Grid)
│   │   ├── chat.tsx            # GhashBot AI Style & Customer Support Assistant
│   │   ├── wishlist.tsx        # Saved items (accessible via top Header)
│   │   ├── cart.tsx            # Cart & checkout entry
│   │   └── profile.tsx         # Customer account, orders, community links, notification settings
│   ├── notifications/
│   │   └── index.tsx           # Notification Center (Orders, Drops, Preferences)
│   ├── product/
│   │   └── [id].tsx            # Product detail view (Gallery, Sizes, Specs, Reviews)
│   ├── checkout/
│   │   ├── index.tsx           # Multi-step checkout (Address, Courier, Payment)
│   │   └── success.tsx         # Order confirmation & receipt
│   ├── order/
│   │   └── [id].tsx            # Order detail with live delivery timeline
│   ├── auth/
│   │   ├── login.tsx           # Mobile phone OTP login (Evaluator bypass removed)
│   │   └── verify-otp.tsx      # OTP verification screen with countdown
│   ├── support/
│   │   ├── faq.tsx             # Interactive FAQ & policies
│   │   └── assistant.tsx       # Dedicated style assistant route
│   ├── _layout.tsx             # Root layout with providers & stack routes
│   └── modal.tsx               # Reusable modal sheet
├── src/
│   ├── assets/                 # Brand logos, icons, banners
│   ├── components/             # Reusable UI component library
│   │   ├── common/             # Button, Input, Card, Header, BrandFooter, Loading, EmptyState
│   │   ├── home/               # HeroMotionBanner, CampaignMarquee, CuratedDropsSection, BrandStorySection
│   │   ├── social/             # StoriesBar, StoryViewerModal, SocialFeedSection
│   │   ├── notifications/      # NotificationOptInModal
│   │   ├── product/            # ProductCard, ProductGrid, SizeSelector, ImageCarousel
│   │   ├── cart/               # CartItemRow, CouponInput, OrderSummaryCard
│   │   └── checkout/           # AddressSelector, PaymentMethodPicker
│   ├── constants/              # theme.ts, config.ts, bangladeshData.ts
│   ├── context/                # AuthContext, CartContext, WishlistContext, OrderContext
│   ├── services/               # product/, social/, notifications/, auth/, order/
│   └── types/                  # TypeScript domain entity models
└── docs/                       # Architectural & development documentation
```

---

## 3. Social Integration Architecture
Social content is abstracted under `src/services/social/ISocialService.ts`:
- **`getStories()`**: Fetches vertical ephemeral stories with tagged products for `<StoriesBar />`.
- **`getFeedPosts()`**: Fetches Instagram/Facebook lookbook posts with tagged products for `<SocialFeedSection />`.
- **`getReels()`**: Fetches video lookbooks with direct shop CTAs.

Production backend will proxy calls to the Meta Graph API with Redis caching, preventing client-side token exposure.

---

## 4. Notification Subsystem
Abstracted under `src/services/notifications/NotificationService.ts`:
- **Channels**: Orders, Promotions & Drops, New Arrivals, Personalized Restocks.
- **Persistence**: AsyncStorage with real-time observer pattern (`subscribe`).
- **UI Integration**: Dynamic unread counter badge in `Header.tsx`, categorized filter pills in `/notifications/index.tsx`, and user preference toggles.
