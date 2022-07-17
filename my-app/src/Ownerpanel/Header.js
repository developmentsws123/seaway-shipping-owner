import image from '../img/download.png'
import './Header.css'
import { Navigate, useNavigate } from 'react-router-dom'
import { useEffect } from 'react'
function Header() {
  useEffect(() => {
    let localdata = localStorage.getItem('data')
    if (localdata) {
      let object = JSON.parse(localdata)
      document.getElementById('username').innerHTML = object.User_name
    }

    // let Username=object.User_name;
  })

  const navigate = useNavigate()
  function res() {
    if (document.getElementById('res').style.display != 'block') {
      document.getElementById('res').style.display = 'block'
    } else if (document.getElementById('res').style.display != 'none') {
      document.getElementById('res').style.display = 'none'
      console.log('ali')
    }
  }
  function Logout() {
    localStorage.removeItem('data')
    navigate('/signup')
  }
  return (
    <div className="container-fluid ">
      <div className="row justify-content-between bg-secondary">
        <div className="col-md-3 col-sm-5 col-7 logo ">
          <div className="row">
            <div className="col-sm-4 col-6 px-0">
              <img src={image} className="px-2 py-1 rounded-circle"></img>
            </div>
            <div className="col-sm-8 col-6 text px-md-0 py-sm-2 py-2 p-sm-0 p-0 fs-4 text-light ">
              Seaway <span className="">Traveling</span>
            </div>
          </div>
        </div>
        <div className="col-lg-3 col-md-4 myaccount p-0 text-center class d-md-flex d-none  flex-row py-3 justify-content-center">
          <li className="list-group-item border-0  list  fs-5 p-0 px-2 bg-secondary">
            <i class="bi bi-bell"></i>
          </li>
          <li className="list-group-item  border-0  list   fs-5 p-0 px-2 bg-secondary">
            <i class="bi bi-chat-dots"></i>
          </li>
          <li
            className="list-group-item border-0   list   fs-5  p-0  px-2 bg-secondary dropdown-toggle"
            data-bs-toggle="dropdown"
            aria-expanded="false"
            id="username"
          ></li>
          <ul className="dropdown-menu ">
            <li>
              <a class="dropdown-item drop" href="/Profile">
                My Profile
              </a>
            </li>
            <li>
              <a className="dropdown-item drop" href="#">
                Change Password
              </a>
            </li>
            <li>
              <a className="dropdown-item drop" href="#" onClick={Logout}>
                log out
              </a>
            </li>
          </ul>
        </div>
        <div className="col-sm-2 col-3  d-md-none  p-0 py-3 text-center">
          <button className="btn btn-primary " onClick={res}>
            <i class="bi bi-menu-down py-2 px-2 fs-3"></i>
          </button>
        </div>
      </div>
    </div>
  )
}
export default Header
