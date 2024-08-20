import React from 'react'
import BannerCampain from './banner'
import Searchcampain from './search'
import Foryou from './foryousection/foryou'
import Footerbar from '../../footer/footerbar'
import UserDetailsHeader from '../../headers/userDetailsHeader'

function MainAllcampain() {
  return (
    <div className='main_all_page_default_padding' >
      <UserDetailsHeader/>
        <Searchcampain/>
        <BannerCampain/>
        <Foryou/>

    </div>
  )
}

export default MainAllcampain