type RoomConfig = {
  name: string;
  image: string;
  imageAlt?: string;
  originalPrice?: number;
  price: number;
  capacity: string;
  size: string;
  amenities: string[];
};

type BookingLink = { name: string; url: string };
type GalleryImage = { src: string; alt: string };

export type Hotel = {
  slug: string;
  name: string;
  tagline: string;
  description: string;
  location: string;
  address: string;
  rating: number;
  reviews: number;
  startingOriginalPrice?: number;
  startingPrice: number;
  priceBadge?: "Best Value" | "Limited Offer" | "Special Stay Price";
  cover: string;
  call: string;
  googleMaps: string;
  gallery: GalleryImage[];
  amenities: string[];
  rooms: RoomConfig[];
  bookingLinks: BookingLink[];

  // Legacy aliases kept to avoid route/component changes.
  phone: string;
  mapsEmbed: string;
  mapsDirections: string;
  booking: BookingLink[];
};

type HotelInput = Omit<Hotel, "phone" | "mapsDirections" | "booking">;

function createHotelConfig(input: HotelInput): Hotel {
  return {
    ...input,
    phone: input.call,
    mapsDirections: input.googleMaps,
    booking: input.bookingLinks,
  };
}

export const HOTELS: Hotel[] = [
  createHotelConfig({
    slug: "pratap-nagar-branch",
    name: "Hotel Sanraj Inn",
    tagline: "Modern comfort crafted for effortless city stays",
    description:
      "Hotel Sanraj Inn in Pratap Nagar blends warm hospitality with practical comfort for families, business travelers, and weekend guests. Spacious rooms, reliable service, and easy access to key city routes make every stay smooth and restful.",
    location: "Pratap Nagar, Jaipur",
    address: "Pratap Nagar Main Road, Jaipur, Rajasthan 302033, India",
    rating: 4.8,
    reviews: 1284,
    startingOriginalPrice: 2000,
    startingPrice: 1399,
    priceBadge: "Best Value",
    cover: "/images/pratap-nagar/hotel-front.PNG",
    call: "+917300070816",
    googleMaps: "https://maps.app.goo.gl/vjEZ5m2QTsMP9gik8",
    mapsEmbed:
      "https://www.google.com/maps?q=Hotel+Sanraj+Inn,+160/13,+Bhairav+Ji+Cir,+near+Akshay+patra+temple,+Sector+16,+Pratap+Nagar,+Bharu,+Jaipur,+Rajasthan+302033&output=embed",
    gallery: [
      {
        src: "/images/pratap-nagar/rooms/deluxe-room-1.jpeg",
        alt: "Hotel Sanraj Inn Pratap Nagar, Jaipur room interior",
      },
      {
        src: "/images/pratap-nagar/rooms/premium-room-1.jpeg",
        alt: "Hotel Sanraj Inn Pratap Nagar, Jaipur room interior",
      },
      {
        src: "/images/pratap-nagar/rooms/executive-room-1.jpeg",
        alt: "Hotel Sanraj Inn Pratap Nagar, Jaipur room interior",
      },
      {
        src: "/images/pratap-nagar/rooms/deluxe-room-2.jpeg",
        alt: "Hotel Sanraj Inn Pratap Nagar, Jaipur room interior",
      },
      {
        src: "/images/pratap-nagar/rooms/deluxe-room-3.jpeg",
        alt: "Hotel Sanraj Inn Pratap Nagar, Jaipur room interior",
      },
      {
        src: "/images/pratap-nagar/rooms/premium-room-2.jpeg",
        alt: "Hotel Sanraj Inn Pratap Nagar, Jaipur room interior",
      },
      {
        src: "/images/pratap-nagar/rooms/executive-room-2.jpeg",
        alt: "Hotel Sanraj Inn Pratap Nagar, Jaipur room interior",
      },
      {
        src: "/images/pratap-nagar/rooms/premium-room-3.jpeg",
        alt: "Hotel Sanraj Inn Pratap Nagar, Jaipur room interior",
      },
      {
        src: "/images/pratap-nagar/rooms/room-interior-1.jpeg",
        alt: "Hotel Sanraj Inn Pratap Nagar, Jaipur room interior",
      },
      {
        src: "/images/pratap-nagar/rooms/room-interior-2.jpeg",
        alt: "Hotel Sanraj Inn Pratap Nagar, Jaipur room interior",
      },
      {
        src: "/images/pratap-nagar/rooms/room-interior-3.jpeg",
        alt: "Hotel Sanraj Inn Pratap Nagar, Jaipur room interior",
      },
      {
        src: "/images/pratap-nagar/rooms/room-interior-4.jpeg",
        alt: "Hotel Sanraj Inn Pratap Nagar, Jaipur room interior",
      },
    ],
    amenities: [
      "Free High-Speed Wi-Fi",
      "Climate Control",
      "Smart TV",
      "Valet Parking",
      "Family-Friendly Rooms",
      "24/7 Room Service",
      "Round-the-Clock Security",
      "In-Room Dining",
      "Daily Housekeeping",
      "Power Backup",
    ],
    rooms: [
      {
        name: "Deluxe Room",
        image: "/images/pratap-nagar/rooms/deluxe-room-1.jpeg",
        imageAlt: "Hotel Sanraj Inn Pratap Nagar, Jaipur room interior",
        originalPrice: 2000,
        price: 1399,
        capacity: "2 Adults",
        size: "24 m²",
        amenities: ["Queen Bed", "Workspace", "Smart TV", "Hot Shower"],
      },
      {
        name: "Premium Room",
        image: "/images/pratap-nagar/rooms/premium-room-1.jpeg",
        imageAlt: "Hotel Sanraj Inn Pratap Nagar, Jaipur room interior",
        originalPrice: 2000,
        price: 1399,
        capacity: "2 Adults · 1 Child",
        size: "30 m²",
        amenities: ["King Bed", "City View", "Mini Fridge", "Fast Wi-Fi"],
      },
      {
        name: "Family Suite",
        image: "/images/pratap-nagar/rooms/executive-room-1.jpeg",
        imageAlt: "Hotel Sanraj Inn Pratap Nagar, Jaipur room interior",
        originalPrice: 2000,
        price: 1399,
        capacity: "3 Adults · 1 Child",
        size: "38 m²",
        amenities: ["Extra Seating", "Smart TV", "Wardrobe", "Room Service"],
      },
    ],
    bookingLinks: [
      {
        name: "MakeMyTrip",
        url: "https://www.makemytrip.com/hotels/hotel-details/?Campaign=&_uCurrency=INR&checkin=05202026&checkout=05212026&city=CTJAI&cmp=googlehoteldfinder_Old_DH_META_Free_RateRule%3Dmobile_usernolist_aud%3D__default_IN_mob_localuniversal_202510211214317393&country=IN&locusId=CTJAI&locusType=city&mtkeys=013cc05c-239b-45ec-8590-89aab37bc12e&rank=1&roomCount=1&roomStayQualifier=2e0e&rsc=1e2e0e&searchText=Jaipur%2C%20India&topHtlId=202510211214317393&totalGuestCount=2&hotelId=202510211214317393&isPropSearch=T",
      },
      {
        name: "Goibibo",
        url: "https://www.goibibo.com/hotels/sanraj-inn-hotel-in-jaipur-544109301314460389/",
      },
      {
        name: "Agoda",
        url: "https://www.agoda.com/en-in/hotel-sanraj-inn/hotel/jaipur-in.html?cid=1844104&ds=f9LcwFF9VmdynZcJ",
      },
    ],
  }),
  createHotelConfig({
    slug: "gurjar-ki-thadi-branch",
    name: "Hotel Sanraj Prime",
    tagline: "A connected Jaipur stay with calm interiors",
    description:
      "Hotel Sanraj Prime in Gurjar Ki Thadi is designed for travelers who value convenience and comfort. Located in a well-connected neighborhood, it offers thoughtfully designed rooms, attentive service, and an easy base for city exploration.",
    location: "Gurjar Ki Thadi, Jaipur",
    address: "Gurjar Ki Thadi, Gopalpura Bypass, Jaipur, Rajasthan 302019, India",
    rating: 4.7,
    reviews: 942,
    startingOriginalPrice: 2700,
    startingPrice: 1899,
    priceBadge: "Limited Offer",
    cover: "/images/gurjar-ki-thadi/hotel-front.PNG",
    call: "+919812345678",
    googleMaps:
      "https://www.google.com/maps/place/Hotel+Sanraj+Prime/@26.8856121,75.6901352,13z/data=!4m14!1m2!2m1!1shotel+sanraj+prime!3m10!1s0x396db5e5cda0540d:0x9d0a0f8e82f250a6!5m3!1s2026-05-21!4m1!1i2!8m2!3d26.8856121!4d75.7663529!15sChJob3RlbCBzYW5yYWogcHJpbWWSAQVob3RlbOABAA!16s%2Fg%2F11zbmzydj7!18m1!1e1?entry=ttu&g_ep=EgoyMDI2MDUxMy4wIKXMDSoASAFQAw%3D%3D",
    mapsEmbed: "https://www.google.com/maps?q=Gurjar+Ki+Thadi+Jaipur&output=embed",
    gallery: [
      {
        src: "/images/gurjar-ki-thadi/hotel-front.PNG",
        alt: "Hotel Sanraj Prime Gurjar Ki Thadi, Jaipur hotel entrance",
      },
      {
        src: "/images/gurjar-ki-thadi/IMG_6428.JPG",
        alt: "Hotel Sanraj Prime Gurjar Ki Thadi, Jaipur room interior",
      },
      {
        src: "/images/gurjar-ki-thadi/IMG_6438.JPG",
        alt: "Hotel Sanraj Prime Gurjar Ki Thadi, Jaipur room interior",
      },
      {
        src: "/images/gurjar-ki-thadi/IMG_6439.JPG",
        alt: "Hotel Sanraj Prime Gurjar Ki Thadi, Jaipur room interior",
      },
      {
        src: "/images/gurjar-ki-thadi/IMG_6440.JPG",
        alt: "Hotel Sanraj Prime Gurjar Ki Thadi, Jaipur bathroom interior",
      },
      {
        src: "/images/gurjar-ki-thadi/IMG_6445.JPG",
        alt: "Hotel Sanraj Prime Gurjar Ki Thadi, Jaipur bathroom interior",
      },
      {
        src: "/images/gurjar-ki-thadi/IMG_6457.JPG",
        alt: "Hotel Sanraj Prime Gurjar Ki Thadi, Jaipur balcony view",
      },
      {
        src: "/images/gurjar-ki-thadi/IMG_6458.JPG",
        alt: "Hotel Sanraj Prime Gurjar Ki Thadi, Jaipur room interior",
      },
      {
        src: "/images/gurjar-ki-thadi/IMG_6459.JPG",
        alt: "Hotel Sanraj Prime Gurjar Ki Thadi, Jaipur wardrobe interior",
      },
      {
        src: "/images/gurjar-ki-thadi/IMG_6505.JPG",
        alt: "Hotel Sanraj Prime Gurjar Ki Thadi, Jaipur bathroom interior",
      },
      {
        src: "/images/gurjar-ki-thadi/IMG_6511.JPG",
        alt: "Hotel Sanraj Prime Gurjar Ki Thadi, Jaipur room interior",
      },
      {
        src: "/images/gurjar-ki-thadi/IMG_6512.JPG",
        alt: "Hotel Sanraj Prime Gurjar Ki Thadi, Jaipur balcony view",
      },
      {
        src: "/images/gurjar-ki-thadi/IMG_6513.JPG",
        alt: "Hotel Sanraj Prime Gurjar Ki Thadi, Jaipur room interior",
      },
      {
        src: "/images/gurjar-ki-thadi/IMG_6514.JPG",
        alt: "Hotel Sanraj Prime Gurjar Ki Thadi, Jaipur bathroom interior",
      },
      {
        src: "/images/gurjar-ki-thadi/IMG_6515.JPG",
        alt: "Hotel Sanraj Prime Gurjar Ki Thadi, Jaipur bathroom interior",
      },
    ],
    amenities: [
      "Free High-Speed Wi-Fi",
      "Air Conditioning",
      "Secure Parking",
      "Elevator Access",
      "In-Room Dining",
      "24/7 Front Desk",
      "Daily Housekeeping",
      "Family Rooms",
      "Business-Friendly Desks",
      "CCTV Security",
    ],
    rooms: [
      {
        name: "Executive Room",
        image: "/images/gurjar-ki-thadi/IMG_6438.JPG",
        imageAlt: "Hotel Sanraj Prime Gurjar Ki Thadi, Jaipur room interior",
        originalPrice: 2700,
        price: 1899,
        capacity: "2 Adults",
        size: "26 m²",
        amenities: ["King Bed", "Workspace", "Smart TV", "Tea Maker"],
      },
      {
        name: "Super Deluxe Room",
        image: "/images/gurjar-ki-thadi/IMG_6513.JPG",
        imageAlt: "Hotel Sanraj Prime Gurjar Ki Thadi, Jaipur room interior",
        originalPrice: 2700,
        price: 1899,
        capacity: "2 Adults · 1 Child",
        size: "32 m²",
        amenities: ["King Bed", "Lounge Chair", "Fast Wi-Fi", "Mini Fridge"],
      },
      {
        name: "Family Studio",
        image: "/images/gurjar-ki-thadi/IMG_6511.JPG",
        imageAlt: "Hotel Sanraj Prime Gurjar Ki Thadi, Jaipur room interior",
        originalPrice: 2700,
        price: 1899,
        capacity: "3 Adults · 1 Child",
        size: "40 m²",
        amenities: ["Twin + Queen", "Storage", "Room Service", "Hot Shower"],
      },
    ],
    bookingLinks: [
      {
        name: "Agoda",
        url: "https://www.agoda.com/en-in/hotel-sanraj-prime/hotel/jaipur-in.html?cid=1844104&ds=XVpBN%2B6B59sCLdF6",
      },
    ],
  }),
];

export const getHotel = (slug: string) => HOTELS.find((h) => h.slug === slug);
