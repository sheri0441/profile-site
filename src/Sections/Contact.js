import Form from '../Components/Form';
import Section from '../Components/Section';
import './Contact.scss';

const Contact = () => {
    return(
        <Section title={'contact'}>
            <div className='contact-content'>
                <p>Have any project or question, just send me message.</p>
                <Form/>
            </div>
        </Section>
    )
}

export default Contact;