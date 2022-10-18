import Button from '../Components/Button';
import data from '../Data.json'
import './Hero.scss';

const Hero = (props) => {
    const heroData = data.Hero[0]

    return(
        <section ref={props.value} className='hero' id='home'>
            <div className='hero-content'>   
                <p>Hi! I am</p>
                <h1>{heroData.name}</h1>
                <p className='pro'>{heroData.mainrole}</p>
                <Button id={'contact'}>
                    Contact
                </Button>
            </div>
            
        </section>
    )
}

export default Hero;