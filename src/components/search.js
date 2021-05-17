import { useState } from "react"

const Search=({handleSearch})=>{
    
    const [value,setValue]=useState("")
    return (
        <div className="search-box">
            <input value={value} onChange={e=>{setValue(e.target.value)}}></input>
            <button onClick={()=>handleSearch(value)}>Search</button>
        </div>
    )
}
export default Search