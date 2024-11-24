const project_card = ({project}) => {
    let image = project.bgImage
    console.log(image)
    return (
        <div className='project-card'>
        <img src={image} alt='project'/>
        <div className='project-title'>{project.title}</div>
        <ul className='project-links'>
          <li><a href={project.sourceLink}>Github</a></li>
          <li><a href={project.liveLink}>Link</a></li>
        </ul>
      </div>
    )
};

export default project_card;