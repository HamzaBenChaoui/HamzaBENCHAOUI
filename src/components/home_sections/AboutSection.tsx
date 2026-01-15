import { motion } from "framer-motion";
import { Badge } from "@/components/ui/badge";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs";
import { Download, Award, BookOpen, Clock, Code, Briefcase, Cpu, Smartphone, Cloud, GraduationCap as GraduationCapIcon,
    School as UniversityIcon } from "lucide-react";
import { AboutStars } from "@/components/ui/stars";
import {
    SiJavascript,
    SiTypescript,
    SiPython,
    SiPhp,
    SiReact,
    SiNextdotjs,
    SiTailwindcss,
    SiNodedotjs,
    SiLaravel,
    SiSpring,
    SiMysql,
    SiPostgresql,
    SiDocker,
    SiVercel,
    SiLinux,
    SiJest,
    SiSelenium,
    SiSocketdotio,
    SiGit,
    SiShadcnui,
    SiFramer,
    SiApachekafka,
    SiWebassembly,
    SiCodemirror
} from "react-icons/si";
import { Button } from "@/components/ui/button";
import {type JSX} from "react";
import {IconCloud} from "@/components/IconCloud.tsx";
import {ResumeCard} from "@/components/resume-card.tsx";

export function AboutSection() {
    const skills = [
        "JavaScript",
        "TypeScript",
        "Python",
        "Java",
        "PHP",
        "React",
        "Next.js",
        "Tailwind CSS",
        "Shadcn UI",
        "Angular",
        "Node.js",
        "Laravel",
        "Spring Boot",
        "MySQL",
        "PostgreSQL",
        "Docker",
        "Vercel",
        "Linux System Administration",
        "Agile Methodologies",
        "Git Version Control",
        "Code Review",
        "Web Automation",
        "Data Scraping",
        "Junit5",
    ];

    // map known skill names to simpleicons slugs
    const skillToSlug: Record<string, string> = {
        "JavaScript": "javascript",
        "TypeScript": "typescript",
        "Python": "python",
        "Java": "java",
        "PHP": "php",
        "React": "react",
        "Next.js": "nextdotjs",
        "Tailwind CSS": "tailwindcss",
        "Shadcn UI": "shadcnui",
        "Angular": "angular",
        "Node.js": "nodedotjs",
        "Laravel": "laravel",
        "Spring Boot": "spring",
        "MySQL": "mysql",
        "PostgreSQL": "postgresql",
        "Docker": "docker",
        "Vercel": "vercel",
        "Linux System Administration": "linux",
        "Junit5": "junit",
        "Selenium": "selenium",
        "Git Version Control": "git",
        "Data Scraping": "scrapy",
        "Framer Motion": "framer",
    };

    function getSlugsFromSkills(list: string[]) {
        const seen = new Set<string>();
        const slugs: string[] = [];
        for (const s of list) {
            const slug = skillToSlug[s] ?? s.toLowerCase().replace(/[^a-z0-9]/g, "");
            if (!seen.has(slug)) {
                seen.add(slug);
                slugs.push(slug);
            }
        }
        return slugs;
    }

    const images = getSlugsFromSkills(skills).map((slug) => `https://cdn.simpleicons.org/${slug}`);

    const skillIcons: Record<string, JSX.Element> = {
        JavaScript: <SiJavascript className="text-yellow-400" />,
        TypeScript: <SiTypescript className="text-blue-500" />,
        Python: <SiPython className="text-blue-600" />,
        PHP: <SiPhp className="text-purple-500" />,
        React: <SiReact className="text-cyan-400" />,
        "Next.js": <SiNextdotjs className="text-black dark:text-white" />,
        "Tailwind CSS": <SiTailwindcss className="text-sky-400" />,
        "Shadcn UI": <SiShadcnui className="text-black dark:text-white" />,
        "Framer Motion": <SiFramer className="text-purple-600" />,
        Angular: (
            <img src="https://cdn.simpleicons.org/angular" alt="Angular" className="h-5 w-5 object-contain" />
        ),
        "Node.js": <SiNodedotjs className="text-green-600" />,
        Laravel: <SiLaravel className="text-red-500" />,
        "Spring Boot": <SiSpring className="text-green-600" />,
        Java: (
            <img
                src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcSey1U4GoHUdFcI4H7_SiF_oWUPHIR0RM9N5g&s"
                alt="Java"
                className="h-5 w-5 object-contain"
                onError={(e: any) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/java/java-original.svg";
                }}
            />
        ),
        Junit5: (
            <img
                src="https://e7.pngegg.com/pngimages/194/707/png-clipart-junit-test-automation-software-testing-unit-testing-software-framework-others-text-trademark.png"
                alt="JUnit"
                className="h-5 w-5 object-contain"
                onError={(e: any) => {
                    e.currentTarget.onerror = null;
                    e.currentTarget.src = "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/junit/junit-plain.svg";
                }}
            />
        ),
        MySQL: <SiMysql className="text-blue-700" />,
        PostgreSQL: <SiPostgresql className="text-blue-400" />,
        Docker: <SiDocker className="text-blue-400" />,
        Vercel: <SiVercel className="text-black dark:text-white" />,
        "Linux System Administration": <SiLinux className="text-black dark:text-white" />,
        Jest: <SiJest className="text-red-600" />,
        Jsoup: (
            <img src="https://miro.medium.com/1*PUhJSYJsiAMJjCF_yMkq8A.jpeg" alt="Jsoup" className="h-5 w-5 object-contain" />
        ),
        WebSockets: <SiSocketdotio className="text-black dark:text-white" />,
        "Git Version Control": <SiGit className="text-orange-500" />,
        "Data Scraping": <SiCodemirror className="text-yellow-500" />,
        "Algorithms & Data Structures": <SiWebassembly className="text-purple-500" />,
        "System Design": <SiApachekafka className="text-black dark:text-white" />,
        "Code Review": <SiCodemirror className="text-yellow-500" />,
        "Agile Methodologies": <SiApachekafka className="text-orange-500" />,
    };
    const experiences = [
        {
  company: "Kaoba",
  href: "",
  badges: [
    "Next.js",
    "Spring Boot",
    "PostgreSQL",
    "Supabase",
    "Cloudinary",
    "Tailwind CSS",
    "Bootstrap",
    "WordPress",
    "Mailing System"
  ],
  location: "Had soualem, Morocco",
  title: "Full Stack Developer Intern",
  logoUrl: "/images.png",
  period: "Jul 2025 - Aug 2025",
  description:
    "Completed a full-stack internship at Kaoba, contributing to both maintenance tasks and the development of a modern web platform.",
  achievements: [
    "Maintained and customized existing WordPress websites",
    "Developed a full-stack platform using Next.js and Spring Boot",
    "Integrated Cloudinary for image management and Supabase for backend services",
    "Designed responsive UI using Tailwind CSS and Bootstrap",
    "Implemented an email/mailing system for customer communication",
    "Worked with PostgreSQL for data persistence and management"
  ]
},
      {
  company: "Commune of Sidi Bennour",
  href: "",
  badges: [
    "HTML",
    "CSS",
    "Tailwind CSS",
    "JavaScript",
    "PHP",
    "MySQL",
    "XAMPP"
  ],
  location: "Sidi Bennour,Morocco",
  title: "Web Developer",
  logoUrl: "",
  period: "Apr 2024 - Jun 2024",
  description:
    "Developed a web application for managing taxes on non-built land (TNB).",
  achievements: [
    "Designed a user-friendly interface for clients and administrators",
    "Implemented user authentication and account management system",
    "Developed land and tax management features using PHP and MySQL",
    "Integrated payment tracking and reporting functionalities",
    "Ensured data security and access control for administrators"
  ]
},
       {
  company: "Chambre d'agriculture of El Jadida",
  href: "",
  badges: ["HTML", "CSS", "JavaScript", "PHP", "MySQL", "Bootstrap", "Tailwind CSS"],
  location: "El Jadida, Morocco",
  title: "Web Developer",
  logoUrl: "",
  period: "Aug 2023 - Sep 2023",
  description:
    "Developed a simple company website for the Chambre d'agriculture of El Jadida with essential features for user interaction.",
  achievements: [
    "Designed a responsive and user-friendly interface showcasing company information",
    "Implemented contact forms and basic options for user interaction",
    "Used PHP and MySQL to manage dynamic content",
    "Applied Bootstrap and Tailwind CSS for styling and responsiveness"
  ]
}

    ];
    const services = [
        {
            icon: <Code className="h-10 w-10 text-primary" />,
            title: "Web Application Development",
            description: "Full-stack development of responsive, high-performance web applications using modern stacks like React, Next.js, and Node.js",
            technologies: ["React", "Next.js", "Express", "PostgreSQL"]
        },
        {
            icon: <Cpu className="h-10 w-10 text-primary" />,
            title: "Process Automation",
            description: "Building custom automation solutions for data extraction, workflow optimization, and business process streamlining",
            technologies: ["Python", "Selenium", "BeautifulSoup", "Puppeteer"]
        },
        {
            icon: <Smartphone className="h-10 w-10 text-primary" />,
            title: "Cross-Platform Mobile Apps",
            description: "Development of performant mobile applications for iOS and Android using React Native",
            technologies: ["React Native", "Expo", "Firebase", "Redux"]
        },
        {
            icon: <Cloud className="h-10 w-10 text-primary" />,
            title: "Cloud & DevOps Solutions",
            description: "Implementing CI/CD pipelines, cloud infrastructure, and deployment automation",
            technologies: ["AWS", "Docker", "GitHub Actions", "Vercel"]
        }
    ];

    const education = [
        {
            degree:"Software Engineering",
            institution: "National Higher School of Artificial Intelligence and Data Sciences, Taroudant",
            period: "2024 - Present",
            focus: "Systems Architecture · AI Engineering · Cloud Computing",
            courses: ["Distributed Systems", "Machine Learning", "DevOps Practices"]
        },
        {
            degree:"Diploma in Computer Science",
            institution: "Higher School of Technology, Sidi Bennour",
            period: "2022 - 2024",
            focus: "Full-Stack Development · Databases · System Design",
            courses: ["Web Technologies", "Database Management", "Software Engineering"]
        },
        {
            degree:"Baccalaureate in Science",
            institution: "National High School Imame Elgazali, Casablanca",
            period: "2022",
            focus: "Computer Science · Mathematics · Physics",
            honors: "Graduated with distinction in technical sciences"
        },
    ];
    return (
        <section id="about" className="py-24 px-10 relative">
            <div className="absolute inset-0 -z-10 overflow-hidden">
                <div className="absolute bottom-1/3 left-1/4 w-96 h-96 bg-purple-500/5 rounded-full blur-3xl" />
            </div>

            <div className="container px-4 sm:px-6">
                <motion.div
                    className="max-w-3xl mx-auto text-center mb-16"
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                >
                    <Badge className="mb-4 px-4 py-1 text-sm" variant="secondary">
                        About Me
                    </Badge>
                    <h2 className="text-3xl sm:text-4xl drop-shadow-[0_0_13px_rgba(59,59,59,1)] dark:drop-shadow-[0_0_20px_rgba(200,200,200,1)] md:text-5xl font-bold tracking-tight mb-4">
                        My Journey & Expertise
                    </h2>
                    <p className="text-muted-foreground md:text-lg max-w-2xl mx-auto px-10">
                        A passionate developer creating exceptional digital experiences through design and code.
                    </p>
                </motion.div>

                <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
                    <motion.div
                        className="relative max-w-md mx-auto lg:mx-0"
                        initial={{ opacity: 0, x: -50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <AboutStars />
                        <div className="relative p-5 w-full aspect-square">
                            <img
                                src="/HamzaBENCHAOUI.png"
                                alt="Hamza BENCHAOUI"
                                className="w-full px-5 h-auto rounded-full object-contain"
                            />
                        </div>

                        <h3 className="text-lg hidden md:block sm:text-xl font-semibold mt-6">
                            My Skills
                        </h3>

                        <div className="md:flex  hidden  flex-col items-center justify-center gap-2 pt-2">
                            <div className={'grid grid-cols-5 items-center justify-center gap-2'}>

                                {skills.map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="secondary"
                                        className="flex items-center gap-1 rounded-full px-3 py-1 bg-background/30 backdrop-blur-sm border border-border text-xs"
                                    >
                  <span className="flex-shrink-0">
                    {skillIcons[skill]}
                  </span>
                                        <span>{skill}</span>
                                    </Badge>
                                ))}
                            </div>

                        </div>

                    </motion.div>

                    <motion.div
                        className="space-y-6 flex flex-col items-center justify-center"
                        initial={{ opacity: 0, x: 50 }}
                        whileInView={{ opacity: 1, x: 0 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.6 }}
                    >
                        <h3 className="text-2xl sm:text-3xl font-bold">
                            I'm <span className="text-primary">Hamza BENCHAOUI</span>
                        </h3>
                        <p className="text-muted-foreground px-10">
                         I'm Hamza BENCHAOUI, a Moroccan 🇲🇦 software engineer passionate about turning ideas into interactive and scalable applications. I specialize in building modern web applications using React, Next.js, Angular, Spring Boot, and Java. Through academic and personal projects, I’ve designed dashboards and developed data scraping solutions for e-commerce platforms.
                               </p>


                        <p className="text-muted-foreground mt-4">
                            I love building things that work — fast, clean, and with purpose. I’m currently open to freelance work and long-term collaborations where I can bring value through technology.
                        </p>

                        <div className="flex justify-center">
                            <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                                <div className="flex items-center gap-2">
                                    <Clock className="h-4 w-4 text-green-300" />
                                    <span className="text-sm">Available: 20hrs/week</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Award className="h-4 w-4 text-yellow-500" />
                                    <span className="text-sm">3+ Years Experience</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <BookOpen className="h-4 w-4 text-red-500" />
                                    <span className="text-sm">Continuous Learner</span>
                                </div>
                                <div className="flex items-center gap-2">
                                    <Briefcase className="h-4 w-4 text-blue-400" />
                                    <span className="text-sm">10+ Projects Completed</span>
                                </div>
                            </div>
                        </div>
                        <h4 className="text-lg md:hidden block sm:text-xl font-semibold mt-6">
                            My Skills
                        </h4>

                        <div className="flex md:hidden flex-wrap flex-col items-center justify-center gap-2 pt-2 px-10">
                            <div className={'grid grid-cols-3 gap-2'}>

                                {skills.map((skill) => (
                                    <Badge
                                        key={skill}
                                        variant="secondary"
                                        className="flex items-center gap-1 rounded-full px-3 py-1 bg-background/30 backdrop-blur-sm border border-border text-xs"
                                    >
                  <span className="flex-shrink-0">
                    {skillIcons[skill]}
                  </span>
                                        <span>{skill}</span>
                                    </Badge>
                                ))}
                            </div>

                        </div>


                        <IconCloud images={images} aria-label="My Skills"/>
                        <div>
                            <a href={'/Cv_Hamza_BENCHAOUI_STAGE.pdf'} download={'CV Hamza BENCHAOUI'}>
                                <Button className="flex items-center gap-2"
                                        variant="outline">
                                    <Download className="h-4 w-4" />
                                    Download Resume
                                </Button>
                            </a>

                        </div>
                    </motion.div>
                </div>

                <motion.div
                    initial={{ opacity: 0, y: 50 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.6 }}
                    className="max-w-4xl mx-auto p-5 px-10"
                >
                    <Tabs defaultValue="experience" className="w-full">
                        <TabsList className="grid grid-cols-3 w-full mb-8 bg-background">
                            <TabsTrigger value="experience">Experience</TabsTrigger>
                            <TabsTrigger value="education">Education</TabsTrigger>
                            <TabsTrigger value="services">Services</TabsTrigger>
                        </TabsList>

                        <TabsContent value="experience" className="space-y-6">

                            {experiences.map((exp, index) => (

                                <motion.div
                                    key={index}
                                    className=""
                                    initial={{ opacity: 0, y: 20 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{ duration: 0.4, delay: index * 0.1 }}
                                >
                                <ResumeCard
                                    key={exp.company}
                                    logoUrl={exp.logoUrl}
                                    altText={exp.company}
                                    title={exp.company}
                                    subtitle={exp.title}
                                    href={exp.href}
                                    badges={exp.badges}
                                    period={exp.period}
                                    description={exp.description}
                                    achievements={exp.achievements}
                                />

                                </motion.div>
                            ))}
                        </TabsContent>

                       <TabsContent value="education" className="space-y-1">
                            {education.map((edu, index) => (
                                <motion.div
                                    key={index}
                                    className="relative px-6 pt-4 pb-6 rounded-2xl border border-transparent bg-gradient-to-br from-card to-[#f0f4ff] dark:to-[#0f172a] shadow-sm group overflow-hidden"
                                    initial={{ opacity: 0, y: 30 }}
                                    whileInView={{ opacity: 1, y: 0 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        duration: 0.6,
                                        delay: index * 0.15,
                                        type: "spring",
                                        stiffness: 100
                                    }}
                                    whileHover={{
                                        y: -5,
                                        boxShadow: "0 10px 25px -5px rgba(0, 0, 0, 0.1), 0 8px 10px -6px rgba(0, 0, 0, 0.1)"
                                    }}
                                >
                                    {/* Animated background element */}
                                    <div className="absolute inset-0 w-1 bg-gradient-to-b from-blue-500 to-purple-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10 space-y-1">
                                        <div className="flex items-start gap-4">
                                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-2 rounded-lg shadow-md">
                                                <GraduationCapIcon className="h-6 w-6 text-white" />
                                            </div>
                                            <div>
                                                <h4 className="text-xl font-bold mt-0 leading-tight ...">

                                                    {edu.degree}
                                                </h4>
                                                <p className="text-muted-foreground mt-1 flex items-center gap-2">
                                                    <UniversityIcon className="h-4 w-4" />
                                                    {edu.institution} | {edu.period}
                                                </p>
                                            </div>
                                        </div>

            {/*                            {edu.focus && (*/}
            {/*                                <div className="mt-3 flex flex-wrap gap-2">*/}
            {/*<span className="px-3 py-1 bg-blue-100/50 dark:bg-blue-900/30 text-blue-700 dark:text-blue-300 rounded-full text-sm">*/}
            {/*  Focus: {edu.focus}*/}
            {/*</span>*/}
            {/*                                </div>*/}
            {/*                            )}*/}
                                    </div>
                                </motion.div>
                            ))}
                        </TabsContent>

                        <TabsContent value="services" className="grid sm:grid-cols-2 gap-6">
                            {services.map((service, index) => (
                                <motion.div
                                    key={index}
                                    className="relative p-6 rounded-2xl bg-gradient-to-br from-card to-[#f8fafc] dark:to-[#0f172a] border border-gray-100 dark:border-gray-800 shadow-sm group overflow-hidden"
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    whileInView={{ opacity: 1, scale: 1 }}
                                    viewport={{ once: true, margin: "-50px" }}
                                    transition={{
                                        duration: 0.5,
                                        delay: index * 0.15,
                                        type: "spring"
                                    }}
                                    whileHover={{
                                        y: -8,
                                        scale: 1.02,
                                        boxShadow: "0 20px 25px -5px rgba(0, 0, 0, 0.1), 0 10px 10px -5px rgba(0, 0, 0, 0.04)"
                                    }}
                                >
                                    {/* Animated hover effect */}
                                    <div className="absolute inset-0 bg-gradient-to-r from-blue-500/5 to-purple-600/5 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />

                                    <div className="relative z-10 space-y-4">
                                        <div className="flex items-center gap-4">
                                            <div className="bg-gradient-to-r from-blue-500 to-purple-600 p-3 rounded-xl shadow-lg">
                                                {service.icon}
                                            </div>
                                            <h4 className="text-xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-gray-800 dark:from-white to-gray-600 dark:to-gray-300">
                                                {service.title}
                                            </h4>
                                        </div>

                                        <p className="text-muted-foreground pl-2 border-l-2 border-blue-500/30 dark:border-purple-500/30 transition-all duration-500 group-hover:border-blue-500 dark:group-hover:border-purple-500">
                                            {service.description}
                                        </p>

            {/*                            <div className="mt-4 flex flex-wrap gap-2">*/}
            {/*                                {service.technologies?.map((tech, i) => (*/}
            {/*                                    <span*/}
            {/*                                        key={i}*/}
            {/*                                        className="px-3 py-1 bg-gray-100 dark:bg-gray-800 rounded-full text-sm font-medium shadow-inner"*/}
            {/*                                    >*/}
            {/*  {tech}*/}
            {/*</span>*/}
            {/*                                ))}*/}
            {/*                            </div>*/}
                                    </div>
                                </motion.div>
                            ))}
                        </TabsContent>
                           </Tabs>
                </motion.div>
            </div>

        </section>
    );
}