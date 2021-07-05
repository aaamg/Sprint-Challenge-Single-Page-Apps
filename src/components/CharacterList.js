import React, { useEffect, useState } from "react";
import Axios from 'axios'
import CharacterCard from './CharacterCard';
export default function CharacterList() {
  // TODO: Add useState to track data from useEffect
  const [Character, setCharacter] = useState([])

  useEffect(() => {
    // TODO: Add API Request here - must run in `useEffect`
    //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
    Axios.get('https://rickandmortyapi.com/api/character/')
         .then(res => {
           console.log('Res data: ', res)
           setCharacter(res.data.results)
         })
         .catch(err => {
           console.log(err)
         })
  }, []);

  return (
    <section className="character-list">
      <h2>Characters of the show:</h2>
      <p>{Character.map( item=> {
        return <CharacterCard 
                              key={item.id }
                              name={item.name} 
                              image={item.image} 
                              status={item.status}
                              gender={item.gender}
                              species={item.species}
                              />
      })}</p>
    </section>
  );
}
