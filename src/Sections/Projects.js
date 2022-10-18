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
                        <ProjectItem key={a.num} link={a.link} projectName={a.projectName} role={a.role} image={a.image} />
                        )
                })}
            </div>
        </Section>
    )
}

export default Projects;