import './detailmsg.css';
import UserendHeader from "../Component/header";
import UserendNavebar from "../Component/navebar";
import UserendFooter from "../Component/footer";
import pic4 from '../images/overnight4.jpeg'
import pic9 from '../images/yachtpic3.jpg'
import pic8 from '../images/yachtpic2.jpg'
function UserDetailmsg (){

        return(
            <div>
                <UserendHeader></UserendHeader>
                <UserendNavebar></UserendNavebar>

                <div className="container-fluid">
              <div className="row" id="slider">
                <div className="col-12 px-0" id="slider">
                  <div
                    id="carouselExampleControls"
                    class="carousel slide"
                    data-bs-ride="carousel"
                  >
                    <div class="carousel-inner">
                      <div class="carousel-item active">
                        <img src={pic4} class="d-block w-100" alt="..."></img>
                      </div>
                      <div class="carousel-item">
                        <img src={pic9} class="d-block w-100" alt="..."></img>
                      </div>
                      <div class="carousel-item">
                        <img src={pic8} class="d-block w-100" alt="..."></img>
                      </div>
                    </div>
                    <button
                      class="carousel-control-prev"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="prev"
                    >
                      <span
                        class="carousel-control-prev-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Previous</span>
                    </button>
                    <button
                      class="carousel-control-next"
                      type="button"
                      data-bs-target="#carouselExampleControls"
                      data-bs-slide="next"
                    >
                      <span
                        class="carousel-control-next-icon"
                        aria-hidden="true"
                      ></span>
                      <span class="visually-hidden">Next</span>
                    </button>
                  </div>
                </div>
              </div>
            </div>

          


            <div class="container border borer-dark mt-5"id="cont">
                <div class="row border border-dark mt-5">
                    <div class="col-12 border border-dark text-start"><h5>Event Detial </h5></div>
                    <div class="row mt-5">
<div class="col-2 text-start"><h5>Event Name</h5></div>
<div class="col-2">Eid party(20%off)</div>
<div class="col-2"><h5>Start Date</h5></div>
<div class="col-2">25-05-2021</div>
<div class="col-2">End Date</div>
<div class="col-2">27-05-2021</div>
                    </div>
                    <div class="row mt-3">
                        <div class="col-2 text-start"><h5>Listing Name</h5></div>
                        <div class="col-2"> My Listing1</div>
                    </div>
                    <div class="row">
                        <div class="col-3 text-start"><h5>Description</h5></div>
                        <div class="col-6"><p> Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has </p></div>
                    </div>

    <div class="row mt-5">
        <div class="col-2 mx-5 text-end"><button type="btn" class="btn btn-secondary ">Not Interested</button></div>
        <div class="col-2"><button type="btn" class="btn btn-primary text end">Interested</button></div>

    </div>
                </div>
            </div>
            <UserendFooter></UserendFooter>
            </div>
         )
    
}
export default UserDetailmsg;