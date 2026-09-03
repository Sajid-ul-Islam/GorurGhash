export interface DivisionDistricts {
  division: string;
  districts: string[];
}

export const BANGLADESH_DIVISIONS: DivisionDistricts[] = [
  {
    division: 'Dhaka',
    districts: [
      'Dhaka City',
      'Gazipur',
      'Narayanganj',
      'Tangail',
      'Narsingdi',
      'Faridpur',
      'Manikganj',
      'Munshiganj',
      'Kishoreganj',
      'Gopalganj',
      'Madaripur',
      'Rajbari',
      'Shariatpur',
    ],
  },
  {
    division: 'Chittagong',
    districts: [
      'Chittagong City',
      "Cox's Bazar",
      'Cumilla',
      'Feni',
      'Brahmanbaria',
      'Noakhali',
      'Chandpur',
      'Lakshmipur',
      'Rangamati',
      'Khagrachhari',
      'Bandarban',
    ],
  },
  {
    division: 'Sylhet',
    districts: ['Sylhet City', 'Moulvibazar', 'Habiganj', 'Sunamganj'],
  },
  {
    division: 'Rajshahi',
    districts: [
      'Rajshahi City',
      'Bogra',
      'Pabna',
      'Sirajganj',
      'Naogaon',
      'Natore',
      'Chapai Nawabganj',
      'Joypurhat',
    ],
  },
  {
    division: 'Khulna',
    districts: [
      'Khulna City',
      'Jessore',
      'Kushtia',
      'Satkhira',
      'Bagerhat',
      'Jhenaidah',
      'Chuadanga',
      'Magura',
      'Meherpur',
      'Narail',
    ],
  },
  {
    division: 'Barisal',
    districts: ['Barisal City', 'Patuakhali', 'Bhola', 'Pirojpur', 'Barguna', 'Jhalokati'],
  },
  {
    division: 'Rangpur',
    districts: [
      'Rangpur City',
      'Dinajpur',
      'Gaibandha',
      'Kurigram',
      'Lalmonirhat',
      'Nilphamari',
      'Panchagarh',
      'Thakurgaon',
    ],
  },
  {
    division: 'Mymensingh',
    districts: ['Mymensingh City', 'Jamalpur', 'Netrokona', 'Sherpur'],
  },
];

export const DELIVERY_FEES = {
  INSIDE_DHAKA: 70, // BDT
  OUTSIDE_DHAKA: 130, // BDT
  EXPRESS_DHAKA: 150, // BDT (Same day / 24h)
  FREE_SHIPPING_THRESHOLD: 3000, // BDT
};

export const getDeliveryFee = (district: string, subtotal: number): number => {
  if (subtotal >= DELIVERY_FEES.FREE_SHIPPING_THRESHOLD) {
    return 0;
  }
  const isDhaka = district.toLowerCase().includes('dhaka');
  return isDhaka ? DELIVERY_FEES.INSIDE_DHAKA : DELIVERY_FEES.OUTSIDE_DHAKA;
};
