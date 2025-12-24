const projects = [
    {
        id: 7,
        title: "Real-Time Multiplayer Gaming Platform",
        category: "hybrid",
        description: "A comprehensive multiplayer ecosystem featuring real-time games, 3D survival environments, and integrated chat.",
        fullDescription: "Sometimes the most meaningful ideas begin casually. Sparked by a simple curiosity to play common games with friends far away, this project evolved into a complete Real-Time Multiplayer Gaming Platform.\n\nThe platform supports both SinglePlayer and Online Two-Player modes where users can create rooms and join using shared codes. It features a diverse collection of game modes ranging from classic board games to immersive 3D environments.\n\nBuilt with React 19 and Node.js, it leverages Socket.io for seamless real-time synchronization, multiplayer state management, and an integrated in-game chat system. The UI follows a distinct Cyber-Arcade aesthetic, crafted entirely with Custom CSS.\n\nA key highlight is the 'Survival City' mode, a third-person open-world driving experience featuring physics-based vehicle controls, a dynamic day/night cycle, and cross-platform compatibility with Pointer-lock for desktop and virtual joysticks for mobile.",
        tech: ["React 19", "Node.js", "Socket.io", "Express", "Three.js", "Custom CSS"],
        image: "/multiplayer-platform.jpg",
        link: "https://multiplayer-game-hub.vercel.app/",
        achievements: [
            "Real-time room-based matchmaking system",
            "Cross-platform support (Desktop & Mobile)",
            "Integrated In-Game Chat system",
            "3D 'Survival City' driving simulation",
            "Collaborative Whiteboard & Classic Games collection"
        ]
    },
    {
        id: 1,
        title: "Smart Bazar",
        category: "tech",
        description: "Digital solution empowering roadside vendors at tourist locations through a verified vendor ecosystem.",
        fullDescription: "Smart Bazar is our digital solution designed to empower roadside vendors at tourist locations through a verified vendor ecosystem, helping build trust, transparency, and digital visibility.\n\nOut of lakhs of AKTU students, our project was shortlisted among the Top 35 teams in the finals — a moment of immense pride, even though we didn't secure a prize. The experience, learning, and recognition were far more rewarding!\n\nOne of the highlights was personally interacting with the CEO of ERA Foundation, who generously shared his vision, insights on grassroots innovation, and the importance of building scalable tech for real-world impact — an interaction I'll always value.\n\nThis Buildathon sharpened my problem-solving skills, deepened my understanding of real-world challenges, and reaffirmed my passion for building impactful solutions.",
        tech: ["React", "Node.js", "MongoDB", "Digital Ecosystem"],
        image: "/smart-bazar.jpg",
        link: "#",
        achievements: [
            "Top 35 out of lakhs of AKTU students",
            "Personal interaction with ERA Foundation CEO",
            "Focus on grassroots innovation and scalable tech"
        ]
    },
    {
        id: 2,
        title: "Smart Garbage Monitoring & Segregation System",
        category: "tech",
        description: "🥇 First Place Winner – IoT-based solution for automated waste segregation and monitoring at STEP UP exhibition.",
        fullDescription: "Presented our Smart Garbage Monitoring & Segregation System at the STEP UP two-day exhibition, showcasing an IoT-based solution for automated, hygienic, and sustainable waste management.\n\nOur project demonstrates an IoT-enabled solution that automatically segregates dry, wet, and metallic waste using advanced sensors and microcontrollers, promoting hygienic waste handling and supporting sustainable living.\n\nThis initiative highlights how technology-driven automation can transform modern waste management for greener and smarter communities. We were honored to win First Place in the Sensor Exhibition Final Round, validating our innovative approach to solving real-world environmental challenges.",
        tech: ["IoT", "Arduino", "Sensors", "Microcontrollers", "Automation"],
        image: "/smart-garbage.jpg",
        link: "#",
        achievements: [
            "🥇 First Place Winner – Sensor Exhibition Final Round",
            "Automated waste segregation (dry, wet, metallic)",
            "IoT-enabled monitoring system",
            "Showcased at STEP UP two-day exhibition"
        ]
    },
    {
        id: 6,
        title: "Legal Advisory Platform",
        category: "tech",
        description: "AI-powered legal advisory platform for navigating Indian Constitution, case laws, and legal procedures with intelligent guidance.",
        fullDescription: "A comprehensive legal advisory platform that democratizes access to legal knowledge by providing AI-powered guidance on the Indian Constitution, landmark case laws, and legal procedures.\n\nThe platform features an intelligent chatbot powered by advanced NLP and RAG (Retrieval-Augmented Generation) architecture, enabling users to query complex legal topics and receive accurate, contextual responses. It includes a searchable library of 120+ constitutional articles, 25+ landmark cases with detailed explanations, and 20+ legal procedures.\n\nBuilt with a modern tech stack combining Next.js for the frontend and FastAPI for the backend, the platform demonstrates enterprise-grade architecture with vector databases for semantic search, async processing for optimal performance, and a scalable microservices design ready for horizontal scaling.\n\nThe system uses PostgreSQL for structured data, implements intelligent fallback mechanisms with AI models, and features a responsive, accessible UI with dark mode support and multilingual capabilities (English/Hindi).",
        tech: ["Next.js", "FastAPI", "PostgreSQL", "Python", "NLP", "RAG", "Vector DB", "SQLAlchemy", "Tailwind CSS"],
        image: "/legal-advisory.jpg",
        link: "#",
        achievements: [
            "120+ Constitutional Articles with detailed descriptions",
            "25+ Landmark Cases with comprehensive explanations",
            "20+ Legal Procedures documented",
            "AI-powered chatbot with RAG architecture",
            "Vector database for semantic search",
            "Scalable microservices architecture",
            "Multilingual support (EN/HI)",
            "Responsive design with dark mode"
        ]
    },
    {
        id: 4,
        title: "Carrier Takeoff: Sunset Sortie",
        category: "creative",
        description: "A cinematic 3D render capturing the intensity of a carrier launch at sunset.",
        fullDescription: "A meticulously crafted 3D visualization that captures the dramatic moment of a fighter jet launching from an aircraft carrier during sunset. This project showcases advanced lighting techniques, realistic material rendering, and atmospheric effects to create a cinematic experience.\n\nThe scene combines technical precision with artistic vision, featuring detailed aircraft modeling, dynamic lighting from the setting sun, and carefully composed camera angles that emphasize the power and scale of naval aviation operations.",
        tech: ["Blender", "Cycles", "Photoshop"],
        image: "/carrier-takeoff.jpg",
        link: "https://www.artstation.com/artwork/gR4bOm",
        achievements: [
            "Featured on ArtStation",
            "Advanced Cycles rendering techniques",
            "Cinematic lighting and composition"
        ]
    },
    {
        id: 3,
        title: "Architectural Harmony",
        category: "creative",
        description: "Bungalow concept render focusing on modern architectural aesthetics and lighting.",
        fullDescription: "An architectural visualization project that explores the intersection of modern design principles and natural lighting. This bungalow concept demonstrates expertise in architectural rendering, material accuracy, and environmental integration.\n\nThe project emphasizes clean lines, thoughtful spatial planning, and the interplay between interior and exterior spaces. Advanced rendering techniques in Unreal Engine 5 bring photorealistic quality to the visualization, making it an effective tool for architectural presentation.",
        tech: ["Blender", "ArchViz", "Unreal Engine 5"],
        image: "/architectural-harmony.jpg",
        link: "https://www.artstation.com/artwork/8BaNon",
        achievements: [
            "Photorealistic architectural visualization",
            "Unreal Engine 5 real-time rendering",
            "Modern design aesthetics"
        ]
    },
    {
        id: 5,
        title: "Neon Drift: The Chase",
        category: "creative",
        description: "Cyberpunk-inspired vehicle scene with dynamic neon lighting and atmosphere.",
        fullDescription: "A cyberpunk-themed 3D scene that immerses viewers in a neon-lit urban chase. This project showcases expertise in creating atmospheric environments, working with complex lighting setups, and developing a cohesive visual narrative.\n\nThe scene features custom-textured vehicles, volumetric lighting effects, and a carefully crafted color palette that evokes the cyberpunk aesthetic. Substance Painter was used extensively for creating detailed, weathered materials that add authenticity to the futuristic setting.",
        tech: ["Blender", "Eevee", "Substance Painter"],
        image: "/neon-drift.jpg",
        link: "https://www.artstation.com/artwork/K398vG",
        achievements: [
            "Complex neon lighting setup",
            "Custom PBR materials in Substance Painter",
            "Atmospheric world-building"
        ]
    }
];

module.exports = projects;
