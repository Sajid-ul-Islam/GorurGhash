import { Product, Category, Coupon } from '../types';

export interface Banner {
  id: string;
  title: string;
  subtitle: string;
  imageUrl: string;
  actionText: string;
  categorySlug: string;
}

export const mockCategories: Category[] = [
  {
    "id": "all",
    "name": "All Drops",
    "slug": "all",
    "iconName": "sparkles",
    "productCount": 100
  },
  {
    "id": "cargo",
    "name": "Pants & Cargo",
    "slug": "cargo",
    "iconName": "bag",
    "imageUrl": "https://gorurghash.com/wp-content/uploads/2026/03/Pants.png",
    "productCount": 24
  },
  {
    "id": "tees",
    "name": "Tees & Graphics",
    "slug": "tees",
    "iconName": "shirt",
    "imageUrl": "https://gorurghash.com/wp-content/uploads/2026/03/Tees.png",
    "productCount": 22
  },
  {
    "id": "henley",
    "name": "Waffle Henleys",
    "slug": "henley",
    "iconName": "layers",
    "imageUrl": "https://gorurghash.com/wp-content/uploads/2026/03/Full-Sleeves.png",
    "productCount": 16
  },
  {
    "id": "polos",
    "name": "Knit Polos",
    "slug": "polos",
    "iconName": "ribbon",
    "imageUrl": "https://gorurghash.com/wp-content/uploads/2026/03/Polos.png",
    "productCount": 11
  },
  {
    "id": "jackets",
    "name": "Jackets & Bombers",
    "slug": "jackets",
    "iconName": "shield",
    "imageUrl": "https://gorurghash.com/wp-content/uploads/2026/03/Half-sleeves.png",
    "productCount": 15
  },
  {
    "id": "shirts",
    "name": "Crochet & Boxy",
    "slug": "shirts",
    "iconName": "cut",
    "imageUrl": "https://gorurghash.com/wp-content/uploads/2026/03/Tops.png",
    "productCount": 18
  },
  {
    "id": "accessories",
    "name": "Accessories",
    "slug": "accessories",
    "iconName": "glasses",
    "imageUrl": "https://gorurghash.com/wp-content/uploads/2026/03/Accessories.png",
    "productCount": 12
  }
];

export const mockBanners: Banner[] = [
  {
    "id": "b1",
    "title": "New Street Drops 2026",
    "subtitle": "Authentic Dhaka Urban Streetwear",
    "imageUrl": "https://gorurghash.com/wp-content/uploads/2026/02/2-1.png",
    "actionText": "Explore Collection",
    "categorySlug": "all"
  },
  {
    "id": "b2",
    "title": "Waffle Textured Henleys",
    "subtitle": "Full sleeve relaxed thermal comfort",
    "imageUrl": "https://gorurghash.com/wp-content/uploads/2026/02/3-1.png",
    "actionText": "Shop Henleys",
    "categorySlug": "henley"
  },
  {
    "id": "b3",
    "title": "Cargo & Barrel Trousers",
    "subtitle": "Heavyweight canvas & corduroy utility",
    "imageUrl": "https://gorurghash.com/wp-content/uploads/2026/08/hf_20260827_073132_b17d6815-31ec-4d0c-a63b-2f11b0ad6c9d-copy.jpg",
    "actionText": "Shop Bottoms",
    "categorySlug": "cargo"
  }
];

export const mockCoupons: Coupon[] = [
  {
    "code": "GHASH10",
    "discountType": "percentage",
    "discountValue": 10,
    "description": "10% off on all drops (No minimum order)"
  },
  {
    "code": "GHASH20",
    "discountType": "percentage",
    "discountValue": 20,
    "minOrderAmount": 2500,
    "description": "20% off on orders above \u09f32,500"
  },
  {
    "code": "EID500",
    "discountType": "fixed",
    "discountValue": 500,
    "minOrderAmount": 3500,
    "description": "\u09f3500 flat off on orders above \u09f33,500"
  },
  {
    "code": "STREETVIBE",
    "discountType": "percentage",
    "discountValue": 15,
    "minOrderAmount": 1500,
    "description": "15% off for streetwear lovers"
  }
];

export const mockProducts: Product[] = [
  {
    "id": "217330",
    "name": "Baggy Fit Cargo Pants in Off-White",
    "slug": "baggy-fit-cargo-pants-in-off-white",
    "price": 1500,
    "regularPrice": 1724,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/08/hf_20260827_073132_b17d6815-31ec-4d0c-a63b-2f11b0ad6c9d-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/08/hf_20260827_073610_0b01ed6e-6d31-4e40-bfd9-c9d1a8f9c812-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/08/hf_20260827_075026_bf73f6ac-f348-440c-be2a-df396fba9202-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/08/hf_20260827_080147_29caef57-5776-4a47-80a1-d714230d6b00-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/08/hf_20260827_080156_4303518f-8ad0-4d2f-95d5-6ddc8ca2123d.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/08/hf_20260827_080933_7df61ec9-c922-4b97-acf3-69db60767416-copy.jpg"
    ],
    "categories": [
      "CARGO",
      "CARGO"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXL"
    ],
    "description": "Baggy Fit Cargo Pants Measurements (in inches): Small: Length- 38 | Waist- 24-34 Medium: Length- 39 | Waist- 26-36 Large: Length- 40 | Waist- 28-38 Extra Large: Length- 41 | Waist- 30-40 Double Extra Large: Length- 42 | Waist- 32-42",
    "sku": "PCRW5",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": true,
    "isBestSeller": false
  },
  {
    "id": "216931",
    "name": "AFC001 Dept. of Football Studies (Football Skull) T-Shirt Black - Plaantik",
    "slug": "afc001-dept-of-football-studies-football-skull-t-shirt-black-plaantik",
    "price": 1250,
    "regularPrice": 1437,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/08/Font.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/08/Back.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/08/DSC1347-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/08/DSC1349-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/08/DSC1353-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/08/DSC1355-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/08/DSC1356-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/08/hf_20260815_101652_fab409af-375c-4135-a2fc-698489bf7b9e-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/08/model-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/08/model-1.jpg"
    ],
    "categories": [
      "Men",
      "Plaantik Apparel",
      "Plaantik Apparel",
      "Plaantik Apparel",
      "T-shirt",
      "T-shirts",
      "T-shirts",
      "Women"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Authentic Gorur Ghash AFC001 Dept. of Football Studies (Football Skull) T-Shirt Black - Plaantik. Crafted with premium textiles in Dhaka, Bangladesh. Features durable stitching, relaxed contemporary fit, and signature street style.",
    "sku": "PLDF",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": true,
    "isBestSeller": false
  },
  {
    "id": "215795",
    "name": "Unisex Henley Full Sleeve Waffle Textured T-shirt in Dark Ash",
    "slug": "unisex-henley-full-sleeve-waffle-textured-t-shirt-in-dark-ash",
    "price": 900,
    "regularPrice": 1035,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/05/hf_20260801_083033_e7fae2e4-b893-4973-9743-c6763c296b44-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/05/hf_20260801_082159_8fd59494-0f96-4a42-8923-715a6853a0d8-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/08/hf_20260803_084437_5938a50b-bba1-43a1-baab-12e362102813-copy.jpg"
    ],
    "categories": [
      "Henley",
      "Henley"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements of Henley T-shirt (in inches): S : Length-26 | Chest- 42 | Sleeve length- 22.5 M : Length- 27 | Chest- 44 | Sleeve length- 23 L : Length- 28 | Chest- 46 | Sleeve length- 23.5 XL : Length- 29 | Chest- 48 | Sleeve length- 24 XXL: Length- 30 | Chest- 50 | Sleeve length- 24.5",
    "sku": "THA2",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": true,
    "isBestSeller": false
  },
  {
    "id": "215784",
    "name": "Unisex Henley Full Sleeve Waffle Textured T-shirt in Washed Brown",
    "slug": "unisex-henley-full-sleeve-waffle-textured-t-shirt-in-washed-brown",
    "price": 900,
    "regularPrice": 1035,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/05/hf_20260801_081142_78eb796f-500c-4cf6-a4dc-deb9d55cef5f-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/05/hf_20260801_081702_ba7f872d-f4d9-4646-a9f8-22917c444974-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/08/hf_20260803_084840_9805eb0f-ecca-4edf-ad53-51ca941f81ac-copy.jpg"
    ],
    "categories": [
      "Henley",
      "Henley"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements of Henley T-shirt (in inches): S : Length-26 | Chest- 42 | Sleeve length- 22.5 M : Length- 27 | Chest- 44 | Sleeve length- 23 L : Length- 28 | Chest- 46 | Sleeve length- 23.5 XL : Length- 29 | Chest- 48 | Sleeve length- 24 XXL: Length- 30 | Chest- 50 | Sleeve length- 24.5",
    "sku": "THC",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": true,
    "isBestSeller": true
  },
  {
    "id": "215777",
    "name": "Unisex Henley Full Sleeve Waffle Textured T-shirt in Espresso",
    "slug": "unisex-henley-full-sleeve-waffle-textured-t-shirt-in-espresso",
    "price": 900,
    "regularPrice": 1035,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/05/hf_20260801_075403_19411417-0220-46f6-ab33-c48556266fec-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/05/hf_20260801_080254_d6790f54-53d0-4e81-894b-b3115734058f-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/08/hf_20260803_085023_44eefa30-a857-4a64-bf0e-aaad14687aa1-copy.jpg"
    ],
    "categories": [
      "Henley",
      "Henley"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements of Henley T-shirt (in inches): S : Length-26 | Chest- 42 | Sleeve length- 22.5 M : Length- 27 | Chest- 44 | Sleeve length- 23 L : Length- 28 | Chest- 46 | Sleeve length- 23.5 XL : Length- 29 | Chest- 48 | Sleeve length- 24 XXL: Length- 30 | Chest- 50 | Sleeve length- 24.5",
    "sku": "THH2",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": true,
    "isBestSeller": false
  },
  {
    "id": "212108",
    "name": "Diamond Knit Polo in Navy Blue",
    "slug": "diamond-knit-polo-in-navy-blue",
    "price": 1500,
    "regularPrice": 1724,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/06/DSC0928-copy2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/06/DSC0928-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/06/DSC0929-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/06/DSC0930-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/06/DSC0936-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/06/DSC0932-copy.jpg"
    ],
    "categories": [
      "Polos",
      "Polos"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements (in inches): S : Length-25 | Chest- 38 | Sleeve length- 8.5 M : Length-26 | Chest- 40 | Sleeve length- 9 L : Length-27 | Chest- 42 | Sleeve length- 9.5 XL : Length-28 | Chest- 44 | Sleeve length- 10 XXL : Length-29 | Chest- 46 | Sleeve length- 10.5 Male Model: Height- 5\u20199, Wearing- M &nbsp;",
    "sku": "PKDN",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": true,
    "isBestSeller": false
  },
  {
    "id": "212110",
    "name": "Zigzag Knit Polo in Green",
    "slug": "zigzag-knit-polo-in-green",
    "price": 1500,
    "regularPrice": 1724,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/06/DSC0970-copy2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/06/DSC0970-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/06/DSC0971-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/06/DSC0976-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/06/DSC0974-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/06/DSC0972-copy.jpg"
    ],
    "categories": [
      "Polos",
      "Polos"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements (in inches): S : Length-25 | Chest- 38 | Sleeve length- 8.5 M : Length-26 | Chest- 40 | Sleeve length- 9 L : Length-27 | Chest- 42 | Sleeve length- 9.5 XL : Length-28 | Chest- 44 | Sleeve length- 10 XXL : Length-29 | Chest- 46 | Sleeve length- 10.5 Male Model: Height- 5\u20199, Wearing- M",
    "sku": "PKZG3",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": true,
    "isBestSeller": false
  },
  {
    "id": "210906",
    "name": "Diamond Knit Polo in Maroon",
    "slug": "diamond-knit-polo-in-maroon",
    "price": 1500,
    "regularPrice": 1724,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0901-copy2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0901-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0903-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0924-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0904-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0905-copy.jpg"
    ],
    "categories": [
      "Polos",
      "Polos"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements (in inches): S : Length-25 | Chest- 38 | Sleeve length- 8.5 M : Length-26 | Chest- 40 | Sleeve length- 9 L : Length-27 | Chest- 42 | Sleeve length- 9.5 XL : Length-28 | Chest- 44 | Sleeve length- 10 XXL : Length-29 | Chest- 46 | Sleeve length- 10.5 Male Model: Height- 5\u20199, Wearing- M",
    "sku": "PKDM2",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": true,
    "isBestSeller": true
  },
  {
    "id": "210822",
    "name": "Floral Printed Kaftan Top in White",
    "slug": "floral-printed-kaftan-top-in-white",
    "price": 2000,
    "regularPrice": 2300,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0765-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0765-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0767-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0773-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0769-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0770-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0771-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0772-copy.jpg"
    ],
    "categories": [
      "Ethnic",
      "Women"
    ],
    "sizes": [
      "L",
      "M",
      "S"
    ],
    "description": "Measurements of Kaftan (in inches) : S : Length- 48 | Chest- 42 | Sleeve length- 20.5 M : Length- 50 | Chest- 44 | Sleeve length- 21 L : Length- 52 | Chest- 46 | Sleeve length- 21.5 Female Model: Height- 5\u20196, Wearing- M",
    "sku": "GEKW2",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": true,
    "isBestSeller": true
  },
  {
    "id": "210753",
    "name": "Men's Pinstripe High Waisted Relaxed Pants in Navy Blue",
    "slug": "mens-pinstripe-high-waisted-relaxed-pants-in-navy-blue",
    "price": 1800,
    "regularPrice": 2070,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0373-copy2-1.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0382-copy-1.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0373-copy-1.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0378-copy-1.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0384-copy-1.jpg"
    ],
    "categories": [
      "High Waisted Pants",
      "Pants"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements (in inches): S : Waist- 30 | Length- 41 | Leg Opening- 22 | Thigh- 31 | Front Rise- 14 | Back Rise- 20 M : Waist- 32 | Length- 42 | Leg Opening- 22.5 | Thigh- 32 | Front Rise- 14.5 | Back Rise- 20.5 L : Waist- 34 | Length- 43 | Leg Opening- 23 | Thigh- 33 | Front Rise- 15 | Back Rise- 21 XL : Waist- 36 | Length- 44 | Leg Opening- 23.5 | Thigh- 34 | Front Rise- 15.5 | Back Rise- 21.5 XXL : Waist- 38 | Length- 45 | Leg Opening- 24 | Thigh- 35 | Front Rise- 16 | Back Rise- 22 Male Model: Height- 5\u201911, Wearing- L",
    "sku": "PHMN",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": true,
    "isBestSeller": true
  },
  {
    "id": "210722",
    "name": "Printed Ethnic Top in Green",
    "slug": "printed-ethnic-top-in-green",
    "price": 1500,
    "regularPrice": 1724,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0805-copy2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0805-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0806-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0812-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0809-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0810-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0811-copy.jpg"
    ],
    "categories": [
      "Ethnic",
      "Women"
    ],
    "sizes": [
      "L",
      "M",
      "S"
    ],
    "description": "Measurements of Ethnic Top (in inches) : S : Length- 22.5 | Chest- 42 | Sleeve length- 21 M : Length- 23.5 | Chest- 45 | Sleeve length- 21.5 L : Length- 24.5 | Chest- 48 | Sleeve length- 22 Female Model: Height- 5\u20196, Wearing- S &nbsp; &nbsp;",
    "sku": "GETG",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": true,
    "isBestSeller": false
  },
  {
    "id": "210684",
    "name": "Men's Barrel Pants in Black",
    "slug": "mens-barrel-pants-in-black",
    "price": 1500,
    "regularPrice": 1724,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0414-copy2-1.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0418-copy-1.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0414-copy-1.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0416-copy-1.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0421-copy-1.jpg"
    ],
    "categories": [
      "Pants",
      "Relaxed Fit"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements (in inches): S : Waist- 30 | Length- 39 | Leg Opening- 20 | Thigh- 27 | Front Rise- 12.5 | Back Rise- 16 M : Waist- 32 | Length- 40 | Leg Opening- 21 | Thigh- 28 | Front Rise- 13 | Back Rise- 16.5 L : Waist- 34 | Length- 41 | Leg Opening- 22 | Thigh- 29 | Front Rise- 13.5 | Back Rise- 17 XL : Waist- 36 | Length- 42 | Leg Opening- 23 | Thigh- 30 | Front Rise- 14 | Back Rise- 17.5 XXL : Waist- 38 | Length- 43 | Leg Opening- 24 | Thigh- 31 | Front Rise- 14.5 | Back Rise- 18 Male Model: Height- 5\u201911, Wearing- L",
    "sku": "PBK",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": true,
    "isBestSeller": true
  },
  {
    "id": "210644",
    "name": "Men's Pinstripe High Waisted Relaxed Pants in Grey",
    "slug": "mens-pinstripe-high-waisted-relaxed-pants-in-grey",
    "price": 1800,
    "regularPrice": 2070,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0346-copy2-1.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0344-copy-1.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0346-copy-1.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0349-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0354-copy.jpg"
    ],
    "categories": [
      "High Waisted Pants",
      "Pants"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements (in inches): S : Waist- 30 | Length- 41 | Leg Opening- 22 | Thigh- 31 | Front Rise- 14 | Back Rise- 20 M : Waist- 32 | Length- 42 | Leg Opening- 22.5 | Thigh- 32 | Front Rise- 14.5 | Back Rise- 20.5 L : Waist- 34 | Length- 43 | Leg Opening- 23 | Thigh- 33 | Front Rise- 15 | Back Rise- 21 XL : Waist- 36 | Length- 44 | Leg Opening- 23.5 | Thigh- 34 | Front Rise- 15.5 | Back Rise- 21.5 XXL : Waist- 38 | Length- 45 | Leg Opening- 24 | Thigh- 35 | Front Rise- 16 | Back Rise- 22 Male Model: Height- 5\u201911, Wearing- L",
    "sku": "PHMA",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": true,
    "isBestSeller": false
  },
  {
    "id": "210609",
    "name": "Half Sleeve Embroidered Boxy Shirt in Cream",
    "slug": "half-sleeve-embroidered-boxy-shirt-in-cream",
    "price": 1800,
    "regularPrice": 2070,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0713-copy2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0717-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0713-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0719-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0708-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0705-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0711-copy.jpg"
    ],
    "categories": [
      "Crochet & Embroidered Shirts",
      "Crochet & Embroidered Shirts"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements (in inches): S : Length-25.5 | Chest- 45 | Sleeve length- 10.5 | Shoulder- 19.5 | Collar- 17 M : Length- 26.5 | Chest- 47 | Sleeve length- 10.5 | Shoulder- 20.5 | Collar- 18 L : Length- 27.5 | Chest- 49 | Sleeve length- 11.5 | Shoulder- 21.5 | Collar- 19 XL : Length- 28.5 | Chest- 51 | Sleeve length- 12 | Shoulder- 22.5 | Collar- 20 XXL : Length- 29.5 | Chest- 53 | Sleeve length- 12.5 | Shoulder- 23.5 | Collar- 21 Male Model: Height- 5\u201911, Wearing- M Female Model: Height- 5\u20196, Wearing- S This product features a built-in wash allowance. It is designed slightly oversized to achieve the perfect fit after its initial wash.",
    "sku": "SEBW",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": true,
    "isBestSeller": true
  },
  {
    "id": "210603",
    "name": "Half Sleeve Embroidered Boxy Shirt in Navy Blue",
    "slug": "half-sleeve-embroidered-boxy-shirt-in-navy-blue",
    "price": 1800,
    "regularPrice": 2070,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0636-copy2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0639-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0636-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0640-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0760-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0757-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0761-copy.jpg"
    ],
    "categories": [
      "Crochet & Embroidered Shirts",
      "Crochet & Embroidered Shirts"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements (in inches): S : Length-24 | Chest- 43 | Sleeve length- 10 | Shoulder- 19 | Collar- 16.5 M : Length- 25 | Chest- 45 | Sleeve length- 10 | Shoulder- 19.5 | Collar- 17.5 L : Length- 26 | Chest- 47 | Sleeve length- 11 | Shoulder- 20.5 | Collar- 18.5 XL : Length- 27 | Chest- 49 | Sleeve length- 11.5 | Shoulder- 21.5 | Collar- 19.5 XXL : Length- 28 | Chest- 51 | Sleeve length- 12 | Shoulder- 22.5 | Collar- 20.5 Male Model: Height- 5\u201911, Wearing- M Female Model: Height- 5\u20196, Wearing- S",
    "sku": "SEBN",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": true,
    "isBestSeller": true
  },
  {
    "id": "210594",
    "name": "Half Sleeve Embroidered Boxy Shirt in Black",
    "slug": "half-sleeve-embroidered-boxy-shirt-in-black",
    "price": 1800,
    "regularPrice": 2070,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0721-copy2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0725-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0721-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0726-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0645-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0642-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0646-copy.jpg"
    ],
    "categories": [
      "Crochet & Embroidered Shirts",
      "Crochet & Embroidered Shirts"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements (in inches): S : Length-24 | Chest- 43 | Sleeve length- 10 | Shoulder- 19 | Collar- 16.5 M : Length- 25 | Chest- 45 | Sleeve length- 10 | Shoulder- 19.5 | Collar- 17.5 L : Length- 26 | Chest- 47 | Sleeve length- 11 | Shoulder- 20.5 | Collar- 18.5 XL : Length- 27 | Chest- 49 | Sleeve length- 11.5 | Shoulder- 21.5 | Collar- 19.5 XXL : Length- 28 | Chest- 51 | Sleeve length- 12 | Shoulder- 22.5 | Collar- 20.5 Male Model: Height- 5\u201911, Wearing- M Female Model: Height- 5\u20196, Wearing- S",
    "sku": "SEBK",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": true,
    "isBestSeller": true
  },
  {
    "id": "210519",
    "name": "Men's Full Sleeve Safari Shirt in Olive",
    "slug": "mens-full-sleeve-safari-shirt-in-olive",
    "price": 1600,
    "regularPrice": 1839,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0447-copy-web.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0447-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0448-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0445-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0446-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0450-copy.jpg"
    ],
    "categories": [
      "Safari Shirts"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements (in inches): S : Length- 27.5 | Chest- 40 | Sleeve length- 22.5 | Shoulder- 19 | Collar- 18 M : Length- 28.5 | Chest- 42 | Sleeve length- 23 | Shoulder- 20 | Collar- 19 L : Length- 29.5 | Chest- 44 | Sleeve length- 23.5 | Shoulder- 21 | Collar- 20 XL : Length- 30.5 | Chest- 46 | Sleeve length- 24 | Shoulder- 22 | Collar- 21 XXL : Length- 31.5 | Chest- 48 | Sleeve length- 24.5 | Shoulder- 23 | Collar- 22 Male Model: Height- 5\u201911&#8243;, Wearing- M",
    "sku": "SSG",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": true,
    "isBestSeller": true
  },
  {
    "id": "210476",
    "name": "Men's Full Sleeve Safari Shirt in Off White",
    "slug": "mens-full-sleeve-safari-shirt-in-off-white",
    "price": 1600,
    "regularPrice": 1839,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0480-copy-web.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0480-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0481-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0478-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0479-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0482-copy.jpg"
    ],
    "categories": [
      "Safari Shirts"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements (in inches): S : Length- 27.5 | Chest- 40 | Sleeve length- 22.5 | Shoulder- 19 | Collar- 18 M : Length- 28.5 | Chest- 42 | Sleeve length- 23 | Shoulder- 20 | Collar- 19 L : Length- 29.5 | Chest- 44 | Sleeve length- 23.5 | Shoulder- 21 | Collar- 20 XL : Length- 30.5 | Chest- 46 | Sleeve length- 24 | Shoulder- 22 | Collar- 21 XXL : Length- 31.5 | Chest- 48 | Sleeve length- 24.5 | Shoulder- 23 | Collar- 22 Male Model: Height- 5\u201911&#8243;, Wearing- M",
    "sku": "SSW",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": true,
    "isBestSeller": false
  },
  {
    "id": "210317",
    "name": "Crochet Shirt in Off-White with Black Stripes",
    "slug": "crochet-shirt-in-off-white-with-black-stripes",
    "price": 1800,
    "regularPrice": 2070,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0312-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0313-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0310-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0589-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0594-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0593-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0581-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0585-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0584-copy.jpg"
    ],
    "categories": [
      "Crochet & Embroidered Shirts",
      "Crochet & Embroidered Shirts"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements (in inches): S: Length-24| Chest- 42 | Sleeve length- 9.5 M: Length- 25 | Chest- 44 | Sleeve length- 10 L: Length- 26 | Chest- 46 | Sleeve length- 10.5 XL: Length- 27 | Chest- 48 | Sleeve length- 11 XXL: Length- 28 | Chest- 50 | Sleeve length- 11.5 &nbsp;",
    "sku": "SCBW",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": true,
    "isBestSeller": false
  },
  {
    "id": "210310",
    "name": "Crochet Shirt in Brown with Stripes",
    "slug": "crochet-shirt-in-brown-with-stripes",
    "price": 1800,
    "regularPrice": 2070,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0314-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0315-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0309-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0538-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0545-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0543-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0612-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0616-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0615-copy.jpg"
    ],
    "categories": [
      "Crochet & Embroidered Shirts",
      "Crochet & Embroidered Shirts"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements (in inches): S: Length-24| Chest- 42 | Sleeve length- 9.5 M: Length- 25 | Chest- 44 | Sleeve length- 10 L: Length- 26 | Chest- 46 | Sleeve length- 10.5 XL: Length- 27 | Chest- 48 | Sleeve length- 11 XXL: Length- 28 | Chest- 50 | Sleeve length- 11.5 &nbsp;",
    "sku": "SCBH",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": true,
    "isBestSeller": false
  },
  {
    "id": "210292",
    "name": "Crochet Shirt in Mint with Navy Stripes",
    "slug": "crochet-shirt-in-mint-with-navy-stripes",
    "price": 1800,
    "regularPrice": 2070,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0302-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0303-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0308-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0404-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0411-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0410-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0499-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0505-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/05/DSC0502-copy.jpg"
    ],
    "categories": [
      "Crochet & Embroidered Shirts",
      "Crochet & Embroidered Shirts"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements (in inches): S: Length-24| Chest- 42 | Sleeve length- 9.5 M: Length- 25 | Chest- 44 | Sleeve length- 10 L: Length- 26 | Chest- 46 | Sleeve length- 10.5 XL: Length- 27 | Chest- 48 | Sleeve length- 11 XXL: Length- 28 | Chest- 50 | Sleeve length- 11.5 &nbsp;",
    "sku": "SCBG",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": true,
    "isBestSeller": false
  },
  {
    "id": "209361",
    "name": "Men's Ribbed Tank Top in Dark Brown",
    "slug": "mens-ribbed-tank-top-in-dark-brown",
    "price": 500,
    "regularPrice": 575,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/04/DSC0280-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/04/DSC0281-copy.jpg"
    ],
    "categories": [
      "Tank Tops"
    ],
    "sizes": [
      "Double XL",
      "Extra Large",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements (In Inches) S: Length-26 | Chest- 36 | Shoulder to Shoulder- 13 | Arm Hole- 9 M: Length- 26.5 | Chest- 37 | Shoulder to Shoulder- 13.5 | Arm Hole- 9 L: Length- 27 | Chest- 38 | Shoulder to Shoulder- 14 | Arm Hole- 9.5 XL: Length- 27.5 | Chest- 39 | Shoulder to Shoulder- 14.5 | Arm Hole- 10 XXL: Length- 28 | Chest- 40 | Shoulder to Shoulder- 15 | Arm Hole- 10.5",
    "sku": "TTHM",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": true
  },
  {
    "id": "208772",
    "name": "Unisex Henley Full Sleeve Waffle Textured T-shirt in Dark Mauve",
    "slug": "unisex-henley-full-sleeve-waffle-textured-t-shirt-in-dark-mauve",
    "price": 900,
    "regularPrice": 1035,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/04/hf_20260801_103819_95b95940-2b18-44b1-9f8c-f59e7965364a-web.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/04/hf_20260801_103819_95b95940-2b18-44b1-9f8c-f59e7965364a-web-1.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/04/hf_20260806_074245_e640c5d6-4439-4ec1-a67e-bbe0350819dc-web.jpg"
    ],
    "categories": [
      "Henley",
      "Henley"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements of Henley T-shirt (in inches): S : Length-26 | Chest- 42 | Sleeve length- 22.5 M : Length- 27 | Chest- 44 | Sleeve length- 23 L : Length- 28 | Chest- 46 | Sleeve length- 23.5 XL : Length- 29 | Chest- 48 | Sleeve length- 24 XXL: Length- 30 | Chest- 50 | Sleeve length- 24.5",
    "sku": "THM",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "208765",
    "name": "Unisex Henley Full Sleeve Waffle Textured T-shirt in Navy Blue",
    "slug": "unisex-henley-full-sleeve-waffle-textured-t-shirt-in-navy-blue",
    "price": 900,
    "regularPrice": 1035,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/04/DSC0253-copy-1.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/04/DSC0254-copy-1.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/04/DSC0269-copy-2.jpg"
    ],
    "categories": [
      "Henley",
      "Henley"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements of Henley T-shirt (in inches): S : Length-26 | Chest- 42 | Sleeve length- 22.5 M : Length- 27 | Chest- 44 | Sleeve length- 23 L : Length- 28 | Chest- 46 | Sleeve length- 23.5 XL : Length- 29 | Chest- 48 | Sleeve length- 24 XXL: Length- 30 | Chest- 50 | Sleeve length- 24.5",
    "sku": "THN",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "208752",
    "name": "Unisex Henley Full Sleeve Waffle Textured T-shirt in Ash",
    "slug": "unisex-henley-full-sleeve-waffle-textured-t-shirt-in-ash",
    "price": 900,
    "regularPrice": 1035,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/04/DSC0256-copy-1.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/04/DSC0257-copy-1.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/04/DSC0266-copy-2.jpg"
    ],
    "categories": [
      "Henley",
      "Henley"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements of Henley T-shirt (in inches): S : Length-26 | Chest- 42 | Sleeve length- 22.5 M : Length- 27 | Chest- 44 | Sleeve length- 23 L : Length- 28 | Chest- 46 | Sleeve length- 23.5 XL : Length- 29 | Chest- 48 | Sleeve length- 24 XXL: Length- 30 | Chest- 50 | Sleeve length- 24.5",
    "sku": "THA",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": true
  },
  {
    "id": "206658",
    "name": "Unisex Horizontal Striped Knit Polo in Forest Green",
    "slug": "unisex-horizontal-striped-knit-polo-in-forest-green",
    "price": 1750,
    "regularPrice": 2012,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9987-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9987-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9989-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9992-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9990-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9991-copy.jpg"
    ],
    "categories": [
      "Polos"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements of Knitted Polo (in inches): S : Length-23 | Chest- 44| Sleeve length- 22.5 M : Length-24 | Chest- 46| Sleeve length- 22.75 L : Length-25 | Chest- 48| Sleeve length- 23 XL : Length-26 | Chest- 50| Sleeve length- 23.5 Male Model: Height- 5\u20196, Wearing- S &nbsp;",
    "sku": "PFKCG",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": true
  },
  {
    "id": "206637",
    "name": "Unisex Horizontal Striped Knit Polo in Maroon",
    "slug": "unisex-horizontal-striped-knit-polo-in-maroon",
    "price": 1750,
    "regularPrice": 2012,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC0021-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC0021-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC0022-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC0025-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC0023-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC0024-copy.jpg"
    ],
    "categories": [
      "Polos"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements of Knitted Polo (in inches): S : Length-23 | Chest- 44| Sleeve length- 22.5 M : Length-24 | Chest- 46| Sleeve length- 22.75 L : Length-25 | Chest- 48| Sleeve length- 23 XL : Length-26 | Chest- 50| Sleeve length- 23.5 Male Model: Height- 5\u20196, Wearing- S",
    "sku": "PFKCM",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": true
  },
  {
    "id": "206625",
    "name": "Unisex Half-Sleeve Knitted Polo in Green, Navy and Cream",
    "slug": "unisex-half-sleeve-knitted-polo-in-green-navy-and-cream",
    "price": 1750,
    "regularPrice": 2012,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC0096-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC0096-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC0098-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC0102-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC0099-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC0101-copy.jpg"
    ],
    "categories": [
      "Polos"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements of Knitted Polo (in inches): S : Length-25 | Chest- 44| Sleeve length- 8.5 M : Length-26 | Chest- 46| Sleeve length-8.75 L : Length-27 | Chest- 48| Sleeve length- 9 XL : Length-28 | Chest- 50| Sleeve length- 9.5 Male Model: Height- 5\u20196, Wearing- S",
    "sku": "PKD2NG",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": true
  },
  {
    "id": "206591",
    "name": "Unisex Half-Sleeve Knitted Polo in Navy, Maroon and Cream",
    "slug": "unisex-half-sleeve-knitted-polo-in-navy-maroon-and-cream",
    "price": 1750,
    "regularPrice": 2012,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC0049-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC0049-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC0051-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC0054-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC0052-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC0055-copy.jpg"
    ],
    "categories": [
      "Polos"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements of Knitted Polo (in inches): S : Length-25 | Chest- 44| Sleeve length- 8.5 M : Length-26 | Chest- 46| Sleeve length-8.75 L : Length-27 | Chest- 48| Sleeve length- 9 XL : Length-28 | Chest- 50| Sleeve length- 9.5 Male Model: Height- 5\u20196, Wearing- S",
    "sku": "PKD2MN",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "206462",
    "name": "Men\u2019s White Pleated Relaxed Gurkha Pants",
    "slug": "mens-white-pleated-relaxed-gurkha-pants",
    "price": 1800,
    "regularPrice": 2070,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC0111-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC0106-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC0109-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC0107-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC0110-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC0111-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC0114-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC0117-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC0115-copy.jpg"
    ],
    "categories": [
      "Formal Pants",
      "Pants",
      "Relaxed Fit"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements for Relaxed Gurkha (in inches): S : Length- 39 | Waist- 30 | Hip- 39 | Leg Opening-23 M : Length- 40 | Waist- 32 | Hip- 41 | Leg Opening-24 L : Length- 41 | Waist- 34 | Hip- 43| Leg Opening-25 XL : Length- 42 | Waist- 36 | Hip- 45 | Leg Opening-26 XXL : Length- 43 | Waist- 38 | Hip- 47 | Leg Opening-27 Male Model: Height- 5\u20196, Wearing- M",
    "sku": "PPRWM",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "206072",
    "name": "Printed Ethnic Top in Maroon",
    "slug": "printed-ethnic-top-in-maroon",
    "price": 1500,
    "regularPrice": 1724,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9801-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9809-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9799-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9807-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9804-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9805-copy.jpg"
    ],
    "categories": [
      "Ethnic",
      "Women"
    ],
    "sizes": [
      "L",
      "M",
      "S"
    ],
    "description": "Measurements of Ethnic Top (in inches) : S : Length- 22.5 | Chest- 42 | Sleeve length- 21 M : Length- 23.5 | Chest- 45 | Sleeve length- 21.5 L : Length- 24.5 | Chest- 48 | Sleeve length- 22",
    "sku": "GETM",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "205844",
    "name": "Unisex Henley Full Sleeve Waffle Textured T-shirt in Black",
    "slug": "unisex-henley-full-sleeve-waffle-textured-t-shirt-in-black",
    "price": 900,
    "regularPrice": 1035,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/04/DSC9665-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9654-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9665-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9654-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9666-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9655-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9671-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9661-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9667-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9658-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9669-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9660-copy.jpg"
    ],
    "categories": [
      "Henley",
      "Henley"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements of Henley T-shirt (in inches): S : Length-26 | Chest- 42 | Sleeve length- 22.5 M : Length- 27 | Chest- 44 | Sleeve length- 23 L : Length- 28 | Chest- 46 | Sleeve length- 23.5 XL : Length- 29 | Chest- 48 | Sleeve length- 24 XXL: Length- 30 | Chest- 50 | Sleeve length- 24.5 Male Model: Height- 5&#8217;11, Wearing- L Female Model: Height- 5\u20194, Wearing- S",
    "sku": "THK",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "205834",
    "name": "Unisex Henley Full Sleeve Waffle Textured T-shirt in Off-White",
    "slug": "unisex-henley-full-sleeve-waffle-textured-t-shirt-in-off-white",
    "price": 900,
    "regularPrice": 1035,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/04/DSC9704-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9714-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9704-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9714-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9706-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9715-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9711-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9719-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9708-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9716-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9709-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9717-copy.jpg"
    ],
    "categories": [
      "Henley",
      "Henley"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements of Henley T-shirt (in inches): S : Length-26 | Chest- 42 | Sleeve length- 22.5 M : Length- 27 | Chest- 44 | Sleeve length- 23 L : Length- 28 | Chest- 46 | Sleeve length- 23.5 XL : Length- 29 | Chest- 48 | Sleeve length- 24 XXL: Length- 30 | Chest- 50 | Sleeve length- 24.5 Male Model: Height- 5&#8217;11, Wearing- L Female Model: Height- 5\u20194, Wearing- S",
    "sku": "THW",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "205811",
    "name": "Premium Soft Textured Crewneck T-shirt in Dark Teal with Stripes",
    "slug": "premium-soft-textured-crewneck-t-shirt-in-dark-teal-with-stripes",
    "price": 650,
    "regularPrice": 747,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9592-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9599-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9592-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9599-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9593-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9600-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9598-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9603-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9595-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9601-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9596-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9602-copy.jpg"
    ],
    "categories": [
      "Premium",
      "Premium",
      "T-shirt"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Extra Small",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements (in inches): Small: Length-26 | Chest- 36 | Sleeve length- 6.5 | Sleeve Opening- 5.5 Medium: Length-27 | Chest- 38 | Sleeve length- 7 | Sleeve Opening- 6 Large: Length-28 | Chest- 40 | Sleeve length- 7.5 | Sleeve Opening- 6.5 Extra Large: Length-29 | Chest- 42 | Sleeve length- 8 | Sleeve Opening- 7 Double Extra Large: Length-30 | Chest- 44 | Sleeve length- 8.5 | Sleeve Opening- 7.5",
    "sku": "TSG12",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "205802",
    "name": "Premium Soft Textured Crewneck T-shirt in White with Thick Stripes",
    "slug": "premium-soft-textured-crewneck-t-shirt-in-white-with-thick-stripes-2",
    "price": 650,
    "regularPrice": 747,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9378-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9393-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9378-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9393-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9380-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9394-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9383-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9397-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9381-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9395-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9382-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9396-copy.jpg"
    ],
    "categories": [
      "Premium",
      "Premium",
      "T-shirt"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Extra Small",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements (in inches): Small: Length-26 | Chest- 36 | Sleeve length- 6.5 | Sleeve Opening- 5.5 Medium: Length-27 | Chest- 38 | Sleeve length- 7 | Sleeve Opening- 6 Large: Length-28 | Chest- 40 | Sleeve length- 7.5 | Sleeve Opening- 6.5 Extra Large: Length-29 | Chest- 42 | Sleeve length- 8 | Sleeve Opening- 7 Double Extra Large: Length-30 | Chest- 44 | Sleeve length- 8.5 | Sleeve Opening- 7.5",
    "sku": "TSW13",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "205794",
    "name": "Premium Soft Textured Crewneck T-shirt in Black with Thin Stripes",
    "slug": "premium-soft-textured-crewneck-t-shirt-in-black-with-thin-stripes-2",
    "price": 650,
    "regularPrice": 747,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9295-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9302-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9295-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9302-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9296-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9303-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9299-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9306-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9304-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9297-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9298-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9305-copy.jpg"
    ],
    "categories": [
      "Premium",
      "Premium",
      "T-shirt"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Extra Small",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements (in inches): Small: Length-26 | Chest- 36 | Sleeve length- 6.5 | Sleeve Opening- 5.5 Medium: Length-27 | Chest- 38 | Sleeve length- 7 | Sleeve Opening- 6 Large: Length-28 | Chest- 40 | Sleeve length- 7.5 | Sleeve Opening- 6.5 Extra Large: Length-29 | Chest- 42 | Sleeve length- 8 | Sleeve Opening- 7 Double Extra Large: Length-30 | Chest- 44 | Sleeve length- 8.5 | Sleeve Opening- 7.5",
    "sku": "TSK13",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": true
  },
  {
    "id": "205780",
    "name": "Premium Soft Textured Crewneck T-shirt in Brown with Thick Lines",
    "slug": "premium-soft-textured-crewneck-t-shirt-in-brown-with-thick-lines",
    "price": 650,
    "regularPrice": 747,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9440-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9448-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9440-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9448-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9441-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9449-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9445-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9453-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9442-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9450-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9443-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9451-copy.jpg"
    ],
    "categories": [
      "Premium",
      "Premium",
      "T-shirt"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Extra Small",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements (in inches): Small: Length-26 | Chest- 36 | Sleeve length- 6.5 | Sleeve Opening- 5.5 Medium: Length-27 | Chest- 38 | Sleeve length- 7 | Sleeve Opening- 6 Large: Length-28 | Chest- 40 | Sleeve length- 7.5 | Sleeve Opening- 6.5 Extra Large: Length-29 | Chest- 42 | Sleeve length- 8 | Sleeve Opening- 7 Double Extra Large: Length-30 | Chest- 44 | Sleeve length- 8.5 | Sleeve Opening- 7.5",
    "sku": "TSH5",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "205767",
    "name": "Premium Soft Textured Crewneck T-shirt in Dusty Sage Green with Thick Stripes",
    "slug": "premium-soft-textured-crewneck-t-shirt-in-dusty-sage-green-with-thick-stripes",
    "price": 650,
    "regularPrice": 747,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9632-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9625-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9632-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9625-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9633-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9627-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9637-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9631-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9635-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9628-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9636-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9629-copy.jpg"
    ],
    "categories": [
      "Premium",
      "Premium",
      "T-shirt"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Extra Small",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements (in inches): Small: Length-26 | Chest- 36 | Sleeve length- 6.5 | Sleeve Opening- 5.5 Medium: Length-27 | Chest- 38 | Sleeve length- 7 | Sleeve Opening- 6 Large: Length-28 | Chest- 40 | Sleeve length- 7.5 | Sleeve Opening- 6.5 Extra Large: Length-29 | Chest- 42 | Sleeve length- 8 | Sleeve Opening- 7 Double Extra Large: Length-30 | Chest- 44 | Sleeve length- 8.5 | Sleeve Opening- 7.5",
    "sku": "TSG11",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": true
  },
  {
    "id": "205758",
    "name": "Baggy Fit Cargo Pants in Dark Jungle Green",
    "slug": "baggy-fit-cargo-pants-in-dark-jungle-green",
    "price": 1300,
    "regularPrice": 1494,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9313-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9384-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9384-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9308-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9387-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9309-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9390-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9315-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9385-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9313-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9388-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9310-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9391-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9314-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9389-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9312-copy.jpg"
    ],
    "categories": [
      "CARGO",
      "CARGO"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXL"
    ],
    "description": "Baggy Fit Cargo Pants Measurements (in inches): Small: Length- 38 | Waist- 24-34 Medium: Length- 39 | Waist- 26-36 Large: Length- 40 | Waist- 28-38 Extra Large: Length- 41 | Waist- 30-40 Double Extra Large: Length- 42 | Waist- 32-42",
    "sku": "PCRG5",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": true
  },
  {
    "id": "205226",
    "name": "Unisex Printed Party Shirt in Blue",
    "slug": "unisex-printed-party-shirt-in-blue",
    "price": 1500,
    "regularPrice": 1724,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8414-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8528-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8414-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8528-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8415-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8529-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8416-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8530-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8417-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8418-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8533-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8534-copy.jpg"
    ],
    "categories": [
      "Party Shirts",
      "Party Shirts"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "description": "Measurements of Party Shirt (in inches): S : Length-28 | Chest- 44 | Sleeve length- 22.5 M : Length- 29 | Chest- 46 | Sleeve length- 23 L : Length- 30 | Chest- 48 | Sleeve length- 23.5 XL : Length- 31 | Chest- 50 | Sleeve length- 24 Male Model: Height- 6\u20190, Wearing- L Female Model: Height- 5\u20197, Wearing- S",
    "sku": "SPN",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "178171",
    "name": "Premium Soft Textured Crewneck T-shirt in Payen's Grey with Thin Stripes",
    "slug": "premium-soft-textured-crewneck-t-shirt-in-payens-grey-with-thin-stripes",
    "price": 650,
    "regularPrice": 747,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9499-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9505-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9499-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9505-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9500-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9506-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9503-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9510-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9501-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9507-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9502-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9508-copy.jpg"
    ],
    "categories": [
      "Premium",
      "Premium"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Extra Small",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements (in inches): Extra Small: Length-25 | Chest- 34 | Sleeve length- 6 | Sleeve Opening- 5 Small: Length-26 | Chest- 36 | Sleeve length- 6.5 | Sleeve Opening- 5.5 Medium: Length-27 | Chest- 38 | Sleeve length- 7 | Sleeve Opening- 6 Large: Length-28 | Chest- 40 | Sleeve length- 7.5 | Sleeve Opening- 6.5 Extra Large: Length-29 | Chest- 42 | Sleeve length- 8 | Sleeve Opening- 7 Double Extra Large: Length-30 | Chest- 44 | Sleeve length- 8.5 | Sleeve Opening- 7.5",
    "sku": "TSA9",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "205302",
    "name": "Unisex Long Sleeve Oversized Flannel Shirt in Cream",
    "slug": "unisex-long-sleeve-oversized-flannel-shirt-in-cream",
    "price": 1500,
    "regularPrice": 1724,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9107-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9113-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9107-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9113-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9108-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9114-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9109-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9117-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9110-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9111-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9115-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9116-copy.jpg"
    ],
    "categories": [
      "Oversized Full Sleeves",
      "Oversized Full Sleeves"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXL"
    ],
    "description": "Measurements (in inches): S : Length- 27 | Chest- 44 | Sleeve length- 24 M : Length- 28 | Chest- 46 | Sleeve length- 24.5 L : Length- 29 | Chest- 48 | Sleeve length- 25 XL : Length- 30 | Chest- 50 | Sleeve length- 25.5 XXL : Length- 31 | Chest- 52 | Sleeve length- 26 Male Model: Height- 6\u20192, Wearing- L Female Model: Height- 5\u20195, Wearing- S",
    "sku": "FSOC",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": true
  },
  {
    "id": "205292",
    "name": "Unisex Oversized Cropped Shirt in White & Sky Blue",
    "slug": "unisex-oversized-cropped-shirt-in-white-sky-blue",
    "price": 1400,
    "regularPrice": 1609,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8593-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8600-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8593-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8600-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8594-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8601-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8595-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8602-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8596-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8597-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8604-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8605-copy.jpg"
    ],
    "categories": [
      "Crop Shirts",
      "Crop Shirts"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXL"
    ],
    "description": "Measurements of Cropped Shirt (in inches): XS : Length-22 | Chest- 42 | Sleeve length- 22 S : Length-22.5 | Chest- 44 | Sleeve length- 22.5 M : Length- 23 | Chest- 46 | Sleeve length- 23 L : Length- 23.5 | Chest- 48 | Sleeve length- 23.5 XL : Length- 24 | Chest- 50 | Sleeve length- 24 XXL : Length- 24.5 | Chest- 52 | Sleeve length- 24.5",
    "sku": "SCN3",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "205278",
    "name": "Unisex Long Sleeve Oversized Shirt in Off White",
    "slug": "unisex-long-sleeve-oversized-shirt-in-off-white",
    "price": 1500,
    "regularPrice": 1724,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9092-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9049-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9092-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9049-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9093-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9050-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9094-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9054-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9096-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9097-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9051-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9052-copy.jpg"
    ],
    "categories": [
      "Oversized Full Sleeves",
      "Oversized Full Sleeves"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXL"
    ],
    "description": "Measurements of Oversized Shirt (in inches): XS : Length-28 | Chest- 44 | Sleeve length- 22.5 S : Length-29 | Chest- 46 | Sleeve length- 23 M : Length- 30 | Chest- 48 | Sleeve length- 23.5 L : Length- 31 | Chest- 50 | Sleeve length- 24 XL : Length- 32 | Chest- 52 | Sleeve length- 24.5 XXL : Length- 33 | Chest- 54 | Sleeve length- 25 Male Model: Height- 6\u20192, Wearing- L Female Model: Height- 5\u20195, Wearing- S",
    "sku": "SFOW2",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": true
  },
  {
    "id": "205271",
    "name": "Unisex Long Sleeve Oversized Shirt in Brown",
    "slug": "unisex-long-sleeve-oversized-shirt-in-brown",
    "price": 1500,
    "regularPrice": 1724,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9075-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9083-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9075-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9083-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9077-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9084-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9078-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9088-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9079-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9080-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9086-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9087-copy.jpg"
    ],
    "categories": [
      "Oversized Full Sleeves",
      "Oversized Full Sleeves"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXL"
    ],
    "description": "Measurements of Oversized Shirt (in inches): XS : Length-28 | Chest- 44 | Sleeve length- 22.5 S : Length-29 | Chest- 46 | Sleeve length- 23 M : Length- 30 | Chest- 48 | Sleeve length- 23.5 L : Length- 31 | Chest- 50 | Sleeve length- 24 XL : Length- 32 | Chest- 52 | Sleeve length- 24.5 XXL : Length- 33 | Chest- 54 | Sleeve length- 25 Male Model: Height- 6\u20192, Wearing- L Female Model: Height- 5\u20195, Wearing- S",
    "sku": "SFOH2",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "205264",
    "name": "Unisex Long Sleeve Oversized Shirt in Grey",
    "slug": "unisex-long-sleeve-oversized-shirt-in-grey",
    "price": 1500,
    "regularPrice": 1724,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9056-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9100-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9056-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9100-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9058-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9102-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9060-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9105-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9061-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9063-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9103-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9104-copy.jpg"
    ],
    "categories": [
      "Oversized Full Sleeves",
      "Oversized Full Sleeves"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXL"
    ],
    "description": "Measurements of Oversized Shirt (in inches): XS : Length-28 | Chest- 44 | Sleeve length- 22.5 S : Length-29 | Chest- 46 | Sleeve length- 23 M : Length- 30 | Chest- 48 | Sleeve length- 23.5 L : Length- 31 | Chest- 50 | Sleeve length- 24 XL : Length- 32 | Chest- 52 | Sleeve length- 24.5 XXL : Length- 33 | Chest- 54 | Sleeve length- 25 Male Model: Height- 6\u20192, Wearing- L Female Model: Height- 5\u20195, Wearing- S",
    "sku": "SFOA2",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "205253",
    "name": "Unisex Long Sleeve Oversized Shirt in Navy",
    "slug": "unisex-long-sleeve-oversized-shirt-in-navy",
    "price": 1500,
    "regularPrice": 1724,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9041-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9067-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9041-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9067-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9042-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9068-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9043-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9073-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9045-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9046-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9069-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC9070-copy.jpg"
    ],
    "categories": [
      "Oversized Full Sleeves",
      "Oversized Full Sleeves"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXL"
    ],
    "description": "Measurements of Oversized Shirt (in inches): XS : Length-28 | Chest- 44 | Sleeve length- 22.5 S : Length-29 | Chest- 46 | Sleeve length- 23 M : Length- 30 | Chest- 48 | Sleeve length- 23.5 L : Length- 31 | Chest- 50 | Sleeve length- 24 XL : Length- 32 | Chest- 52 | Sleeve length- 24.5 XXL : Length- 33 | Chest- 54 | Sleeve length- 25 Male Model: Height- 6\u20192, Wearing- L Female Model: Height- 5\u20195, Wearing- S",
    "sku": "SFON2",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "205242",
    "name": "Unisex Printed Party Shirt in Ash",
    "slug": "unisex-printed-party-shirt-in-ash",
    "price": 1500,
    "regularPrice": 1724,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8516-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8507-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8516-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8507-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8518-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8508-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8521-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8509-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8522-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8525-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8511-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/03/DSC8512-copy.jpg"
    ],
    "categories": [
      "Party Shirts",
      "Party Shirts"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "description": "Measurements of Party Shirt (in inches): S : Length-28 | Chest- 44 | Sleeve length- 22.5 M : Length- 29 | Chest- 46 | Sleeve length- 23 L : Length- 30 | Chest- 48 | Sleeve length- 23.5 XL : Length- 31 | Chest- 50 | Sleeve length- 24 Male Model: Height- 6\u20190, Wearing- L Female Model: Height- 5\u20197, Wearing- S",
    "sku": "SPA",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": true
  },
  {
    "id": "205052",
    "name": "Oversized Flow Shirt in Brown",
    "slug": "oversized-flow-shirt-in-brown",
    "price": 1500,
    "regularPrice": 1724,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8885-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8878-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8885-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8878-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8886-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8879-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8887-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8880-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8889-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8882-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8890-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8883-copy.jpg"
    ],
    "categories": [
      "Flow Shirts",
      "Flow Shirts"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements (in inches): S : Length- 28 | Chest- 44 | Sleeve length- 22.5 | Collar- 15.5 M : Length- 29 | Chest- 46 | Sleeve length- 23 | Collar- 16 L : Length- 30 | Chest- 48 | Sleeve length- 23.5 | Collar- 16.5 XL : Length- 31 | Chest- 50 | Sleeve length- 24 | Collar- 17 XXL : Length- 32 | Chest- 52 | Sleeve length- 24.5 | Collar- 17.5",
    "sku": "SMH2",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "205031",
    "name": "Oversized Flow Shirt in Green",
    "slug": "oversized-flow-shirt-in-deep-green",
    "price": 1500,
    "regularPrice": 1724,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8835-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8841-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8835-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8841-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8836-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8842-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8837-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8843-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8838-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8845-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8839-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8846-copy.jpg"
    ],
    "categories": [
      "Flow Shirts",
      "Flow Shirts"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements (in inches): S : Length- 28 | Chest- 44 | Sleeve length- 22.5 | Collar- 15.5 M : Length- 29 | Chest- 46 | Sleeve length- 23 | Collar- 16 L : Length- 30 | Chest- 48 | Sleeve length- 23.5 | Collar- 16.5 XL : Length- 31 | Chest- 50 | Sleeve length- 24 | Collar- 17 XXL : Length- 32 | Chest- 52 | Sleeve length- 24.5 | Collar- 17.5",
    "sku": "SMG3",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "205020",
    "name": "Oversized Flow Shirt in Midnight Blue",
    "slug": "oversized-flow-shirt-in-midnight-blue",
    "price": 1500,
    "regularPrice": 1724,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8792-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8798-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8792-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8798-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8793-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8799-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8794-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8800-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8795-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8801-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8796-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8802-copy.jpg"
    ],
    "categories": [
      "Flow Shirts",
      "Flow Shirts"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements (in inches): S : Length- 28 | Chest- 44 | Sleeve length- 22.5 | Collar- 15.5 M : Length- 29 | Chest- 46 | Sleeve length- 23 | Collar- 16 L : Length- 30 | Chest- 48 | Sleeve length- 23.5 | Collar- 16.5 XL : Length- 31 | Chest- 50 | Sleeve length- 24 | Collar- 17 XXL : Length- 32 | Chest- 52 | Sleeve length- 24.5 | Collar- 17.5",
    "sku": "SMN2",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": true
  },
  {
    "id": "204806",
    "name": "Crochet Shirt in Beige with Brown Stripes",
    "slug": "crochet-shirt-in-beige-with-brown-stripes",
    "price": 1800,
    "regularPrice": 2070,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8712-copy-3.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8717-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8712-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8712-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8699-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8713-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8702-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8714-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8704-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8715-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8706-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8716-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8708-copy.jpg"
    ],
    "categories": [
      "Crochet & Embroidered Shirts",
      "Crochet & Embroidered Shirts"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements (in inches): S: Length-24| Chest- 42 | Sleeve length- 9.5 M: Length- 25 | Chest- 44 | Sleeve length- 10 L: Length- 26 | Chest- 46 | Sleeve length- 10.5 XL: Length- 27 | Chest- 48 | Sleeve length- 11 XXL: Length- 28 | Chest- 50 | Sleeve length- 11.5 &nbsp;",
    "sku": "SCBC",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "204882",
    "name": "Crochet Shirt in Black",
    "slug": "crochet-shirt-in-black",
    "price": 1800,
    "regularPrice": 2070,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8771-copy-3.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8785-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8771-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8771-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8777-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8772-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8778-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8770-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8781-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8773-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8783-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8774-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8784-copy.jpg"
    ],
    "categories": [
      "Crochet & Embroidered Shirts",
      "Crochet & Embroidered Shirts"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements (in inches): S: Length-24| Chest- 42 | Sleeve length- 9.5 M: Length- 25 | Chest- 44 | Sleeve length- 10 L: Length- 26 | Chest- 46 | Sleeve length- 10.5 XL: Length- 27 | Chest- 48 | Sleeve length- 11 XXL: Length- 28 | Chest- 50 | Sleeve length- 11.5 &nbsp;",
    "sku": "SCBK",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": true
  },
  {
    "id": "204875",
    "name": "Crochet Shirt in Slate Blue with Stripes",
    "slug": "crochet-shirt-in-blue",
    "price": 1800,
    "regularPrice": 2070,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8631-copy-3.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8636-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8631-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8631-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8637-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8632-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8640-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8633-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8641-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8634-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8642-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8635-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8643-copy.jpg"
    ],
    "categories": [
      "Crochet & Embroidered Shirts",
      "Crochet & Embroidered Shirts"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements (in inches): S: Length-24| Chest- 42 | Sleeve length- 9.5 M: Length- 25 | Chest- 44 | Sleeve length- 10 L: Length- 26 | Chest- 46 | Sleeve length- 10.5 XL: Length- 27 | Chest- 48 | Sleeve length- 11 XXL: Length- 28 | Chest- 50 | Sleeve length- 11.5 &nbsp;",
    "sku": "SCBN",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "204808",
    "name": "Oversized Flow Shirt in Deep Maroon",
    "slug": "oversized-flow-shirt-in-maroon",
    "price": 1500,
    "regularPrice": 1724,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8974-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8981-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8974-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8981-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8975-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8982-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8976-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8984-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8977-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8987-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8979-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8989-copy.jpg"
    ],
    "categories": [
      "Flow Shirts",
      "Flow Shirts"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements of Flow Shirt (in inches): S : Length- 28 | Chest- 44 | Sleeve length- 22.5 | Collar- 15.5 M : Length- 29 | Chest- 46 | Sleeve length- 23 | Collar- 16 L : Length- 30 | Chest- 48 | Sleeve length- 23.5 | Collar- 16.5 XL : Length- 31 | Chest- 50 | Sleeve length- 24 | Collar- 17 XXL : Length- 32 | Chest- 52 | Sleeve length- 24.5 | Collar- 17.5",
    "sku": "SMM4",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "204530",
    "name": "Unisex Baggy Jeans in Light Blue",
    "slug": "unisex-baggy-jeans-in-light-blue",
    "price": 1850,
    "regularPrice": 2127,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8068-copy-2-web.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8064-copy-2-web.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8064-copy-web.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8086-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8066-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8087-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8067-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8088-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8073-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8095-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8068-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8069-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8070-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8071-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8089-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8090-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8091-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8092-copy.jpg"
    ],
    "categories": [
      "Denim Pants",
      "Denim Pants"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements (in inches) : S : Waist- 30 | Length- 40 | Hip- 46 | Leg Opening- 23 M : Waist- 32 | Length- 41 | Hip- 47 | Leg Opening- 24 L : Waist- 34 | Length- 42 | Hip- 48 | Leg Opening- 25 XL : Waist- 36 | Length- 43 | Hip- 49 | Leg Opening- 26 Male Model: Height- 6&#8217;0, Wearing- M Female Model: Height- 5&#8217;7, Wearing- S",
    "sku": "DNWN1",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "204603",
    "name": "Unisex Bootcut Jeans in Blue",
    "slug": "unisex-bootcut-jeans-in-blue",
    "price": 1850,
    "regularPrice": 2127,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8101-copy-2-web.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8097-copy-2-web.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8097-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8109-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8098-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8110-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8100-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8111-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8106-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8107-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8101-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8102-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8103-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8105-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8113-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8112-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8114-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8115-copy.jpg"
    ],
    "categories": [
      "Denim Pants",
      "Denim Pants"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "description": "Measurements (in inches) : S : Waist- 30 | Length- 39 | Hip- 41 | Leg Opening- 18.5 M : Waist- 32 | Length- 40 | Hip- 42 | Leg Opening- 19.5 L : Waist- 34 | Length- 41 | Hip- 43 | Leg Opening- 20.5 XL : Waist- 36 | Length- 42 | Hip- 44 | Leg Opening- 21.5 Male Model: Height- 6&#8217;0, Wearing- L Female Model: Height- 5&#8217;7, Wearing- S",
    "sku": "DNBN",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": true
  },
  {
    "id": "204586",
    "name": "Unisex Bootcut Jeans in Black",
    "slug": "unisex-bootcut-jeans-in-black",
    "price": 1850,
    "regularPrice": 2127,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8124-copy-2-web.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8121-copy-2-web.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8121-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8133-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8122-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8134-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8123-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8135-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8128-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8130-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8124-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8125-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8138-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8127-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8137-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8126-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8139-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8141-copy.jpg"
    ],
    "categories": [
      "Denim Pants",
      "Denim Pants"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL"
    ],
    "description": "Measurements (in inches) : S : Waist- 30 | Length- 39 | Hip- 41 | Leg Opening- 18.5 M : Waist- 32 | Length- 40 | Hip- 42 | Leg Opening- 19.5 L : Waist- 34 | Length- 41 | Hip- 43 | Leg Opening- 20.5 XL : Waist- 36 | Length- 42 | Hip- 44 | Leg Opening- 21.5 Male Model: Height- 6&#8217;0, Wearing- L Female Model: Height- 5&#8217;7, Wearing- S",
    "sku": "DNBK",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "204570",
    "name": "Unisex Baggy Jeans in Navy",
    "slug": "unisex-baggy-jeans-in-navy",
    "price": 1850,
    "regularPrice": 2127,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8149-copy-2-web.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8144-copy-2-web.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8144-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8156-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8145-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8157-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8146-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8158-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8152-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8154-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8149-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8148-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8147-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8150-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8160-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8162-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8159-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2026/02/DSC8163-copy.jpg"
    ],
    "categories": [
      "Denim Pants",
      "Denim Pants"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements (in inches) : S : Waist- 30 | Length- 40 | Hip- 46 | Leg Opening- 23 M : Waist- 32 | Length- 41 | Hip- 47 | Leg Opening- 24 L : Waist- 34 | Length- 42 | Hip- 48 | Leg Opening- 25 XL : Waist- 36 | Length- 43 | Hip- 49 | Leg Opening- 26 Male Model: Height- 6&#8217;0, Wearing- M Female Model: Height- 5&#8217;7, Wearing- S",
    "sku": "DNWN2",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": true
  },
  {
    "id": "201496",
    "name": "Twill Chore Jacket with Flannel inner in Brown",
    "slug": "twill-chore-jacket-with-flannel-inner-in-brown",
    "price": 2300,
    "regularPrice": 2645,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7542-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7544-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7542-copy-3.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7536-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7542-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7537-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7543-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7538-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7544-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7539-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7545-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7540-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7548-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7541-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7547-copy.jpg"
    ],
    "categories": [
      "Chore",
      "Chore"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXL"
    ],
    "description": "Measurements (in inches): XS : Length-26 | Chest- 41| Sleeve length- 27 S : Length-27| Chest- 43| Sleeve length- 27.5 M : Length-28| Chest- 45| Sleeve length- 28.5 L : Length-29| Chest- 47| Sleeve length- 29.5 XL : Length-30| Chest- 49| Sleeve length- 30.5 XXL : Length-31| Chest- 51| Sleeve length- 31.5",
    "sku": "JIH",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "201543",
    "name": "Twill Chore Jacket with Flannel inner in Green",
    "slug": "twill-chore-jacket-with-flannel-inner-in-green",
    "price": 2300,
    "regularPrice": 2645,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7529-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7531-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7529-copy-3.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7493-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7529-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7494-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7530-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7495-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7531-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7497-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7532-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7498-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7533-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7499-copy.jpg"
    ],
    "categories": [
      "Chore",
      "Chore"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXL"
    ],
    "description": "Measurements (in inches): XS : Length-26 | Chest- 40| Sleeve length- 27 S : Length-27| Chest- 42| Sleeve length- 27.5 M : Length-28| Chest- 44| Sleeve length- 28.5 L : Length-29| Chest- 46| Sleeve length- 29.5 XL : Length-30| Chest- 48| Sleeve length- 30.5 XXL : Length-31| Chest- 50| Sleeve length- 31.5",
    "sku": "JIG3",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": true
  },
  {
    "id": "201143",
    "name": "Scribble Embroidered Jacket in Green",
    "slug": "scribble-embroidered-jacket-in-green",
    "price": 2800,
    "regularPrice": 3219,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC6990-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC6991-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7500-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7514-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7500-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7515-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7501-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7516-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7502-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7517-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7503-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7518-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7504-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7519-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7505-copy.jpg"
    ],
    "categories": [
      "Bombers",
      "Bombers"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Extra Small",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements (in inches): XS : Length-22 | Chest- 42 | Sleeve length- 22 S : Length-23 | Chest- 44 | Sleeve length- 22 M : Length-24 | Chest- 46 | Sleeve length- 22.5 L : Length-25 | Chest- 48 | Sleeve length- 23 XL : Length-26 | Chest- 50 | Sleeve length- 23.5 XXL : Length-27 | Chest- 52 | Sleeve length- 24",
    "sku": "JEBG",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "201104",
    "name": "Scribble Embroidered Jacket in Brown",
    "slug": "scribble-embroidered-jacket-in-brown",
    "price": 2800,
    "regularPrice": 3219,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC6992-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC6993-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7507-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7521-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7507-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7522-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7508-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7523-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7509-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7524-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7510-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7525-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7511-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7526-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7512-copy.jpg"
    ],
    "categories": [
      "Bombers",
      "Bombers"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Extra Small",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements (in inches): XS : Length-22 | Chest- 42 | Sleeve length- 22 S : Length-23 | Chest- 44 | Sleeve length- 22 M : Length-24 | Chest- 46 | Sleeve length- 22.5 L : Length-25 | Chest- 48 | Sleeve length- 23 XL : Length-26 | Chest- 50 | Sleeve length- 23.5 XXL : Length-27 | Chest- 52 | Sleeve length- 24",
    "sku": "JEBH",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "200748",
    "name": "Textured Bomber Jacket in Black",
    "slug": "textured-bomber-jacket-in-black",
    "price": 2800,
    "regularPrice": 3219,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC6979-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC6986-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7476-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7482-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7476-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7483-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7477-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7484-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7478-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7485-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7479-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7486-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7480-copy.jpg"
    ],
    "categories": [
      "Textured Jacket",
      "Textured Jackets"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Extra Small",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements (in inches): XS : Length-22 | Chest- 42 | Sleeve length- 22 S : Length-23 | Chest- 44 | Sleeve length- 22 M : Length-24 | Chest- 46 | Sleeve length- 22.5 L : Length-25 | Chest- 48 | Sleeve length- 23 XL : Length-26 | Chest- 50 | Sleeve length- 23.5 XXL : Length-27 | Chest- 52 | Sleeve length- 24",
    "sku": "JGCK2",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": true
  },
  {
    "id": "200733",
    "name": "Graffiti Textured Jacket in Blue",
    "slug": "graffiti-textured-jacket-in-blue",
    "price": 2800,
    "regularPrice": 3219,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC6987-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC6988-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7487-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7472-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7487-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7470-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7488-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7471-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7489-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7473-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7491-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7474-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/12/DSC7492-copy.jpg"
    ],
    "categories": [
      "Textured Jacket",
      "Textured Jackets"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Extra Small",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements (in inches): S : Length-24 | Chest- 40 | Sleeve length- 22.5 M : Length-25 | Chest- 42 | Sleeve length- 23 L : Length-26 | Chest- 44 | Sleeve length- 23.5 XL : Length-27 | Chest- 46 | Sleeve length- 24 XXL : Length-28 | Chest- 48 | Sleeve length- 24.5",
    "sku": "JGCN",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": true
  },
  {
    "id": "198535",
    "name": "Flannel Jacket in Navy Blue & Brown",
    "slug": "flannel-jacket-in-navy-blue-brown",
    "price": 2300,
    "regularPrice": 2645,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6973-copy-WEB.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6974-copy-WEB.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6591-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6678-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6591-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6682-copy2.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6592-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6680-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6593-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6682-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6594-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6683-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6684-copy.jpg"
    ],
    "categories": [
      "Flannel Jacket",
      "Flannel Jacket"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Extra Small",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements (in inches): XS : Length-23 | Chest- 38 | Sleeve length- 22 S : Length-24 | Chest- 40 | Sleeve length- 22.5 M : Length- 25 | Chest- 42 | Sleeve length- 24 L : Length- 26 | Chest- 44 | Sleeve length- 25 XL : Length- 27 | Chest- 46 | Sleeve length- 25.5 XXL : Length- 28 | Chest- 48 | Sleeve length- 26",
    "sku": "JFH2",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "198488",
    "name": "Flannel Jacket in Black & Grey",
    "slug": "flannel-jacket-in-black-grey",
    "price": 2300,
    "regularPrice": 2645,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6970-copy-WEB.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6972-copy-WEB.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6805-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6813-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6805-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6814-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6807-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6815-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6808-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6816-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6809-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6817-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6818-copy.jpg"
    ],
    "categories": [
      "Flannel Jacket",
      "Flannel Jacket"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Extra Small",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements (in inches): XS : Length-23 | Chest- 38 | Sleeve length- 22 S : Length-24 | Chest- 40 | Sleeve length- 22.5 M : Length- 25 | Chest- 42 | Sleeve length- 24 L : Length- 26 | Chest- 44 | Sleeve length- 25 XL : Length- 27 | Chest- 46 | Sleeve length- 25.5 XXL : Length- 28 | Chest- 48 | Sleeve length- 26",
    "sku": "JFK2",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "198414",
    "name": "Men's Baggy Cord Pants in Green",
    "slug": "mens-baggy-cord-pants-in-green",
    "price": 1400,
    "regularPrice": 1609,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6437-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6445-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6436-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6439-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6445-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6437-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6438-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6446-copy.jpg"
    ],
    "categories": [
      "Cord Pants",
      "Pants"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements (in inches): S : Length- 38 | Waist- 30 | Hip- 39 | Thigh- 26 | Leg Opening- 19 M : Length- 39 | Waist- 32 | Hip- 41 | Thigh- 27 | Leg Opening- 20 L : Length- 40 | Waist- 34 | Hip- 43 | Thigh- 28 | Leg Opening- 21 XL : Length- 41 | Waist- 36 | Hip- 45 | Thigh- 29 | Leg Opening- 22 XXL : Length- 42 | Waist- 38 | Hip- 47 | Thigh- 30 | Leg Opening- 23",
    "sku": "PC2RG",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": true
  },
  {
    "id": "196949",
    "name": "Cropped Puffer Jacket in Silver",
    "slug": "cropped-puffer-jacket-in-silver",
    "price": 2400,
    "regularPrice": 2760,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6411-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6412-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6314-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6262-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6317-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6263-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6318-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6264-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6319-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6267-copy-1.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6321-copy-1.jpg"
    ],
    "categories": [
      "Puffer Jacket",
      "Puffer Jacket"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXL"
    ],
    "description": "Measurements (in inches): XS : Length-18 | Chest- 42 | Sleeve length- 23 S : Length-19 | Chest- 44 | Sleeve length- 23.5 M : Length-20 | Chest- 46 | Sleeve length- 24 L : Length-21 | Chest- 48 | Sleeve length- 24.4 XL : Length-22 | Chest- 50 | Sleeve length- 25",
    "sku": "JPS",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "196948",
    "name": "Cropped Puffer Jacket in Deep Green",
    "slug": "cropped-puffer-jacket-in-deep-green",
    "price": 2400,
    "regularPrice": 2760,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6414-copy-web.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6415-copy-1.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6385-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6347-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6387-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6348-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6388-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6349-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6389-copy-1.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6352-copy-1.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6391-copy-1.jpg"
    ],
    "categories": [
      "Puffer Jacket",
      "Puffer Jacket"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXL"
    ],
    "description": "Measurements (in inches): XS : Length-18 | Chest- 42 | Sleeve length- 23 S : Length-19 | Chest- 44 | Sleeve length- 23.5 M : Length-20 | Chest- 46 | Sleeve length- 24 L : Length-21 | Chest- 48 | Sleeve length- 24.4 XL : Length-22 | Chest- 50 | Sleeve length- 25",
    "sku": "JPG",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "196957",
    "name": "Aztec Weave Jacket in Navy Blue",
    "slug": "aztec-weave-jacket-in-navy-blue",
    "price": 2600,
    "regularPrice": 2989,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5571-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5573-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6075-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6034-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6081-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6035-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6082-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6036-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6080-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6038-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6084-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6037-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6083-copy.jpg"
    ],
    "categories": [
      "Textured Jacket",
      "Textured Jackets"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Extra Small",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements (in inches): XS : Length-23 | Chest- 38 | Sleeve length- 20 S : Length-24 | Chest- 40 | Sleeve length- 21 M : Length-25 | Chest- 42 | Sleeve length- 22 L : Length-26 | Chest- 44 | Sleeve length- 23 XL : Length-27 | Chest- 46 | Sleeve length- 24 XXL : Length-28 | Chest- 48 | Sleeve length- 25",
    "sku": "JGTN",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "196973",
    "name": "Aztec Weave Jacket in Deep Green",
    "slug": "aztec-weave-jacket-in-deep-green",
    "price": 2600,
    "regularPrice": 2989,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5579-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5581-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6153-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6119-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6158-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6120-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6159-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6121-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6157-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6123-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6162-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6122-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6161-copy.jpg"
    ],
    "categories": [
      "Textured Jacket",
      "Textured Jackets"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Extra Small",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements (in inches): XS : Length-23 | Chest- 38 | Sleeve length- 20 S : Length-24 | Chest- 40 | Sleeve length- 21 M : Length-25 | Chest- 42 | Sleeve length- 22 L : Length-26 | Chest- 44 | Sleeve length- 23 XL : Length-27 | Chest- 46 | Sleeve length- 24 XXL : Length-28 | Chest- 48 | Sleeve length- 25",
    "sku": "JGTG",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "196972",
    "name": "Aztec Weave Jacket in Dusty Pink",
    "slug": "aztec-weave-jacket-in-dusty-pink",
    "price": 2600,
    "regularPrice": 2989,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5575-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5576-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6183-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6184-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6178-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6185-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6179-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6186-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6180-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6188-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6182-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6187-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC6181-copy.jpg"
    ],
    "categories": [
      "Textured Jacket",
      "Textured Jackets"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Extra Small",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements (in inches): XS : Length-23 | Chest- 38 | Sleeve length- 20 S : Length-24 | Chest- 40 | Sleeve length- 21 M : Length-25 | Chest- 42 | Sleeve length- 22 L : Length-26 | Chest- 44 | Sleeve length- 23 XL : Length-27 | Chest- 46 | Sleeve length- 24 XXL : Length-28 | Chest- 48 | Sleeve length- 25",
    "sku": "JGTP",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "196933",
    "name": "Retro Sports Jacket in Navy Blue & Maroon",
    "slug": "retro-sports-jacket-in-navy-blue-maroon",
    "price": 2600,
    "regularPrice": 2989,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/11/cd0d0c47-57ab-46da-8942-fe2d8452af75.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5970-copy1.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5964-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5967-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5846-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5969-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5848-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5970-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5851-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5971-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5855-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5973-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5856-copy.jpg"
    ],
    "categories": [
      "Retro Sports Jacket",
      "Retro Sports Jacket"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXL"
    ],
    "description": "Measurements (in inches): XS : Length-21.5 | Chest- 58 | Sleeve length- 29 S : Length-22.5 | Chest- 60 | Sleeve length- 29.5 M : Length-23.5 | Chest- 62 | Sleeve length- 30 L : Length-24.5 | Chest- 64 | Sleeve length- 30.5 XL : Length-25.5 | Chest- 66 | Sleeve length- 31 XXL : Length-26.5 | Chest- 68 | Sleeve length- 31.5",
    "sku": "JRN",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "196932",
    "name": "Retro Sports Jacket in Green & Purple",
    "slug": "retro-sports-jacket-in-green-purple",
    "price": 2600,
    "regularPrice": 2989,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/11/0ef6a816-033f-4853-a3a5-eb3dacdf1f8d.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5734-copy1.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5741-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5732-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5743-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5736-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5744-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5734-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5745-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5738-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5746-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5739-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/11/DSC5747-copy.jpg"
    ],
    "categories": [
      "Retro Sports Jacket",
      "Retro Sports Jacket"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXL"
    ],
    "description": "Measurements (in inches): XS : Length-21.5 | Chest- 58 | Sleeve length- 29 S : Length-22.5 | Chest- 60 | Sleeve length- 29.5 M : Length-23.5 | Chest- 62 | Sleeve length- 30 L : Length-24.5 | Chest- 64 | Sleeve length- 30.5 XL : Length-25.5 | Chest- 66 | Sleeve length- 31 XXL : Length-26.5 | Chest- 68 | Sleeve length- 31.5",
    "sku": "JRG",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": true
  },
  {
    "id": "196501",
    "name": "Boxy Jacket in Charcoal Grey",
    "slug": "boxy-jacket-in-charcoal-grey",
    "price": 2300,
    "regularPrice": 2645,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5704-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5706-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6763-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6769-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6763-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6770-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6764-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6771-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6765-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6770-copy1-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6766-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6775-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6767-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6776-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6768-copy.jpg"
    ],
    "categories": [
      "Boxy Jacket",
      "Boxy Jacket"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Extra Small",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements of Boxy Jacket (in inches): XS : Length-23 | Chest- 38 | Sleeve length- 20.5 S : Length-24 | Chest- 40 | Sleeve length- 21.5 M : Length- 25 | Chest- 42 | Sleeve length- 22.5 L : Length- 26 | Chest- 44 | Sleeve length- 23.5 XL : Length- 27 | Chest- 46 | Sleeve length- 24.5 XXL: Length- 28 | Chest- 48 | Sleeve length- 25.5",
    "sku": "JBA4",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "196484",
    "name": "Boxy Jacket in Deep Green",
    "slug": "boxy-jacket-in-deep-green",
    "price": 2300,
    "regularPrice": 2645,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5596-copy-1.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5598-copy-1.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6687-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6693-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6687-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6694-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6688-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6695-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6689-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6696-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6697-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6691-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6698-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6692-copy.jpg"
    ],
    "categories": [
      "Boxy Jacket",
      "Boxy Jacket"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Extra Small",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements of Boxy Jacket (in inches): XS : Length-23 | Chest- 38 | Sleeve length- 20.5 S : Length-24 | Chest- 40 | Sleeve length- 21.5 M : Length- 25 | Chest- 42 | Sleeve length- 22.5 L : Length- 26 | Chest- 44 | Sleeve length- 23.5 XL : Length- 27 | Chest- 46 | Sleeve length- 24.5 XXL: Length- 28 | Chest- 48 | Sleeve length- 25.5",
    "sku": "JBG4",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "196467",
    "name": "Boxy Jacket in Light Brown",
    "slug": "boxy-jacket-in-light-brown",
    "price": 2300,
    "regularPrice": 2645,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/10/Front-scaled.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5604-copy-2-scaled.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6527-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6521-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6527-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6522-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6528-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6523-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6529-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6524-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6532-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6525-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6533-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6526-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6535-copy.jpg"
    ],
    "categories": [
      "Boxy Jacket",
      "Boxy Jacket"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Extra Small",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements of Boxy Jacket (in inches): XS : Length-23 | Chest- 38 | Sleeve length- 20.5 S : Length-24 | Chest- 40 | Sleeve length- 21.5 M : Length- 25 | Chest- 42 | Sleeve length- 22.5 L : Length- 26 | Chest- 44 | Sleeve length- 23.5 XL : Length- 27 | Chest- 46 | Sleeve length- 24.5 XXL: Length- 28 | Chest- 48 | Sleeve length- 25.5",
    "sku": "JBH2",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": true
  },
  {
    "id": "196449",
    "name": "Boxy Jacket in Black",
    "slug": "boxy-jacket-in-black",
    "price": 2300,
    "regularPrice": 2645,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5609-copy-1.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5611-copy-1.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6733-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6726-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6733-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6727-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6734-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6728-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6735-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6729-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6734-copy1.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6730-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6737-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6731-copy.jpg"
    ],
    "categories": [
      "Boxy Jacket",
      "Boxy Jacket"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Extra Small",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements of Boxy Jacket (in inches): XS : Length-23 | Chest- 38 | Sleeve length- 20.5 S : Length-24 | Chest- 40 | Sleeve length- 21.5 M : Length- 25 | Chest- 42 | Sleeve length- 22.5 L : Length- 26 | Chest- 44 | Sleeve length- 23.5 XL : Length- 27 | Chest- 46 | Sleeve length- 24.5 XXL: Length- 28 | Chest- 48 | Sleeve length- 25.5",
    "sku": "JBK",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": true
  },
  {
    "id": "196433",
    "name": "Boxy Jacket in Navy Blue",
    "slug": "boxy-jacket-in-navy-blue",
    "price": 2300,
    "regularPrice": 2645,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5607-copy-1.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5608-copy-1.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6489-copy-2.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6448-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6489-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6451-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6491-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6452-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6492-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6454-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6495-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6455-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6496-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC6456-copy.jpg"
    ],
    "categories": [
      "Boxy Jacket",
      "Boxy Jacket"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Extra Small",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements of Boxy Jacket (in inches): XS : Length-23 | Chest- 38 | Sleeve length- 20.5 S : Length-24 | Chest- 40 | Sleeve length- 21.5 M : Length- 25 | Chest- 42 | Sleeve length- 22.5 L : Length- 26 | Chest- 44 | Sleeve length- 23.5 XL : Length- 27 | Chest- 46 | Sleeve length- 24.5 XXL: Length- 28 | Chest- 48 | Sleeve length- 25.5",
    "sku": "JBN2",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "194984",
    "name": "Oversized Long Sleeve Shirt in Bottle Green",
    "slug": "oversized-long-sleeve-shirt-in-bottle-green",
    "price": 1500,
    "regularPrice": 1724,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/05/hf_20260728_090336_7514fd8d-4678-41f4-ab04-a14dcfdee2a4-copy-1.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5463-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5457-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5445-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5446-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5465-Recovered.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5472-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5447-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5449-copy.jpg"
    ],
    "categories": [
      "Oversized Full Sleeves",
      "Oversized Full Sleeves"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXL"
    ],
    "description": "Measurements of Oversized Shirt (in inches): XS : Length-28 | Chest- 44 | Sleeve length- 22.5 S : Length-29 | Chest- 46 | Sleeve length- 23 M : Length- 30 | Chest- 48 | Sleeve length- 23.5 L : Length- 31 | Chest- 50 | Sleeve length- 24 XL : Length- 32 | Chest- 52 | Sleeve length- 24.5 XXL : Length- 33 | Chest- 54 | Sleeve length- 25",
    "sku": "SFOG2",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "194900",
    "name": "Men\u2019s Straight Fit Carpenter Pants in Black",
    "slug": "mens-straight-fit-carpenter-pants-in-black",
    "price": 1300,
    "regularPrice": 1494,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5531-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5538-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5526-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5530-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5533-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5527-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5543-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5528-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5529-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5532-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5535-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5542-copy.jpg"
    ],
    "categories": [
      "Carpenter Pants",
      "Pants"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements (in inches): S : Length- 38 | Waist- 30 | Hip- 40 | Leg Opening- 15 M : Length- 39 | Waist- 32 | Hip- 42 | Leg Opening- 15.5 L : Length- 40 | Waist- 34 | Hip- 44 | Leg Opening- 16 XL : Length- 41 | Waist- 36 | Hip- 46 | Leg Opening- 16.5 XXL : Length- 42 | Waist- 38 | Hip- 48 | Leg Opening- 17",
    "sku": "PCGK",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "194883",
    "name": "Men\u2019s Straight Fit Carpenter Pants in Brown",
    "slug": "mens-straight-fit-carpenter-pants-in-brown",
    "price": 1300,
    "regularPrice": 1494,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5552-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5568-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5546-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5547-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5548-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5551-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5550-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5549-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5568-copy1.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5564-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5558-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5566-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5562-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/10/DSC5560-copy.jpg"
    ],
    "categories": [
      "Carpenter Pants",
      "Pants"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements (in inches): S : Length- 38 | Waist- 30 | Hip- 40 | Leg Opening- 15 M : Length- 39 | Waist- 32 | Hip- 42 | Leg Opening- 15.5 L : Length- 40 | Waist- 34 | Hip- 44 | Leg Opening- 16 XL : Length- 41 | Waist- 36 | Hip- 46 | Leg Opening- 16.5 XXL : Length- 42 | Waist- 38 | Hip- 48 | Leg Opening- 17",
    "sku": "PCGH",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": true
  },
  {
    "id": "194101",
    "name": "Oversized Flow Shirt in Mauve",
    "slug": "oversized-flow-shirt-in-mauve",
    "price": 1500,
    "regularPrice": 1724,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/07/hf_20260728_085101_76a56686-e5f5-46b4-a315-dd5bd72d1bb1-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5428-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5381-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5362-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5363-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5433-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5391-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5387-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5388-copy.jpg"
    ],
    "categories": [
      "Flow Shirts",
      "Flow Shirts"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XXL"
    ],
    "description": "Measurements (in inches): S : Length- 28 | Chest- 44 | Sleeve length- 22.5 | Collar- 15.5 M : Length- 29 | Chest- 46 | Sleeve length- 23 | Collar- 16 L : Length- 30 | Chest- 48 | Sleeve length- 23.5 | Collar- 16.5 XL : Length- 31 | Chest- 50 | Sleeve length- 24 | Collar- 17 XXL : Length- 32 | Chest- 52 | Sleeve length- 24.5 | Collar- 17.5",
    "sku": "SMP2",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "192568",
    "name": "Women's High-Waisted Curve Pleated Formal Pants in Black",
    "slug": "womens-high-waisted-curve-pleated-formal-pants-in-black",
    "price": 1700,
    "regularPrice": 1954,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5230-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5219-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5222-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5220-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5226-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5231-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5224-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5233-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5227-copy.jpg"
    ],
    "categories": [
      "Formal Pants",
      "Pants",
      "Women"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements in Inches: S : Waist: 25.5 | Length: 39 | Hip: 38 | Thigh: 23 | Leg opening: 18.5 M : Waist: 27.5 | Length: 40 | Hip: 40 | Thigh: 24 | Leg opening: 19 L : Waist: 29.5 | Length: 41 | Hip: 42 | Thigh: 25 | Leg opening: 19.5 XL : Waist: 31.5 | Length: 42 | Hip: 44 | Thigh: 26 | Leg opening: 20 XXL : Waist: 33.5 | Length: 43 | Hip: 46 | Thigh: 27 | Leg opening: 20.5",
    "sku": "PGWK",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "192529",
    "name": "Women's High-Waisted Curve Pleated Formal Pants in Muted Brown",
    "slug": "womens-high-waisted-curve-pleated-formal-pants-in-muted-brown",
    "price": 1700,
    "regularPrice": 1954,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5212-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5203-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5206-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5205-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5217-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5215-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5208-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5210-copy.jpg"
    ],
    "categories": [
      "Formal Pants",
      "Pants",
      "Women"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements in Inches: S : Waist: 25.5 | Length: 39 | Hip: 38 | Thigh: 23 | Leg opening: 18.5 M : Waist: 27.5 | Length: 40 | Hip: 40 | Thigh: 24 | Leg opening: 19 L : Waist: 29.5 | Length: 41 | Hip: 42 | Thigh: 25 | Leg opening: 19.5 XL : Waist: 31.5 | Length: 42 | Hip: 44 | Thigh: 26 | Leg opening: 20 XXL : Waist: 33.5 | Length: 43 | Hip: 46 | Thigh: 27 | Leg opening: 20.5",
    "sku": "PGWH",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "191921",
    "name": "Oversized Cropped Shirt in White & Navy Blue",
    "slug": "oversized-cropped-shirt-in-white-navy-blue",
    "price": 1400,
    "regularPrice": 1609,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/09/hf_20260728_085949_f5ea6f70-60b8-4901-917c-1e04df83c7e3-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC4989-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5001-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC4963-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC4967-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC4968-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC4994-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC4986-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC4971-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC4972-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC4973-copy.jpg"
    ],
    "categories": [
      "Crop Shirts",
      "Crop Shirts"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXL"
    ],
    "description": "Measurements of Cropped Shirt (in inches): XS : Length-22 | Chest- 42 | Sleeve length- 22 S : Length-22.5 | Chest- 44 | Sleeve length- 22.5 M : Length- 23 | Chest- 46 | Sleeve length- 23 L : Length- 23.5 | Chest- 48 | Sleeve length- 23.5 XL : Length- 24 | Chest- 50 | Sleeve length- 24 XXL : Length- 24.5 | Chest- 52 | Sleeve length- 24.5",
    "sku": "SCN",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "191860",
    "name": "Oversized Cropped Shirt in White & Blue",
    "slug": "oversized-cropped-shirt-in-white-blue",
    "price": 1400,
    "regularPrice": 1609,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/09/hf_20260728_090148_7526cd23-0de1-4939-a483-be134a0b0391-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC4944-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC4931-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC4921-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC4922-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC4923-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC4940-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC4951-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC4913-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC4914-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC4915-copy.jpg"
    ],
    "categories": [
      "Crop Shirts",
      "Crop Shirts"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXL"
    ],
    "description": "Measurements of Cropped Shirt (in inches): XS : Length-22 | Chest- 42 | Sleeve length- 22 S : Length-22.5 | Chest- 44 | Sleeve length- 22.5 M : Length- 23 | Chest- 46 | Sleeve length- 23 L : Length- 23.5 | Chest- 48 | Sleeve length- 23.5 XL : Length- 24 | Chest- 50 | Sleeve length- 24 XXL : Length- 24.5 | Chest- 52 | Sleeve length- 24.5",
    "sku": "SCN2",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "191597",
    "name": "Women\u2019s Paisley Printed String Tie Top in Green",
    "slug": "womens-paisley-printed-string-tie-top-in-green",
    "price": 1200,
    "regularPrice": 1380,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5097-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5089-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5086-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5090-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5091-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5094-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5106-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5110-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5095-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5108-copy.jpg"
    ],
    "categories": [
      "String Tie Top",
      "Tops"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXL"
    ],
    "description": "Measurements of String Tie Top (in inches): XS : Length-21 | Chest- 38 | Sleeve length- 21 S : Length-22| Chest- 42 | Sleeve length- 21.5 M : Length-22.5 | Chest- 44 | Sleeve length- 22 L : Length-23 | Chest- 46 | Sleeve length- 22.5 XL : Length-23.5 | Chest- 48 | Sleeve length- 23 XXL : Length-24 | Chest- 50 | Sleeve length- 23.5",
    "sku": "TGSG",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "191589",
    "name": "Women's Floral Printed String Tie top in Pink",
    "slug": "womens-floral-printed-string-tie-top-in-pink",
    "price": 1200,
    "regularPrice": 1380,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5046-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5038-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5033-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5036-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5037-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5040-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5048-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5049-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5041-copy.jpg"
    ],
    "categories": [
      "String Tie Top",
      "Tops"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXL"
    ],
    "description": "Measurements of String Tie Top (in inches): XS : Length-21 | Chest- 38 | Sleeve length- 21 S : Length-22| Chest- 42 | Sleeve length- 21.5 M : Length-22.5 | Chest- 44 | Sleeve length- 22 L : Length-23 | Chest- 46 | Sleeve length- 22.5 XL : Length-23.5 | Chest- 48 | Sleeve length- 23 XXL : Length-24 | Chest- 50 | Sleeve length- 23.5",
    "sku": "TGSP",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": true
  },
  {
    "id": "191545",
    "name": "Women's Floral Printed String Tie top in Violet",
    "slug": "womens-floral-printed-string-tie-top-in-violet",
    "price": 1200,
    "regularPrice": 1380,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5062-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5056-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5057-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5055-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5058-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5059-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5065-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5080-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5074-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5077-copy.jpg"
    ],
    "categories": [
      "String Tie Top",
      "Tops"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXL"
    ],
    "description": "Measurements of String Tie Top (in inches): XS : Length-21 | Chest- 38 | Sleeve length- 21 S : Length-22| Chest- 42 | Sleeve length- 21.5 M : Length-22.5 | Chest- 44 | Sleeve length- 22 L : Length-23 | Chest- 46 | Sleeve length- 22.5 XL : Length-23.5 | Chest- 48 | Sleeve length- 23 XXL : Length-24 | Chest- 50 | Sleeve length- 23.5",
    "sku": "TGSV",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "191329",
    "name": "Women's Long Sleeve Ruffle Top in Off-White",
    "slug": "womens-long-sleeve-ruffle-top-in-off-white",
    "price": 1200,
    "regularPrice": 1380,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5184-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5175-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5178-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5180-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5195-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5187-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5198-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5192-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5196-copy.jpg"
    ],
    "categories": [
      "Ruffle Top",
      "Tops"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXL"
    ],
    "description": "Measurements of Ruffle Top (in inches): XS : Length-22 | Chest- 36 | Sleeve length- 24 S : Length-23 | Chest- 40 | Sleeve length- 25 M : Length-24 | Chest- 42 | Sleeve length- 26 L : Length-25 | Chest- 44 | Sleeve length- 27 XL : Length-26 | Chest- 46 | Sleeve length- 28",
    "sku": "TGRW",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "191292",
    "name": "Women's Long Sleeve Ruffle Top in Maroon",
    "slug": "womens-long-sleeve-ruffle-top-in-maroon",
    "price": 1200,
    "regularPrice": 1380,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5157-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5119-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5116-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5118-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5120-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5122-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5158-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5159-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5145-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5126-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/09/DSC5154-copy.jpg"
    ],
    "categories": [
      "Ruffle Top",
      "Tops"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXL"
    ],
    "description": "Measurements of Ruffle Top (in inches): XS : Length-22 | Chest- 36 | Sleeve length- 24 S : Length-23 | Chest- 40 | Sleeve length- 25 M : Length-24 | Chest- 42 | Sleeve length- 26 L : Length-25 | Chest- 44 | Sleeve length- 27 XL : Length-26 | Chest- 46 | Sleeve length- 28",
    "sku": "TGRM",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": true
  },
  {
    "id": "162257",
    "name": "Diamond Knit Polo in Bottle Green",
    "slug": "diamond-knit-polo-in-bottle-green",
    "price": 1500,
    "regularPrice": 1724,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/08/hf_20260730_060218_af0f5609-2ba8-4a9c-98e0-a5ac9ce4d784-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/02/DSC0611-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/02/DSC0588-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/02/DSC0589-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/02/DSC0305_1.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/02/DSC0590-copy.jpg"
    ],
    "categories": [
      "Polos"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements (in inches): S : Length-27 | Chest- 38 | Sleeve length- 8.5 M : Length-28 | Chest- 40 | Sleeve length- 9 L : Length-29 | Chest- 42 | Sleeve length- 9.5 XL : Length-30 | Chest- 44 | Sleeve length- 10 XXL : Length-31 | Chest- 46 | Sleeve length- 10.5",
    "sku": "PKDG",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "190096",
    "name": "Abstract Printed Cuban Shirt in Mint Green",
    "slug": "abstract-printed-cuban-shirt-in-mint-green",
    "price": 1400,
    "regularPrice": 1609,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/05/hf_20260728_100817_504e4bce-7f46-4bab-8cfc-7e4abb76cf86-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4720-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4711-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4706-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4707-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4722-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4702-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4684-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4686-copy.jpg"
    ],
    "categories": [
      "Cubans",
      "Cubans"
    ],
    "sizes": [
      "Double XL",
      "Extra Large",
      "Extra Small",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements of Cubans (In Inches): XS : Length-26 | Chest- 36 | Sleeve length- 8.5 S : Length-27 | Chest- 38 | Sleeve length- 9 M : Length- 28 | Chest- 40 | Sleeve length- 9.5 L : Length- 29 | Chest- 42 | Sleeve length- 10 XL : Length- 30 | Chest- 44 | Sleeve length- 10.5 XXL : Length- 30 | Chest- 46 | Sleeve length- 11",
    "sku": "CST7",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "190079",
    "name": "Embroidered Driftline Patterned Oversized Drop Shoulder Cuban Shirt in Ochre",
    "slug": "embroidered-driftline-patterned-oversized-drop-shoulder-cuban-shirt-in-ochre",
    "price": 1800,
    "regularPrice": 2070,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/05/hf_20260728_101530_b646a3d1-cb22-4412-b0cf-d8fc568d5a6c-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4894-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4899-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4861-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4863-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4862-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4893-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4870-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4865-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4867-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4866-copy.jpg"
    ],
    "categories": [
      "Cubans",
      "Cubans"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXL"
    ],
    "description": "Measurements of Oversized Cubans (In Inches): XS : Length-25| Chest- 40 | Sleeve length- 9.5 S : Length-26 | Chest- 42 | Sleeve length- 10 M : Length- 27 | Chest- 44 | Sleeve length- 10.5 L : Length- 28| Chest- 48 | Sleeve length- 11 XL : Length- 29| Chest- 50 | Sleeve length- 11.5 XXL : Length- 30 | Chest- 52 | Sleeve length- 12",
    "sku": "CSEOO",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "190058",
    "name": "Embroidered Driftline Patterned Oversized Drop Shoulder Cuban Shirt in Olive",
    "slug": "embroidered-driftline-patterned-oversized-drop-shoulder-cuban-shirt-in-olive",
    "price": 1800,
    "regularPrice": 2070,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/05/hf_20260728_101158_c24f7365-9501-4147-b9cc-20810abbfce6-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4845-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4849-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4809-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4813-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4811-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4848-copy-web.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4819-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4815-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4817-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC4816-copy.jpg"
    ],
    "categories": [
      "Cubans",
      "Cubans"
    ],
    "sizes": [
      "L",
      "M",
      "S",
      "XL",
      "XS",
      "XXL"
    ],
    "description": "Measurements of Oversized Cubans (In Inches): XS : Length-25| Chest- 40 | Sleeve length- 9.5 S : Length-26 | Chest- 42 | Sleeve length- 10 M : Length- 27 | Chest- 44 | Sleeve length- 10.5 L : Length- 28| Chest- 48 | Sleeve length- 11 XL : Length- 29| Chest- 50 | Sleeve length- 11.5 XXL : Length- 30 | Chest- 52 | Sleeve length- 12",
    "sku": "CSEOG",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "178911",
    "name": "Men\u2019s Light Grey Classic Pleated Gurkha Pants with New Belt",
    "slug": "mens-light-grey-classic-pleated-gurkha-pants-with-new-belt",
    "price": 1800,
    "regularPrice": 2070,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC0149-copy2.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC0148-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC0152-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC0160-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC0156-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC0149-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC0154-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/08/DSC0161-copy.jpg"
    ],
    "categories": [
      "Formal Pants",
      "Pants"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements for Men\u2019s Straight Fit Gurkha (in inches): S : Length- 38 | Waist- 30 | Hip- 38 M : Length- 39 | Waist- 32 | Hip- 40 L : Length- 40 | Waist- 34 | Hip- 42 XL : Length- 41 | Waist- 36 | Hip- 44 XXL : Length- 42 | Waist- 38 | Hip- 46",
    "sku": "PPAM5",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": true
  },
  {
    "id": "178478",
    "name": "Men's Baggy Cord Pants in Off-White",
    "slug": "mens-baggy-cord-pants-in-off-white",
    "price": 1400,
    "regularPrice": 1609,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/07/DSC4495-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/07/DSC4511-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/07/DSC4494-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/07/DSC4493-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/07/DSC4496-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/07/DSC4501-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/07/DSC4507-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/07/DSC4513-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/07/DSC4505-copy.jpg"
    ],
    "categories": [
      "Cord Pants",
      "Pants"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements (in inches): S : Length- 38 | Waist- 30 | Hip- 39 | Thigh- 26 | Leg Opening- 19 M : Length- 39 | Waist- 32 | Hip- 41 | Thigh- 27 | Leg Opening- 20 L : Length- 40 | Waist- 34 | Hip- 43 | Thigh- 28 | Leg Opening- 21 XL : Length- 41 | Waist- 36 | Hip- 45 | Thigh- 29 | Leg Opening- 22 XXL : Length- 42 | Waist- 38 | Hip- 47 | Thigh- 30 | Leg Opening- 23",
    "sku": "PC2RW",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  },
  {
    "id": "178472",
    "name": "Men's Baggy Cord Pants in Brown",
    "slug": "mens-baggy-cord-pants-in-brown",
    "price": 1400,
    "regularPrice": 1609,
    "onSale": false,
    "images": [
      "https://gorurghash.com/wp-content/uploads/2025/07/DSC4471-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/07/DSC4477-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/07/DSC4468-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/07/DSC4470-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/07/DSC4472-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/07/DSC4486-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/07/DSC4474-copy.jpg",
      "https://gorurghash.com/wp-content/uploads/2025/07/DSC4487-copy.jpg"
    ],
    "categories": [
      "Cord Pants",
      "Pants"
    ],
    "sizes": [
      "Double Extra Large",
      "Extra Large",
      "Large",
      "Medium",
      "Small"
    ],
    "description": "Measurements (in inches): S : Length- 38 | Waist- 30 | Hip- 39 | Thigh- 26 | Leg Opening- 19 M : Length- 39 | Waist- 32 | Hip- 41 | Thigh- 27 | Leg Opening- 20 L : Length- 40 | Waist- 34 | Hip- 43 | Thigh- 28 | Leg Opening- 21 XL : Length- 41 | Waist- 36 | Hip- 45 | Thigh- 29 | Leg Opening- 22 XXL : Length- 42 | Waist- 38 | Hip- 47 | Thigh- 30 | Leg Opening- 23",
    "sku": "PC2RH",
    "inStock": true,
    "rating": 0.0,
    "reviewCount": 12,
    "isNew": false,
    "isBestSeller": false
  }
];
