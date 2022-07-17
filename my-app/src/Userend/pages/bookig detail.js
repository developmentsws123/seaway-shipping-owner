import UserendHeader from "../Component/header";
import daytrip from "../images/daytrips3.jpg";
import path2 from "../images/NoPath(2).png";
import Mask from "../images/Mask Group 3.png";
import Mask2 from "../images/Mask Group 4.png";
import Reactangle2 from "../images/Rectangle2.png";
import './bookdetil.css';
function UserBookingdetail(){
    return(
        <div>
            <UserendHeader/>
        <div class="container-fluid">
            <div class="row mt-5">
<div class="col-md-6 col-12  border border-dark"> 
<div class="row">
    <div class="col-xl-6 col-12 border border-dark px-0"><img src={daytrip} class="img-fluid" id="bookingdetailimg"></img></div>
    <div class="col-xl-6 col-12 px-0">
        <li class="list-group-item text-start"><img src={path2} class="img-fluid"></img><span id="spn">Marina,Pak</span> 
        <span id="spn1"><i class="bi bi-heart "></i></span> </li>
        <li class="list-group-item text-start p-0"id="name"><h4>Waleed Abbasi</h4></li>
        <li class="list-group-item border border-dark text-start p-0">
            <ul class="d-flex border border-dark p-0">
                <li class="list-group-item text-start border-0 px-0"><i class="bi bi-caret-left-fill"></i><i class="bi bi-caret-right-fill"></i>31</li>
            <li class="list-group-item border-0 "><i class="bi bi-people-fill"></i>6</li>
            <li class="list-group-item border-0"><i class="bi bi-house-fill"></i>0</li>
            <li class="list-group-item "><img src={Mask} class="img-fluid"></img>0</li>
            <li class="list-group-item "><img src={Mask2} class="img-fluid"></img>00</li>
            </ul>
            <li class="list-group-item"><div clss="col-6 border border-dark circle">kdk</div></li>
            <li class="list-group-item text-start"><i class="bi bi-star-fill text-warning"></i>NAN(0)
            <span id="day">$0/Day</span>
            </li>
            </li>
    </div>
</div>
<div class="row">
    <div class="col-xl-6 col-12  border border-dark px-0"><img src={daytrip} className="img-fluid" id="bookingdetailimg"></img></div>
    <div class="col-xl-6 col-12  px-0">
    <li class="list-group-item text-start"><img src={path2} class="img-fluid"></img><span id="spn">Marina,Pak</span> 
        <span id="spn1"><i class="bi bi-heart "></i></span> </li>
        <li class="list-group-item text-start p-0"id="name"><h4>Raja</h4></li>
        <li class="list-group-item border border-dark text-start p-0">
            <ul class="d-flex border border-dark p-0">
                <li class="list-group-item text-start border-0 px-0"><i class="bi bi-caret-left-fill"></i><i class="bi bi-caret-right-fill"></i>31</li>
            <li class="list-group-item border-0 "><i class="bi bi-people-fill"></i>6</li>
            <li class="list-group-item border-0"><i class="bi bi-house-fill"></i>0</li>
            <li class="list-group-item "><img src={Mask} class="img-fluid"></img>0</li>
            <li class="list-group-item "><img src={Mask2} class="img-fluid"></img>00</li>
            </ul>
            <li class="list-group-item"><div clss="col-6 border border-dark circle">kdk</div></li>
            <li class="list-group-item text-start"><i class="bi bi-star-fill text-warning"></i>NAN(0)
            <span id="day">$0/Day</span>
            </li>
            </li>
    </div>
</div>
</div>
<div class="col-md-6 col-12  text-md-end text-center border border-dark">
  <img src={Reactangle2} class="img-fluid" id="reactangle"></img>
</div>
 </div>

            </div>
            </div>
    )
}
export default UserBookingdetail;