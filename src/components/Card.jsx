import "./Card.css";
import { NavLink, useLoaderData } from "react-router-dom";
import { ArrowLeft } from "phosphor-react";

const Card = ({ theme }) => {
  const data = useLoaderData();
  const country = Array.isArray(data) ? data[0] : data;

  const borders = country.borders || [];

  return (
    <div className="main-box">
      <div className="child1">
        <NavLink to={"/"} className="nav-link-back">
          <div className={`icon-container ${theme}`}>
            <ArrowLeft size={20} className="icon" />
          </div>
          <p className="back">Back</p>
        </NavLink>

        <img src={country.flags.svg} alt="flags" className="flag-card" />
      </div>
      <h1> {country.name.common} </h1>

      <div className="child2">
        <div className="item1">
          <p>
            Population:<span>{country.population}</span>
          </p>
          <p>
            Region:<span>{country.region}</span>
          </p>
          <p>
            Capital:
            <span>{country.capital?.length ? country.capital[0] : "N/A"}</span>
          </p>
          <p className="native-name">
            {" "}
            Native name:
            <span>{` ${
              Object.values(country.name.nativeName)[0].common
            }`}</span>
          </p>
        </div>

        <div className="item2">
          <p>
            {" "}
            Top Level Domain:<span>{country.tld}</span>
          </p>
          <p>
            {" "}
            Currencies:
            <span>{` ${
              Object.values(country.currencies).map(
                (currency) => `${currency.name}`
              )[0]
            }`}</span>
          </p>
          <p>
            {" "}
            Language: <span>{` ${Object.values(country.languages)[0]}`}</span>
          </p>
        </div>
      </div>

      <div className="border-container">
        <div className="border">
          <p className="border-countries">Border Countries:</p>

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
            <p className="no--border">This country has no border countries.</p>
          )}
        </div>
      </div>
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
