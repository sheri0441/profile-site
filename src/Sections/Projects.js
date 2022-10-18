import Section from '../Components/Section';
import ProjectItem from '../Components/ProjectItem';
import data from '../Data.json';

import './Projects.scss';



const Projects = () => {
    const dataProject = data.Projects.projectlist;

    
    return(
        <Section title={'projects'}>
            <div className='project-list'>
                {dataProject.map((a) => {
                    return(

                        <a href={a.link} key={a.num} target='_blank' rel="noreferrer" className='project-item'>
                        <div>
                        <img className='project-image' src={a.image} alt='' />
                        <div>
                            <h3 className='project-title'>{a.projectName}</h3>
                            <div className='project-role'>
                                <p className='role'>{a.role}</p>
                                <p className='view'>View Project</p>
        
                            </div>
                        </div>
                    </div>
                    </a>
                        )
                })}
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
                <ProjectItem />
            </div>
        </Section>
    )
}

export default Projects;