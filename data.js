import placeholder from "./src/assets/gravel.avif";
import logo from "./src/assets/png/Atom logo final.png";
import sliderOne from "./src/assets/slider-1.jpg";
import sliderTwo from "./src/assets/slider-2.jpeg";
import sliderThree from "./src/assets/slider-3.jpg";
import sliderFour from "./src/assets/slider-4.jpg";
import lawyerOne from "./src/assets/lawyer-1.jpg";
import lawyerTwo from "./src/assets/lawyer-2.jpg";
import { Award, Briefcase, Building, Fuel, Gavel, Handshake, Heart, Pickaxe, Scale, ScrollText, Shield, Ship, Users, Zap } from "lucide-react";

export const assets = {
  placeholder,
  logo,
  sliderOne,
};

export const sliderAssets = [
  { src: sliderOne, alt: "image one" },
  { src: sliderTwo, alt: "image two" },
  { src: sliderThree, alt: "image three" },
  { src: sliderFour, alt: "image four" },
];

export const team = [
  {
    name: "David Morrison",
    title: "Managing Partner",
    specialties: ["Business Law", "Civil Litigation"],
    experience: "28 years",
    education: "Harvard Law School",
    image: lawyerOne,
  },
  {
    name: "Sarah Chen",
    title: "Senior Partner",
    specialties: ["Family Law", "Estate Planning"],
    experience: "22 years",
    education: "Stanford Law School",
    image: lawyerTwo,
  },
  {
    name: "Michael Rodriguez",
    title: "Partner",
    specialties: ["Criminal Defense", "Personal Injury"],
    experience: "18 years",
    education: "Columbia Law School",
    image: lawyerOne,
  },
];

export const services = [
  {
    icon: Handshake,
    title: "Deal & Transaction Advisory",
    description:
      "Structuring, negotiation, and execution of complex deals—from joint ventures and production sharing agreements to asset acquisitions and EPC contracts.",
  },
  {
    icon: Scale,
    title: "Regulatory Compliance",
    description:
      "End-to-end support in securing and maintaining licences, permits, and regulatory approvals. We help clients stay ahead of evolving rules and mitigate non-compliance risks.",
  },
  {
    icon: ScrollText,
    title: "Policy & Legislative Advisory",
    description:
      "We support public and private sector clients in shaping, interpreting, and implementing laws, regulations, and policies impacting the energy ecosystem.",
  },
  {
    icon: Gavel,
    title: "Dispute Resolution & Risk Management",
    description:
      "We help clients resolve disputes efficiently—through litigation, arbitration, or alternative dispute resolution—especially in high-stakes energy and infrastructure contexts.",
  },
  {
    icon: Briefcase,
    title: "General Counsel Support",
    description:
      "Retainer services for energy companies without full in-house legal teams, offering embedded advisory tailored to your operations and regulatory landscape.",
  },
];

export const sectors = [
  {
    icon: Fuel,
    title: "Oil & Gas",
    description:
      "From licensing rounds and gas commercialisation to pipeline regulation and downstream compliance, we advise across upstream, midstream, and downstream oil and gas operations.",
  },
  {
    icon: Zap,
    title: "Power",
    description:
      "We provide legal support across generation, transmission, and distribution—from embedded power projects to off-grid renewable energy solutions and energy transition frameworks.",
  },
  {
    icon: Pickaxe,
    title: "Mining & Extractives",
    description:
      "Advising operators, investors, and regulators in solid minerals, quarrying, and critical minerals development, with a focus on sustainable resource governance.",
  },
  {
    icon: Ship,
    title: "Maritime & Shipping",
    description:
      "Our maritime practice covers vessel registration, cabotage, port operations, logistics, and marine dispute resolution within the petroleum supply chain.",
  },
];
