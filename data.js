import placeholder from "./src/assets/gravel.avif";
import logo from "./src/assets/png/Atom logo final.png";
import sliderOne from "./src/assets/slider-1.jpg";
import sliderTwo from "./src/assets/slider-2.jpeg";
import sliderThree from "./src/assets/slider-3.jpg";
import sliderFour from "./src/assets/slider-4.jpg";
import lawyerOne from "./src/assets/lawyer-1.jpg";
import lawyerTwo from "./src/assets/lawyer-2.jpg";
import { Award, Building, Gavel, Heart, Shield, Users } from "lucide-react";

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
    icon: Award,
    title: "Energy",
    description:
      "Our lawyers provide end-to-end legal support in Nigeria’s energy sector—oil & gas (upstream, midstream, and downstream), power generation, renewables, and energy transition.",
    features: [
      "Oil & Gas Contracts",
      "Power Purchase Agreements",
      "Licensing & Compliance",
      "Energy Sector M&A",
    ],
  },
  {
    icon: Building,
    title: "Corporate & Commercial Advisory",
    description:
      "We advise on corporate structuring, business formation, commercial transactions, contract drafting and negotiation, joint ventures, mergers & acquisitions, and regulatory compliance.",
    features: [
      "Business Incorporation",
      "Joint Ventures",
      "Shareholder Agreements",
      "Regulatory Compliance",
    ],
  },
  {
    icon: Users,
    title: "Regulatory & Public Policy Advisory",
    description:
      "With strong policy insight, we advise clients on government relations, legislative compliance, licensing, and engagement with public institutions and regulators.",
    features: [
      "Licensing & Permits",
      "Legislative Monitoring",
      "Government Relations",
      "Regulatory Due Diligence",
    ],
  },
  {
    icon: Gavel,
    title: "Dispute Resolution",
    description:
      "We offer robust representation in litigation, arbitration, and alternative dispute resolution (ADR), helping clients achieve favorable outcomes in commercial, regulatory, and sector-specific disputes.",
    features: [
      "Commercial Litigation",
      "Arbitration",
      "Mediation & ADR",
      "Enforcement of Judgments",
    ],
  },
  {
    icon: Shield,
    title: "Deal Structuring & Transaction Support",
    description:
      "Our team provides legal support for project finance, private equity, infrastructure development, and cross-border investments, ensuring risk mitigation and regulatory alignment at every stage of a deal.",
    features: [
      "Project Finance Agreements",
      "Risk Assessment",
      "Regulatory Approvals",
      "Private Equity Transactions",
    ],
  },
  {
    icon: Heart,
    title: "Maritime & Shipping",
    description:
      "We deliver legal solutions for shipping operations, maritime contracts, port logistics, vessel registration, marine insurance, and regulatory compliance under Nigerian and international maritime law.",
    features: [
      "Charter Party Agreements",
      "Vessel Registration",
      "Port Operations",
      "Marine Insurance Claims",
    ],
  },
  {
    icon: Gavel,
    title: "Public Sector & Policy",
    description:
      "We advise government agencies, development partners, and NGOs on regulatory reform, institutional frameworks, legislative drafting, and public-private partnerships.",
    features: [
      "Public-Private Partnerships",
      "Policy Drafting",
      "Institutional Reform",
      "Stakeholder Engagement",
    ],
  },
];

