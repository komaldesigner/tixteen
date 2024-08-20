import React from 'react'
import { Route, Routes } from 'react-router-dom'
import InfluencerDetail from '../../components/brand/user/userProfileDetails'
import ChooseInfluencer from '../../components/brand/user/InfluencerList'
import ReCheckCampaignData from '../../components/brand/campaign/checkCampaignData'
import CampaignForm from '../../components/brand/campaign/CampaignForm'
import CampaignCategory from '../../components/brand/campaign/CampaignCategory'
import TicketForm from '../../components/brand/Ticket/TicketForm'
import TicketDetails from '../../components/brand/Ticket/TicketDetails'
import BrandHeader from '../../components/headers/brandHeader'
import PlansComponent from '../../components/brand/Purchase/plan'
import Purchase from '../../components/brand/Purchase/Purchase'
import ProjectDetailComponent from '../../components/brand/project/ProjectDetail'
import BrandFooter from '../../components/footer/brandFooter'
import OrderList from '../../components/brand/order/OrderList'
import CampaignDetails from '../../components/brand/campaign/CampaignDetail'
import SelectMobiInflu from '../../components/brand/user/slectinfulmobi'
import Invoice from '../../components/brand/invoice/Invoice'
import InvoiceSummary from '../../components/brand/invoice/InvoiceSummary'
import InvoicePrint from '../../components/brand/invoice/invoicePrint'
import SecondInvoice from '../../components/brand/invoice/secondInvoide'
import MainInfulencerList from '../../components/brand/InfluencerList/mainInfluencerList'
import InfulLavel from '../../components/brand/influlevel'
import Dashboard from '../../components/brand/Dashboard/Dashboard'
import EditAccountDetails from '../../components/brand/user/EditAccountDetails'
import CampaignTimeline from '../../components/brand/campaign/CampaignTimeline'
import ClientAccount from '../../components/brand/user/clientAccount'
import InfluencerAllDetails from '../../components/brand/user/InfluencerDetails'
import InfluancerList from '../../components/brand/InfluencerList/mainInfluencerList'
import Contact from '../../components/brand/contact/contactus'
import About from '../../components/brand/about/about'
import TermAndCondtion from '../../components/brand/TermAnd/TermAndCondtion'
import PrivacyPolicy from '../../components/brand/PrivacyPolicy/PrivacyPolicy'
import Refund from '../../components/brand/Refund/Refund'
import ClientRegister from '../../components/brand/auth/ClientRegister'

function Brand() {
    return (
        <>
            <BrandHeader />
            <Routes>
                {/* register */}
                <Route path="/register-brand" element={<ClientRegister />} />

                {/* dashboard */}
                <Route path="/" element={<Dashboard />} />

                {/* influencer */}
                <Route path="/influnence-details/:id" element={<InfluencerDetail />} />
                <Route path="/influencers-verification" element={< InfluencerAllDetails />} />
                <Route path="/choose-influencer" element={<ChooseInfluencer />} />
                <Route path="/select-influencer" element={<SelectMobiInflu />} />
                <Route path="/influencer-list" element={<InfluancerList />} />
                <Route path="/influlevel" element={<InfulLavel />} />

                {/* Campaign*/}
                <Route path="/create-campaign" element={<CampaignForm />} />
                <Route path="/campaign-category" element={<CampaignCategory />} />
                <Route path="/campaign-review" element={<ReCheckCampaignData />} />
                <Route path='/campaign-details' element={<CampaignDetails />} />
                <Route path='/check-timeline' element={<CampaignTimeline />} />
                {/* Ticket */}
                <Route path="/ticket-form" element={<TicketForm />} />
                <Route path="/ticket-details" element={<TicketDetails />} />

                {/* plans */}
                <Route path="/plans" element={<PlansComponent />} />
                <Route path="/plans-purchase" element={<Purchase />} />

                {/* project */}
                <Route path="/project-details" element={<ProjectDetailComponent />} />

                {/* order */}
                <Route path="/  " element={<OrderList />} />

                {/* invoice */}
                <Route path="/invoice" element={<Invoice />} />
                
                {/* need test */}
                <Route path="/second-invoice" element={<SecondInvoice />} />  
                <Route path="/invoice-summary" element={<InvoiceSummary />} />
                <Route path="/invoice-print" element={<InvoicePrint />} />


                {/* new job */}
                {/* <Route path="/new-job" element={<NewJob/>} /> */}

                {/* user */}
                <Route path="/edit-user-details" element={<EditAccountDetails />} />
                <Route path="/user-account" element={<ClientAccount />} />

                {/* static pages */}
                <Route path="/contact-us" element={<Contact />} />
                <Route path="/about-us" element={<About />} />
                <Route path="/term-and-conditions" element={<TermAndCondtion />} />
                {/* PrivacyPolicy */}
                <Route path="/privacy-policy" element={<PrivacyPolicy />} />
                {/* Refund */}
                <Route path="/refund-and-cancelation" element={<Refund />} />
            </Routes>
            <BrandFooter />

        </>
    )
}

export default Brand