import './Card.scss'
import { Link } from 'react-router-dom'

function Card({title,img,appartementid}) {
    return(
        <Link className='logement__card' to={`/logement/${appartementid}`}>
            <img className='logement__card__img' src={img} alt="" />
            <h2 className='logement__card__title'>{title}</h2>
        </Link>

    )

}

export default Card