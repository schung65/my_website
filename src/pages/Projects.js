import { motion as m } from "framer-motion"
import ProjectContainer from "../components/ProjectContainer"
import HomeScreenshot from "../pictures/Home.png"

export default function Projects() {
    return (
        <m.div className="projects-container"
            initial={{y: "100%"}}
            animate={{y: 0}}
            exit={{y: "100%", opacity: 0}}
            transition={{duration: 0.05, type: "spring", damping: 12, stiffness: 80}}>
            <h1 className="about-header">Projects</h1>
            <div className="projects-list">
                <ProjectContainer src={HomeScreenshot} 
                    name="Personal Website" 
                    text="I built this website using HTML, CSS, JavaScript, and ReactJS.
                    I used Figma to draw up the original UI design."
                    link="https://github.com/schung65/my_website"/>
            </div>
        </m.div>
    )
}