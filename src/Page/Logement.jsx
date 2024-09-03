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
    
    const firstname = FicheLogement?.host.name.split(" ")[0]
    const lastname = FicheLogement?.host.name.split(" ")[1]

    

    


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
      console.log(FicheLogement?.description)


    return (<div className="logement">
        <div className="logement__carrousel">
        <Carrousel slides={FicheLogement?.pictures} />
        </div>
        <div className="logement__description">
        <section className="logement__description__texte">
        <h2>{FicheLogement?.title}</h2>
        <span>{FicheLogement?.location}</span>
        </section>
        <section className="logement__description__profile">
        <Host 
        firstname={firstname}
        lastname={lastname}
        picture={FicheLogement?.host.picture}
        />   
        </section>
        </div>
        <div className="logement__pictogramme">
        <section className="logement__pictogramme__tags">
            {TagsLogement}
        </section>
        <section className="logement__pictogramme__stars">
        <Rating score={FicheLogement.rating}/>
        </section>
        </div>
        <section className="logement__dropdown">
          <div className="logement__dropdown__description">
            <DropDown 
            title='Description'
            content={FicheLogement?.description}
            />
          </div>
          <div className="logement__dropdown__equipements">
            <DropDown
            title='Équipements'
            content={equipements}
            />
          </div>
        </section>
    </div>)
}

export default Logement