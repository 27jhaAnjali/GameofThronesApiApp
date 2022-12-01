import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import {
  fetchCharacter,
  removeSelectedCharacter,
} from "../Redux/Actions/characterAction";
import got from '../image/got.jpg'




const CharacterDetails = () => {
  
  let character = useSelector((state) => state.character);
  const { characterId } = useParams();
  const { aliases,name, gender,born,culture,tvSeries,playedBy} = character;
  const dispatch = useDispatch();
  // console.log(characterId)
  // console.log(character)

 
  useEffect(() => {
    if (characterId && characterId !== "") dispatch(fetchCharacter(characterId));
    return () => {
      dispatch(removeSelectedCharacter()); //cleanup
    };
  }, []);

  return (
    <div className="container" >
      {Object.keys(character).length === 0 ? (
        <h1 style={{margin:'30px'}}>...Loading</h1>
      ) : (
        <>
        <div >
        <img className="card-img-overlay" src={got} style={{maxWidth:'100%'}} alt='GameOfThrones'></img>
        <div className="card border border-dark mt-5 opacity-75 " style={{width: '50vw',height: '70vh'}}>
        <div className="card-body">
         <h1 className="card-title pb-2 mb-4 border-bottom border-danger">{name}</h1>
         <div className='mt-5'>
         <h4 className="card-text mt-3">culture:{culture}</h4>
         <h4 className="card-text mt-3">aliases:{aliases}</h4>
         <h4 className="card-text mt-3">born:   {born}</h4>
         <h4 className="card-text mt-3">gender: {gender}</h4>
         <h4 className="card-text mt-3">Actor: {playedBy}</h4>
         <h4 className="card-text mt-3">Appeared in: {tvSeries}</h4>
         </div>
         </div>
         </div>
         </div>
        </>
        
      )}
    </div>
  );
};
export default CharacterDetails;