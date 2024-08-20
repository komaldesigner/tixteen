import React, { useEffect, useState } from 'react'
import CampenBanner from './campenBanner'
import CampeneRequiement from './campeneRequiement'
import CampenAcrrdien from './campenAcrrdien'
import DeteilsHeader from '../../headers/deteilsHeader'
import { useParams } from 'react-router-dom'
import { makeApi } from '../../../api/callApi.tsx'
function Maincampens() {
const { id } = useParams();
  const  [campaignData, setCampaignData] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      const response = await makeApi(`/V1/campaigns/${id}`, "GET");
      setCampaignData(response.data.data);
    };
    fetchData();
  }, [id]);

  return (
    <div className='main_all_page_default_padding' >
      <DeteilsHeader BackPath={'/verified/creator/home'} title={"Campaign Details"} />
      <CampenBanner />
      <CampeneRequiement campaignID={"232"}  />
      <CampenAcrrdien campaignData={campaignData} />
    </div>
  )
}

export default Maincampens