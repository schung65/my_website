import { Link, useLocation } from "react-router-dom";
import scrollToTop from "./Scroll.js"
export default function NavBar () {
    return <nav className="stay-on-top">
        <Link to="/home">saera chung</Link>
        <ul>
            <CustomLink to="/home">home</CustomLink>
            <CustomLink to="/about">about</CustomLink>
            <CustomLink to="/projects">projects</CustomLink>
            <CustomLink to="/connect">connect</CustomLink>
        </ul>
    </nav>
}

function CustomLink({to, children, ...props}) {
    let location = useLocation();
    const isActive = location.pathname.startsWith(to);

    return (
        <li>
            <Link to={to} {...props}
                onClick={scrollToTop}
                className={isActive ? "active" : ""}>
                {children}
            </Link>
        </li>
    )
}