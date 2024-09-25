import './Search.css'


const Search = ({search, setSearch, loading}) => {
    return ( 
        <div className=" input-box">
           
                <input type="text" placeholder="Search for a country..." value={search} 
                onChange={(e)=> setSearch(e.target.value)}/>
            
         
    
        </div>
     );
        

}
 
export default Search;