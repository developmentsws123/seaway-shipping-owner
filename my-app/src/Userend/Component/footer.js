import './footer.css';
function UserendFooter(){
    return (
        <div class="container-fluid bg-dark" id='footer'>
        <div class="row mt-3">
        <div class="col-lg-3 col-sm-6 col-12 text-light " id="Home"><h3 className='text-center'>Home</h3>
        <ul class="list-group">
            <li class="list-group-item bg-dark text-light px-0 border-0">How it works</li>
            <li class="list-group-item bg-dark text-light px-0 border-0">Policies</li>
            <li class="list-group-item bg-dark text-light px-0 border-0">Blog</li>
            <li class="list-group-item bg-dark text-light px-0 border-0">Reviews</li>



        </ul>
        
        
        
        </div>
        <div class="col-lg-3 col-sm-6 col-12 border border-dark" id="Explore"><h3 className='text-center text-light'>Explore</h3>
        <ul class="list-group">
            <li class="list-group-item  bg-dark text-light px-0 border-0">Overnight stays</li>
            <li class="list-group-item  bg-dark text-light px-0 border-0">Day Trips</li>
            <li class="list-group-item  bg-dark text-light px-0 border-0">Water Activities</li>
            <li class="list-group-item  bg-dark text-light px-0 border-0">Destinations</li>



        </ul>
        
        
        </div>
        <div class="col-lg-3 col-sm-6 col-12 border border-dark" id="Support"><h3 className='text-center text-light'>Support</h3>
        
        <ul class="list-group">
            <li class="list-group-item  bg-dark text-light px-0 border-0">Cancellation Policy</li>
            <li class="list-group-item  bg-dark text-light px-0 border-0">Trust & safety</li>
            <li class="list-group-item  bg-dark text-light px-0 border-0">Help Center</li>
            <li class="list-group-item  bg-dark text-light px-0 border-0">Careers</li>



        </ul>
        
        
        </div>
        <div class="col-lg-3 col-sm-6 col-12 border border-dark" id="Contact"><h3 className='text-center text-light'>Contact With us</h3>
        
        <div class="row">
        <div class="col-12 text-primary">
        <i class="bi bi-facebook mx-2 bg-dark text-light " id='icon'></i>
        <i class="bi bi-instagram mx-2 bg-dark text-light"id="icon"></i>
        <i class="bi bi-twitter mx-2 bg-dark text-light" id="icon"></i>
        <i class="bi bi-linkdin mx-2 bg-dark text-light"id="icon"></i>
        </div>
        <div class="row mt-3"> <div class="col-12 text-light" id='customer'>Customer Reviews</div>
        </div>
        <div class="row mt-3"> 
    <div class="col-8 text-end">
            <i class="bi bi-star-fill text-light "></i>
        <i class="bi bi-star-fill text-light"></i>
        <i class="bi bi-star-fill text-light"></i>
        <i class="bi bi-star-fill text-light"></i>
        <i class="bi bi-star-fill text-light"></i>
        </div>
        <div class="col-4 text-start text-light">5.00/5.00</div>
        </div>
        <div class="row mt-3">
            <div class="col-12 text-light" id='based'>Based on & Reviews</div>
        </div>
        </div>
           
        
        
        </div>


        </div>
 <div class="row justify-content-between" id='copyrightrow'>
        <div class="col-md-4 py-4 col-12 border border-dark bg-dark text-light" id='copy'>Copyrights &copy;2022 Seaway Traveling.All Rights Reserved</div>
        <div class="col-md-4 py-4 col-6 border border-dark text-center bg-dark text-light" ><span>privacy</span> <span>Terms</span></div>
        <div class="col-md-4 py-4 col-6 border border-dark text-center bg-dark text-light" ><span>English</span> <span>$USD</span></div>
        </div>

 </div>
    )
}
export default UserendFooter;