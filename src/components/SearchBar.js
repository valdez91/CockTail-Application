import React,{useState} from "react";

const SearchBar=({onSearch})=>{
    const [search, setSearch]=useState('');

    const handleSearch=(event)=>{
        setSearch(event.target.value);
        onSearch(event.target.value);
    }
    return (
        <div>
            <input type="text" 
            value={search} 
            onChange={handleSearch} 
            placeholder="Search..." />
        </div>
    )
}
export default SearchBar;