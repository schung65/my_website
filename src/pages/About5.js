import pic1 from "../pictures/about5.1.jpeg"
import pic2 from "../pictures/about5.2.jpeg"
import pic3 from "../pictures/about5.3.jpg"
import squiggle from "../pictures/about-squiggles.png"
import back from "../pictures/back-arrow.png"
import scrollToTop from "../Scroll"
import { Link } from "react-router-dom"
import { InstagramEmbed } from "react-social-media-embed";
import { motion as m } from "framer-motion"

export default function About5() {
    return<div>
        <Link to="/about/about4"
            onClick={scrollToTop}>
            <img className="back-arrow" src={back} alt="arrow"/>
        </Link>
        <m.div className="about2-container"
                initial={{y: "100%"}}
                animate={{y: 0}}
                exit={{y: "100%", opacity: 0}}
                transition={{duration: 0.05, type: "spring", damping: 12, stiffness: 80}}>
            <h1 className="about-header">About Me</h1>
            <div className="about5-volleyball">
                <img className="about5-drop-shadow" src={pic1} alt="Unable to load"/>
                <img className="about2-drop-shadow" src={pic2} alt="Unable to load"/>
                <img className="about5-drop-shadow" src={pic3} alt="Unable to load"/>
            </div>
            <p className="about-text">I’ve played volleyball my whole life and still play for fun in my free time.</p>
            <div className="about5-instagram">
                <InstagramEmbed url="https://www.instagram.com/p/CyGU27hAxcw/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} />
                <InstagramEmbed url="https://www.instagram.com/reel/CvKW_tNgHCy/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} />
                <InstagramEmbed url="https://www.instagram.com/p/CxOT7lRAmUJ/?utm_source=ig_web_copy_link&igsh=MzRlODBiNWFlZA==" width={328} />
            </div>
            <p className="about5-text">I was an executive for the UWaterloo SERVE Volleyball Club as part of the promo team. Check out the instagram to see some of the posts and videos I’ve worked on!</p>
        </m.div>
        <img className="about-squiggle" src={squiggle} alt="Unable to load"/>
    </div>
}