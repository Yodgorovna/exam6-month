import { nanoid } from "nanoid";
import Products2 from "/Products2.png";
import Products3 from "/Products3.png";
import Products4 from "/Products4.png";
import Products5 from "/Products5.png";
export const offerData = [
  {
    img: Products2,
    category: "Vegetable",
    name: "Mung Bean",
    originalPrice: "$20.00",
    currentPrice: "$11.00",
    rating: "★★★★★",
    id: nanoid(),
  },
  {
    img: Products3,
    category: "Vegetable",
    name: "Brown Hazelnut",
    originalPrice: "$20.00",
    currentPrice: "$12.00",
    rating: "★★★★★",
    id: nanoid(),
  },
  {
    img: Products4,
    category: "Vegetable",
    name: "Onion",
    originalPrice: "$20.00",
    currentPrice: "$17.00",
    rating: "★★★★★",
    id: nanoid(),
  },
  {
    img: Products5,
    category: "Vegetable",
    name: "Cabbage",
    originalPrice: "$20.00",
    currentPrice: "$17.00",
    rating: "★★★★★",
    id: nanoid(),
  },
];
