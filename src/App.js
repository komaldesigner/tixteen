import "./App.css";
import CreatorAuth from "./pages/auth/creator";
import { Route, Routes } from "react-router-dom";
import Login from "./components/Auth/login/login";
import MainAllcampain from "./components/creator/AllCampain/mainAllcampain";
import Createpages from "./pages/creator/createpages";
import Campanes from "./pages/creator/campanes";
import Createdordeteils from "./components/user/creator/createdordeteils";
import MaincreatorDetails from "./components/user/creator/maincreatorDetails";
import User from "./pages/creator/user";
import MyAccountheader from "./components/user/creator/myAccountheader";
import BackHEader from "./components/headers/backeHeader";
import CampainList from "./components/creator/campain/campainList";
import ReportSummary from "./components/creator/Report/summary";
import MainReport from "./components/creator/Report/mainReport";
import Report from "./pages/creator/report";
import EariningSummary from "./components/creator/earning/eariningSummary";
import MainEarning from "./components/creator/earning/mainEarning";
import Earning from "./pages/creator/earning";
import Alluser from "./components/brand/user/alluser";
import Brand from "./pages/brand/brand";
import CampaignForm from "./components/brand/campaign/CampaignForm";
import CampaignReview from "./components/brand/campaign/ReviewCampaign";
import Test from "./components/brand/campaign/checkCampaignData";
import BrandHeader from "./components/headers/brandHeader";
import TicketForm from "./components/brand/Ticket/TicketForm";
import TicketDetails from "./components/brand/Ticket/TicketDetails";
import PaymentDetails from "./components/brand/payment/PaymentDetails";
import Purchase from "./components/brand/Purchase/Purchase";
import PlansComponent from "./components/brand/Purchase/plan";
import ProjectDetailComponent from "./components/brand/project/ProjectDetail";
import OrderList from "./components/brand/order/OrderList";
import CampaignDetails from "./components/brand/campaign/CampaignDetail";
import NewJob from "./components/brand/job/newJob";
import SelectMobiInflu from "./components/brand/user/slectinfulmobi";
import Invoice from "./components/brand/invoice/Invoice";
import MainInfulencerList from "./components/brand/InfluencerList/mainInfluencerList";
import InfulLavel from "./components/brand/influlevel";
import SecondInvoice from "./components/brand/invoice/secondInvoide";
import InvoiceSummary from "./components/brand/invoice/InvoiceSummary";
import InvoicePrint from "./components/brand/invoice/invoicePrint";
import Dashboard from "./components/brand/Dashboard/Dashboard";
import EditAccountDetails from "./components/brand/user/EditAccountDetails";
import ClientAccount from "./components/brand/user/clientAccount";
import CampaignTimeline from "./components/brand/campaign/CampaignTimeline";
import InfluencerDetails from "./components/brand/user/InfluencerDetails";
import InfluencerAllDetails from "./components/brand/user/InfluencerDetails";
import BrandHome from "./components/brand/home/home";
import IndexPageBrand from "./components/brand/index/indexpage";
import Contact from "./components/brand/contact/contactus";
import PurchaseCart from "./components/brand/order/Purchase";
import CheckOut from "./components/brand/order/checkout";
import ForgotPassword from "./components/brand/auth/forgetpass";
import ClientRegister from "./components/brand/auth/ClientRegister";
import Home from "./components/Home/home";
import WallofWork from "./components/Home/WallofWork";
import Collaboration from "./components/Home/Collaboration";
import Chronicles from "./components/Home/Our chronicles/chronicles";
import Clientele from "./components/Home/Clientele/Clientele";
import HomeHeader from "./components/Home/HomeHeader";
import Industries from "./components/Home/IndursteWeserve/IndustiresDetails";
import IndustiiresCirecl from "./components/Home/IndursteWeserve/IndustiiresCirecl";
import InfluencerFirstMainPage from "./components/Home/influencer/influencerFirstMainPage";
import Influencerlist from "./components/Home/influencer/influencerlist";
import Maininfluencerplatform from "./components/Home/influencerplatform/Maininfluencerplatform";
import Stayupdate from "./styles/home/influencerplatform/Stayupdate";
import LRAA from "./components/Home/test/KRE";
import JJJJJJJ from "./components/Home/test/Inde";
import LAAAA from "./components/Home/test/KRE";
import Packaging2 from "./components/Home/test/KRE";
import New from "./pages/New/New";
import Testpage from "./pages/New/Test";
import VerifyPOP from "./utils/Auth/VerifiPopup";
import { UserProvider } from "./context/UserContext";
import StatusPage from "./components/creator/campain/capainsttus";
import Accountlist from "./components/creator/profile/Accountlist";
import PersonalInfo from "./components/creator/profile/PersonalInfo";
// import Accountdetails from "./components/creator/profile/Accountdetails";
import Acdetails from "./components/creator/profile/Acdetails";
import UserAddress from "./components/creator/profile/UserAddress";
import Addadress from "./components/creator/profile/Addadress";
import Bankinginfo from "./components/creator/profile/Bankinginfo";

function App() {
  return (
    <>
    <UserProvider>
      <Routes>
        <Route path="/creator/*" element={<CreatorAuth />} />
        <Route path="/auth/login" element={<Login />} />
        <Route path="/verified/creator/*" element={<Createpages />} />
        <Route path="/verified/user/*" element={<User />} />
        <Route path="/verified/report/*" element={<Report />} />
        <Route path="/verified/creator/earning/*" element={<Earning />} />
        <Route path="/forgotpassword" element={<ForgotPassword />} />


        {/* brand */}
        <Route path="/brand/*" element={<Brand />} />
        <Route path="/old" element={<BrandHome />} />
        <Route path="/" element={<New />} />
        <Route path="/index" element={<IndexPageBrand />} />

        {/* <Route path="/test-page" element={<St/>atusPage pagename="p1" campaignId="1" influencerId="123" />} /> */}
        <Route path="/test-page" element={<Accountlist/>} />
        <Route path="/test-page-s" element={<PersonalInfo/>} />
        {/* <Route path="/test-page-a" element={<Accountdetails/>} /> */}
        <Route path="/test-page-a" element={<Acdetails/>} />
        <Route path="/test-page-b" element={<UserAddress/>} />
        <Route path="/test-page-c" element={<Addadress/>} />
        <Route path="/test-page-d" element={<Bankinginfo/>} />

      </Routes>
      </UserProvider>
    </>
  );
}

export default App;


