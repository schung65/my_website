import { motion as m } from "framer-motion"

export default function Projects() {
    return (
        <m.div className="projects-container"
            initial={{y: "100%"}}
            animate={{y: 0}}
            exit={{y: "100%", opacity: 0}}
            transition={{duration: 0.05, type: "spring", damping: 12, stiffness: 80}}>
            <h1 className="about-header">Projects</h1>
            <p className="about-text">Check back for updates!</p>
        </m.div>
    )
}