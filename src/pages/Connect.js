import mail from "../pictures/linkedin.png"
import linkedin from "../pictures/mail.png"
import squiggles from "../pictures/connect-squiggles.png"
import EmailForm from "../EmailForm"
import { motion as m } from "framer-motion"

function copyEmail() {
    navigator.clipboard.writeText("s65chung@uwaterloo.ca");
    alert("Copied Saera's email to clipboard");
}

export default function Connect() {
    return (
        <div className="connect">
            <m.div
                initial={{y: "100%"}}
                animate={{y: 0}}
                exit={{y: "100%", opacity: 0}}
                transition={{duration: 0.05, type: "spring", damping: 12, stiffness: 80}}>
                <h1 className="about-header">Connect With Me</h1>
                <div className="row-container">
                    <div className="col-container">
                        <div className="connect-links">
                            <img src={linkedin} alt="" height="auto" width="auto" />
                            <a href="https://www.linkedin.com/in/saera-chung/"
                                target="_blank" rel="noreferrer">
                                linkedin.com/in/saera-chung
                            </a>
                        </div>
                        <div className="connect-links">
                            <img src={mail} alt="" height="30" width="auto" />
                            <a href="/connect" onClick={copyEmail}>s65chung@uwaterloo.ca</a>
                        </div>
                    </div>
                    <EmailForm />
                </div>
            </m.div>
            <img className="squiggles" src={squiggles} alt=""/>
        </div>

    )
}