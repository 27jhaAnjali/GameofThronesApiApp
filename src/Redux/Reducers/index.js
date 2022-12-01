import { combineReducers } from "redux";
import { characterReducer, selectedCharactersReducer } from "./CharacterReducer";


const reducers = combineReducers({
  allCharacters: characterReducer,
  character: selectedCharactersReducer,
});
export default reducers;