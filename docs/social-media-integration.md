# Gorur Ghash — Social Media & Content Integration Architecture

## 1. Overview & Business Objectives
Gorur Ghash is a premier Dhaka-based streetwear brand with an active social following on Instagram and Facebook. Integrating social media content directly into the mobile app turns social discovery into direct commerce ("Shop The Look"), keeping the application fresh, dynamic, and community-driven.

---

## 2. Official Brand Social Channels
- **Facebook Official Page**: `https://www.facebook.com/gorurghash`
- **Instagram Official Profile**: `https://www.instagram.com/gorurghash/?hl=en`
- **WhatsApp Customer Care**: `+8801339913140`
- **Direct Telephone Hotline**: `+880 1339913140` / `01713-222653`

---

## 3. Architecture & Service Abstraction
To ensure stability and legal compliance, social features do **not** rely on fragile web scraping. The architecture separates UI presentation from data fetching via clean interfaces:

```
src/services/social/
├── ISocialService.ts       # Type definitions (SocialStory, SocialPost, SocialReel)
└── MockSocialService.ts     # Realistic mock data & service implementation
```

### Data Models
1. **`SocialStory`**:
   - Short-form vertical media displayed in the home screen `<StoriesBar />`.
   - Supports 5-second automatic progression, tap-to-pause, and interactive shoppable product tags.
2. **`SocialPost`**:
   - Instagram and Facebook lookbook drops displayed in `<SocialFeedSection />`.
   - Includes post captions, like/comment counts, and direct links to tagged product detail pages (`/product/:id`).
3. **`SocialReel`**:
   - Short video lookbooks with direct drop CTAs.

---

## 4. Production API Integration Roadmap (Meta Graph API)
When real API credentials become available from the brand owner:

### Required Credentials
1. **Meta for Developers Account** with an active App.
2. **Instagram Graph API** product enabled.
3. **Instagram Business or Creator Account** linked to the official Facebook Page (`gorurghash`).
4. **Long-Lived User Access Token** (or Page Access Token) with permissions:
   - `instagram_basic`
   - `pages_show_list`
   - `instagram_manage_insights` (optional, for engagement analytics)

### Endpoints
- **User Media Feed**:
  ```http
  GET https://graph.facebook.com/v19.0/{ig-user-id}/media?fields=id,caption,media_type,media_url,thumbnail_url,permalink,timestamp,like_count,comments_count&access_token={token}
  ```
- **Stories**:
  ```http
  GET https://graph.facebook.com/v19.0/{ig-user-id}/stories?fields=id,media_type,media_url&access_token={token}
  ```

### Backend Proxy Strategy
To prevent exposing API tokens inside client bundle binaries:
- Client (`Mobile App`) calls `GET /api/v1/social/feed` on the Gorur Ghash backend.
- Backend fetches from Meta Graph API, caches responses in Redis (TTL: 15 minutes), and maps product tags from the catalog database before returning sanitized JSON to the mobile app.

---

## 5. UI Components Implemented
- **`StoriesBar.tsx`**: Horizontal scrollable story rings with unviewed brand-yellow `#FBDD01` indicators.
- **`StoryViewerModal.tsx`**: Full-screen modal with segmented duration bars, author header, and floating product CTA pill ("Shop Drop").
- **`SocialFeedSection.tsx`**: Instagram lookbook feed on the home screen with likes, comments, and direct product detail links.
- **`BrandFooter.tsx`**: Social CTA buttons for Facebook, Instagram, and WhatsApp.
