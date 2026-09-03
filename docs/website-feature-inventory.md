# Website Feature Inventory & Mobile Transformation Matrix

This document maps all features extracted from the live `https://gorurghash.com` WooCommerce storefront to their modern native mobile equivalents for the Gorur Ghash Android application.

| Website Feature | Mobile Equivalent | Priority | Prototype Status | Backend Dependency | Notes & Native Mobile Enhancements |
| :--- | :--- | :--- | :--- | :--- | :--- |
| **Top Announcement Banner** ("Cash on delivery in all 64 districts") | Animated marquee / dismissible announcement pill badge atop Home | High | Implemented | No | Quick micro-interaction with shipping info modal on tap |
| **Header Logo & Branding** | Sticky brand header with cow mascot / wordmark + Quick Search bar | High | Implemented | No | Optimized vector brand logo + tactile haptic response |
| **Desktop Mega-Menu** | Bottom Navigation Bar (Home, Shop, Wishlist, Cart, Profile) | Critical | Implemented | No | Thumb-zone reachability replacing cumbersome multi-level desktop dropdowns |
| **Category Banners / Bubbles** | Horizontal snappy icon scroll with circular category badges & product counts | High | Implemented | No | Smooth horizontal FlatList with active filter state passing to catalog |
| **Hero Image Sliders** | Auto-scrolling touch carousel with pagination dots & deep links | High | Implemented | No | Native swipe gestures with curated drop links ("New Drops", "Winter Sale") |
| **Product Grid (Astra/Elementor)** | 2-Column Responsive Card Grid with image lazy-loading, discount tags, quick favorite | Critical | Implemented | No | Optimized card aspect ratio (3:4), staggered fade-in, dual-tap to wishlist |
| **Product Variations (Sizes: S-XXL)** | Interactive tactile Size Selector Pills with live stock indicator & size guide sheet | Critical | Implemented | No | Bottom sheet sizing chart in inches (Chest, Length, Sleeve) with unit toggle |
| **Product Image Gallery** | Full-width swipeable image carousel with thumbnail dots & zoom modal | High | Implemented | No | Native touch carousel replacing desktop thumbnail stack |
| **Cart Drawer (xoo-wsc-cart)** | Native Bottom Sheet & dedicated Cart Screen with swipe-to-delete & quantity stepper | Critical | Implemented | No | Instant persistent local storage (AsyncStorage) with free shipping progress bar |
| **Coupon Code Input** | Inline Promo Box with one-tap coupon tags (`GORUR10`, `GHASH20`, `EID500`) | High | Implemented | No | Real-time discount calculation, validation feedback, and saved savings summary |
| **WooCommerce Multi-step Checkout** | Native 3-step Accordion Checkout (Address -> Shipping -> Payment -> Success) | Critical | Implemented | No | Pre-filled Dhaka/Chittagong/Sylhet division selector, bKash/Nagad/COD options |
| **bKash / Nagad / SSLCommerz Payment** | Mobile Financial Service (MFS) selection with native simulated OTP/PIN flow & COD | High | Implemented | Yes (Mocked) | Realistic payment simulation with instant order confirmation receipt |
| **Order Tracking / History** | Interactive Timeline Stepper (Ordered -> Processing -> Shipped -> Out for Delivery) | High | Implemented | Yes (Mocked) | Visual delivery tracking with estimated arrival dates and re-order button |
| **Wishlist / Favorites** | Dedicated Wishlist tab with heart toggles on every card & move-to-cart | High | Implemented | No | Stored offline in AsyncStorage with instant toggle micro-animation |
| **Search & Live Filters** | Search screen with real-time debounced query, category chips, price slider, sort modal | Critical | Implemented | No | Filter by Gender (Men, Women, Unisex), Category, Size, Price range, and Sort |
| **User Authentication (Login/Register)** | Dual-mode Auth: Phone OTP (SMS code verification) + Social (Google, Facebook) | Critical | Implemented | Yes (Mocked) | 60s countdown resend, auto-focus input boxes, seamless guest checkout fallback |
| **Customer Profile & Addresses** | User hub: Edit Profile, Saved Delivery Addresses (Home/Office), Past Orders | High | Implemented | No | Add/Edit/Delete address with default selector, Bangladeshi phone validation |
| **Help & Support / Policies** | Interactive FAQ accordion, Return & Exchange guide (48hr window), Contact hotlines | Medium | Implemented | No | One-tap phone dialer (`tel:+8801339913140`), WhatsApp launcher, email composer |
| **AI Shopping Assistant ("GhashBot")** | Floating/in-profile conversational AI style advisor for sizing & recommendations | High | Implemented | No | Smart recommendations based on current catalog (e.g. "Suggest cargo pants under ৳2000") |
| **Admin Portal (Hidden)** | Role-gated Admin Dashboard with KPI cards, Catalog manager, Order status updater | High | Implemented | Yes (Mocked) | Secure access via Admin credential/PIN toggle in Profile; hidden from standard users |
