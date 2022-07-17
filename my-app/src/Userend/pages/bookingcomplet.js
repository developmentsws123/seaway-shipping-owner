import './bookcomp.css';
function UserComplete(){
    return(
        <div class="contianer-fluid">
            <div class="container">
            <div class="contaner border border-dark mt-5 ">
                <div class="row mt-5">
           <div class="col-12 "><h1>Your Booking is Complete</h1></div>
           <div class="col-12"><h5>Thank You For Booking</h5></div>
           </div>
           </div>
           <div class="row">
<div class="col-6 text-end mt-5"><button class="bg-primary border-0" id="btn">View More Listing</button></div>
<div class="col-6 text-start mt-5"><button class="bg-primary border-0" id="btn">View Detail</button></div>

           </div>
           </div>
        </div>
    )
}
export default UserComplete;