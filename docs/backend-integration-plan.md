# Backend Integration Plan & API Contracts

## 1. Backend-Agnostic Philosophy
The Gorur Ghash mobile app interfaces exclusively through abstract TypeScript contracts defined in `src/services/`.
When the brand is ready to connect their production backend, whether it is **WooCommerce REST**, **Node.js (Nest/Express)**, **Laravel**, or **GraphQL**, the developer simply implements the interface methods and toggles the provider configuration.

---

## 2. API Endpoint Contracts

### 2.1 Product & Catalog Domain (`IProductService`)
```typescript
interface IProductService {
  getProducts(params?: ProductQueryParams): Promise<Product[]>;
  getProductById(id: string | number): Promise<Product | null>;
  getCategories(): Promise<Category[]>;
  getFeaturedProducts(): Promise<Product[]>;
  searchProducts(query: string, filters?: FilterOptions): Promise<Product[]>;
}
```
* **REST Contract Equivalents**:
  * `GET /api/v1/products?category={slug}&sort={sort}&min_price={min}&max_price={max}`
  * `GET /api/v1/products/{id}`
  * `GET /api/v1/categories`
  * `GET /api/v1/search?q={query}`

### 2.2 Authentication Domain (`IAuthService`)
```typescript
interface IAuthService {
  requestOtp(phone: string): Promise<{ success: boolean; message: string }>;
  verifyOtp(phone: string, code: string): Promise<{ user: User; token: string }>;
  loginWithGoogle(idToken?: string): Promise<{ user: User; token: string }>;
  loginWithFacebook(accessToken?: string): Promise<{ user: User; token: string }>;
  logout(): Promise<void>;
  getCurrentUser(): Promise<User | null>;
}
```
* **REST Contract Equivalents**:
  * `POST /api/v1/auth/otp/send` -> `{ phone: "+8801700000000" }`
  * `POST /api/v1/auth/otp/verify` -> `{ phone: "+8801700000000", code: "123456" }`
  * `POST /api/v1/auth/social/google` -> `{ id_token: "..." }`
  * `POST /api/v1/auth/logout`

### 2.3 Orders & Checkout Domain (`IOrderService`)
```typescript
interface IOrderService {
  createOrder(payload: CreateOrderPayload): Promise<Order>;
  getOrders(): Promise<Order[]>;
  getOrderById(orderId: string): Promise<Order | null>;
  updateOrderStatus(orderId: string, status: OrderStatus): Promise<Order>;
}
```
* **REST Contract Equivalents**:
  * `POST /api/v1/orders` -> `{ items, shippingAddress, deliveryMethod, paymentMethod, total }`
  * `GET /api/v1/orders` -> List of customer orders
  * `GET /api/v1/orders/{id}` -> Order detail with courier tracking number
  * `PATCH /api/v1/admin/orders/{id}/status` -> Admin status update (`pending` -> `processing` -> `shipped` -> `delivered`)

---

## 3. Third-Party Integrations Required for Production Launch
1. **SMS Gateway (Bangladesh)**: Greenweb, BulkSMS BD, or Twilio for genuine transactional OTP dispatch.
2. **Payment Gateway**: SSLCommerz or bKash Tokenized Merchant API for automated mobile checkout.
3. **Logistics & Courier Webhook**: Steadfast Courier, Pathao Courier, or RedX API for live parcel consignment tracking.
4. **Push Notifications**: Expo Push Notification Service or Firebase Cloud Messaging (FCM) for order status alerts & promotional drop drops.
