// Team Member 1: Backend Integration - Roadmaps Service

// Define the Step interface (shape of roadmap step data)
interface Step {
  id: string // Unique identifier for the step
  title: string // Title of the step
  description: string // Description of what the step involves
  resources: {
    title: string
    url: string
    type: "Video" | "Article" | "Course" | "Documentation"
  }[]
}

// Define the Roadmap interface (shape of roadmap data)
interface Roadmap {
  id: string // Unique identifier for the roadmap
  title: string // Title of the roadmap
  description: string // Description of what the roadmap covers
  difficulty: "Beginner" | "Intermediate" | "Advanced" // Difficulty level
  categories: string[] // Array of categories the roadmap belongs to
  steps: Step[] // Array of steps in the roadmap
  slug: string // URL-friendly version of the title for routing
  duration: string // Estimated time to complete the roadmap
  image: string // URL to the roadmap image
  completionRate: number // Percentage of completion (set to 0 for all)
}

// Mock roadmaps database with detailed learning paths
const roadmaps: Roadmap[] = [
  {
    id: "1",
    title: "Frontend Development",
    description:
      "Learn modern frontend development from HTML basics to advanced React patterns and performance optimization.",
    difficulty: "Intermediate",
    categories: ["Web Development", "JavaScript"],
    slug: "frontend",
    duration: "3-4 months",
    image: "https://images.unsplash.com/photo-1621839673705-6617adf9e890?q=80&w=1932&auto=format&fit=crop",
    completionRate: 0,
    steps: [
      {
        id: "1",
        title: "HTML & CSS Fundamentals",
        description: "Master the building blocks of web development with semantic HTML and modern CSS techniques.",
        resources: [
          {
            title: "HTML & CSS Crash Course",
            url: "https://www.youtube.com/watch?v=hu-q2zYwEYs",
            type: "Video",
          },
          {
            title: "MDN Web Docs - HTML",
            url: "https://developer.mozilla.org/en-US/docs/Web/HTML",
            type: "Documentation",
          },
          {
            title: "CSS Grid & Flexbox for Responsive Layouts",
            url: "https://css-tricks.com/snippets/css/complete-guide-grid/",
            type: "Article",
          },
        ],
      },
      {
        id: "2",
        title: "JavaScript Essentials",
        description: "Learn core JavaScript concepts including ES6+ features, async programming, and DOM manipulation.",
        resources: [
          {
            title: "JavaScript Fundamentals",
            url: "https://javascript.info/",
            type: "Course",
          },
          {
            title: "Async JavaScript Deep Dive",
            url: "https://www.youtube.com/watch?v=PoRJizFvM7s",
            type: "Video",
          },
          {
            title: "JavaScript 30 - Build 30 things in 30 days",
            url: "https://javascript30.com/",
            type: "Course",
          },
        ],
      },
      {
        id: "3",
        title: "React Fundamentals",
        description: "Learn the basics of React including components, props, state, and hooks.",
        resources: [
          {
            title: "React Crash Course",
            url: "https://www.youtube.com/watch?v=w7ejDZ8SWv8",
            type: "Video",
          },
          {
            title: "React Official Docs",
            url: "https://reactjs.org/docs/getting-started.html",
            type: "Documentation",
          },
          {
            title: "Build a React App from Scratch",
            url: "https://www.freecodecamp.org/news/how-to-build-a-react-app-from-scratch/",
            type: "Article",
          },
        ],
      },
      {
        id: "4",
        title: "State Management",
        description:
          "Learn how to manage state in React applications using Context API, Redux, and other state management libraries.",
        resources: [
          {
            title: "Redux vs Context API",
            url: "https://www.youtube.com/watch?v=5LrDIWkK_Bc",
            type: "Video",
          },
          {
            title: "State Management in React",
            url: "https://kentcdodds.com/blog/application-state-management-with-react",
            type: "Article",
          },
          {
            title: "Redux Toolkit Tutorial",
            url: "https://redux-toolkit.js.org/tutorials/quick-start",
            type: "Documentation",
          },
        ],
      },
      {
        id: "5",
        title: "Frontend Build Tools",
        description:
          "Learn about modern build tools like Webpack, Vite, and how to optimize your frontend application.",
        resources: [
          {
            title: "Webpack 5 Crash Course",
            url: "https://www.youtube.com/watch?v=IZGNcSuwBZs",
            type: "Video",
          },
          {
            title: "Vite Documentation",
            url: "https://vitejs.dev/guide/",
            type: "Documentation",
          },
          {
            title: "Frontend Tooling Guide",
            url: "https://frontendmasters.com/guides/front-end-handbook/2019/",
            type: "Article",
          },
        ],
      },
      {
        id: "6",
        title: "Testing in Frontend",
        description: "Learn how to test your frontend applications using Jest, React Testing Library, and Cypress.",
        resources: [
          {
            title: "Testing React Applications",
            url: "https://jestjs.io/docs/tutorial-react",
            type: "Documentation",
          },
          {
            title: "React Testing Library Tutorial",
            url: "https://www.youtube.com/watch?v=7dTTFW7yACQ",
            type: "Video",
          },
          {
            title: "End-to-End Testing with Cypress",
            url: "https://docs.cypress.io/guides/getting-started/writing-your-first-test",
            type: "Documentation",
          },
        ],
      },
      {
        id: "7",
        title: "Performance Optimization",
        description:
          "Learn how to optimize React applications for performance using memoization, code splitting, and other techniques.",
        resources: [
          {
            title: "React Performance",
            url: "https://reactjs.org/docs/optimizing-performance.html",
            type: "Documentation",
          },
          {
            title: "Web Vitals in React",
            url: "https://web.dev/vitals/",
            type: "Article",
          },
          {
            title: "Advanced React Performance Optimization",
            url: "https://www.youtube.com/watch?v=U9Cw6Z_rnhU",
            type: "Video",
          },
        ],
      },
    ],
  },
  {
    id: "2",
    title: "Backend Development",
    description:
      "Master server-side programming, databases, APIs, and deployment with this comprehensive backend roadmap.",
    difficulty: "Intermediate",
    categories: ["Web Development", "Backend"],
    slug: "backend",
    duration: "4-6 months",
    image: "https://images.unsplash.com/photo-1555066931-4365d14bab8c?q=80&w=1770&auto=format&fit=crop",
    completionRate: 0,
    steps: [
      {
        id: "1",
        title: "Programming Fundamentals",
        description: "Master a backend programming language like JavaScript (Node.js), Python, Java, or Go.",
        resources: [
          {
            title: "Node.js Crash Course",
            url: "https://www.youtube.com/watch?v=fBNz5xF-Kx4",
            type: "Video",
          },
          {
            title: "Python Backend Development",
            url: "https://www.fullstackpython.com/",
            type: "Documentation",
          },
          {
            title: "Java Spring Boot Tutorial",
            url: "https://spring.io/guides/gs/spring-boot/",
            type: "Article",
          },
        ],
      },
      {
        id: "2",
        title: "Databases",
        description: "Learn SQL and NoSQL databases, data modeling, and database optimization.",
        resources: [
          {
            title: "SQL Fundamentals",
            url: "https://www.youtube.com/watch?v=HXV3zeQKqGY",
            type: "Video",
          },
          {
            title: "MongoDB University",
            url: "https://university.mongodb.com/",
            type: "Course",
          },
          {
            title: "Database Design Tutorial",
            url: "https://www.lucidchart.com/pages/database-diagram/database-design",
            type: "Article",
          },
        ],
      },
      {
        id: "3",
        title: "APIs and Web Services",
        description: "Learn how to design and build RESTful APIs and GraphQL services.",
        resources: [
          {
            title: "RESTful API Design",
            url: "https://restfulapi.net/",
            type: "Documentation",
          },
          {
            title: "GraphQL Tutorial",
            url: "https://www.howtographql.com/",
            type: "Course",
          },
          {
            title: "Building APIs with Node.js",
            url: "https://www.youtube.com/watch?v=vjf774RKrLc",
            type: "Video",
          },
        ],
      },
      {
        id: "4",
        title: "Authentication & Authorization",
        description: "Implement secure user authentication and authorization systems.",
        resources: [
          {
            title: "JWT Authentication Tutorial",
            url: "https://www.youtube.com/watch?v=7Q17ubqLfaM",
            type: "Video",
          },
          {
            title: "OAuth 2.0 Simplified",
            url: "https://aaronparecki.com/oauth-2-simplified/",
            type: "Article",
          },
          {
            title: "Authentication Best Practices",
            url: "https://cheatsheetseries.owasp.org/cheatsheets/Authentication_Cheat_Sheet.html",
            type: "Documentation",
          },
        ],
      },
      {
        id: "5",
        title: "Server Management & Deployment",
        description: "Learn about server configuration, containerization, and cloud deployment.",
        resources: [
          {
            title: "Docker for Beginners",
            url: "https://www.youtube.com/watch?v=fqMOX6JJhGo",
            type: "Video",
          },
          {
            title: "AWS Basics",
            url: "https://aws.amazon.com/getting-started/",
            type: "Documentation",
          },
          {
            title: "Deploying Node.js Applications",
            url: "https://www.digitalocean.com/community/tutorials/how-to-set-up-a-node-js-application-for-production-on-ubuntu-20-04",
            type: "Article",
          },
        ],
      },
      {
        id: "6",
        title: "Testing & Debugging",
        description: "Master backend testing strategies and debugging techniques.",
        resources: [
          {
            title: "Node.js Testing with Jest",
            url: "https://jestjs.io/docs/getting-started",
            type: "Documentation",
          },
          {
            title: "API Testing with Postman",
            url: "https://www.youtube.com/watch?v=VywxIQ2ZXw4",
            type: "Video",
          },
          {
            title: "Debugging Node.js Applications",
            url: "https://nodejs.org/en/docs/guides/debugging-getting-started/",
            type: "Article",
          },
        ],
      },
      {
        id: "7",
        title: "Performance & Scaling",
        description: "Learn how to optimize and scale backend applications for high traffic.",
        resources: [
          {
            title: "Node.js Performance Optimization",
            url: "https://www.youtube.com/watch?v=_0W_822Dijg",
            type: "Video",
          },
          {
            title: "Database Scaling Strategies",
            url: "https://www.digitalocean.com/community/tutorials/understanding-database-sharding",
            type: "Article",
          },
          {
            title: "Microservices Architecture",
            url: "https://microservices.io/patterns/microservices.html",
            type: "Documentation",
          },
        ],
      },
    ],
  },
  {
    id: "3",
    title: "Machine Learning",
    description:
      "Learn the fundamentals of machine learning, deep learning, and AI applications with hands-on projects.",
    difficulty: "Advanced",
    categories: ["Data Science", "Artificial Intelligence"],
    slug: "machine-learning",
    duration: "6-8 months",
    image: "https://images.unsplash.com/photo-1527474305487-b87b222841cc?q=80&w=1974&auto=format&fit=crop",
    completionRate: 0,
    steps: [
      {
        id: "1",
        title: "Mathematics for Machine Learning",
        description: "Build a strong foundation in linear algebra, calculus, probability, and statistics.",
        resources: [
          {
            title: "Mathematics for Machine Learning Specialization",
            url: "https://www.coursera.org/specializations/mathematics-machine-learning",
            type: "Course",
          },
          {
            title: "Linear Algebra Explained",
            url: "https://www.youtube.com/watch?v=fNk_zzaMoSs&list=PLZHQObOWTQDPD3MizzM2xVFitgF8hE_ab",
            type: "Video",
          },
          {
            title: "Statistics and Probability for Data Science",
            url: "https://www.khanacademy.org/math/statistics-probability",
            type: "Course",
          },
        ],
      },
      {
        id: "2",
        title: "Python for Data Science",
        description: "Learn Python programming and essential libraries for data manipulation and analysis.",
        resources: [
          {
            title: "Python Data Science Handbook",
            url: "https://jakevdp.github.io/PythonDataScienceHandbook/",
            type: "Documentation",
          },
          {
            title: "NumPy, Pandas & Matplotlib Tutorial",
            url: "https://www.youtube.com/watch?v=r-uOLxNrNk8",
            type: "Video",
          },
          {
            title: "Data Manipulation with Pandas",
            url: "https://pandas.pydata.org/docs/getting_started/index.html",
            type: "Documentation",
          },
        ],
      },
      {
        id: "3",
        title: "Machine Learning Fundamentals",
        description: "Understand core ML concepts, algorithms, and evaluation metrics.",
        resources: [
          {
            title: "Machine Learning by Andrew Ng",
            url: "https://www.coursera.org/learn/machine-learning",
            type: "Course",
          },
          {
            title: "Scikit-Learn Tutorial",
            url: "https://scikit-learn.org/stable/tutorial/index.html",
            type: "Documentation",
          },
          {
            title: "Hands-On Machine Learning Projects",
            url: "https://www.youtube.com/watch?v=tPYj3fFJGjk",
            type: "Video",
          },
        ],
      },
      {
        id: "4",
        title: "Deep Learning",
        description: "Learn neural networks, deep learning architectures, and frameworks like TensorFlow and PyTorch.",
        resources: [
          {
            title: "Deep Learning Specialization",
            url: "https://www.coursera.org/specializations/deep-learning",
            type: "Course",
          },
          {
            title: "TensorFlow Tutorial",
            url: "https://www.tensorflow.org/tutorials",
            type: "Documentation",
          },
          {
            title: "PyTorch for Deep Learning",
            url: "https://pytorch.org/tutorials/",
            type: "Documentation",
          },
        ],
      },
      {
        id: "5",
        title: "Computer Vision",
        description: "Learn image processing, object detection, and image classification techniques.",
        resources: [
          {
            title: "Computer Vision Course",
            url: "https://www.youtube.com/watch?v=01sAkU_NvOY",
            type: "Video",
          },
          {
            title: "OpenCV Tutorial",
            url: "https://docs.opencv.org/master/d9/df8/tutorial_root.html",
            type: "Documentation",
          },
          {
            title: "Convolutional Neural Networks",
            url: "https://www.coursera.org/learn/convolutional-neural-networks",
            type: "Course",
          },
        ],
      },
      {
        id: "6",
        title: "Natural Language Processing",
        description: "Learn text processing, sentiment analysis, and language models like BERT and GPT.",
        resources: [
          {
            title: "NLP with Transformers",
            url: "https://huggingface.co/course/chapter1/1",
            type: "Course",
          },
          {
            title: "NLTK and spaCy Tutorial",
            url: "https://www.youtube.com/watch?v=xvqsFTUsOmc",
            type: "Video",
          },
          {
            title: "Building NLP Applications",
            url: "https://www.nltk.org/book/",
            type: "Documentation",
          },
        ],
      },
      {
        id: "7",
        title: "MLOps & Deployment",
        description: "Learn how to deploy, monitor, and maintain machine learning models in production.",
        resources: [
          {
            title: "MLOps on AWS",
            url: "https://aws.amazon.com/blogs/machine-learning/category/artificial-intelligence/mlops/",
            type: "Article",
          },
          {
            title: "Model Deployment with Flask",
            url: "https://www.youtube.com/watch?v=qNF1HqBvpGE",
            type: "Video",
          },
          {
            title: "ML Engineering for Production",
            url: "https://www.coursera.org/specializations/machine-learning-engineering-for-production-mlops",
            type: "Course",
          },
        ],
      },
    ],
  },
  {
    id: "4",
    title: "DevOps Engineering",
    description: "Master the tools and practices for CI/CD, infrastructure as code, monitoring, and cloud deployment.",
    difficulty: "Advanced",
    categories: ["DevOps", "Cloud"],
    slug: "devops",
    duration: "5-7 months",
    image: "https://images.unsplash.com/photo-1607799279861-4dd421887fb3?q=80&w=1770&auto=format&fit=crop",
    completionRate: 0,
    steps: [
      {
        id: "1",
        title: "Linux Fundamentals",
        description: "Learn Linux administration, shell scripting, and command line tools.",
        resources: [
          {
            title: "Linux Command Line Basics",
            url: "https://www.youtube.com/watch?v=oxuRxtrO2Ag",
            type: "Video",
          },
          {
            title: "Bash Scripting Tutorial",
            url: "https://linuxconfig.org/bash-scripting-tutorial-for-beginners",
            type: "Article",
          },
          {
            title: "Linux Administration Handbook",
            url: "https://www.oreilly.com/library/view/linux-administration-handbook/9780131480056/",
            type: "Documentation",
          },
        ],
      },
      {
        id: "2",
        title: "Version Control with Git",
        description: "Master Git for version control and collaboration.",
        resources: [
          {
            title: "Git & GitHub Crash Course",
            url: "https://www.youtube.com/watch?v=RGOj5yH7evk",
            type: "Video",
          },
          {
            title: "Advanced Git Techniques",
            url: "https://git-scm.com/book/en/v2",
            type: "Documentation",
          },
          {
            title: "Git Workflow Strategies",
            url: "https://www.atlassian.com/git/tutorials/comparing-workflows",
            type: "Article",
          },
        ],
      },
      {
        id: "3",
        title: "Containerization with Docker",
        description: "Learn Docker for containerizing applications and managing containers.",
        resources: [
          {
            title: "Docker for Beginners",
            url: "https://www.youtube.com/watch?v=fqMOX6JJhGo",
            type: "Video",
          },
          {
            title: "Docker Compose Tutorial",
            url: "https://docs.docker.com/compose/gettingstarted/",
            type: "Documentation",
          },
          {
            title: "Docker in Production",
            url: "https://www.pluralsight.com/courses/docker-production",
            type: "Course",
          },
        ],
      },
      {
        id: "4",
        title: "Container Orchestration with Kubernetes",
        description: "Learn Kubernetes for orchestrating containerized applications.",
        resources: [
          {
            title: "Kubernetes Basics",
            url: "https://kubernetes.io/docs/tutorials/kubernetes-basics/",
            type: "Documentation",
          },
          {
            title: "Kubernetes Crash Course",
            url: "https://www.youtube.com/watch?v=s_o8dwzRlu4",
            type: "Video",
          },
          {
            title: "Kubernetes Patterns",
            url: "https://www.oreilly.com/library/view/kubernetes-patterns/9781492050278/",
            type: "Course",
          },
        ],
      },
      {
        id: "5",
        title: "CI/CD Pipelines",
        description: "Set up continuous integration and continuous deployment pipelines.",
        resources: [
          {
            title: "Jenkins Tutorial",
            url: "https://www.jenkins.io/doc/tutorials/",
            type: "Documentation",
          },
          {
            title: "GitHub Actions CI/CD",
            url: "https://www.youtube.com/watch?v=R8_veQiYBjI",
            type: "Video",
          },
          {
            title: "GitLab CI/CD Pipeline Tutorial",
            url: "https://docs.gitlab.com/ee/ci/quick_start/",
            type: "Article",
          },
        ],
      },
      {
        id: "6",
        title: "Infrastructure as Code",
        description: "Learn tools like Terraform and Ansible for infrastructure automation.",
        resources: [
          {
            title: "Terraform Fundamentals",
            url: "https://learn.hashicorp.com/terraform",
            type: "Documentation",
          },
          {
            title: "Ansible for Beginners",
            url: "https://www.youtube.com/watch?v=goclfp6a2IQ",
            type: "Video",
          },
          {
            title: "Infrastructure as Code Best Practices",
            url: "https://www.thoughtworks.com/insights/blog/infrastructure-code-reason-smile",
            type: "Article",
          },
        ],
      },
      {
        id: "7",
        title: "Cloud Platforms",
        description: "Learn major cloud platforms like AWS, Azure, or Google Cloud.",
        resources: [
          {
            title: "AWS Certified Solutions Architect",
            url: "https://aws.amazon.com/certification/certified-solutions-architect-associate/",
            type: "Course",
          },
          {
            title: "Azure Fundamentals",
            url: "https://docs.microsoft.com/en-us/learn/paths/azure-fundamentals/",
            type: "Documentation",
          },
          {
            title: "Google Cloud Platform Fundamentals",
            url: "https://www.youtube.com/watch?v=IeMYQ-qJeK4",
            type: "Video",
          },
        ],
      },
      {
        id: "8",
        title: "Monitoring and Logging",
        description: "Implement monitoring, logging, and alerting for applications and infrastructure.",
        resources: [
          {
            title: "Prometheus and Grafana Tutorial",
            url: "https://prometheus.io/docs/prometheus/latest/getting_started/",
            type: "Documentation",
          },
          {
            title: "ELK Stack Tutorial",
            url: "https://www.youtube.com/watch?v=4X0WLg05ASw",
            type: "Video",
          },
          {
            title: "Cloud Monitoring Best Practices",
            url: "https://cloud.google.com/monitoring/docs/best-practices",
            type: "Article",
          },
        ],
      },
    ],
  },
  {
    id: "5",
    title: "Mobile App Development",
    description: "Learn to build native and cross-platform mobile applications for iOS and Android.",
    difficulty: "Intermediate",
    categories: ["Mobile Development", "App Development"],
    slug: "mobile-development",
    duration: "4-6 months",
    image: "https://images.unsplash.com/photo-1526498460520-4c246339dccb?q=80&w=2070&auto=format&fit=crop",
    completionRate: 0,
    steps: [
      {
        id: "1",
        title: "Mobile Development Fundamentals",
        description: "Understand mobile app architecture, UI/UX principles, and development approaches.",
        resources: [
          {
            title: "Mobile App Development Overview",
            url: "https://www.youtube.com/watch?v=TIBmq6LMR8c",
            type: "Video",
          },
          {
            title: "Mobile UI/UX Design Principles",
            url: "https://www.nngroup.com/articles/mobile-ux-design/",
            type: "Article",
          },
          {
            title: "Native vs Cross-Platform Development",
            url: "https://www.mobiloud.com/blog/native-web-or-hybrid-apps",
            type: "Article",
          },
        ],
      },
      {
        id: "2",
        title: "React Native",
        description: "Build cross-platform mobile apps using React Native and JavaScript.",
        resources: [
          {
            title: "React Native Crash Course",
            url: "https://www.youtube.com/watch?v=0-S5a0eXPoc",
            type: "Video",
          },
          {
            title: "React Native Documentation",
            url: "https://reactnative.dev/docs/getting-started",
            type: "Documentation",
          },
          {
            title: "Building Your First React Native App",
            url: "https://www.freecodecamp.org/news/how-to-build-your-first-react-native-app-1-setup-and-workflow-433a07c3169c/",
            type: "Article",
          },
        ],
      },
      {
        id: "3",
        title: "Flutter Development",
        description: "Learn Flutter and Dart to build beautiful, natively compiled applications.",
        resources: [
          {
            title: "Flutter Crash Course",
            url: "https://www.youtube.com/watch?v=1gDhl4leEzA",
            type: "Video",
          },
          {
            title: "Flutter Documentation",
            url: "https://flutter.dev/docs",
            type: "Documentation",
          },
          {
            title: "Dart Programming Language",
            url: "https://dart.dev/guides",
            type: "Documentation",
          },
        ],
      },
      {
        id: "4",
        title: "Native iOS Development",
        description: "Learn Swift and SwiftUI to build native iOS applications.",
        resources: [
          {
            title: "iOS App Development with Swift",
            url: "https://www.youtube.com/watch?v=comQ1-x2a1Q",
            type: "Video",
          },
          {
            title: "SwiftUI Tutorial",
            url: "https://developer.apple.com/tutorials/swiftui",
            type: "Documentation",
          },
          {
            title: "iOS Development Course",
            url: "https://www.udemy.com/course/ios-13-app-development-bootcamp/",
            type: "Course",
          },
        ],
      },
      {
        id: "5",
        title: "Native Android Development",
        description: "Learn Kotlin and Jetpack Compose to build native Android applications.",
        resources: [
          {
            title: "Android Development for Beginners",
            url: "https://www.youtube.com/watch?v=fis26HvvDII",
            type: "Video",
          },
          {
            title: "Kotlin Programming Language",
            url: "https://kotlinlang.org/docs/getting-started.html",
            type: "Documentation",
          },
          {
            title: "Jetpack Compose Tutorial",
            url: "https://developer.android.com/jetpack/compose/tutorial",
            type: "Documentation",
          },
        ],
      },
      {
        id: "6",
        title: "Mobile App State Management",
        description: "Learn state management patterns and libraries for mobile applications.",
        resources: [
          {
            title: "Redux for React Native",
            url: "https://www.youtube.com/watch?v=5QwNCX3UbXc",
            type: "Video",
          },
          {
            title: "Provider Pattern in Flutter",
            url: "https://flutter.dev/docs/development/data-and-backend/state-mgmt/simple",
            type: "Documentation",
          },
          {
            title: "MobX for React Native",
            url: "https://mobx.js.org/react-integration.html",
            type: "Article",
          },
        ],
      },
      {
        id: "7",
        title: "Mobile App Testing and Deployment",
        description: "Learn how to test, debug, and deploy mobile applications to app stores.",
        resources: [
          {
            title: "Mobile App Testing Strategies",
            url: "https://www.browserstack.com/guide/mobile-app-testing-strategy",
            type: "Article",
          },
          {
            title: "Publishing to App Store and Google Play",
            url: "https://www.youtube.com/watch?v=5GHT4QtotE4",
            type: "Video",
          },
          {
            title: "Continuous Integration for Mobile Apps",
            url: "https://fastlane.tools/",
            type: "Documentation",
          },
        ],
      },
    ],
  },
]

/**
 * Get all roadmaps
 *
 * @returns A Promise that resolves to an array of all roadmaps
 */
export async function getRoadmaps(): Promise<Roadmap[]> {
  // Simulate API call delay (500ms)
  // In a real app, this would be an actual API request to a server
  await new Promise((resolve) => setTimeout(resolve, 500))

  return roadmaps
}

/**
 * Get a specific roadmap by its slug
 *
 * @param slug - The URL-friendly identifier for the roadmap
 * @returns A Promise that resolves to the roadmap or null if not found
 */
export async function getRoadmapBySlug(slug: string): Promise<Roadmap | null> {
  // Simulate API call delay (500ms)
  await new Promise((resolve) => setTimeout(resolve, 500))

  // Find the roadmap with the matching slug
  const roadmap = roadmaps.find((r) => r.slug === slug)

  // Return the roadmap or null if not found
  return roadmap || null
}

/**
 * Create a new roadmap
 *
 * @param data - Object containing the roadmap details
 * @returns A Promise that resolves to the newly created roadmap
 */
export async function createRoadmap(data: {
  title: string
  description: string
  difficulty: string
  category: string
  steps: Step[]
}): Promise<Roadmap> {
  // Simulate API call delay (1 second)
  await new Promise((resolve) => setTimeout(resolve, 1000))

  // Create slug from title (convert to lowercase, remove special chars, replace spaces with hyphens)
  const slug = data.title
    .toLowerCase()
    .replace(/[^\w\s]/gi, "")
    .replace(/\s+/g, "-")

  // Create new roadmap object
  const newRoadmap: Roadmap = {
    id: Date.now().toString(), // Generate a unique ID based on current timestamp
    title: data.title,
    description: data.description,
    difficulty: data.difficulty as "Beginner" | "Intermediate" | "Advanced",
    categories: [data.category],
    slug,
    steps: data.steps,
    duration: "3-4 months",
    image: "/placeholder.svg?height=400&width=600",
    completionRate: 0,
  }

  // In a real app, this would store the roadmap in a database
  // Here we're just adding to our mock array
  roadmaps.push(newRoadmap)

  return newRoadmap
}
