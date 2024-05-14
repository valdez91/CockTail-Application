import React from "react";
import SearchBar from "./SearchBar";
import CockTailBar from "./CockTailBar";


const PageDetails=()=>{

    const handleSearch = (searchValue)=>{
        console.log(searchValue);
    }
    
    return (
        <div>
            
            <SearchBar onSearch={handleSearch}/>
            <CockTailBar />
        </div>
    )
}
export default PageDetails;