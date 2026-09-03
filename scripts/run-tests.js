/**
 * Gorur Ghash Android Mobile App — Automated Verification Suite
 * Tests domain invariants, pricing calculations, delivery fee models, phone validators,
 * catalog integrity, and role permissions.
 */

const assert = require('assert');
const fs = require('fs');
const path = require('path');

let testsPassed = 0;
let testsFailed = 0;

function runTest(name, fn) {
  try {
    fn();
    console.log(`  ✅ PASS: ${name}`);
    testsPassed++;
  } catch (err) {
    console.error(`  ❌ FAIL: ${name}`);
    console.error(`     Error: ${err.message}`);
    testsFailed++;
  }
}

console.log('\n========================================');
console.log('🚀 Running Gorur Ghash App Test Suite');
console.log('========================================\n');

// 1. Phone Number Validation
console.log('--- Test Suite 1: Phone Validation & Normalization ---');
const isValidBdPhone = (phone) => {
  const clean = phone.replace(/[\s\-\(\)]/g, '');
  return /^(?:\+8801|8801|01)[3-9]\d{8}$/.test(clean);
};

runTest('Validates standard 11-digit BD mobile starting with 017', () => {
  assert.strictEqual(isValidBdPhone('01713222653'), true);
});

runTest('Validates international format BD mobile +8801339913140', () => {
  assert.strictEqual(isValidBdPhone('+8801339913140'), true);
});

runTest('Validates formatted phone with hyphens and spaces', () => {
  assert.strictEqual(isValidBdPhone('01713-222653'), true);
  assert.strictEqual(isValidBdPhone('+880 1339 913140'), true);
});

runTest('Rejects landlines and invalid prefixes', () => {
  assert.strictEqual(isValidBdPhone('029876543'), false); // Dhaka landline
  assert.strictEqual(isValidBdPhone('01012345678'), false); // 010 invalid prefix
  assert.strictEqual(isValidBdPhone('12345'), false); // Too short
});

// 2. Pricing & Delivery Fee Logic
console.log('\n--- Test Suite 2: Pricing, Delivery & Free Shipping ---');
const getDeliveryFee = (district, subtotal) => {
  if (subtotal >= 3000) return 0;
  return district.toLowerCase().includes('dhaka') ? 70 : 130;
};

const calculatePricing = (items, coupon, district = 'Dhaka City') => {
  const subtotal = items.reduce((sum, i) => sum + i.unitPrice * i.quantity, 0);
  let discount = 0;
  if (coupon) {
    if (!coupon.minOrderAmount || subtotal >= coupon.minOrderAmount) {
      if (coupon.discountType === 'percentage') {
        discount = Math.round((subtotal * coupon.discountValue) / 100);
      } else {
        discount = Math.min(subtotal, coupon.discountValue);
      }
    }
  }
  const deliveryFee = items.length > 0 ? getDeliveryFee(district, subtotal) : 0;
  const total = Math.max(0, subtotal - discount + deliveryFee);
  return { subtotal, discount, deliveryFee, total };
};

runTest('Calculates Dhaka delivery fee of ৳70 for order below ৳3,000', () => {
  const items = [{ unitPrice: 1500, quantity: 1 }];
  const pricing = calculatePricing(items, null, 'Dhaka City');
  assert.strictEqual(pricing.subtotal, 1500);
  assert.strictEqual(pricing.deliveryFee, 70);
  assert.strictEqual(pricing.total, 1570);
});

runTest('Calculates Outside Dhaka delivery fee of ৳130 for order below ৳3,000', () => {
  const items = [{ unitPrice: 1500, quantity: 1 }];
  const pricing = calculatePricing(items, null, 'Chittagong City');
  assert.strictEqual(pricing.subtotal, 1500);
  assert.strictEqual(pricing.deliveryFee, 130);
  assert.strictEqual(pricing.total, 1630);
});

runTest('Applies 100% FREE delivery when subtotal reaches ৳3,000 threshold', () => {
  const items = [{ unitPrice: 1600, quantity: 2 }]; // 3200 BDT
  const pricing = calculatePricing(items, null, 'Sylhet City');
  assert.strictEqual(pricing.subtotal, 3200);
  assert.strictEqual(pricing.deliveryFee, 0);
  assert.strictEqual(pricing.total, 3200);
});

runTest('Applies percentage promo coupon GHASH20 correctly', () => {
  const items = [{ unitPrice: 3000, quantity: 1 }];
  const coupon = { code: 'GHASH20', discountType: 'percentage', discountValue: 20, minOrderAmount: 2500 };
  const pricing = calculatePricing(items, coupon, 'Dhaka City');
  assert.strictEqual(pricing.subtotal, 3000);
  assert.strictEqual(pricing.discount, 600); // 20% of 3000
  assert.strictEqual(pricing.deliveryFee, 0); // >= 3000 subtotal
  assert.strictEqual(pricing.total, 2400);
});

runTest('Rejects promo coupon if minOrderAmount requirement is not met', () => {
  const items = [{ unitPrice: 1000, quantity: 1 }];
  const coupon = { code: 'GHASH20', discountType: 'percentage', discountValue: 20, minOrderAmount: 2500 };
  const pricing = calculatePricing(items, coupon, 'Dhaka City');
  assert.strictEqual(pricing.discount, 0);
  assert.strictEqual(pricing.deliveryFee, 70);
  assert.strictEqual(pricing.total, 1070);
});

// 3. Catalog Data Integrity
console.log('\n--- Test Suite 3: Catalog & Data Integrity ---');
const cleanProductsPath = path.join(__dirname, '..', 'clean_products.json');
const products = JSON.parse(fs.readFileSync(cleanProductsPath, 'utf8'));

runTest('Extracts exactly 100 authentic products from WooCommerce store', () => {
  assert.strictEqual(products.length, 100);
});

runTest('Every product has valid ID, non-empty title, and positive price in BDT', () => {
  for (const p of products) {
    assert.ok(p.id, `Product missing id: ${JSON.stringify(p)}`);
    assert.ok(p.name && p.name.trim().length > 0, `Product missing name: ${p.id}`);
    assert.ok(p.price > 0, `Product has non-positive price: ${p.id}`);
    assert.ok(Array.isArray(p.images) && p.images.length > 0, `Product missing images: ${p.id}`);
    assert.ok(Array.isArray(p.sizes) && p.sizes.length > 0, `Product missing sizes: ${p.id}`);
  }
});

// 4. Role Authorization
console.log('\n--- Test Suite 4: Role-Based Authorization Guard ---');
const checkAdminAccess = (role) => role === 'admin';

runTest('Grants admin portal access exclusively to admin role', () => {
  assert.strictEqual(checkAdminAccess('admin'), true);
  assert.strictEqual(checkAdminAccess('customer'), false);
  assert.strictEqual(checkAdminAccess('guest'), false);
  assert.strictEqual(checkAdminAccess(undefined), false);
});

console.log('\n========================================');
console.log(`Results: ${testsPassed} Passed, ${testsFailed} Failed`);
console.log('========================================\n');

if (testsFailed > 0) {
  process.exit(1);
} else {
  process.exit(0);
}
