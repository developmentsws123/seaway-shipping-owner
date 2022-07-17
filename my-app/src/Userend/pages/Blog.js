import UserendHeader from "../Component/header";
import UserendFooter from "../Component/footer";
import images from "../images/birthday.png";
import Blog2 from "../images/wedding.png";
import Blog3 from "../images/cooperate Event.png";
import Blog4 from "../images/Holiday.png";
import Blog5 from "../images/new year.png";
import Blog6 from "../images/proposals.png";
import Blog7 from "../images/blog7.jpeg";
import Blog8 from "../images/blog8.jpeg";
import pic4 from '../images/overnight4.jpeg'
import pic9 from '../images/yachtpic3.jpg'
import pic8 from '../images/yachtpic2.jpg'
import './Blog.css'
import UserendNavebar from "../Component/navebar";
function UserBlog(){
    return(
       <div>
        <UserendHeader/>
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

          
        
         <div class="container-fluid border border-dark">
        <div class ="row mt-4 border border-dark"> 
        <div class="col-12"><h1>Celebrate on water</h1></div>
        </div>



        <div class ="row mt-4 border border-dark">
            <div class="col-md-4 col-sm-6 col-12"><img src={images} id="img"></img></div>
        <div class="col-md-4 col-sm-6 col-12  border border-dark "><img src={Blog2} id="blog2"></img></div>
        <div class="col-md-4 col-sm-6 col-12 border border-dark"><img src={Blog3} id="blog3"></img></div>
        
        </div>
        <div class ="row mt-4 border border-dark">
        <div class="col-md-4 col-sm-6 col-12"><img src={Blog4} id="blog4"></img></div>
        <div class="col-md-4 col-sm-6 col-12"><img src={Blog5} id="blog5"></img></div>
        <div class="col-md-4 col-sm-6 col-12"><img src={Blog6} id="blog6"></img></div>
        </div>
<div class="row mt-3">
    <div class="col-12"><h1>What's New With Waterpin? </h1></div>
    <div class="row mt-3"> 
    <div class="col-md-4 col-sm-6 col-12"><img src={Blog7} id="blog7"></img><h3>Blog1</h3></div>
    <div class="col-md-4 col-sm-6 col-12"><img src={Blog8} id="blog8"></img><h3>Blog1</h3></div>
    <div class="col-md-4 col-sm-6 col-12"><img src={Blog7} id="blog7"></img><h3>Blog1</h3></div>
    </div>

</div>


         </div>
         <UserendFooter/>
   
   
   
    </div>
    )
}
export default UserBlog;