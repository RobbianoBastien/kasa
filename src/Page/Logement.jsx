import Data from "../assets/Data/data.json"
import {useParams} from "react-router-dom"

function Logement() {
    let { id } = useParams();
    console.log(id)
    return (<div>
        Logement
    </div>)
}

export default Logement