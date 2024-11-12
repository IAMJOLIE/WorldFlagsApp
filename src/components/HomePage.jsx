import "react-loading-skeleton/dist/skeleton.css";
import { NavLink, useLoaderData } from "react-router-dom";
import "./HomePage.css";
import Search from "./Search";

import { useState, useEffect } from "react";
import DropDown from "./DropDown";
import CardSkeleton from "./CardSkeleton";


const HomePage = ({ theme, setTheme }) => {
  const countries = useLoaderData();
  const [search, setSearch] = useState("");
  const [filteredCountries, setFilteredCountries] = useState(countries);
  const [select, setSelect] = useState("");
  const [loading, setLoading] = useState(true);

  const regions = [
    { region: "All" },
    { region: "Europe" },
    { region: "Asia" },
    { region: "Africa" },
    { region: "Oceania" },
    { region: "Americas" },
  ];

  useEffect(() => {
    
    const visited = sessionStorage.getItem('hasVisited');
    if (!visited) {    
      setLoading(true);
      setTimeout(() => {
        setFilteredCountries(countries);
        setLoading(false); 
        sessionStorage.setItem('hasVisited', 'true'); 
      }, 800);
    } else {
      setFilteredCountries(countries);
      setLoading(false);
    }
  }, [countries]);

  useEffect(() => {
    let filtered = countries;
  
    if (select && select !== "All") {
      filtered = filtered.filter((country) => country.region === select);
    }
  
    if (search) {
      const code = search.toLowerCase();
      filtered = filtered.filter((country) =>
        country.name.common.toLowerCase().includes(code)
      );
    }
  
    setFilteredCountries(filtered);
  }, [select, search, countries]);


  return (
    <div className="container">
      <div className="sea-dop">
        <Search search={search} setSearch={setSearch} />

        <DropDown setSelect={setSelect} select={regions} />
      </div>
      {loading ? (
        <div className="card-list">
          {Array(12)
            .fill(0)
            .map((_, i) => (
              <div key={i}>
                <CardSkeleton />
              </div>
            ))}
        </div>
      ) : (
        <div className="card-list">
          {filteredCountries.map((c) => (
            <div className="card" key={c.cca3}>
              <NavLink className="nav-link" to={`/country/${c.cca3}`}>
                <img className="flag" src={c.flags.png} alt="c.name.comon" />

                <h1>{c.name.common}</h1>
                <div className="country-info">
                  <p className="info">
                    Population: <span className="span">{c.population}</span>
                  </p>
                  <p className="info">
                    Region: <span className="span"> {c.region || "N/A"}</span>
                  </p>
                  <p className="info">
                    Capital:{" "}
                    <span className="span"> {c.capital?.[0] || " N/A"}</span>
                  </p>
                </div>
              </NavLink>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export const countriesLoader = async () => {
  const res = await fetch("https://restcountries.com/v3.1/all");
  if (!res.ok) {
    throw new Error("Could not fetch countries");
  }
  return res.json();
};

export default HomePage;
