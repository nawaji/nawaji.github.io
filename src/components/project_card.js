import { FaLink } from "react-icons/fa6";

const project_card = ({project}) => {
    let image = project.bgImage
    return (
        <div className='project-card'>
            <div className='project-title'>{project.title}</div>
            <img src={image} alt='project'/>
            <ul className='project-links'>
            <a href={project.sourceLink}><li className='int-button' >Github<FaLink className='ext-link-icon' /></li></a>
            <a href={project.liveLink}><li className='int-button'>Website<FaLink className='ext-link-icon' /></li></a>
            </ul>
        </div>
    )        
};

export default project_card;