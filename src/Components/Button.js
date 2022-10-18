import './Button.scss';

const Button = (props) =>{
    return(
        <a href={`#${props.id}`} className='btn'>
            {props.children}
        </a>
    )
}

export default Button;