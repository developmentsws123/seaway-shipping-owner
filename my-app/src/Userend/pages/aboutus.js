import UserendHeader from "../Component/header";
import UserendNavebar from "../Component/navebar";
import UserendFooter from "../Component/footer";
import Boat from "../images/boat.png";
import yacht from "../images/yachts.png";
import Water from "../images/water.png";
import Birthday from "../images/birthday.png";
import Wedding from "../images/wedding.png";
import Event from "../images/cooperate Event.png";
import Holiday from "../images/Holiday.png";
import Newyear from "../images/new year.png";
import purposel from "../images/proposals.png";
import Heart2 from "../images/heart (2).png";
import verified from "../images/verified (1).png";
import Heart3 from "../images/heart (2).png";
import Sefty from "../images/worker.png";

import './aboutus.css';
function UserAboutus(){
    return(
    <div class="main">
        <UserendHeader/>
<div class="container-fluid">
    <div class="container border border-dark">
<div class="row mt-5">
    <div class="col-12"> <h2>Luxury Boat Rentals & Yacht Charters Worldwide </h2> </div>  
</div>

<div class="row justify-content-center"><div class="col-md-10 col-12 border border-dark">
<div class="row mt-3 justify-content-md-center" id="loction">
    <div class="col-md-2 col-6  "> <h5>Location</h5> Where to next?</div>
    <div class="col-md-2 col-6"><h5>Duration</h5>Trip Lenght </div>  
    <div class="col-md-2 col-6"> <h5>Start Charter</h5> Add date</div>
    <div class="col-md-2 col-6"><h5>End Charter</h5> Add date</div>
    <div class="col-md-2 col-12 text-center" id="search"><i class="bi bi-search"></i></div>
</div>
</div>

    </div></div>
    <div class="container border border-dark">
<div class="row mt-5">
<div class="col-12"><h1>The World on Water</h1></div></div>
<div class="row">
    <div class="col-md-4 col-sm-6 col-12 p-0"><img src={Boat} class="img-fluid"></img></div>
    <div class="col-md-4 col-sm-6 col-12 p-0"><img src={yacht} class="img-fluid"></img></div>
    <div class="col-md-4 col-sm-6 col-12 p-0"><img src={Water} class="img-fluid"></img></div>

</div>
</div>

<div class="container">
<div class="row mt-5">
    <div class="col-12"><h1>Explor,Book and Enjoy!</h1></div>
</div>

<div class="row">
    <div class="col-md-8 col-12"><p> Where you're celebration on annversary wedding,birthday,or corporate event.</p></div>
<div class="col-md-4 col-12 text-md-end text-center">
    <button id="btn btn-secondary"><h5>View All</h5></button>
</div>
</div>
<div class="row justify-content-center">
<div class="col-md-3 col-sm-6 col-12 p-0"> <img src={Birthday} class="img-fluid" id="birthday"></img></div>
<div class="col-md-3 col-sm-6 col-12 p-0"><img src={Wedding} class="img-fluid" id="wedding"></img></div>
<div class="col-md-3 col-sm-6  col-12 p-0"><img src={Event} class="img-fluid" id="event"></img></div>
</div>
<div class="row justify-content-center mt-2">
    <div class="col-md-3 col-sm-6 col-12 p-0"><img src={Holiday} class="img-fluid" id="holiday"></img></div>
    <div class="col-md-3 col-sm-6 col-12 p-0"><img src={Newyear} class="img-fluid" id="newyear"></img></div>
    <div class="col-md-3 col-sm-6 col-12 p-0"><img src={purposel} class="img-fluid" id="purposel"></img></div> 
    </div>
</div>

<div class="container border border-dark">
<div class="row mt-5 border border-dark justify-content-between">
    <div class="col-md-4 col-6 border border-dark">
    
        <li class="list-group-item"><img src={Heart2} class="img-fluid"></img></li>
        <li class="list-group-item"><h4 >We Go The Extra Mile</h4></li>

        <li class="list-group-item"> Our customer team is here to take care of you on every step of the way.</li>

</div>

<div class="col-md-4 col-6 border border-dark ">
    
        <li class="list-group-item"><img src={verified} class="img-fluid"></img></li>
        <li class="list-group-item"><h4>Secure & Worry Free</h4></li>

        <li class="list-group-item"> Our customer team is here to take care of you on every step of the way.</li>

</div>
        
    </div>
    <div class="row border border-dark justify-content-between mt-3">
    <div class="col-md-4 col-6 border border-dark">
        <li class="list-group-item"><img src={Heart2} class="img-fluid"></img></li>
        <li class="list-group-item"><h4>Experienced Team</h4></li>
        <li class="list-group-item">Our customer team is here to take care of you on every step of the way.</li>




    </div>
    <div class="col-md-4 col-6 border border-dark">
        <li class="list-group-item"><img src={Sefty} class="img-fluid"></img></li>
        <li class="list-group-item"><h4>Experienced Team</h4></li>
        <li class="list-group-item">Our customer team is here to take care of you on every step of the way.</li>

    </div>

    
    </div>
</div>

 </div> {/* container close */}
        <UserendFooter/>


    </div>
        )
}
export default UserAboutus;