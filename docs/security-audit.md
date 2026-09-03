# Security Audit: Gorur Ghash Mobile App

## 1. Scope & Standards
This security audit evaluates client-side data handling, authentication mechanisms, storage security, and backend abstraction boundaries for the Gorur Ghash mobile application.

---

## 2. Key Security Assessments

### 2.1 Credential & Secret Management
* **Zero Hardcoded Secrets**: No production API keys, database credentials, or payment secrets exist within the client bundle.
* **Environment Configuration**: Future API URLs and tokens are routed through `src/constants/config.ts` reading from Expo public constants or environment variables.

### 2.2 Client-Side Storage & Sensitive Data Exposure
* **Storage Layer**: Local state utilizes `@react-native-async-storage/async-storage` for non-sensitive data (cart items, local UI preferences, customer profile cache).
* **Payment Data Isolation**: Credit card CVV / OTP values are NEVER stored in persistent storage. In future live payment flows, card fields will be processed through tokenized webview / gateway SDKs (SSLCommerz / bKash).

### 2.3 Authentication & Authorization
* **Role-Based Access Control (RBAC)**:
  * Admin features and management screens are guarded by explicit role checks (`user.role === 'admin'`).
  * Normal customers have zero visibility or access to the Admin Portal.
  * Attempting to navigate directly to `/admin` routes validates the active session and bounces unauthorized users to the customer hub or login.
* **OTP Handling**:
  * Phone OTP simulations enforce standard rate limiting (60s cooldown timer between resend attempts) to prevent SMS spam and brute force.

### 2.4 Network & Deep Linking Security
* **HTTPS Enforcement**: All external product image resources from `gorurghash.com` are loaded exclusively over TLS/HTTPS (`https://gorurghash.com/wp-content/...`).
* **Input Sanitization**: Search queries and checkout forms sanitize input to prevent injection attacks or malformed payload transmissions.
