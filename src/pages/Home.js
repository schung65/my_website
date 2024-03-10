import homeImage from "../pictures/home.jpeg"
import squigTop from "../pictures/home-top-squiggles.png"
import squigBottom from "../pictures/home-bottom-squiggles.png"
import speaker from "../pictures/speaker.png"
import { motion as m } from "framer-motion"

function speak(text) {
    const speechSynthesis = window.speechSynthesis;
    const utterance = new SpeechSynthesisUtterance(text);
    speechSynthesis.speak(utterance);
}

export default function Home() {
    return (
        <div>
            <m.div className="row-container"
                initial={{y: "100%"}}
                animate={{y: 0}}
                exit={{y: "100%", opacity: 0}}
                transition={{duration: 0.05, type: "spring", damping: 12, stiffness: 80}}>
                <div className="col-container">
                    <div className="speaker-text">
                        <h1 className="home-text">Hi,<br/>I'm Saera!</h1>
                        <img onClick={() => speak("Sarah")} src={speaker} alt="" height="64"/>
                    </div>
                    <a href="Saera_Chung_Resume.pdf" download="Saera-Chung-Resume.pdf">
                        <button className="resume-button">
                            <span>Download my resume</span> 
                        </button>
                    </a>
                </div>
                <img className="home-drop-shadow" src={homeImage} alt="Unable to load"/>
            </m.div>
            <img className="home-top-squig" src={squigTop} alt="" />
            <img className="home-bottom-squig" src={squigBottom} alt="" />
        </div>
    )
}