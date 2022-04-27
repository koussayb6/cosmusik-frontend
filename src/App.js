import React from "react";
import { Route, Routes} from 'react-router-dom'
import Header from "./components/Header";
import Leftnav from "./components/Leftnav";
import Rightchat from "./components/Rightchat";
import Home from "./pages/Home";
import Badge from "./pages/Badge";
import Group from "./pages/Group";
import Storie from "./pages/Storie";
import Email from "./pages/Email";
import Emailopen from "./pages/Emailopen";
import Settings from "./pages/Settings";
import Videos from "./pages/Videos";
import Analytics from "./pages/Analytics";
import Account from "./pages/Account";
import Member from "./pages/Member";
import Contactinfo from "./pages/Contactinfo";
import Socialaccount from "./pages/Socialaccount";
import Password from "./pages/Password";
import Payment from "./pages/Payment";
import Notification from "./pages/Notification";
import Helpbox from "./pages/Helpbox";

import Forgot from "./pages/Forgot";
import Notfound from "./pages/Notfound";
import ShopOne from "./pages/ShopOne";
import ShopTwo from "./pages/ShopTwo";
import ShopThree from "./pages/ShopThree";
import Singleproduct from "./pages/Singleproduct";
import Cart from "./pages/Cart";
import Checkout from "./pages/Checkout";
import Chat from "./pages/Chat";
import Live from "./pages/Live";
import Job from "./pages/Job";
import Event from "./pages/Event";
import Hotel from "./pages/Hotel";
import Grouppage from "./pages/Grouppage";
import Userpage from "./pages/Userpage";
import Authorpage from "./pages/Authorpage";
import Comingsoon from "./pages/Comingsoon";
import Hotelsingle from "./pages/Hotelsingle";

export function App() {



    return(
<>
        <Header />
    <Leftnav />
                <Routes>

                    <Route exact path='/' element={<Home />} />
                    <Route exact path='/home' element={<Home />} />

                    <Route exact path='/defaultbadge' element={<Badge />} />
                    <Route exact path='/defaultgroup' element={<Group />} />
                    <Route exact path='/defaultstorie' element={<Storie />} />
                    <Route exact path='/defaultemailbox' element={<Email />} />
                    <Route exact path='/defaultemailopen' element={<Emailopen />} />
                    <Route exact path='/defaultsettings' element={<Settings />} />
                    <Route exact path='/defaultvideo' element={<Videos />} />
                    <Route exact path='/defaultanalytics' element={<Analytics />} />


                    <Route exact path='/accountinformation' element={<Account />} />
                    <Route exact path='/defaultmember' element={<Member />} />
                    <Route exact path='/contactinformation' element={<Contactinfo />} />
                    <Route exact path='/socialaccount' element={<Socialaccount />} />
                    <Route exact path='/password' element={<Password />} />
                    <Route exact path='/payment' element={<Payment />} />
                    <Route exact path='/defaultnoti' element={<Notification />} />
                    <Route exact path='/helpbox' element={<Helpbox />} />
                    <Route exact path='/forgot' element={<Forgot />} />
                    <Route exact path='/notfound' element={<Notfound />} />

                    <Route exact path='/shop1' element={<ShopOne />} />
                    <Route exact path='/shop2' element={<ShopTwo />} />
                    <Route exact path='/shop3' element={<ShopThree />} />
                    <Route exact path='/singleproduct' element={<Singleproduct />} />
                    <Route exact path='/cart' element={<Cart />} />
                    <Route exact path='/checkout' element={<Checkout />} />
                    <Route exact path='/defaultmessage' element={<Chat />} />
                    <Route exact path='/defaultlive' element={<Live />} />

                    <Route exact path='/defaultjob' element={<Job />} />
                    <Route exact path='/defaultevent' element={<Event />} />
                    <Route exact path='/defaulthotel' element={<Hotel />} />
                    <Route exact path='/grouppage' element={<Grouppage />} />
                    <Route exact path='/userpage' element={<Userpage />} />
                    <Route exact path='/authorpage' element={<Authorpage />} />
                    <Route exact path='/comingsoon' element={<Comingsoon />} />
                    <Route exact path='/defaulthoteldetails' element={<Hotelsingle />} />


                </Routes>
</>)

}
