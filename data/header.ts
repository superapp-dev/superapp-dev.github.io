import { INav } from "@/interfaces/INav";
import { BsBookmarks, BsChatDots, BsDatabase, BsHeart, BsLaptop, BsSend, BsShieldLock } from "react-icons/bs";
import { FaLaptopCode, FaMoneyCheck, FaServer } from "react-icons/fa";
import {
  FiBarChart,
  FiFileText,
  FiGrid,
  FiMousePointer,
  FiRepeat,
  FiShield,
  FiUsers
} from "react-icons/fi";
import { IoSchoolOutline } from "react-icons/io5";

export const data: INav[] = [
  {
    title: "Product",
    children: [
      {
        title: "Identity and Access Management (IAM)",
        description:
          "Danish lollipop marzipan dragée gingerbread tart wafer sweet.",
        href: "/iam",
        icon: BsShieldLock,
        children: [],
      },
      {
        title: "Subscription",
        description: "Macaroon tiramisu tart bonbon apple pie jujubes brownie.",
        href: "#",
        icon: FaMoneyCheck,
        children: [],
      },
      {
        title: "Email automation tool",
        description: "hupa chups donut caramels chocolate cake toffee.",
        href: "#",
        icon: BsSend,
        children: [],
      },
      {
        title: "Event & data pipeline",
        description:
          "Dragée jujubes brownie pastry biscuit croissant wafer halva apple.",
        href: "#",
        icon: BsDatabase,
        children: [],
      },
      {
        title: "DevOps automation",
        description:
          "Dragée jujubes brownie pastry biscuit croissant wafer halva apple.",
        href: "#",
        icon: FaServer,
        children: [],
      },
      {
        title: "Opensource",
        description:
          "Dragée jujubes brownie pastry biscuit croissant wafer halva apple.",
        href: "#",
        icon: FiUsers,
        children: [],
      },
    ],
  },
  {
    title: "Pricing",
    href: "/pricing",
    children: [],
  },
  {
    title: "Resources",
    children: [
      {
        title: "Learn",
        description:
          "Danish lollipop marzipan dragée gingerbread tart wafer sweet.",
        href: "#",
        icon: IoSchoolOutline,
        children: [],
      },
      {
        title: "Blog",
        description: "Macaroon tiramisu tart bonbon apple pie jujubes brownie.",
        href: "#",
        icon: BsBookmarks,
        children: [],
      },
      {
        title: "Tutorials",
        description: "hupa chups donut caramels chocolate cake toffee.",
        href: "#",
        icon: FaLaptopCode,
        children: [],
      },
      {
        title: "Integrations",
        description:
          "Dragée jujubes brownie pastry biscuit croissant wafer halva apple.",
        href: "#",
        icon: FiGrid,
        children: [],
      },
      {
        title: "Customers",
        description: "Candy oat cake caramels shortbread gummies.",
        href: "#",
        icon: BsHeart,
        children: [],
      },
      {
        title: "Discussion",
        description:
          "Bear claw topping toffee tiramisu cake fruitcake marzipan icing.",
        href: "#",
        icon: BsChatDots,
        children: [],
      },
    ],
  },
  {
    title: "Support",
    href: "/support",
    children: [],
  },
];
