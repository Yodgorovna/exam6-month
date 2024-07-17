import { Home } from "../pages/Home";
import { About } from "../pages/About";
import { Shop } from "../pages/Shop";
import { ShopSingle } from "../pages/ShopSingle";
import { NotFound } from "../pages/NotFound";
import { nanoid } from "nanoid";

export const routs = [
  {
    Component: Home,
    path: "/",
    id: nanoid(),
  },
  {
    Component: About,
    path: "/about",
    id: nanoid(),
  },
  {
    Component: Shop,
    path: "/shop",
    id: nanoid(),
  },

  {
    Component: ShopSingle,
    path: "products/ShopSingle/:id",
    id: nanoid(),
  },
  {
    Component: NotFound,
    path: "*",
    id: nanoid(),
  },
];
