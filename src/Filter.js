import React from 'react'
import { useState } from 'react'
const Filter = () => {
    const [isOpen,setIsOpen]=useState()
    useState(flase);

    const toggleDropdown=()=>{
        setIsOpen(!isOpen)
    }
  return (
    <div>
        <button onClick={toggleDropdown}>{isOpen ? "close" :"open"}</button>
        {isOpen && <ul>
            <li>Date of regestration</li>
            <li>Vendor Score</li>
            <li>Rating</li>
            <li>Status</li>
            <li>Type of Business</li>
            <li>Location</li>
            <li>Assign to</li>


        </ul>)}
    </div>
  )
}

export default Filter