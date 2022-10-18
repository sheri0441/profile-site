import Section from '../Components/Section';
import pic from '../Asset/sheharyar.png'
import data from '../Data.json';
import './About.scss';

const About = () => {
    const aboutData = data.About[0]

    const textArea = aboutData.bio.map((p, i) => {
        return <p key={i} >{p}</p>
    })

    const skillArea = aboutData.skills.map((p,i) => {
        return <p key={i} className="skill">{p}</p>
    })

    return(
        <Section title={'about'}>
            <div  className='about-content'>
                <div>
                    <div className='text-area'>
                        {textArea}
                    </div>
                    <div className='skill-area'>
                        <h3>My Skills</h3>
                        <div className='skill-list'>
                            {skillArea}
                        </div>
                    </div>
                </div>
                <img src={pic} alt='' />
            </div>
         </Section>
    )
}

export default About;