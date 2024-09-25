import { useState, useEffect } from "react"
import "./DropDown.css"
import{CaretDown, CaretRight, CaretUp, Horse} from "phosphor-react";


const DropDown = ({select, setSelect}) => {
    const [isOpen, setIsOpen] = useState(false);


    const handleSelect = (region) => {
        setSelect(region);
        setIsOpen(false); // Stänger dropdown när ett val görs
      };

      useEffect(() => {
        const handleClickOutside = (event) => {
          if (!event.target.closest('.drop-down')) {
            setIsOpen(false);
          }
        };
        window.addEventListener('click', handleClickOutside);
    
        return () => {
          window.removeEventListener('click', handleClickOutside);
        };
      }, []);



        return(

            <div className="drop-down">
            <button className="dropdown" onClick={()=> setIsOpen(!isOpen)} >
            Region
            {!isOpen ? (
                <CaretUp size={20}/>
            ): (
                <CaretDown size={20}/> 
            )}        
            </button>

            {isOpen && (
                <div className="open">
             <ul>
              {select.map((s, i) => (
                 <p
                 key={i} className="dropdown-list-item" onClick={() => handleSelect(s.region)}>
                 {s.region}</p>
                
              ))}
            </ul>
          
         
                </div>
            )}
            
    
      </div>
     )
}
 
export default DropDown;