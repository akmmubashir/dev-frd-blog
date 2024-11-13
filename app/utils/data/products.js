import SilverStoneLogo from "@/app/assets/suppliers/silverstoneLogo.svg";
import LamborghiniUrusYellow from "@/app/assets/products/lamborghiniUrusYellow.webp";
import FerrariPortofinoRed from "@/app/assets/products/ferrariPortofinoRed.webp";
import MercedesAMGG63 from "@/app/assets/products/mercedesAMG-G63.webp";
import BMWM4CompetitionConvertible from "@/app/assets/products/bmwM4CompetitionConvertible.webp";

export const ProductsList = [
  {
    id: 1,
    name: "Lamborghini Urus",
    brand: "lamborghini",
    vehicleType: ["suv", "luxury cars", "sports cars"],
    img: LamborghiniUrusYellow,
    supplier: {
      name: "SilverStone Luxury Car Rentals",
      logo: SilverStoneLogo,
    },
    seats: 5,
    fuel: "Petrol",
    pricing: {
      day: { price: 300, oldPrice: 500, mileage: 250 },
      week: { price: 1100, oldPrice: 1500, mileage: 2100 },
      month: { price: 7200, oldPrice: 9900, mileage: 9900 },
    },
    notes: [
      { id: 1, content: "Minimum 2 days rental" },
      { id: 2, content: "Deposit AED 2000" },
      { id: 3, content: "Insurance included" },
    ],
  },
  {
    id: 2,
    name: "Ferrari Portofino",
    brand: "ferrari",
    vehicleType: ["sports cars", "luxury cars"],
    img: FerrariPortofinoRed,
    supplier: {
      name: "SilverStone Luxury Car Rentals",
      logo: SilverStoneLogo,
    },
    seats: 4,
    fuel: "Petrol",
    pricing: {
      day: { price: 300, oldPrice: 500, mileage: 250 },
      week: { price: 1100, oldPrice: 1500, mileage: 2100 },
      month: { price: 7200, oldPrice: 9900, mileage: 9900 },
    },
    notes: [
      { id: 1, content: "Minimum 2 days rental" },
      { id: 2, content: "Deposit AED 2000" },
      { id: 3, content: "Insurance included" },
    ],
  },
  {
    id: 3,
    name: "Mercedes AMG G63",
    brand: "mercedes",
    vehicleType: ["suv", "luxury cars"],
    img: MercedesAMGG63,

    supplier: {
      name: "SilverStone Luxury Car Rentals",
      logo: SilverStoneLogo,
    },
    seats: 5,
    fuel: "Petrol",
    pricing: {
      day: { price: 300, oldPrice: 500, mileage: 250 },
      week: { price: 1100, oldPrice: 1500, mileage: 2100 },
      month: { price: 7200, oldPrice: 9900, mileage: 9900 },
    },
    notes: [
      { id: 1, content: "Minimum 2 days rental" },
      { id: 2, content: "Deposit AED 2000" },
      { id: 3, content: "Insurance included" },
    ],
  },
  {
    id: 4,
    name: "BMW M4 Competition Convertible",
    // color: "Silver",
    brand: "bmw",

    vehicleType: ["convertable", "luxury cars"],
    img: BMWM4CompetitionConvertible,
    supplier: {
      name: "SilverStone Luxury Car Rentals",
      logo: SilverStoneLogo,
    },
    seats: 2,
    fuel: "Petrol",
    pricing: {
      day: { price: 300, oldPrice: 500, mileage: 250 },
      week: { price: 1100, oldPrice: 1500, mileage: 2100 },
      month: { price: 7200, oldPrice: 9900, mileage: 9900 },
    },
    notes: [
      { id: 1, content: "Minimum 2 days rental" },
      { id: 2, content: "Deposit AED 2000" },
      { id: 3, content: "Insurance included" },
    ],
  },
];
