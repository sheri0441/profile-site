
import Logo from '../Components/Logo';
import Navigtion from '../Components/Navigation';
import './Header.scss';

const Header = (props) => {



    return(
        <header className='header'>
            <div className={(props.LogoState === "preloader")? 'header-div preLoaderState' : 'header-div'}>
                <Logo state={props.LogoState} />
                {!(props.LogoState === 'preloader') && <Navigtion current={props.current} />}
            </div>
        </header>
    )
}

export default Header;