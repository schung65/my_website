import OpenInNewIcon from '@mui/icons-material/OpenInNew';
import { useState } from 'react';

export default function ProjectContainer({name, text, src, link}) {
    const [isHovered, setIsHovered] = useState(false);
    return (
    <a href={link} target="_blank" rel="noreferrer">
        <div className="project" 
            onMouseEnter={() => setIsHovered(true)} 
            onMouseLeave={() => setIsHovered(false)}>
            <img src={src} alt="My personal website homepage" />
            <label className="label">
                <p>
                    <span>{name}</span>
                    {isHovered && <OpenInNewIcon className="open-icon" />}
                    </p>
            </label>
            <p className="more-info-text">{text}</p>
        </div>
    </a>
    );
}