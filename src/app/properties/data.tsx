import { StaticImageData } from 'next/image';

// You'll need to import actual images
// import shopImage1 from '@/assets/img/properties/shop1.jpg';
// Add more imports as needed

// Property listing interface
export interface PropertyListing {
  id: string;
  name: string;
  location: string;
  price: string;
  description: string;
  features: string[];
  images: StaticImageData[] | string[]; // Use StaticImageData for imported images
  category: 'Shoplots' | 'Warehouses' | 'Lands' | 'Malls';
}

// Section content
export const propertiesSection = {
  title: 'Our Featured Commercial Properties',
  description:
    "Explore our range of commercial properties, tailored for your business growth. Whether you're seeking retail spaces, warehouses, or investment opportunities, Gyldan Properties offers premium options designed for success.",
  ctaText: 'View All Properties',
  ctaLink: '/properties',
};

// Category descriptions
export const categoryDescriptions = {
  Shoplots:
    'Premium retail spaces in high-traffic areas, ideal for businesses looking to attract customers.',
  Warehouses: 'Spacious warehouses suitable for logistics, storage, and industrial purposes.',
  Lands: 'Prime commercial land for sale or lease, perfect for development projects.',
  Malls:
    'Retail spaces within upscale malls offering great exposure and access to high-income customers.',
};

// Property listings data
export const propertyListings: PropertyListing[] = [
  // Shoplots
  {
    id: 'shop-001',
    name: 'Metro Corner Retail Space',
    location: 'Downtown Business District, Kuala Lumpur',
    price: 'RM 8,500/month',
    description:
      'Prime corner retail space located in a high-traffic area with excellent visibility and foot traffic. Perfect for retail businesses looking to establish a strong presence.',
    features: [
      '1,200 sq ft',
      'Corner lot',
      'Floor-to-ceiling windows',
      'Modern facilities',
      '24/7 security',
    ],
    images: ['/img/properties/shop1.jpg', '/img/properties/shop1-interior.jpg'],
    category: 'Shoplots',
  },
  {
    id: 'shop-002',
    name: 'Riverside Retail Complex',
    location: 'Waterfront Commercial Area, Penang',
    price: 'RM 12,000/month',
    description:
      'Spacious retail unit in the prestigious Riverside Complex, offering excellent exposure to both locals and tourists. Recently renovated with modern amenities.',
    features: [
      '1,800 sq ft',
      'Waterfront views',
      'High ceilings',
      'Ample parking',
      'Public transport access',
    ],
    images: ['/img/properties/shop2.jpg', '/img/properties/shop2-interior.jpg'],
    category: 'Shoplots',
  },

  // Warehouses
  {
    id: 'ware-001',
    name: 'Industrial Park Warehouse',
    location: 'Shah Alam Industrial Zone, Selangor',
    price: 'RM 35,000/month',
    description:
      'Large warehouse facility with excellent logistics connectivity. Suitable for manufacturing, storage, and distribution operations with easy highway access.',
    features: [
      '25,000 sq ft',
      'Loading bays',
      'High ceiling clearance',
      'Office space included',
      'CCTV security',
    ],
    images: ['/img/properties/warehouse1.jpg', '/img/properties/warehouse1-interior.jpg'],
    category: 'Warehouses',
  },
  {
    id: 'ware-002',
    name: 'Port Adjacent Storage Facility',
    location: 'Port Klang Logistics Hub, Selangor',
    price: 'RM 42,000/month',
    description:
      'Strategic warehouse located near Port Klang for efficient import/export operations. Features modern facilities and excellent security systems.',
    features: [
      '30,000 sq ft',
      'Container yard',
      'Climate control options',
      'Dock levelers',
      '24/7 operations permitted',
    ],
    images: ['/img/properties/warehouse2.jpg', '/img/properties/warehouse2-yard.jpg'],
    category: 'Warehouses',
  },

  // Lands
  {
    id: 'land-001',
    name: 'Commercial Development Plot',
    location: 'New Growth Corridor, Johor Bahru',
    price: 'RM 5,800,000',
    description:
      'Strategic commercial land in rapidly developing area with approved commercial title. Suitable for retail complex, office building, or mixed development.',
    features: [
      '2.5 acres',
      'Flat terrain',
      'Road frontage',
      'All utilities available',
      'Near upcoming MRT station',
    ],
    images: ['/img/properties/land1.jpg', '/img/properties/land1-aerial.jpg'],
    category: 'Lands',
  },
  {
    id: 'land-002',
    name: 'Highway-Facing Commercial Plot',
    location: 'Main Highway Interchange, Ipoh',
    price: 'RM 3,200,000',
    description:
      'Prime commercial land with excellent visibility from the main highway. Perfect for showrooms, retail outlets, or commercial complexes requiring high visibility.',
    features: [
      '1.8 acres',
      'Highway frontage',
      'Rectangular shape',
      'Commercial zoning approved',
      'Developed surroundings',
    ],
    images: ['/img/properties/land2.jpg', '/img/properties/land2-map.jpg'],
    category: 'Lands',
  },

  // Malls
  {
    id: 'mall-001',
    name: 'Prestige Center Retail Space',
    location: 'Luxury Shopping District, Kuala Lumpur',
    price: 'RM 28,500/month',
    description: `Premium retail unit in one of KL's most exclusive shopping destinations. Surrounded by luxury brands and attracting high-income customers daily.`,
    features: [
      '1,500 sq ft',
      'Prime location',
      'Floor-to-ceiling display windows',
      'Concierge services',
      'Valet parking',
    ],
    images: ['/img/properties/mall1.jpg', '/img/properties/mall1-interior.jpg'],
    category: 'Malls',
  },
  {
    id: 'mall-002',
    name: 'Central Mall Flagship Location',
    location: 'City Center Mall, Penang',
    price: 'RM 35,000/month',
    description:
      'Large retail space ideal for flagship stores in this popular shopping destination. Benefits from steady foot traffic and excellent brand exposure.',
    features: [
      '3,200 sq ft',
      'Corner position',
      'Double-height ceiling',
      'Storage room included',
      'Mall marketing support',
    ],
    images: ['/img/properties/mall2.jpg', '/img/properties/mall2-entrance.jpg'],
    category: 'Malls',
  },
];

// Helper functions to filter properties by category
export const getPropertiesByCategory = (category: PropertyListing['category']) => {
  return propertyListings.filter((property) => property.category === category);
};

export const shoplots = getPropertiesByCategory('Shoplots');
export const warehouses = getPropertiesByCategory('Warehouses');
export const lands = getPropertiesByCategory('Lands');
export const malls = getPropertiesByCategory('Malls');

// Get featured properties (for homepage display)
export const getFeaturedProperties = (count: number = 3) => {
  // Return a mix of properties from different categories
  return propertyListings.slice(0, count);
};
