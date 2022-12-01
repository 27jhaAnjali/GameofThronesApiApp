import React from 'react'
import CharacterComponent from './CharacterComponent';
import { useEffect, useState} from "react";
import { useDispatch, useSelector } from "react-redux";
import {fetchCharacters} from "../Redux/Actions/characterAction";


//list of all the character
const CharacterListing = ()=> {
  const [page, setPageNum] = useState(1);
  const [characterId, setCharacterId] = useState(0);
   

  const characters = useSelector((state) => state);
  const dispatch=useDispatch();
 
        useEffect(() => {
        dispatch ( fetchCharacters(page));
        window.scrollTo({top: 0, left: 0, behavior: 'smooth'});
        },[page]);

        console.log("Characters:" ,characters);

  return (
    <>
   
      {/* <img className="card-img-overlay img-fluid" src={got} style={{backgroundRepeat:'repeat-y',maxWidth:'100vw',maxHeight:'100vw'}} alt='GameOfThrones'></img> */}
    
    <div className='row g-5 col g-5 ' style={{marginTop:'2%',zIndex:'1'}}>
       <div className="row row-cols-4" style={{border:'3%'}} >
       <CharacterComponent characterId={characterId}/>   
       </div>
       </div>
       {/* pagination to go to the next set of characters  */}
    <ul className="pagination justify-content-center" style={{marginTop:'3%',color:'grey'}}>
      <li className="page-item" style={{color:'grey'}}><button className="page-link" onClick={()=>{
        setPageNum((page)=>page-1);   //  this page is sent in the dispatch to access the previos page of the api
        setCharacterId((characterId)=>characterId-50) 
      }} >Previous</button></li>
      
      <li className="page-item" style={{color:'grey'}}><button className="page-link" onClick={()=>{
        setPageNum((page)=>page+1);  // this page is sent in the dispatch to access the next page of the api

        setCharacterId((characterId)=>characterId+50) //adding 50 as we access 50 characters in 1 page of the 
        //api so the next set of characters get thier character id as per count so that we can acess specefic
        // character for the character details page
      }} >Next</button></li>
    </ul>
    
   </>
  
  )

  }
export default CharacterListing

