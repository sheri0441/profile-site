import './ProjectItem.scss';
import picture from '../Asset/pattern4.png'

const ProjectItem =({image, link, projectName, role}) => {
    return(
        <a href={link} className='project-item'>
            <div>
                <img className='project-image' src={image} alt={projectName} />
                <div>
                    <h3 className='project-title'>{projectName}</h3>
                    <div className='project-role'>
                        <p className='role'>{role}</p>
                        <p className='view'>View Project</p>

                    </div>
                </div>
            </div>
        </a>
    )
}

export default ProjectItem;