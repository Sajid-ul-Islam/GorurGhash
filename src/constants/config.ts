export const AppConfig = {
  appName: 'Gorur Ghash',
  appTagline: 'Bold Design with a Sense of Humor',
  currency: '৳',
  currencyCode: 'BDT',
  version: '1.0.0',
  useRealBackend: false, // Set to true when live backend is connected
  
  contact: {
    helpline1: '+880 1339913140',
    helpline2: '01713-222653',
    supportHours: 'Saturday to Thursday — 10:00 AM to 7:00 PM',
    email: 'info@gorurghash.com',
    whatsapp: '+8801339913140',
    mainOffice: '11 Badaldi Main Road, Baunia, Turag, Dhaka 1230',
    uttaraOffice: 'House 57, Road 3, Sector 5, Uttara, Dhaka 1230',
    tradeLicense: '20733',
    tin: '004255476-0102',
    facebookUrl: 'https://www.facebook.com/gorurghash',
    instagramUrl: 'https://www.instagram.com/gorurghash/?hl=en',
  },

  couriers: [
    {
      id: 'steadfast',
      name: 'Steadfast Courier (Regular)',
      estimatedDelivery: '1-2 days (Dhaka), 3-5 days (Outside)',
      cost: 70,
      isInsideDhaka: true,
    },
    {
      id: 'pathao_parcel',
      name: 'Pathao Express Parcel',
      estimatedDelivery: 'Same-day or next-day',
      cost: 150,
      isInsideDhaka: true,
    },
    {
      id: 'redx',
      name: 'RedX Delivery (Nationwide)',
      estimatedDelivery: '3-5 days',
      cost: 130,
      isInsideDhaka: false,
    },
  ],

  policies: {
    exchangeWindowHours: 48,
    trialOnSpot: true,
  },
};
