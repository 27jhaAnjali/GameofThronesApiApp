import { ActionTypes } from "../Constants/action-types";
import gameofThrones from "../../apis/gameofThrones";


//function to fetch all the character from one page(limit 50)
export const fetchCharacters =(page) => {
 
return async function(dispatch)
{
  const response= await gameofThrones.get(`/characters?page=${page}&pageSize=50`)  //this page is passed through the dispatch 
  dispatch({type: ActionTypes.FETCH_CHARACTERS,payload: response.data});
}
}


//function to fetch a specefic character
export const fetchCharacter =(characterId) => async(dispatch) => {
  const response= await gameofThrones.get(`/characters/${characterId}`)
  dispatch({type: ActionTypes.SELECTED_CHARACTER,payload: response.data});
};


export const setCharacters = (characters) => {
  return {
    type: ActionTypes.SET_CHARACTERS,
    payload: characters,
  };
};

export const selectedCharacter = (character) => {
  return {
    type: ActionTypes.SELECTED_CHARACTER,
    payload: character,
  };
};
export const removeSelectedCharacter = () => {
  return {
    type: ActionTypes.REMOVE_SELECTED_CHARACTER,
  };
};