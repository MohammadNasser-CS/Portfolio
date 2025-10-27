// ============================================
// PORTFOLIO DATA - UPDATE THIS FILE TO CHANGE YOUR PORTFOLIO CONTENT
// ============================================

// Personal Information
export const personalInfo = {
  name: "Mohammad Naser",
  title: "Full-Stack Developer",
  tagline: "Building scalable web and mobile applications",
  bio: "Computer Science graduate ranked in the top 5 of my department. I specialize in crafting high-performance, user-centric applications that solve real-world problems with clean, maintainable code.",
  photo: "/personal-image.png",
  email: "mohammad.a.naser02@gmail.com",
  location: "Tulkarm, West Bank, Palestine",
  locationDetails: "Open to remote work",
  github: "https://github.com/MohammadNasser-CS",
  linkedin: "https://www.linkedin.com/in/mohamad-naser/",
  resumeUrl: "/resume.pdf",
  availability: {
    status: "available", // "available" | "busy" | "unavailable"
    message: "Available for freelance projects",
    details: "Currently accepting new projects and open to discussing full-time opportunities.",
  },
}

// Tech Stack
export const techStack = {
  primary: [
    "Next.js",
    // "React",
    // "TypeScript",
    "Flutter",
    // "Dart",
    "FastAPI",
    "Python",
    "PostgreSQL",
    // "MongoDB",
    "Docker",
  ],
  categories: [
    {
      title: "Frontend Development",
      description: "Building responsive and performant user interfaces",
      skills: [
        { name: "Next.js / React", description: "Advanced patterns, SSR, SSG, ISR" },
        { name: "TypeScript", description: "Type-safe development" },
        { name: "Tailwind CSS", description: "Utility-first styling" },
        { name: "HTML5 / CSS3", description: "Semantic markup & modern CSS" },
        { name: "JavaScript (ES6+)", description: "Modern JS features" },
      ],
    },
    {
      title: "Mobile Development",
      description: "Cross-platform mobile applications",
      skills: [
        { name: "Flutter", description: "iOS & Android apps" },
        { name: "Dart", description: "Flutter's programming language" },
        { name: "React Native", description: "JavaScript-based mobile apps" },
        { name: "Mobile UI/UX", description: "Platform-specific design" },
      ],
    },
    {
      title: "Backend Development",
      description: "Scalable server-side applications and APIs",
      skills: [
        { name: "FastAPI", description: "High-performance Python APIs" },
        { name: "Python", description: "Backend & scripting" },
        { name: "Node.js / Express", description: "JavaScript backend" },
        { name: "REST API Design", description: "RESTful architecture" },
        { name: "GraphQL", description: "Query language for APIs" },
      ],
    },
    {
      title: "Database & Storage",
      description: "Data modeling and management",
      skills: [
        { name: "PostgreSQL", description: "Relational database" },
        { name: "MongoDB", description: "NoSQL database" },
        { name: "Redis", description: "Caching & session storage" },
        { name: "Prisma / SQLAlchemy", description: "ORMs" },
        { name: "Firebase", description: "BaaS platform" },
      ],
    },
    {
      title: "DevOps & Cloud",
      description: "Deployment and infrastructure management",
      skills: [
        { name: "Docker", description: "Containerization" },
        { name: "AWS", description: "Cloud services" },
        { name: "Vercel / Netlify", description: "Serverless deployment" },
        { name: "CI/CD", description: "GitHub Actions, GitLab CI" },
        { name: "Nginx", description: "Web server & reverse proxy" },
      ],
    },
    {
      title: "Tools & Workflow",
      description: "Development tools and practices",
      skills: [
        { name: "Git / GitHub", description: "Version control" },
        { name: "VS Code", description: "Primary IDE" },
        { name: "Postman", description: "API testing" },
        { name: "Figma", description: "Design collaboration" },
        { name: "Jira / Linear", description: "Project management" },
      ],
    },
  ],
  additional: [
    { category: "Testing", items: ["Jest", "Pytest", "Cypress", "React Testing Library"] },
    { category: "State Management", items: ["Redux", "Zustand", "Context API", "SWR"] },
    { category: "Authentication", items: ["JWT", "OAuth 2.0", "NextAuth.js", "Firebase Auth"] },
    { category: "Payment Integration", items: ["Stripe", "PayPal", "Square"] },
    { category: "Real-time", items: ["WebSocket", "Socket.io", "Server-Sent Events"] },
    { category: "Other", items: ["Microservices", "RESTful APIs", "Agile/Scrum", "Technical Writing"] },
  ],
}

// Projects
export const projects = [
  {
    title: "E-Commerce Platform",
    description: "Full-stack marketplace with real-time inventory",
    longDescription:
      "Built a comprehensive e-commerce platform with Next.js and FastAPI, featuring real-time inventory management, payment processing with Stripe, and an admin dashboard for analytics.",
    image: "/modern-ecommerce-dashboard.png",
    tags: ["Next.js", "FastAPI", "PostgreSQL", "Stripe", "Redis"],
    category: "Full-Stack" as const,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    title: "Mobile Fitness Tracker",
    description: "Cross-platform fitness app with workout plans",
    longDescription:
      "Developed a Flutter-based fitness tracking application with custom workout plans, progress tracking, and social features. Integrated with wearable devices for real-time health metrics.",
    image: "/fitness-app-interface.png",
    tags: ["Flutter", "Dart", "Firebase", "REST API"],
    category: "Mobile App" as const,
    githubUrl: "https://github.com",
    featured: true,
  },
  {
    title: "AI Content Generator",
    description: "SaaS platform for AI-powered content creation",
    longDescription:
      "Created a SaaS application that leverages OpenAI's API to generate marketing content, blog posts, and social media captions. Built with Next.js and FastAPI microservices.",
    image: "/ai-content-generation-interface.jpg",
    tags: ["Next.js", "Python", "OpenAI", "MongoDB", "Docker"],
    category: "Full-Stack" as const,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
    featured: true,
  },
  {
    title: "Real-Time Chat Application",
    description: "WebSocket-based messaging platform",
    longDescription:
      "Built a real-time chat application with WebSocket support, file sharing, and end-to-end encryption. Features include group chats, message reactions, and typing indicators.",
    image: "/chat-application-interface.png",
    tags: ["Next.js", "WebSocket", "FastAPI", "PostgreSQL"],
    category: "Web App" as const,
    githubUrl: "https://github.com",
  },
  {
    title: "Task Management System",
    description: "Collaborative project management tool",
    longDescription:
      "Developed a Kanban-style task management system with drag-and-drop functionality, team collaboration features, and automated workflow triggers.",
    image: "/kanban-task-board.jpg",
    tags: ["React", "TypeScript", "FastAPI", "MongoDB"],
    category: "Web App" as const,
    githubUrl: "https://github.com",
    liveUrl: "https://example.com",
  },
  {
    title: "Weather Forecast App",
    description: "Beautiful weather app with location services",
    longDescription:
      "Created a Flutter weather application with beautiful animations, hourly and weekly forecasts, and location-based weather alerts using multiple weather APIs.",
    image: "/weather-app-interface.png",
    tags: ["Flutter", "Dart", "REST API", "Geolocation"],
    category: "Mobile App" as const,
    githubUrl: "https://github.com",
  },
]

// Timeline (Experience, Education, Courses, Achievements)
export const timeline = [
  {
    type: "work" as const,
    title: "Senior Full-Stack Developer",
    organization: "Tech Innovations Inc.",
    location: "Remote",
    period: "2023 - Present",
    description:
      "Leading development of enterprise web applications and mobile solutions for Fortune 500 clients. Architecting scalable microservices and mentoring junior developers.",
    highlights: [
      "Reduced API response time by 60% through optimization",
      "Led migration from monolith to microservices architecture",
      "Mentored team of 5 junior developers",
    ],
    tags: ["Next.js", "FastAPI", "AWS", "Docker"],
  },
  {
    type: "work" as const,
    title: "Full-Stack Developer Intern",
    organization: "StartupHub Technologies",
    location: "San Francisco, CA",
    period: "Summer 2022",
    description:
      "Developed key features for the company's SaaS platform, including real-time collaboration tools and payment integration. Worked closely with the product team to deliver user-centric solutions.",
    highlights: [
      "Built real-time collaboration features using WebSocket",
      "Integrated Stripe payment processing",
      "Improved test coverage from 40% to 85%",
    ],
    tags: ["React", "Node.js", "MongoDB", "Stripe"],
  },
  {
    type: "work" as const,
    title: "Mobile Developer Intern",
    organization: "Digital Solutions Co.",
    location: "New York, NY",
    period: "Summer 2021",
    description:
      "Created cross-platform mobile applications using Flutter for iOS and Android. Implemented offline-first architecture and integrated with RESTful APIs.",
    highlights: [
      "Developed 3 production mobile apps with 10k+ downloads",
      "Implemented offline-first data synchronization",
      "Reduced app crash rate by 75%",
    ],
    tags: ["Flutter", "Dart", "Firebase", "REST API"],
  },
  {
    type: "education" as const,
    title: "Bachelor of Science in Computer Science",
    organization: "University of Technology",
    location: "Boston, MA",
    period: "2019 - 2023",
    description:
      "Graduated with honors, ranked in the top 5 of the department. Specialized in software engineering, algorithms, and distributed systems.",
    highlights: [
      "GPA: 3.9/4.0",
      "Top 5 in Computer Science Department",
      "Dean's List all semesters",
      "Senior Thesis: Optimizing Distributed Database Performance",
    ],
    tags: ["Algorithms", "Data Structures", "Distributed Systems", "Software Engineering"],
  },
  {
    type: "course" as const,
    title: "Advanced Web Development Bootcamp",
    organization: "Udemy",
    period: "2022",
    description:
      "Comprehensive course covering modern web development practices, including Next.js, TypeScript, and cloud deployment.",
    tags: ["Next.js", "TypeScript", "AWS"],
  },
  {
    type: "course" as const,
    title: "Machine Learning Specialization",
    organization: "Coursera (Stanford University)",
    period: "2022",
    description:
      "In-depth study of machine learning algorithms, neural networks, and practical applications in Python.",
    tags: ["Python", "TensorFlow", "ML"],
  },
  {
    type: "course" as const,
    title: "Flutter & Dart - Complete Guide",
    organization: "Udemy",
    period: "2021",
    description:
      "Mastered Flutter framework for building beautiful, natively compiled applications for mobile, web, and desktop.",
    tags: ["Flutter", "Dart", "Mobile Dev"],
  },
  {
    type: "achievement" as const,
    title: "Hackathon Winner - Best Mobile App",
    organization: "TechCrunch Disrupt Hackathon",
    period: "2022",
    description: "Won first place for developing an AI-powered personal finance app in 24 hours.",
  },
  {
    type: "achievement" as const,
    title: "Open Source Contributor",
    organization: "Various Projects",
    period: "2020 - Present",
    description:
      "Active contributor to popular open-source projects including Next.js, Flutter, and FastAPI ecosystems.",
  },
]

// Stats
export const stats = {
  projectsCompleted: "50+",
  yearsExperience: "3+",
  technologies: "15+",
  clientSatisfaction: "100%",
}
