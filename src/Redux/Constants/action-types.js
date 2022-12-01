export const ActionTypes = {
    FETCH_CHARACTERS: "FETCH_CHARACTERS", //to fetch the characters from the api
    SET_CHARACTERS: "SET_CHARACTERS",     //to render the character in the characterlisting page
    SELECTED_CHARACTER: "SELECTED_CHARACTER",  //to go the the specific character in the characterdetails page
    REMOVE_SELECTED_CHARACTER: "REMOVE_SELECTED_CHARACTER",  //we remove the previous selecteed character when 
                                                             // we select a new character to see the details
  };