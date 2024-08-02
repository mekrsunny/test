import React from "react";
import { useState } from "react";
const Filter = ({options}) => {
  const [isOpen, setIsOpen] = useState();
  useState(false);

  const toggleDropdown = () => {
    setIsOpen(!isOpen);
  };
  return (
    <div>
      <button onClick={toggleDropdown}>{isOpen ? "close" : "open"}</button>
      {isOpen &&
      <ul>
        
        {
           options.map((options,index)=>(
            <li key={index}>{options}</li>
           ))
        }
      </ul>}
    </div>
  );
};

export default Filter;
