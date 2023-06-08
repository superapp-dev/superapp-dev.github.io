import { BsFillMoonFill, BsStars } from "react-icons/bs";
import { FaAccessibleIcon, FaExpandAlt, FaPaintBrush } from "react-icons/fa";
import { IoRocketSharp } from "react-icons/io5";

export const features = [
  {
    name: "Standard Protocols",
    description: "OpenID Connect, OAuth 2.0 and SAML 2.0",
    icon: BsStars,
  },
  {
    name: "Social Login",
    description: "Easily enable social login",
    icon: IoRocketSharp,
  },
  {
    name: "LDAP and Active Directory",
    description: "Connect to existing user directories",
    icon: IoRocketSharp,
  },
  {
    name: "Centralized Management",
    description: "For admins and users",
    icon: BsFillMoonFill,
  },
  {
    name: "High Performance",
    description: "Lightweight, fast and scalable",
    icon: FaPaintBrush,
  },
  {
    name: "Clustering",
    description: "For scalability and availability",
    icon: FaExpandAlt,
  },
  {
    name: "Password Policies",
    description: "Customize password policies",
    icon: FaAccessibleIcon,
  },
];
