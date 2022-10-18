import React, { useRef } from 'react';
import emailjs from '@emailjs/browser';
import './Form.scss'
import Input from './Input';

const Form = () => {

    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();

        emailjs.sendForm('service_5tskdjb', 'template_1f729op', form.current, 'sqtE4HOzTRQyWKXKA')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });

        document.getElementById('form').reset();

    };

//    const checkIt =() => {
//         const name = document.getElementById('name');
//         const subject = document.getElementById('subject');
//         const email = document.getElementById('email');
//         const message = document.getElementById('message');
//         console.log('wrking')
        
//         const logIt =() => {
//             console.log('okay');
//         };
        
        
//         // (name.value.trim() === '' && logIt());
//         (parseInt(name.value) === true && logIt())
//    }


    return(
        <form ref={form} id='form' onSubmit={sendEmail}>
            <Input id={'name'} type={'text'}/>
            <Input id={'subject'} type={'text'}/>
            <Input id={'email'} type={'email'}/>
            <Input id={'message'} type={'textarea'} />
            <button type='submit'>Submit</button>
        </form>
    )
}

export default Form;