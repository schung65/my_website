import NavBar from "./NavBar"
import Connect from "./pages/Connect"
import Home from "./pages/Home"
import Projects from "./pages/Projects"
import About1 from "./pages/About1"
import About2 from "./pages/About2"
import About3 from "./pages/About3"
import About4 from "./pages/About4"
import About5 from "./pages/About5"
import {Route, Routes, useLocation} from "react-router-dom"
import { AnimatePresence } from "framer-motion"

export default function App () {
    const location = useLocation();
    return (
        <>
        <NavBar />
        <AnimatePresence initial={false} mode={"wait"}>
            <Routes location={location} key={location.pathname}>
                    <Route path="/" element={<Home />} />
                    <Route path="/home" element={<Home />} />
                    <Route path="/about" element={<About1 />} />
                    <Route path="/about/about2" element={<About2 />} />
                    <Route path="/about/about3" element={<About3 />} />
                    <Route path="/about/about4" element={<About4 />} />
                    <Route path="/about/about5" element={<About5 />} />
                    <Route path="/projects" element={<Projects />} />
                    <Route path="/connect" element={<Connect />} />
            </Routes>
        </AnimatePresence>
        </>
    )
}