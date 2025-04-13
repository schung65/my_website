import about1 from "../pictures/about1.jpg"
import forward from "../pictures/forward-arrow.png"
import arrow from "../pictures/small-arrow.png"
import squiggles from "../pictures/about-squiggles.png"
import scrollToTop from "../Scroll"
import { Link } from "react-router-dom"
import { motion as m } from "framer-motion"

export default function About1() {
    return <> 
        <m.div className="about1-row-container"
            initial={{y: "100%"}}
            animate={{y: 0}}
            exit={{y: "100%", opacity: 0}}
            transition={{duration: 0.05, type: "spring", damping: 12, stiffness: 80}}>
            <div>
                <h1 className="about-header">About Me</h1>
                <p className="about1-text">I'm a fourth-year student at the University of Waterloo studying 
                    Computational Mathematics. I have past internship experience in data processing and mobile development.<br/><br/>
                    What sets me apart? Besides my bubbly personality, I'm a quick learner when 
                    it comes to picking up new technologies. I thrive on building strong relationships 
                    in the workplace, creating a positive and collaborative environment wherever I go.<br/><br/>
                    With four successful co-op terms under my belt, I'm ready to bring a mix of technical and people skills to any team. I'm eager to keep growing 
                    professionally and making my mark in the software engineering field!
                </p>
                <label className="swipe-icon">
                    Swipe for more info!
                    <img src={arrow} alt="&#8594;" height="15"/>
                </label>
            </div>
            <img className="about1-drop-shadow" src={about1} alt="Unable to load" loading="lazy"/>
        </m.div>
        <Link to="/about/about2"
            onClick={scrollToTop}
            style={{paddingLeft: 70}}>
            <img className="forward-arrow" src={forward} alt="arrow"/>
        </Link>
        <img className="about-squiggle" src={squiggles} alt="" />
    </>
}