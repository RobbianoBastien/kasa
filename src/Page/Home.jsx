import Data from "../assets/Data/data.json"


function home() {
    return (<div>
        <header />
        {Data.map((appartement, index) => (
    <li key={index}>{ appartement.title }</li>
))}
    </div>)
}

export default home

