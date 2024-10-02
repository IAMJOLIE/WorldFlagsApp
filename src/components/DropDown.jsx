import { useState, useEffect } from "react";
import "./DropDown.css";
import { CaretDown, CaretRight, CaretUp, Horse } from "phosphor-react";

const DropDown = ({ select, setSelect }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectRegion, setSelectRegion] = useState("");

  const handleSelect = (region) => {
    setSelect(region);
    setSelectRegion(region);
    setIsOpen(false);
  };

  useEffect(() => {
    const handleClickOutside = (event) => {
      if (!event.target.closest(".drop-down")) {
        setIsOpen(false);
      }
    };
    window.addEventListener("click", handleClickOutside);

    return () => {
      window.removeEventListener("click", handleClickOutside);
    };
  }, []);

  return (
    <div className="drop-down">
      <button
        className={`dropdown  ${isOpen ? "open" : ""}  ${
          selectRegion ? "selected" : ""
        } `}
        onClick={() => setIsOpen(!isOpen)}
      >
        <span className="label">Region</span>
        <span>{selectRegion}</span>
      </button>

      {isOpen && (
        <div className="menu">
          <ul>
            {select.map((s, i) => (
              <p
                key={i}
                className="dropdown-list-item"
                onClick={() => handleSelect(s.region)}
              >
                {s.region}
              </p>
            ))}
          </ul>
        </div>
      )}
    </div>
  );
};

export default DropDown;
