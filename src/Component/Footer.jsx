import Logo from "../assets/image/KasaB&W.png"
import './Footer.scss'

function footer(){
    return(
    <div className="footer">
        <img className="footer__logo" src={Logo}  />
        <p className="footer__txt">© 2020 Kasa. All rights reserved</p>
    </div>
    )
}

export default footer