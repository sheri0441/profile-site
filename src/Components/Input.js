import './Input.scss';

const Input = (props) => {
    return(
        <div className='input'>
            <label htmlFor={props.id}>{props.id}</label>
            {(props.type === 'textarea')? 
            <textarea name={props.id} id={props.id} rows='5' required ></textarea> 
            : <input required name={props.id} id={props.id} type={props.type} />}
        </div>
    )
}

export default Input;