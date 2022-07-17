import UserendHeader from "../Component/header";
import Overnight1 from "../images/overnight1.jpeg";
import Overnight2 from "../images/overnight2.jpeg";
import Overnight3 from "../images/overnight3.png";
import Overnight4 from "../images/overnight4.jpeg";
import "./overnight.css"
function UserOvernight(){
    return(
        <div> 
            <UserendHeader/>
<div class="container-fluid ">

    <div class="row align-items-start ">

    <div class="col-xl-4 col-md-6  px-0  border border-dark">
        
        <img src={Overnight1} class="img-fluid" id="overnight1"></img>
        
        </div>
    
    <div class="col-xl-4 col-md-6">
        <div class="row flex-column">
       
        <div class="col-12 p-0 ">
            
             <img src={Overnight2} class="img-fluid" id="overnight2"></img>
             
             </div>
        
        <div class="col-12 "><div class="row">
           
           <div class="col-6 p-0"><img src={Overnight3} class="img-fluid" id="overnight3"></img></div>
           
            <div class="col-6 p-0"><img src={Overnight4} class="img-fluid" id="overnight4"></img></div>
           
            </div>
            
            </div>
        </div>
       
        </div>
        <div class="col-xl-4 col-md-6"> 
        <div class="row justify-content-between">
         <div class="col-4"><h3>USD:45$</h3></div>
         <div class="col-4 text-end"><i class="bi bi-heart fs-4"></i></div>   
                {/* row */}
        </div>
        <div class="row"><div class="col  border border-dark">
            <div class="row">
                <div class="col-12 text-start mt-4"><h5>SELECT GUEST</h5></div>
            <div class="row">
                <div class="col-12">
                <select class="form-select">
            <option>SELECT</option>   
            <option  value="1hours">ONE Persons</option>
            <option value="2hours">TWo Person</option>
            <option value="3hours">THREE Person</option>
            <option value="4hours">FOUR Person</option>
            <option value="5hours">FIVE Person</option>
            </select>
            
            </div>
            
            </div>
            </div>
            
            <div class="row">
                <div class="col-12 text-start mt-3"><h5>DURATION</h5></div>
            <div class="row">
            <select class="form-select">
            <option>SELECT TIME</option>   
            <option  value="1hours">ONE hour</option>
            <option value="2hours">TWo hours</option>
            <option value="3hours">THREE hours</option>
            <option value="4hours">FOUR fours</option>
            <option value="5hours">FIVE fives</option>
            </select>  
            
            
            
            </div>

            {/* row1 col-12 */}
            </div>
             
             <div class="row mt-3">
                 <div class="col-6 p-0 border border-dark "><h5>START DATE</h5></div>
             <div class="col-6 p-0 border border-dark"><h5>END DATE</h5></div>
             {/* row close */}
             </div>
            
            <div class="row p-0 ">
            <div class="col-6 text-start"> <input type="date"></input></div>
            <div class="col-6 text-end"> <input type="date"></input></div>

            {/* row end input tag */}
            </div>

<div class="row border border-dark mt-3"><div class="col-8 border border-dark text-start"><h5>DURATION:</h5></div>
<div class="col-4 border border-dark text-end">234$</div>

</div>

<div class="row  border border-dark"><div class="col-8 border border-dark text-start"><h5>TEXES:</h5></div>
<div class="col-4 border border-dark text-end">20$</div>

</div>


<div class="row border border-dark"><div class="col-8 border border-dark text-start"><h5>EXTRAS:</h5></div>
<div class="col-4 border border-dark text-end">6$</div>

</div>

<div class="row  border border-dark"><div class="col-8 border border-dark text-start"><h5>TOTEL:</h5></div>
<div class="col-4 border border-dark text-end">260$</div>
</div>

<div className="row border border-dark">
<div class="col-12 text-end px-0 "><button class="btn bg-primary" id="button"><h5>Book Now</h5></button></div>

</div>

  </div>
  </div>
        {/* col-4 */}
        </div>
        <div class="row ">
            <div class="col-12 border border-dark px-0">
            <div class="dropdown">
  <a class="btn btn-secondary dropdown-toggle text-start" href="#" role="button" id="dropdownMenuLink" data-bs-toggle="dropdown" aria-expanded="false">
    Payment
  </a>

  <ul class="dropdown-menu" aria-labelledby="dropdownMenuLink">
    <li><a class="dropdown-item" id
    ="dropdown-item" href="#">Easy Paisa</a></li>
    <li><a class="dropdown-item" id="dropdown-item" href="#">Bank account</a></li>
 
  </ul>
</div>      

            </div>
  
</div>
    </div>
    
    
    
    </div>
    <div class="container border border-dark mt-5">
    <div class="row">
        <div class="col-lg-4 col-md-6 border border-dark"><h5>INTERIOR</h5></div>
        <div class="col-lg-4 col-md-6 border border-dark"><h5>EXTERIOR</h5></div>
        <div class="col-lg-4 col-md-6 border border-dark"><h5>CANCELLATION POLICY</h5></div>
        <div class="col-lg-4 col-md-6 border border-dark"><h5>RULES</h5></div>
        <div class="col-lg-4 col-md-6 border border-dark"><h5>OWNER PROFILE</h5></div>
        <div class="col-lg-4 col-md-6 border border-dark"><h5>REVIES</h5></div>
        
        </div>
        </div>

</div>

    
    )
}
    

export default UserOvernight;