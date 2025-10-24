const projects = [
  {
    id: 1,
    title: "Blog Platform API (On Working)",
    description:
      "Developed a backend API that mimics the core behavior of Medium.com, allowing users to register, publish articles, follow other users, and interact through likes and comments. The project focuses on building a clean, scalable RESTful architecture with secure authentication and efficient database design.",
    techStack: ["Typescript", "ExpressJS", "PostgreSQL", "Supabase", "Prisma"],
    livePreviewURl: null,
    sourceURL: "https://github.com/NgocPMT/blog-app",
  },
  {
    id: 2,
    title: "Demi Nguyen's Portfolio",
    description:
      "Built a responsive, interactive portfolio to showcase the client’s creative works and brand. Designed a pixel-perfect UI with Vanilla CSS and integrated the YouTube Player API for dynamic, customizable video playback.",
    techStack: ["Javascript", "ReactJS", "Vanilla CSS", "Youtube Player API"],
    livePreviewURl: "https://demi-nguyen.netlify.app/",
    sourceURL: "https://github.com/demi-nguyen/demi-nguyen.github.io",
  },
  {
    id: 3,
    title: "Minimal Shopee Clone",
    description:
      "Designed and developed a sleek, responsive UI with custom skeleton loaders, breadcrumbs, toasts, and modals using Tailwind CSS. Integrated the FakeStore API to fetch and manage product data efficiently, handling loading states, race conditions, and errors gracefully. Implemented real-time updates through optimized state and context management for a seamless user experience.",
    techStack: ["Typescript", "ReactJS", "TailwindCSS", "FakeStoreAPI"],
    livePreviewURl: "https://ngocpmt-shopeefy.netlify.app/",
    sourceURL: "https://github.com/NgocPMT/minimal-shopee-clone",
  },
  {
    id: 4,
    title: "Weather Forecast Web App",
    description:
      "Developed a lightweight, responsive weather forecast webpage that predicts weather conditions up to 5 days ahead. Integrated the Visual Crossing Weather API to fetch real-time data including temperature, humidity, and weather descriptions. Implemented dynamic UI updates and clean, minimal styling with Vanilla CSS for an intuitive user experience.",
    techStack: ["Javascript", "Vanilla CSS", "Visual Crossing Weather API"],
    livePreviewURl: "https://ngocpmt.github.io/js-weather-app/",
    sourceURL: "https://github.com/NgocPMT/js-weather-app",
  },
];

export default projects;
