import React, { useState } from "react";

export default function SearchForm() {
  const [search, setSearch] = useState({name: ""});

  const handleUserChange = banana => {
    console.log("changed", banana.target.name, banana.target.value);
    setSearch({...search, [banana.target.name]: banana.target.value});
  };

  const handleSubmit = event => {
    event.preventDefault();
   console.log(search);
  };

  return (
    <section className="search-form">
      <form onSubmit={event => handleSubmit(event)}>
        <label htmlFor="search">
          Search: 
          <input 
                id="search" 
                name="search"
                placeholder="Search here"
                value={search.name}
                onChange={handleUserChange}
                type="text"/>
        </label>
        <button type="submit">Submit</button>
      </form>
    </section>
  );
}
