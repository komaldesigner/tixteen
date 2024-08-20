import React from 'react'
import "../../../styles/creator/AllCampain/search.css"
import searchIcon from "../../../assets/creator/searchIcon.png"


function Searchcampain() {
  return (
    <div>
        <div className='crator_search_bar_parent' >
            <div>
                <img src={searchIcon} alt="" />
            </div>
            <div>
            <input type="text" style={{border: "none"}} className='creator_search_box_input'  placeholder='Search anything here... ' /> 
            </div>

        </div>
    </div>
  )
}

export default Searchcampain