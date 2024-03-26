import { FaMobile } from "react-icons/fa";
import { FaDatabase } from "react-icons/fa";
import { MdComputer } from "react-icons/md";
import { FaServer } from "react-icons/fa";
import { LuTestTube2 } from "react-icons/lu";
import { FaAws } from "react-icons/fa6";
import { SiAdobeindesign } from "react-icons/si";




export const servicesData = [
    {
        title: "Web Application Development",
        icon: <MdComputer size={40} style={{color: "#a855f7"}} />,
        description: "I develop fully fledged full-stack web applications using different technologies and tools, as you can see in technologies section"
    },

    {
        title: " Mobile App Development",
        icon: <FaMobile size={40} style={{color: "#3b82f6"}} />,
        description: "Creating cross-platform mobile applications for iOS and Android devices using frameworks like React Native or native development tools like Swift and Kotlin"
    },

    {
        title: "Database Design and Management",
        icon: <FaDatabase size={40}  style={{color: "#a855f7"}}/>,
        description: "Designing efficient and scalable database architectures, implementing data models, and optimizing database performance using technologies like MongoDB, PostgreSQL, and MySQL."
    },

    {
        title: "API Development and Integration",
        icon: <FaServer size={40}  style={{color: "#3b82f6"}}/>,
        description: "Building robust APIs (Application Programming Interfaces) for seamless integration between different systems and services, ensuring data consistency and interoperability."
    },

    {
        title: "Software Testing and Quality Assurance",
        icon: <LuTestTube2 size={40}  style={{color: "#a855f7"}}/>,
        description: "Conducting comprehensive testing strategies, including unit testing, integration testing, and end-to-end testing, to identify and resolve bugs and ensure software quality"
    },

    {
        title: "Cloud Services and Deployment",
        icon: <FaAws size={40}  style={{color: "#3b82f6"}}/>,
        description: "Deploying applications to cloud platforms like AWS, Azure, or Google Cloud, optimizing infrastructure, and implementing continuous integration and continuous deployment (CI/CD) pipelines."
    },

    {
        title: "Software Design",
        icon: <SiAdobeindesign size={40}  style={{color: "#a855f7"}}/>,
        description: "Creating intuitive and user-centric software designs, focusing on user experience (UX) and interface (UI) design, to enhance usability and overall user satisfaction."
    },

    
]