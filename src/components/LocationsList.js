import React, { useEffect, useState } from "react";
import Axios from 'axios'
import LocationCard from './LocationCard';

export default function LocationsList() {
    const [Location, setLocation] = useState([])

    useEffect(() => {
        // TODO: Add API Request here - must run in `useEffect`
        //  Important: verify the 2nd `useEffect` parameter: the dependancies array!
        Axios.get('https://rickandmortyapi.com/api/location/ ')
             .then(res => {
               console.log('Res data: ', res)
               setLocation(res.data.results)
             })
             .catch(err => {
               console.log(err)
             })
      }, []);
      return (
        <section className="character-list">
          <h2>Locations of the show:</h2>
          <p>{Location.map( item=> {
            return <LocationCard 
                                key={item.id}
                                dimension={item.dimension}
                                name={item.name}
                                type={item.type} />
          })}</p>
        </section>
      );
}
