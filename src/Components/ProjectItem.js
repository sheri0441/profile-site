import './ProjectItem.scss';
import picture from '../Asset/pattern4.png'

const ProjectItem =() => {
    return(
        <a href='#' className='project-item'>
            <div>
                <img className='project-image' src={picture} alt='' />
                <div>
                    <h3 className='project-title'>Title</h3>
                    <div className='project-role'>
                        <p className='role'>Role I Played</p>
                        <p className='view'>View Project</p>

                    </div>
                </div>
            </div>
        </a>
    )
}

export default ProjectItem;