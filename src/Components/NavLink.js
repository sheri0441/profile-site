
import './NavLink.scss';

const NavLink = (props) => {
    return(
        <a href={`#${props.link}`} onClick={props.click} id={`l-${props.link}`} className='nav-link' > {`// ${props.link}`}</a>
    )
}

export default NavLink;