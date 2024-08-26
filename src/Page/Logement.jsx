import Data from "../assets/Data/data.json"
import React from "react";
import Tag from "../Component/Tag";
import {Navigate, useParams} from "react-router-dom"
import Carrousel from  "../Component/Carrousel"
import Host from "../Component/Host";
import Rating from "../Component/Rating";

function Logement() {
    let { id } = useParams();
    console.log(id)

    const FicheLogement = Data.find((logement) => logement.id === id);

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
    


    return (<div>
        <Carrousel slides={FicheLogement?.pictures} />
        <h2>{FicheLogement?.title}</h2>
        <span>{FicheLogement?.location}</span>
        <section>
            {TagsLogement}
        </section>
        <section>
        <Host 
        name={FicheLogement?.host.name}
        picture={FicheLogement?.host.picture}
        />   
        </section>
        <section>
        <Rating score={FicheLogement.rating} />
        </section>
    </div>)
}

export default Logement