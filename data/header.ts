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
        title: "Identity & Access Management (IAM)",
        description:
          "Components to manage users, groups, roles, permissions, and more.",
        href: "/iam",
        icon: BsShieldLock,
        children: [],
      },
      {
        title: "Subscriptions",
        description: "Subscription management and billing.",
        href: "#",
        icon: FaMoneyCheck,
        children: [],
      },
      {
        title: "Email Automation Tool",
        description: "Automate your email marketing.",
        href: "#",
        icon: BsSend,
        children: [],
      },
      {
        title: "Event & Data Pipeline",
        description:
          "Event-driven architecture for processing and reacting to events.",
        href: "#",
        icon: BsDatabase,
        children: [],
      },
      {
        title: "DevOps Automation",
        description:
          "Automate your DevOps workflows with CI/CD pipelines, deployments, and more.",
        href: "#",
        icon: FaServer,
        children: [],
      },
      {
        title: "Open Source",
        description:
          "Open source components for building your own applications.",
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
          "Learn about our products, features, and how to get started.",
        href: "#",
        icon: IoSchoolOutline,
        children: [],
      },
      {
        title: "Blog",
        description: "Blog posts, articles, and more.",
        href: "#",
        icon: BsBookmarks,
        children: [],
      },
      {
        title: "Tutorials",
        description: "Tutorial videos and guides.",
        href: "#",
        icon: FaLaptopCode,
        children: [],
      },
      {
        title: "Integrations",
        description:
          "Integrate with third-party services like Stripe, Twilio, and more.",
        href: "#",
        icon: FiGrid,
        children: [],
      },
      {
        title: "Customers",
        description: "Customer stories and testimonials.",
        href: "#",
        icon: BsHeart,
        children: [],
      },
      {
        title: "Discussion",
        description:
          "Interact with other users and our team in our community discussion forums.",
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
