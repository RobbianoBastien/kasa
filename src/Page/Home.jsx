import Data from "../assets/Data/data.json"
import Banner from "../Component/Banner"
import BannerImg from '../assets/image/Kassa-Banner.png'
import Card from "../Component/Card"
import "./Home.scss"

function home() {
    return (<div>
        <div>
        <Banner 
        img = {BannerImg}
        title='Chez vous, partout et ailleurs'
        />
        </div>
        <div className="logements">
        {Data.map((appartement) => (
            <Card 
            key={appartement.id}
            appartementid={appartement.id}
            title={appartement.title}
            img={appartement.cover}
            />
))}
        </div>
    </div>)
}

export default home

