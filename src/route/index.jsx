import BlogEx from "../components/BlogEx/BlogEx";
import Header from "../components/Header/header";
import Affiliates from "../pages/Affiliates/Affiliates";
import BillDetails from "../pages/BillDetail/BillDetail";
import Blog from "../pages/Blog/Blog";
import Privacy from "../pages/Company/Privacy/Privacy";
import CustomerFeedback from "../pages/CustomerFeedback/CustomerFeedback";
import AboutUs from "../pages/Home/AboutUs/AboutUs";
import Feedback from "../pages/Home/Feedback/Feedback";
import Home from "../pages/Home/home";
import Payment from "../pages/Home/Payment/Payment";
import Policy from "../pages/Home/Policy/Policy";
import LogIn from "../pages/LogIn/LogIn";
import ShopInfor from "../pages/ShopInfor/ShopInfor";
import SignUp from "../pages/SignUp/SignUp";
import Tourlist from "../pages/Tourlist/Tourlist";
import TripFinder from "../pages/TripFinder";
import UserInfor from "../pages/UserInfor/UserInfor";
import Vietnam from "../pages/Vietnam/Vietnam";
import BlogDetails from "../pages/BlogDetails/BlogDetails";

// Dùng cho user chưa login
const publicRoutes = [
  { path: "/", component: Home },
  { path: "/ShopInfor", component: ShopInfor },
  { path: "/TripFinder", component: TripFinder },
  { path: "/Affiliates", component: Affiliates },
  { path: "/Destination/:id", component: Vietnam },
  { path: "/CustomerFeedback", component: CustomerFeedback },
  { path: "/Feedback", component: Feedback },
  { path: "/:id", component: Tourlist },
  { path: "/LogIn", component: LogIn, layout: null },
  { path: "/SignUp", component: SignUp, layout: null },
  { path: "/AboutUs", component: AboutUs },
  { path: "/Policy", component: Policy },
  { path: "/Payment", component: Payment },
  { path: "/BillDetails", component: BillDetails },
  { path: "/:id", component: BlogEx },
  { path: "/Blog", component: Blog },
  { path: "/BlogDetails", component: BlogDetails, layout: null},
];

// Dùng cho user đã login hoặc admin
const privateRoutes = [{}];

export { publicRoutes, privateRoutes };
