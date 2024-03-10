import pic1 from "../pictures/about3.1.jpeg"
import pic2 from "../pictures/about3.2.jpeg"
import pic3 from "../pictures/about3.3.jpeg"
import squiggle from "../pictures/about-squiggles.png"
import back from "../pictures/back-arrow.png"
import forward from "../pictures/forward-arrow.png"
import scrollToTop from "../Scroll"
import { Link } from "react-router-dom"
import { motion as m } from "framer-motion"

export default function About3() {
    return (
        <div>
            <Link to="/about/about2"
                onClick={scrollToTop}>
                <img className="back-arrow" src={back} alt="arrow"/>
            </Link>
            <Link to="/about/about4"
                onClick={scrollToTop}>
                <img className="forward-arrow" src={forward} alt="arrow"/>
            </Link>
            <m.div className="about2-container"
                initial={{y: "100%"}}
                animate={{y: 0}}
                exit={{y: "100%", opacity: 0}}
                transition={{duration: 0.05, type: "spring", damping: 12, stiffness: 80}}>
            <h1 className="about-header">About Me</h1>
                <div className="about-row-container">
                    <img className="about2-drop-shadow" src={pic1} alt="Unable to load"/>
                    <img className="about2-drop-shadow" src={pic2} alt="Unable to load" 
                        style={{width: 487, height: 358}}/>
                    <img className="about2-drop-shadow" src={pic3} alt="Unable to load"/>
                </div>
                <p className="about-text">I love to travel and explore new cultures!</p>
            </m.div>
            <img className="about-squiggle" src={squiggle} alt="Unable to load"/>
        </div>
    )
}