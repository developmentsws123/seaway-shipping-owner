import React from 'react';
import logo from './logo.svg';
import './App.css';
// // import State from './State';
import {BrowserRouter as Router,Routes,Route} from 'react-router-dom';
import Protected from './Ownerpanel/Protected';
import DashBoard from './Ownerpanel/Dashboard';
import Signup from './signupform';
import Boat from './Ownerpanel/Boat';
import Yacht from './Ownerpanel/yacht';
import ReviewListing from './Ownerpanel/Reviewlisting';
import EventYacht from './Ownerpanel/Eventyacht';
import EventBoat from './Ownerpanel/EventBoat';
import Home from './Ownerpanel/Home';
import Contactus from './Ownerpanel/Contactus';
import Profie from './Ownerpanel/Profile';
import Reviewyachtlisting from './Ownerpanel/Reviewyachtlisting';
import ReviewBoatlisting from './Ownerpanel/ReviewBoatlisting';
import Signup1 from './Userend/Authentication/singup';
import Login from './Userend/Authentication/Login'
import UserYacht from './Userend/pages/yacht';
import UserPending from './Userend/pages/pending';
import UserContactus from './Userend/pages/contactus';
import UserDetailmsg from './Userend/pages/Event Detailmsg';
// import UserYacht from './Userend/pages/yacht';
import UserBoat from './Userend/pages/boat';
import UserBlog from './Userend/pages/Blog';
import UserAccepted from './Userend/pages/Accepted';
import UserAboutus from './Userend/pages/aboutus';
import UserBookingdetail from './Userend/pages/bookig detail';
import UserComplete from './Userend/pages/bookingcomplet';
import UserendDaytrip from './Userend/pages/Daytrips';
import UserOvernight from './Userend/pages/Overnight';
import UserendConformbooking from './Userend/pages/Conformbooking';
import UserendProfile from './Userend/pages/profile';


function App() {
  return (
    <div className="App">

      {/* <State></State> */}
      {/* <BrowserRouter> */}
      <Router>
        <Routes>
          <Route path="/signup" element={<Signup></Signup>}></Route>
          <Route path="/dashboard" element={<Protected Component={DashBoard}></Protected>}></Route>
          <Route path="/Yacht" element={<Protected Component={Yacht}></Protected>}></Route>
          <Route path="/Boat" element={<Protected Component={Boat}></Protected>}></Route>
          {/* <Route path="/ReviewListing" element={<ReviewListing></ReviewListing>}></Route> */}
          <Route path="/Eventyacht"  element={<Protected Component={EventYacht}></Protected>}></Route>  
          <Route path="/EventBoat" element={<Protected Component={EventBoat}></Protected>}></Route>       
          <Route path="/Home" element={<Protected Component={Home}></Protected>}></Route>
          <Route path="/Contactus" element={<Protected Component={Contactus}></Protected>}></Route>
          <Route path="/Profile" element={<Protected Component={Profie}><Profie></Profie></Protected>}></Route>
          <Route path="/Reviewyachtlisting" element={<Protected Component={Reviewyachtlisting}></Protected>}></Route>
          <Route path="/ReviewBoatlisting" element={<Protected Component={ReviewBoatlisting}></Protected>}></Route>
          <Route path="/user/Signup" element={<Signup1></Signup1>}></Route>
          <Route path="/user/login" element={<Login></Login>}></Route>
          <Route path="/User/Yacht" element={<UserYacht></UserYacht>}></Route>

          {/* <Route path="/User/Yacht" element={<UserYacht></UserYacht>}></Route> */}

          <Route path="/User/Boat" element={<UserBoat></UserBoat>}></Route>
          <Route path="/User/Pending" element={<UserPending></UserPending>}></Route>
          <Route path="/User/Contactus" element={<UserContactus></UserContactus>}></Route>
          <Route path="/User/EventDetail" element={<UserDetailmsg></UserDetailmsg>}></Route>
          <Route path="/User/Home" element={<UserBlog></UserBlog>}></Route>
          <Route path="/User/Accepted" element={<UserAccepted></UserAccepted>}></Route>
          <Route path="/User/Aboutus" element={<UserAboutus></UserAboutus>}></Route>
          <Route path="/User/Bookingdetail" element={<UserBookingdetail></UserBookingdetail>}></Route>
          <Route path="/User/Complete" element={<UserComplete></UserComplete>}></Route>
          <Route path="/User/Daytrip" element={<UserendDaytrip></UserendDaytrip>}></Route>
          <Route path="/User/Overnight" element={<UserOvernight></UserOvernight>}></Route>
          <Route path="/User/Conformbooking" element={<UserendConformbooking></UserendConformbooking>}></Route>
          <Route path="/User/Profile" element={<UserendProfile></UserendProfile>}></Route>
        </Routes>
      </Router>
      {/* </BrowserRouter> */}
    </div>
  );
}

export default App;