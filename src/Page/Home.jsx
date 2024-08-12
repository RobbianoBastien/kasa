import Data from "../assets/Data/data.json"
import Banner from "../Component/Banner"
import BannerImg from '../assets/image/Kassa-Banner.png'
import Card from "../Component/Card"

function home() {
    return (<div>
        <Banner 
        img = {BannerImg}
        title='Chez vous, partout et ailleurs'
        />
        {Data.map((appartement) => (
            <Card 
            key={appartement.id}
            appartementid={appartement.id}
            title={appartement.title}
            img={appartement.cover}
            />
))}
    </div>)
}

export default home

