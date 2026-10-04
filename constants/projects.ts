import type { Project } from "@/types";
import { TECH_COLORS } from "./techColors";

const tech = (name: string) => ({
  name,
  color: TECH_COLORS[name] ?? "#94a3b8",
});

export const projects: Project[] = [
  {
    id: "gocart",
    title: "GoCart",
    subtitle: "Multi-Vendor E-Commerce Platform",
    description:
      "Built a multi-vendor marketplace with three role-specific portals — Customer Storefront, Seller Dashboard, and Admin Dashboard — delivering 15+ e-commerce workflows, including product discovery, multi-step checkout, Stripe payments, and dynamic coupons. Optimized for Lighthouse scores above 95 across performance, accessibility, best practices, and SEO.",

    tech: [
      tech("Next.js"),
      tech("TypeScript"),
      tech("Redux Toolkit"),
      tech("Prisma"),
      tech("PostgreSQL"),
      tech("Stripe"),
      tech("Tailwind CSS"),
      tech("React"),
      tech("React Hook Form"),
      tech("Zod"),
    ],

    features: [
      "Three role-specific portals for customers, sellers, and administrators.",
      "15+ workflows covering product discovery, cart, multi-step checkout, ratings, and multi-address management.",
      "Secure Stripe payment integration and a dynamic coupon engine.",
      "Seller tools for managing products, inventory, orders, and sales.",
      "Admin tools for platform oversight, seller management, coupons, and revenue analytics.",
    ],

    responsibilities: [
      "Implemented five Redux Toolkit slices to manage cart, wishlist, products, addresses, and ratings.",
      "Built structured, validated forms using React Hook Form and Zod.",
      "Developed the customer, seller, and admin experiences and their role-specific commerce workflows.",
      "Integrated Stripe payments and implemented checkout, coupon, and multi-address flows.",
      "Optimized payload delivery and server-side rendering to achieve Lighthouse scores above 95 across performance, accessibility, best practices, and SEO.",
    ],

    challenges:
      "Supporting complex multi-vendor shopping and checkout workflows across customer, seller, and admin portals while keeping state and order handling reliable.",

    solutions:
      "Separated the application into role-specific portals, organized client state into five Redux Toolkit slices, and used structured form validation to support maintainable commerce flows. Optimized payload delivery and server rendering to improve performance and SEO.",

    tag: "Full Stack",
    githubUrl:
      "https://github.com/Ahmed-Idrisx/go-cart-multi-vendors-e-commerce-app",
    mockUrl: "https://go-cart-multi-vendors-e-commerce-ap.vercel.app/",
    images: [
      "/images/gc-home.png",
      "/images/gc-cart.png",
      "/images/gc-add-coupons.png",
      "/images/gc-dashboard.png",
    ],
  },
  {
    id: "nuzul",
    title: "Nuzul",
    subtitle: "Hotel Booking Platform (MVP)",
    description:
      "Built a production-ready hotel booking MVP with 10+ core features spanning hotel discovery, search and filtering, and guest booking workflows. The platform has served 500+ visitors to date and provides hotel owners with a dashboard for managing rooms, availability, bookings, and operations.",

    tech: [
      tech("Next.js"),
      tech("TypeScript"),
      tech("TanStack Query"),
      tech("Tailwind CSS"),
      tech("React Hook Form"),
      tech("Zod"),
      tech("Recharts"),
    ],

    features: [
      "10+ core booking platform features, including hotel discovery, search, filtering, and guest booking workflows.",
      "Served 500+ visitors to date.",
      "Hotel-owner dashboard for managing rooms, availability, bookings, and hotel operations.",
      "Interactive revenue and room analytics visualized with Recharts.",
      "Responsive and accessible interface with production-grade loading and error states.",
      "Optimistic updates and validated forms for reliable user interactions.",
    ],

    responsibilities: [
      "Built hotel discovery, search and filtering, and guest booking workflows.",
      "Developed the hotel-owner dashboard for room, availability, booking, and operations management.",
      "Visualized revenue and room analytics through interactive Recharts dashboards.",
      "Engineered data fetching with TanStack Query, strategic caching, and query invalidation.",
      "Optimized images and lazy-loaded content; implemented optimistic updates and accessible responsive UI patterns.",
      "Achieved Lighthouse scores above 95 for performance, accessibility, and best practices.",
    ],

    challenges:
      "Keeping hotel availability and booking data consistent while making discovery and owner-management interactions feel fast and responsive.",

    solutions:
      "Used TanStack Query caching and targeted invalidation to keep server data synchronized, then combined optimized fetching, image optimization, lazy loading, and optimistic updates for responsive interactions.",

    tag: "Frontend",
    githubUrl: "https://github.com/Ahmed-Idrisx/hotel-booking",
    mockUrl: "https://quick-stay-delta-liard.vercel.app/",
    images: [
      "/images/qs-home.png",
      "/images/qs-hotels.png",
      "/images/qs-dashboard.png",
      "/images/qs-add-room.png",
    ],
  },
  {
    id: "portfolio",
    title: "Portfolio",
    subtitle: "Personal Portfolio & Developer Showcase",
    description:
      "A modern developer portfolio designed to showcase projects, technical skills, and professional experience through immersive animations, smooth interactions, and performance-focused architecture.",

    tech: [
      tech("Next.js"),
      tech("TypeScript"),
      tech("Tailwind CSS"),
      tech("Framer Motion"),
      tech("Lucide"),
    ],

    features: [
      "Fully responsive design optimized for desktop, tablet, and mobile devices.",
      "Interactive hero section with cinematic animations and custom transitions.",
      "Smooth scrolling navigation with active section tracking.",
      "Animated skills and technology showcase.",
      "Project gallery with detailed case studies and image previews.",
      "Contact form integration with email delivery support.",
    ],

    responsibilities: [
      "Designed and implemented the complete UI and user experience from scratch.",
      "Built reusable and scalable components using a modular architecture.",
      "Created custom animations, loading screens, and interactive effects.",
      "Optimized rendering performance and reduced unnecessary re-renders.",
      "Implemented smooth navigation, scroll progress tracking, and section highlighting.",
      "Integrated email functionality for direct communication.",
    ],

    challenges:
      "Balancing rich animations and visual effects with performance and responsiveness across different devices and screen sizes.",

    solutions:
      "Used component-level optimization techniques, minimized unnecessary renders, and carefully orchestrated animations to maintain smooth interactions while preserving performance.",

    tag: "Frontend",
    githubUrl: "https://github.com/Ahmed-Idrisx/portfolio",
    mockUrl: "https://portfolio-navy-beta-08p8yyku08.vercel.app/",
    images: [
      "/images/p-home.png",
      "/images/p-projects.png",
      "/images/p-about.png",
      "/images/p-tech.png",
    ],
  },
  {
    id: "eraasoft",
    title: "Eraasoft",
    subtitle: "Education Platform",
    description:
      "Recreated Eraasoft’s official education platform as a responsive Arabic-language experience, translating UI designs and business requirements into reusable frontend components and API-driven flows. Load-tested the platform with Grafana k6 at 300+ concurrent users and achieved a 95 Lighthouse score through ongoing performance optimization.",

    tech: [
      tech("Next.js"),
      tech("TypeScript"),
      tech("TanStack Query"),
      tech("Tailwind CSS"),
      tech("React Hook Form"),
      tech("Zod"),
      tech("Grafana k6"),
    ],

    features: [
      "Responsive Arabic-language UI based on Eraasoft’s official platform.",
      "REST API integration, authentication, validated forms, and dynamic data flows.",
      "Load-tested the platform with Grafana k6 at 300+ concurrent users.",
      "Achieved a 95 Lighthouse score through continuous performance optimization and automated testing.",
    ],

    responsibilities: [
      "Recreated the platform UI and implemented reusable frontend components.",
      "Integrated REST APIs, authentication, form validation, and dynamic data flows.",
      "Improved Core Web Vitals through image optimization, code splitting, lazy loading, and efficient data fetching.",
      "Load-tested the platform with Grafana k6 under 300+ concurrent users.",
      "Achieved a 95 Lighthouse score through continuous performance optimization and automated testing.",
    ],

    challenges:
      "Recreating a responsive Arabic-language education platform while maintaining strong performance under high concurrent traffic.",

    solutions:
      "Combined reusable components and efficient API data fetching with image optimization, code splitting, and lazy loading. Validated performance through automated Lighthouse checks and Grafana k6 load tests.",

    tag: "Frontend",
    githubUrl: "https://github.com/Ahmed-Idrisx/eraasoft",
    mockUrl: "https://eraasoft.vercel.app/",
    images: [
      "/images/es-home.png",
      "/images/es-courses.png",
      "/images/es-free-courses.png",
      "/images/es-art.png",
    ],
  },
];
