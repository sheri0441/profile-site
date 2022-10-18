import './Section.scss'
// import { InView } from 'react-intersection-observer';

const Section = (props) => {
    // const { ref, inView, entry } = useInView({
    //     /* Optional options */
    //     threshold: 0,
    //   });

    return(
                <section ref={props.value} className='section' id={props.title}>
                    <h2 >{`${props.title}`}</h2>
                        {props.children}
                </section>

    )
}

export default Section;