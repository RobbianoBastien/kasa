import Data from "../assets/Data/data.json"
import React from "react";
import Tag from "../Component/Tag";
import {Navigate, useParams} from "react-router-dom"
import Carrousel from  "../Component/Carrousel"
import Host from "../Component/Host";
import Rating from "../Component/Rating";
import './Logement.scss'
import NotFound from "./NotFound";
import DropDown from "../Component/DropDown";

function Logement() {
    let { id } = useParams();
    console.log(id)

    const FicheLogement = Data.find((logement) => logement.id === id);

    if(FicheLogement == undefined){
      return <NotFound />
    }
      
    

    console.log(FicheLogement)


    const TagsLogement = FicheLogement?.tags.map((tags, i) => {
        return <Tag key={i} nom={tags} />;
    });

    const equipements = FicheLogement?.equipments.map((equipment, i) => {
        return (
          <ul key={i}>
            <li>{equipment}</li>
          </ul>
        );
      });
    


    return (<div className="logement">
        <Carrousel slides={FicheLogement?.pictures} />
        <div className="logement_texte">
        <h2>{FicheLogement?.title}</h2>
        <span>{FicheLogement?.location}</span>
        </div>
        <section>
            {TagsLogement}
        </section>
        <section>
        <Host 
        name={FicheLogement?.host.name}
        picture={FicheLogement?.host.picture}
        />   
        </section>
        <Rating score={FicheLogement.rating}/>
        <section>
          <div>
            <DropDown/>
          </div>
          <div>

          </div>
        </section>
    </div>)
}

export default Logement