import { Link } from 'react-router-dom'
import './Header.scss'
import Logo from "../assets/image/LOGO.png"
function header() {
    return (
        <div>
            <img src={Logo}/>
            <nav>
                <Link to="/">Acceuil</Link>
                <Link to="/about">A Propos</Link>
            </nav>
        </div>
    )
}

export default header