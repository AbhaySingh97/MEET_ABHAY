const projects = [
    {
        id: 6,
        title: "Enterprise HMS",
        category: "tech",
        description: "Comprehensive Hospital Management System with role-based access, appointment booking, and AI-powered chatbot assistance.",
        fullDescription: "Enterprise HMS is a full-stack Hospital Management System designed to streamline healthcare operations with cutting-edge technology and user-centric design. Built with React, Node.js, Express, and MongoDB, this platform delivers a seamless experience for patients, doctors, and administrators.\n\nThe system features secure authentication with Firebase Google Sign-In, role-based dashboards for different user types, and an intelligent AI chatbot powered by OpenRouter API that provides instant answers to healthcare queries. The chatbot seamlessly integrates with a local database of legal articles and medical information, falling back to AI when needed.\n\nWith a modern, responsive UI featuring glassmorphism effects, gradient animations, and smooth transitions, Enterprise HMS demonstrates the perfect blend of functionality and aesthetics. The platform includes real-time appointment booking, patient record management, doctor scheduling, and comprehensive analytics tracking.",
        tech: ["React", "Node.js", "Express", "MongoDB", "Firebase Auth", "OpenRouter AI", "Vite"],
        image: "/enterprise-hms.png",
        link: "#",
        achievements: [
            "Role-based authentication system (Patient, Doctor, Admin)",
            "AI-powered chatbot with OpenRouter integration",
            "Real-time appointment booking and management",
            "Responsive design with modern UI/UX principles",
            "Secure Firebase Google Sign-In integration",
            "MongoDB Atlas cloud database integration"
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
