export const projects = [
  {
    id: "gocart",
    title: "GoCart",
    subtitle: "Multi-Vendor E-Commerce Platform",
    description:
      "A production-ready multi-vendor E-commerce platform featuring three independent experiences — Customer Storefront, Seller Dashboard, and Admin Dashboard — built on a shared Prisma/PostgreSQL backend with role-based authentication, subscriptions, payments, and real-time business management.",

    tech: [
      {
        name: "Next.js",
        dotColor: "bg-black",
      },
      {
        name: "TypeScript",
        dotColor: "bg-blue-600",
      },
      {
        name: "Redux Toolkit",
        dotColor: "bg-purple-600",
      },
      {
        name: "Prisma",
        dotColor: "bg-slate-800",
      },
      {
        name: "PostgreSQL",
        dotColor: "bg-blue-700",
      },
      {
        name: "Clerk",
        dotColor: "bg-violet-500",
      },
      {
        name: "Stripe",
        dotColor: "bg-indigo-600",
      },
      {
        name: "Tailwind CSS",
        dotColor: "bg-cyan-400",
      },
      {
        name: "Inngest",
        dotColor: "bg-pink-500",
      },
      {
        name: "Recharts",
        dotColor: "bg-orange-500",
      },
    ],

    features: [
      "Customer storefront with product browsing, search, cart, wishlist, reviews, and multi-address checkout.",
      "Seller dashboard for managing products, inventory, orders, customer reviews, sales analytics, and order status updates.",
      "Admin dashboard with complete platform oversight, seller approval/suspension, coupons management(add/delete), revenue analytics, and interactive charts.",
      "Stripe Checkout integration with webhook handling alongside a Cash-on-Delivery payment option.",
      "Monthly and yearly subscription plans that unlock exclusive coupons and free shipping.",
      "Dark & Light mode with a fully responsive UI across all dashboards and storefront.",
    ],

    responsibilities: [
      "Built customer-facing features including cart, wishlist, checkout, product ratings, reviews, and address management.",
      "Implemented five Redux Toolkit slices (cart, wishlist, product, address, rating) with a debounced cart synchronization thunk.",
      "Integrated Clerk authentication with role-based access control for customers, sellers, and administrators.",
      "Designed and implemented seller workflows for product management, order fulfillment, sales tracking, and review monitoring.",
      "Developed the admin dashboard including seller approval, seller suspension, coupon management, platform analytics, and revenue reporting.",
      "Modeled a 9-model Prisma schema and implemented background jobs using Inngest for user synchronization and automatic coupon expiration.",
    ],

    challenges:
      "Designing a scalable order architecture where a single customer checkout could contain products from multiple sellers while allowing each seller to independently manage only their own orders, sales, and customer reviews without exposing data from other stores.",

    solutions:
      "Split each checkout into seller-specific order groups linked to one parent order. This allowed every seller to receive only the items belonging to their store, independently update order statuses, calculate accurate sales metrics, and access reviews for their own fulfilled orders. Combined with centralized Redux state management and a debounced cart-sync strategy, this kept client and server data synchronized while minimizing unnecessary API requests.",

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
    id: "quickstay",
    title: "Quick Stay",
    subtitle: "Hotel Booking Platform",

    description:
      "A modern hotel booking platform that streamlines the entire reservation experience, featuring a guest-facing booking system and a dedicated hotel-owner dashboard for managing properties, rooms, bookings, and revenue.",

    tech: [
      {
        name: "React",
        dotColor: "bg-sky-500",
      },
      {
        name: "TypeScript",
        dotColor: "bg-blue-600",
      },
      {
        name: "Context API",
        dotColor: "bg-cyan-500",
      },
      {
        name: "Axios",
        dotColor: "bg-purple-500",
      },
      {
        name: "Clerk",
        dotColor: "bg-violet-500",
      },
      {
        name: "Stripe",
        dotColor: "bg-indigo-600",
      },
      {
        name: "Tailwind CSS",
        dotColor: "bg-cyan-400",
      },
    ],

    features: [
      "Search hotels by city with filtering, sorting, and real-time room availability.",
      "Complete booking flow with Stripe payments or Pay-at-Hotel checkout.",
      "Hotel owner dashboard for registering hotels, managing rooms, uploading images, and tracking reservations.",
      "Booking history and reservation management for authenticated users.",
      "Revenue and booking statistics for hotel owners.",
      "Protected routes with Clerk authentication and role-based access.",
    ],

    responsibilities: [
      "Developed the complete guest-facing experience including hotel discovery, filtering, booking, and payment flows.",
      "Built the hotel-owner dashboard for property management, room creation, booking monitoring, and revenue tracking.",
      "Integrated Clerk authentication with protected routes and role-based access control.",
      "Connected the frontend to REST APIs using Axios with reusable request handling and consistent loading/error states.",
      "Implemented image uploads, booking validation, and payment integration using Stripe.",
    ],

    challenges:
      "Keeping hotel availability, booking information, and owner dashboards synchronized while providing a responsive user experience during multiple asynchronous API requests.",

    solutions:
      "Centralized shared application state with Context API, standardized API communication through reusable Axios utilities, and implemented consistent loading/error handling to keep booking, availability, and dashboard data synchronized across the application.",

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
      {
        name: "Next.js",
        dotColor: "bg-black",
      },
      {
        name: "TypeScript",
        dotColor: "bg-blue-600",
      },
      {
        name: "Tailwind CSS",
        dotColor: "bg-cyan-400",
      },
      {
        name: "Framer Motion",
        dotColor: "bg-pink-500",
      },
      {
        name: "Lucide",
        dotColor: "bg-orange-400",
      },
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

    mockUrl: "https://your-portfolio.vercel.app",

    images: [
      "/images/p-home.png",
      "/images/p-projects.png",
      "/images/p-about.png",
      "/images/p-tech.png",
    ],
  },
  {
    id: "bookshop",
    title: "Bookshop",
    subtitle: "Online Book Store",

    description:
      "A production-style online bookstore built with Next.js and connected to a real Laravel REST API. The application emphasizes performance, scalability, and maintainability through feature-based architecture, efficient server-state management, and modern frontend optimization techniques.",

    tech: [
      {
        name: "Next.js",
        dotColor: "bg-black",
      },
      {
        name: "TypeScript",
        dotColor: "bg-[#3178C6]",
      },
      {
        name: "TanStack Query",
        dotColor: "bg-[#FF4154]",
      },
      {
        name: "Tailwind CSS",
        dotColor: "bg-[#06B6D4]",
      },
    ],

    features: [
      "Book discovery with category filtering, search, sorting, and server-side pagination.",
      "Cart, wishlist, and secure authentication using token-based authorization.",
      "Checkout flow with optimized server-state synchronization and automatic cache updates.",
      "Performance-focused UI with loading skeletons, error boundaries, and empty states.",
      "Responsive design optimized for desktop, tablet, and mobile devices.",
    ],

    responsibilities: [
      "Designed a feature-based architecture that separated API services, TanStack Query hooks, business logic, and UI components for better scalability and maintainability.",
      "Implemented TanStack Query for server-state management, including intelligent caching, background refetching, query invalidation, and optimistic UI updates.",
      "Built product search, category filtering, sorting, and paginated browsing while minimizing unnecessary network requests.",
      "Optimized rendering performance using React.memo, useMemo, and useCallback to reduce unnecessary component re-renders.",
      "Implemented reusable loading, error, and empty-state components to provide a smooth user experience throughout the application.",
      "Integrated the frontend with a real Laravel REST API and implemented secure authentication, cart, wishlist, and checkout flows.",
    ],

    challenges:
      "Balancing performance with a dynamic shopping experience while working with a real backend that served frequently changing product data, filters, pagination, and authenticated user actions.",

    solutions:
      "Leveraged TanStack Query to cache server data, avoid duplicate requests, and selectively invalidate queries after mutations. Combined memoization techniques (React.memo, useMemo, and useCallback) with efficient pagination and filtering strategies to reduce unnecessary renders and improve overall responsiveness while maintaining data consistency.",

    tag: "Frontend",

    githubUrl: "https://github.com/Ahmed-Idrisx/book-store",

    mockUrl: "https://book-store-two-gules.vercel.app/",
    images: [
      "/images/bs-home.png",
      "/images/bs-books.png",
      "/images/bs-best-seller.png",
    ],
  },
];
