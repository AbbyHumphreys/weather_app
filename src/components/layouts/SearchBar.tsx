import React from "react";

export default function SearchBar (){
   
  return (
      <>
        <section>
            <div className="searchbar-section">
                <form action="#">
                    <input type="text" placeholder="Search for a city..." />
                    <input type="submit" value="Search" />
                </form>
            </div>
        </section>
        
      </>
    );
}