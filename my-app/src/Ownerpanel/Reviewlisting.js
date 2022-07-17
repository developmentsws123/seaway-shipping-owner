import Footer from "./Footer";
import Header from "./Header";
import Navbar from "./Navbar";
import './style.css';
function ReviewListing() {
    return (
        <div>
            <Header></Header>
            <div className="container-fluid ">
                <div className="row justify-content-md-start justify-content-between">
                    <div className="col-lg-2 col-3 d-md-block d-none "><Navbar></Navbar></div>
                    <div className="col-lg-10 col-md-9 col-8 content border border-dark p-0">content
                    </div>




                    <div className="col-md-2  col-sm-3 col-4  resnav p-0" id="res">
                        <ul className="nav nav-tabs bg-dark border-bottom-0 flex-column">
                            <li className="nav-item">
                                <a href="#" className="nav-link p-0  py-2 fs-5"><i class="bi bi-bell"></i></a></li>
                            <li className="nav-item">
                                <a href="#" className="nav-link p-0 py-2 fs-5"><i class="bi bi-chat-dots"></i></a></li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link p-0 py-2 fs-5" data-bs-toggle="dropdown" aria-expanded="false">MyAccount&raquo;</a>
                                <ul className="dropdown-menu bg-dark">
                                    <li><a href="#" className="nav-link p-0 py-2 fs-5">My Profile</a></li>
                                    <li><a href="#" className="nav-link p-0 py-2 fs-5">Change Password</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a href="/dashboard" className="nav-link p-0 py-2 fs-5">DashBoard</a></li>
                            <li className="nav-item dropdown">
                                <a href="#" className="nav-link p-0 py-2 fs-5" data-bs-toggle="dropdown" aria-expanded="false">Listing&raquo;</a>
                                <ul className="dropdown-menu bg-dark">
                                    <li><a href="/Yacht" className="nav-link p-0 py-2 fs-5">Yacht</a></li>
                                    <li><a href="/Boat" className="nav-link p-0 py-2 fs-5">Boat</a></li>
                                </ul>
                            </li>
                            <li className="nav-item"><a href="/Event" className="nav-link p-0 py-2 fs-5">Event</a></li>
                            <li className="nav-item"><a href="/ReviewListing" className="nav-link p-0 py-2 fs-5">Review Listing</a></li>
                            <li className="nav-item"><a href="#" className="nav-link p-0 py-2 fs-5">Setting</a></li>
                            <li className="nav-item"><a href="#" className="nav-link p-0 py-2 fs-5">Log out</a></li>

                        </ul>

                    </div>

                </div>
            </div>
            <Footer></Footer>
        </div>
    )
}
export default ReviewListing;