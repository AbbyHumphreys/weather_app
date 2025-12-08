import React from "react";

export default function SearchBar (){
   
  return (
      <>
        <section className="searchbar-section">
            <form action="#">
                <input className="search-box" type="text" placeholder="Search for a city..." />
                <input className="button" type="submit" value="Search" />
            </form>
        </section>
        
      </>
    );
}