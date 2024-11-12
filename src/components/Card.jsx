import "./Card.css";
import { NavLink, useLoaderData } from "react-router-dom";
import { ArrowLeft } from "phosphor-react";

import Skeleton,  { SkeletonTheme } from "react-loading-skeleton";
import { useSkeletonTheme } from "./SkeletonThemecontext";


const Card = ({ theme }) => {
  const skeletonTheme = useSkeletonTheme();
  const data = useLoaderData();
  const country = Array.isArray(data) ? data[0] : data;

  const borders = country.borders || [];


  const isLoading = !country; 

  

  const getResponsiveWidth = (defaultWidth) => {
    if ( window.innerWidth < 660 ){
      return "340px";
    } else if (window.innerWidth < 950 ) {
      return "500px";
    } else {
      return defaultWidth;
    }
   
   }

  return (

    <div className="main-box">

      <SkeletonTheme baseColor={skeletonTheme.color}color={skeletonTheme.color} highlightColor={skeletonTheme.highlightColor} >
      <div className="child1">
        <NavLink to={"/"} className="nav-link-back">
          <div className={`icon-container ${theme}`}>
            <ArrowLeft size={20} className="icon" />
          </div>
          <p className="back">Back</p>
        </NavLink>


    {isLoading ? (
      <div  style={{height: 600, display: 'flex',  alignItems: 'center'}}>
      <Skeleton height={300} width={getResponsiveWidth("500px")}   style={{ 
    boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", 
    borderRadius: "8px" 
  }} />
      </div>
    ) : (
      <img src={country.flags.svg} alt="flags" className="flag-card" />
    )}
       
      </div>
      <div className="child2">
        <div>
        {isLoading ? (
      <Skeleton height={30} width="200px" style={{ 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", 
        borderRadius: "8px" 
      }}/>
    ) : ( <h1> {country.name.common} </h1> )}
         
        </div>
        <div className="info-child2"> 
          <div className="item1">
            
            <p>
              Population:
              {isLoading ? (
      <Skeleton height={15} width="50px" style={{ 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", 
        borderRadius: "8px" 
      }} />
              ):(<span>{country.population}</span>)}
              
            </p>
            <p>
              Region:
              {isLoading ? (
      <Skeleton height={15} width="50px"  style={{ 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", 
        borderRadius: "8px" 
      }}/>
              ):(
              <span>{country.region}</span>
              )}
            </p>
            <p>
              Capital:
              
              {isLoading ? (
      <Skeleton height={15} width="60px" style={{ 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", 
        borderRadius: "8px" 
      }} />
              ):(
                <span>
                {country.capital?.length ? country.capital[0] : "N/A"}
                </span>
              )}
             
            </p>
            <p className="native-name">
              {" "}
              Native name:
              {isLoading ? (
      <Skeleton height={15} width="60px"  style={{ 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", 
        borderRadius: "8px" 
      }}/>
              ):(
              <span>{` ${
                Object.values(country.name.nativeName)[0].common
              }`}</span> )}
            </p>
          </div>

          <div className="item2">
            <p>
              {" "}
              Top Level Domain:
              {isLoading ? (
      <Skeleton height={15} width="40px"  style={{ 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", 
        borderRadius: "8px" 
      }}/>
              ):(
              <span>{country.tld}</span> )}
            </p>
            <p>
              {" "}
              Currencies:
              {isLoading ? (
      <Skeleton height={15} width="40px"  style={{ 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", 
        borderRadius: "8px" 
      }}/>
              ):(
              <span>{` ${
                Object.values(country.currencies).map(
                  (currency) => `${currency.name}`
                )[0]
              }`}</span>)}
            </p>
            <p>
              {" "}
              Language:         {isLoading ? (
      <Skeleton height={15} width="70px"  style={{ 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", 
        borderRadius: "8px" 
      }}/>
              ):( <span>{` ${Object.values(country.languages)[0]}`}</span>)}
            </p>
          </div>
        
        </div>
        
        <div className="border-container">
          <div className="border">
            <p className="border-countries">Border Countries:</p>
                        {isLoading ? (
      <Skeleton height={30} width="200px"  style={{ 
        boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.3)", 
        borderRadius: "8px" 
      }}/>
              ):(
                <div>
            {borders.length > 0 ? (
              <div className="border-links">
                {borders.map((border) => (
                  <NavLink
                    className="nav-link"
                    key={border}
                    to={`/country/${border}`}
                  >
                    {border}
                  </NavLink>
                ))}
              </div>
            ) : (
              <p className="no--border">
                This country has no border countries.
              </p>
            )}
            </div>
              )}
         
          </div>
         
        </div>
        
      </div>
      </SkeletonTheme>
    </div>
  );
};
export const cardLoader = async ({ params }) => {
  const { cca3 } = params;
  const res = await fetch(`https://restcountries.com/v3.1/alpha/${cca3}`);
  if (!res.ok) {
    throw new Error(`Could not fetch the country with cca3 code: ${cca3}  `);
  }
  return res.json();
};
export default Card;
