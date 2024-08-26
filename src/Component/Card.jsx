import './Card.scss'
import { Link } from 'react-router-dom'

function Card({title,img,appartementid}) {
    return(
        <Link className='logement' to={`/logement/${appartementid}`}>
            <img className='logement__img' src={img} alt="" />
            <h2 className='logement__title'>{title}</h2>
        </Link>

    )

}

export default Card