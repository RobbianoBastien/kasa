import { Link } from 'react-router-dom'
import './Header.scss'
import Logo from "../assets/image/LOGO.png"
function header() {
    return (
        <div className='header'>
            <img className='header__logo' src={Logo}/>
            <nav className='header__navigation'>
                <Link className='header__navigation__home' to="/">Acceuil</Link>
                <Link className='header__navigation__about' to="/about">A Propos</Link>
            </nav>
        </div>
    )
}

export default header