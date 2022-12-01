import React from 'react';
import { useSelector } from "react-redux";
import {Link} from "react-router-dom"

const CharacterComponent =({characterId}) => {
  
  const characters = useSelector((state) => state.allCharacters.characters);
  const renderList=characters.map((character)=>{
    characterId++;
    const {name, gender,culture} = character;
    
    
    return(
      <div className="cardholder" key={characterId}>
        <Link to={`characters/${characterId}`}>
         <div className="card" style={{width: '18rem'}}>
         <div className="card-body">
          <h4 className="card-title">{name}</h4>
          <p className="card-text">{gender}</p>
          <p className="card-text">{culture}</p>
          </div>
          </div>
        </Link>
    </div>
    )
    
  });
  return  <>{renderList}</>

}


export default CharacterComponent