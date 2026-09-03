# Testing Strategy & Test Execution Matrix: Gorur Ghash Mobile App

## 1. Testing Philosophy
The application combines multiple layers of quality verification:
1. **Static Type Safety**: Strict TypeScript compiler checks (`tsc --noEmit`) guaranteeing prop adherence, navigation param safety, and data contract consistency.
2. **Functional Unit Tests**: Logic validation for cart price sums, discount math, delivery fee computations, and phone validation.
3. **Integration Flow Audits**: Verification of end-to-end user journeys (Product Browse -> Cart -> Checkout -> Order Tracking -> Admin Management).

---

## 2. Test Suites & Coverage Matrix

| Test Suite | Scope | Target Invariants | Status |
| :--- | :--- | :--- | :--- |
| **Type Check** | Full Codebase | Zero TypeScript diagnostics (`npx tsc --noEmit`) | Passing |
| **Cart Math & Discounts** | `CartContext` / Utils | `subtotal - discount + delivery = total`; free shipping threshold calculation | Verified |
| **Phone Validation** | Auth Utils | Bangladeshi mobile formats (`+8801...`, `01...`, 11 digits) | Verified |
| **Delivery Rules** | Order Service | Dhaka (`৳70`, 1-2 days) vs Outside Dhaka (`৳130`, 4-5 days) | Verified |
| **Auth State Switching**| Auth Context | Guest <-> Customer <-> Admin state transitions | Verified |
| **Admin Route Protection**| Navigation / Layout | Non-admin users redirected away from admin dashboard | Verified |
| **Asset Fallbacks** | Product Image Carousel| Fallback UI displayed when external image fails to load | Verified |

---

## 3. Automated Test Execution
Run the full test suite and type check via:
```bash
npx tsc --noEmit
npm test
```
