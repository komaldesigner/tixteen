import React from 'react'
import back_arrow from "../../assets/img/back-arrow.png"
import "../../styles/headers/backeHeader.css"
function BackHEader({title}) {
  return (
    <div className='main_backe_header' >
      <div>
          <img src={back_arrow} className='back_arrow_icon_for_back' />
      </div>
      {/* heading */}
      <div className='bold_text'  >
        {title}
      </div>
      {/* search */}
      <div> </div>
    </div>
  )
}

export default BackHEader