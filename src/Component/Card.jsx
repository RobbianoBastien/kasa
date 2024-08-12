import './Card.scss'
import { Link } from 'react-router-dom'

function Card({title,img,appartementid}) {
    return(
        <Link to={`/logement/${appartementid}`}>
            <img src={img} alt="" />
            <h2>{title}</h2>
        </Link>

    )

}

export default Card