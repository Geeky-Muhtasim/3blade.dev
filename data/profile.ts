export const profile = {
    name: "Muhtasim Ibteda Shochcho",
    shortName: "Muhtasim I.",
    title: "AI-Enabled Software Engineer & NLP Researcher",
    tagline: "Seeking MSc/PhD opportunities in NLP, Language Modeling, Mechanistic Interpretability, and AI in Cybersecurity.",
    location: "Dhaka, Bangladesh",
    email: "sho25100@gmail.com",

    socials: {
        github: "https://github.com/Geeky-Muhtasim",
        linkedin: "https://linkedin.com/in/mtibteda",
        scholar: "https://scholar.google.com/citations?user=mBApasAAAAAJ&hl=en",
        twitter: "",
    },

    stats: {
        publications: 5,
        projects: 8,
        yearsExperience: 2,
    },

    researchStatement: `I am passionate about making Large Language Models safer, more interpretable, and culturally inclusive. My research focuses on mechanistic interpretability to understand how LLMs process information, with applications in educational AI and cybersecurity. I aim to bridge the gap between cutting-edge NLP research and real-world deployment, particularly for low-resource languages like Bangla.`,

    researchInterests: [
        {
            title: "Natural Language Processing",
            description: "Building robust NLP systems for educational and multilingual applications",
            icon: "brain"
        },
        {
            title: "Language Modeling",
            description: "Understanding and improving large language model architectures",
            icon: "network"
        },
        {
            title: "Mechanistic Interpretability",
            description: "Uncovering how neural networks represent and process information",
            icon: "eye"
        },
        {
            title: "AI in Cybersecurity",
            description: "Applying AI/ML to threat detection and security analysis",
            icon: "shield"
        }
    ],

    education: [
        {
            degree: "BSc in Computer Science and Engineering",
            institution: "Independent University, Bangladesh",
            period: "Jan 2020 – Nov 2024",
            thesis: {
                title: "PACE: Python AI Companion for Enhanced Learning",
                description: "LLM-powered intelligent tutoring system for Python programming education",
                supervisor: "Dr. Amin Ahsan Ali",
            },
            coursework: [
                "Artificial Intelligence",
                "Image Processing",
                "Web Application and Internet",
                "Numerical Methods",
                "Linear Algebra",
                "Calculus"
            ],
            achievements: [
                "Vice Chair – IEEE Computer Society IUB SBC",
                "Visual Executive – IUB Esports Club"
            ]
        }
    ],

    publications: [
        {
            id: "pub-1",
            title: "SOMAJGYAAN: A Dataset for Evaluating LLMs on Bangla Culture, Social Knowledge, and Low-Resource Language Adaptation",
            authors: [
                "Fariha Anjum Shifa",
                "Muhtasim Ibteda Shochcho",
                "Abdullah Ibne Hanif Arean",
                "Mohammad Ashfaq Ur Rahman",
                "Akm Moshiur Rahman Mazumder",
                "Ahaj Mahhin Faiak",
                "Md Fahim",
                "M Ashraful Amin",
                "Amin Ahsan Ali",
                "AKM MAHBUBUR RAHMAN"
            ],
            venue: "International Joint Conference on Natural Language Processing & Asia-Pacific Chapter of the Association for Computational Linguistics 2025",
            year: 2025,
            type: "Conference",
            tags: [
                "Dataset",
                "Low-Resource NLP",
                "Cultural Reasoning",
                "LLM Evaluation"
            ],
            abstract: "A comprehensive benchmark designed to evaluate large language models on Bangla cultural knowledge, social commonsense, and low-resource linguistic nuances.",
            links: {
                pdf: "",
                arxiv: "",
                code: "",
                dataset: ""
            },
            contribution:
                "Dataset design, evaluation framework, analysis.",
            impact:
                "Introduces a large cultural reasoning benchmark dataset for Bangla."
        },

        {
            id: "pub-2",
            title:
                "Improving User Engagement and Learning Outcomes in LLM-Based Python Tutor: A Study of PACE",
            authors: [
                "Muhtasim Ibteda Shochcho",
                "Mohammad Ashfaq Ur Rahman",
                "Shadman Rohan",
                "Ashraful Islam",
                "Hasnain Heickal",
                "AKM Mahbubur Rahman",
                "M Ashraful Amin",
                "Amin Ahsan Ali"
            ],
            venue: "Proceedings of the Extended Abstracts of the CHI Conference on Human Factors in Computing Systems",
            year: 2025,
            type: "Extended Abstract",
            tags: ["HCI", "EdTech", "User Study", "LLM"],
            abstract:
                "A controlled user study on the PACE tutoring system demonstrating improvements in engagement and conceptual understanding using LLM-based guidance.",
            links: {
                pdf: "",
                publisher: "https://dl.acm.org/doi/10.1145/3706599.3720240"
            },
            contribution:
                "Lead researcher — System design, experiment setup, data collection, statistical analysis.",
            impact:
                "Shows a 35% improvement in learning outcomes for introductory Python learners."
        },

        {
            id: "pub-3",
            title:
                "BD at BEA 2025 Shared Task: MPNet Ensembles for Pedagogical Mistake Identification and Localization in AI Tutor Responses",
            authors: [
                "Shadman Rohan",
                "Ishita Sur Apan",
                "Muhtasim Ibteda Shochcho",
                "Md Fahim",
                "Mohammad Ashfaq Ur Rahman",
                "AKM Rahman",
                "Amin Ahsan Ali"
            ],
            venue: "BEA 2025 — 20th Workshop on Innovative Use of NLP for Building Educational Applications",
            year: 2025,
            type: "Workshop",
            tags: [
                "Educational NLP",
                "Error Detection",
                "Ensemble Models",
                "LLM Evaluation"
            ],
            abstract:
                "Proposes an MPNet-based ensemble approach for detecting and localizing pedagogical mistakes in AI-generated tutoring responses.",
            links: {
                pdf: "",
                publisher: "https://aclanthology.org/2025.bea-1.102/"
            },
            contribution: "Model architecture design, ensemble strategy, evaluation.",
            impact:
                "Achieved Top-3 performance among all teams in the shared task."
        },

        {
            id: "pub-4",
            title:
                "AlphaBorno at BLP-2025 Task 2: Code Generation with Structured Prompts and Execution Feedback",
            authors: [
                "Mohammad Ashfaq Ur Rahman",
                "Muhtasim Ibteda Shochcho",
                "Md Fahim"
            ],
            venue:
                "Bangla Language Processing Workshop, IJCNLP–AACL 2025",
            year: 2025,
            type: "Workshop",
            tags: ["Code Generation", "LLMs", "Bangla NLP", "Prompting"],
            abstract:
                "Presents a structured prompting strategy combined with execution feedback loops to improve code generation quality for Bangla programming tasks.",
            links: {
                pdf: "",
                code: ""
            },
            contribution: "Prompt engineering, evaluation pipeline, error analysis.",
            impact: "Proposed a structured code generation pipeline from Bangla instruction."
        },

        {
            id: "pub-5",
            title: "Fruit Quality Detection and Monitoring System",
            authors: [
                "Md Maruf Kamran Sohag",
                "Mohammad Ashfaq Ur Rahman",
                "Muhtasim Ibteda Shochcho",
                "Md Ridwan Mahmud",
                "Daiyan Mohammad Shams",
                "Mysha Samiha",
                "Mohammad Rejwan Uddin",
                "Mahady Hasan"
            ],
            venue:
                "IEEE ICCSCE 2023 — 13th International Conference on Control System, Computing and Engineering",
            year: 2023,
            type: "Conference",
            tags: ["Computer Vision", "IoT", "Agritech"],
            abstract:
                "An IoT-assisted computer vision framework for real-time fruit quality detection and automated classification.",
            links: {
                pdf: "",
                publisher: "https://ieeexplore.ieee.org/document/10237165/"
            },
            contribution:
                "Real time IoT based fruit quality detection and monitoring system.",
            impact:
                "Demonstrated an end-to-end automated pipeline for fruit quality monitoring."
        }
    ],

    projects: [
        {
            id: "proj-1",
            title: "PACE: Python AI Companion for Enhanced Learning",
            category: "AI & NLP Systems",
            role: "Lead Developer & Researcher",
            period: "2023 - 2024",
            description: "LLM-powered intelligent tutoring system for Python programming with adaptive feedback and misconception detection.",
            techStack: ["Python", "LangChain", "FastAPI", "React", "PostgreSQL", "OpenAI API"],
            highlights: [
                "Built adaptive tutoring system with personalized learning paths",
                "Implemented real-time code analysis and feedback generation",
                "Conducted user study with 150+ students showing 35% improvement",
                "Published findings in CHI 2025"
            ],
            impact: "Improved student learning outcomes by 35% compared to traditional methods",
            links: {
                github: "",
                demo: "",
                paper: "",
            },
            image: "", // Placeholder
        },
        {
            id: "proj-2",
            title: "Smart Audit Management System",
            category: "Enterprise & FinTech",
            role: "AI-Enabled Software Engineer",
            period: "2024 - 2025",
            description: "AI-assisted compliance and audit management platform with document analysis and risk assessment.",
            techStack: ["FastAPI", "PostgreSQL", "LangChain", "React", "RAG", "LlamaIndex"],
            highlights: [
                "Implemented RAG-based document analysis for audit compliance",
                "Built automated risk assessment using ML classification",
                "Reduced audit processing time by 60%",
                "Deployed at Bangladesh Finance PLC"
            ],
            impact: "Processing 500+ audit documents monthly with 95% accuracy",
            links: {
                github: "", // Private
            },
            image: "", // Placeholder
        },
        {
            id: "proj-3",
            title: "eKYC Mobile Application",
            category: "FinTech & Computer Vision",
            role: "Full-Stack Developer",
            period: "2024",
            description: "Mobile KYC solution with ML-powered face verification, liveness detection, and document validation.",
            techStack: ["Flutter", "FastAPI", "ML Kit", "Groq", "Computer Vision", "Firebase"],
            highlights: [
                "Implemented real-time liveness detection to prevent spoofing",
                "Built cloth detection model for dress code compliance",
                "Integrated with banking backend systems",
                "Achieved 98% accuracy in face verification"
            ],
            impact: "Onboarded 10,000+ customers with 3-minute average KYC time",
            links: {
                github: "",
            },
            image: "", // Placeholder
        },
        {
            id: "proj-4",
            title: "XBroker: AI-Powered Broker Portfolio Analyzer",
            category: "AI & NLP Systems",
            role: "Lead Developer",
            period: "2024",
            description: "PDF ingestion and AI summarization system for generating structured broker profiles and insights.",
            techStack: ["Python", "FastAPI", "LangChain", "PostgreSQL", "RAG", "OpenAI"],
            highlights: [
                "Built PDF parsing pipeline for unstructured broker documents",
                "Implemented RAG system for intelligent portfolio summarization",
                "Generated structured JSON profiles from raw PDFs",
                "Automated profile creation reducing manual work by 80%"
            ],
            impact: "Processed 500+ broker portfolios with 90% accuracy",
            links: {
                github: "",
            },
            image: "", // Placeholder
        },
        {
            id: "proj-5",
            title: "Asset Management System",
            category: "Enterprise Systems",
            role: "Backend Developer",
            period: "2024",
            description: "Centralized asset tracking system with risk assessment, criticality analysis, and lifecycle management.",
            techStack: ["FastAPI", "PostgreSQL", "React", "TypeScript"],
            highlights: [
                "Designed database schema for multi-location asset tracking",
                "Implemented risk and criticality scoring algorithms",
                "Built RESTful APIs for asset lifecycle management",
                "Integrated with existing enterprise systems"
            ],
            impact: "Tracked 200+ assets across different departments",
            links: {
                github: "",
            },
            image: "", // Placeholder
        },
        {
            id: "proj-6",
            title: "Lead Management System",
            category: "Enterprise CRM",
            role: "Backend Developer",
            period: "2024",
            description: "FastAPI-based CRM backend with OTP authentication, audit logging, and lead pipeline management.",
            techStack: ["FastAPI", "PostgreSQL", "Redis", "OAuth", "React"],
            highlights: [
                "Built secure authentication with OTP and role-based access",
                "Implemented comprehensive audit logging system",
                "Designed lead scoring and pipeline automation",
                "Integrated email and SMS notifications"
            ],
            impact: "Managing 10,000+ leads with 40% conversion improvement",
            links: {
                github: "",
            },
            image: "", // Placeholder
        },
    ],

    experience: [
        {
            id: "exp-1",
            role: "Software Engineer",
            organization: "Bangladesh Finance PLC",
            location: "Dhaka, Bangladesh",
            period: "Sep 2025 – Present",
            type: "Full-time",
            description:
                "Building unified AI-powered systems for audit automation, policy compliance analysis, ICT risk inspection, and secure enterprise workflow modernization.",
            responsibilities: [
                "Designed a unified intelligent document processing pipeline to automate audit reporting across multiple policy documents",
                "Developed a Smart ICT Risk Inspection Tool with structured scoring, reporting, and automated inspection summaries",
                "Enhanced Audit Management System with role-based access control, a comprehensive analytics dashboard, and automated audit trails",
                "Expanded the Lead Management System with secure OTP flows, improved access control, and modular feature extensions",
                "Built reusable backend modules ensuring scalable FinTech-grade security and operational reliability"
            ],
            techStack: [
                "FastAPI",
                "PostgreSQL",
                "Flutter",
                "LangChain",
                "Groq",
                "RAG Pipelines",
                "ML Kit",
                "JWT Auth"
            ],
            achievements: [
                "Enabled 60% faster audit cycle by automating cross-policy compliance analysis",
                "Delivered a production-ready ICT risk inspection tool used across branches",
                "Improved LAM & CRM performance and reduced manual workload through secure workflow automation"
            ]
        },
        {
            id: "exp-2",
            role: "Software Engineer (Intern)",
            organization: "Bangladesh Finance PLC",
            location: "Dhaka, Bangladesh",
            period: "Apr 2025 – Aug 2025",
            type: "Internship",
            description:
                "Contributed to enterprise audit automation, internal inspection tools, and secure customer onboarding modules using AI-assisted workflows.",
            responsibilities: [
                "Helped build the Smart Audit Management System with automated rule-based findings from policy documents",
                "Developed an early version of the ICT Risk Inspection Tool, enabling structured inspection and compliance scoring",
                "Enhanced the Lead Management System with OTP login, role control, and high-security activity logging",
                "Developed modules for the eKYC mobile app including cloth detection, OCR-based NID extraction, and liveness verification",
                "Supported backend architecture improvements for enterprise-grade reliability and security"
            ],
            techStack: [
                "FastAPI",
                "Flutter",
                "PostgreSQL",
                "LangChain",
                "Groq",
                "ML Kit",
                "pytesseract"
            ],
            achievements: [
                "Played a key role in rolling out audit and inspection automation modules to production environments",
                "Built foundational modules for eKYC and security-based internal tools used by ICT & Operations teams"
            ]
        },
        {
            id: "exp-3",
            role: "Research Intern",
            organization: "Center for Computational & Data Sciences (CCDS), IUB",
            location: "Dhaka, Bangladesh",
            period: "Jan 2025 – Present",
            type: "Research",
            description:
                "Conducting research on NLP, LLMs, and educational AI with a focus on Bangla and AI-powered tutoring systems.",
            responsibilities: [
                "Developed SOMAJGYAAN dataset for evaluating LLMs on Bangla culture and social knowledge",
                "Participated in BEA 2025 and BLP-2025 shared tasks on educational feedback and code generation",
                "Ran user studies on PACE, an LLM-based Python tutor, analyzing engagement and learning outcomes",
                "Co-authored papers accepted to CHI EA 2025, BEA 2025, and IJCNLP–AACL 2025 venues"
            ],
            techStack: ["Python", "PyTorch", "Hugging Face", "LangChain", "Pandas"],
            achievements: [
                "First author / lead contributor on multiple NLP and EdTech publications",
                "Introduced one of the first Bangla cultural reasoning benchmarks",
                "Achieved competitive performance in BEA shared task evaluations"
            ]
        },
        {
            id: "exp-4",
            role: "Undergraduate Researcher",
            organization: "Center for Computational & Data Sciences (CCDS), IUB",
            location: "Dhaka, Bangladesh",
            period: "Sep 2023 – Dec 2024",
            type: "Research",
            description:
                "Undergraduate thesis on LLM-powered Python tutoring and human–AI interaction in learning environments.",
            responsibilities: [
                "Designed and implemented the PACE LLM-based Python tutoring system architecture",
                "Conducted a user study with 25+ students to evaluate engagement and learning gains",
                "Analyzed quantitative and qualitative metrics to understand tutor effectiveness",
                "Prepared manuscript that led to CHI 2025 Extended Abstracts publication"
            ],
            techStack: ["Python", "LangChain", "FastAPI", "React", "PostgreSQL"],
            achievements: [
                "Observed ~35% improvement in learning outcomes in controlled study settings",
                "Published findings in a top-tier HCI venue (CHI EA 2025)"
            ]
        },
        {
            id: "exp-5",
            role: "Junior ML Engineer",
            organization: "Omdena Liberia Chapter",
            location: "Remote",
            period: "Jan 2024 – July 2024",
            type: "Volunteer",
            description:
                "Built machine learning models for malaria risk prediction in a global, impact-driven collaboration.",
            responsibilities: [
                "Engineered predictive models for malaria outbreak risk assessment using tabular health and climate data",
                "Preprocessed and analyzed epidemiological datasets to improve data quality and signal extraction",
                "Collaborated with a global team of 20+ ML engineers in an agile, fully remote environment",
                "Contributed to deployment-ready model pipelines for public health stakeholders"
            ],
            techStack: ["Python", "Scikit-learn", "Pandas", "XGBoost"],
            achievements: [
                "Reached strong predictive performance on held-out evaluation data",
                "Contributed to models intended for real-world health monitoring use cases"
            ]
        }
    ],


    skills: {
        "Programming Languages": [
            "Python", "JavaScript/TypeScript", "C++", "Go", "SQL"
        ],
        "AI & Machine Learning": [
            "PyTorch", "Hugging Face", "LangChain", "LlamaIndex", "Scikit-learn",
            "Pandas", "NumPy", "Ollama", "OpenAI API", "Groq"
        ],
        "Web Development": [
            "FastAPI", "React", "Next.js", "Node.js", "Express", "Tailwind CSS", "Flutter"
        ],
        "Databases": [
            "PostgreSQL", "MySQL", "Oracle", "Redis", "Vector DBs"
        ],
        "Tools & DevOps": [
            "Git", "Docker", "Linux", "Figma", "Power BI", "Postman"
        ],
        "Research Skills": [
            "Research Design", "Statistical Analysis", "Academic Writing",
            "Data Collection", "User Studies", "Experiment Design"
        ]
    },

    awards: [
        {
            title: "Vice Chair",
            organization: "IEEE Computer Society IUB Student Branch Chapter",
            year: "2023-2024",
            description: "Led technical workshops and mentored junior members",
        },
        {
            title: "Visual Executive",
            organization: "IUB Esports Club",
            year: "2022-2023",
            description: "Managed visual content and event promotion",
        },
    ],
};
