import img from '../images/locator.png';
import './header.css';
function UserendHeader(){
    return (
    <div class ="container-fluid home "id='Home2'>
        <div class="row justify-content-between">
            <div class="col-md-3 col-12 ">
                <div class="row justify-content-start"> 
            <div class= "col-md-4 col-2 image" id="logo"><img src={img} class="img-fluid border-0"  id="logo"></img></div>
            <div class="col-md-8 col-10  text-start py-3 text-light" id="name"><marquee width="100%" direction="left">SEAWAY TRAVELING</marquee></div>

            </div> </div>
            {/* <div class="col-md-5 col-9  d-flex justify-content-start menubar px-0 py-md-2">
            <a href="#" class="nav-link px-1 px-md-3" id="a1">Overnightstay</a>
            <a href="#" class="nav-link px-1 px-md-3" id="a2">Daytrips</a>
            <a href="#" class="nav-link px-1 px-md-3" id="a3">Ships</a>
            
            
            </div> */}
            <div class="col-md-4 col-3 text-end">
                <span id="spnbell"><i class="bi bi-bell-fill text-warning" id="bell"></i> </span>

            <span id="spnlist"><i class="bi bi-list text-light" id="notifi"></i></span>
             </div>

        </div>

    </div>
    );
}
export default UserendHeader;