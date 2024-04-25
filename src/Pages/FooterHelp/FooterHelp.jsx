import React from 'react';
import "./footerhelp.css";
import { FaGlobeAmericas,FaTwitter,FaFacebookF, FaGooglePlusG } from "react-icons/fa";
import foot1 from "../../assets/foot1.png"

const FooterHelp = () => {
  return (
    <footer>
        <div className="container">
            <div className="row">
        <div className="col-md-4 col-12 my-5">
            <h3 className='fs-4 mb-3'>Top Countries</h3>
            <p> <span className='text-secondary'> <FaGlobeAmericas /> Flights To </span> United Sates </p>
            <p> <span className='text-secondary'> <FaGlobeAmericas /> Flights To </span> United Kingdom </p>
            <p> <span className='text-secondary'> <FaGlobeAmericas /> Flights To </span> Spain </p>
            <p> <span className='text-secondary'> <FaGlobeAmericas /> Flights To </span> Thailand </p>
            <p> <span className='text-secondary'> <FaGlobeAmericas /> Flights To </span> India </p>
            <p> <span className='text-secondary'> <FaGlobeAmericas /> Flights To </span> Italy </p>
            <p> <span className='text-secondary'> <FaGlobeAmericas /> Flights To </span> Germany </p>
            <p> <span className='text-secondary'> <FaGlobeAmericas /> Flights To </span> Denmark </p>
            <p> <span className='text-secondary'> <FaGlobeAmericas /> Flights To </span> France </p>
            <p> <span className='text-secondary'> <FaGlobeAmericas /> Flights To </span> Australia </p>
        </div>

        <div className="col-md-4 col-12 my-5">
            <h3 className='fs-4 mb-3'>Top Cities</h3>
            <p> <span className='text-secondary'> <FaGlobeAmericas /> Flights To </span> London <span className='text-secondary'>United Kingdom</span> </p>
            <p> <span className='text-secondary'> <FaGlobeAmericas /> Flights To </span> New York <span className='text-secondary'>United States</span> </p>
            <p> <span className='text-secondary'> <FaGlobeAmericas /> Flights To </span> Bangkok <span className='text-secondary'>Thailand</span> </p>
            <p> <span className='text-secondary'> <FaGlobeAmericas /> Flights To </span> Copenhegen <span className='text-secondary'>Denmark</span> </p>
            <p> <span className='text-secondary'> <FaGlobeAmericas /> Flights To </span> Orlando <span className='text-secondary'>United States</span> </p>
            <p> <span className='text-secondary'> <FaGlobeAmericas /> Flights To </span> Paris <span className='text-secondary'>France</span> </p>
            <p> <span className='text-secondary'> <FaGlobeAmericas /> Flights To </span> Dubai <span className='text-secondary'>United Arab Emirates</span> </p>
            <p> <span className='text-secondary'> <FaGlobeAmericas /> Flights To </span> Singapore <span className='text-secondary'>Malysia</span> </p>
            <p> <span className='text-secondary'> <FaGlobeAmericas /> Flights To </span> Istanbul <span className='text-secondary'>Turkey</span> </p>
            <p> <span className='text-secondary'> <FaGlobeAmericas /> Flights To </span> Hong Kong <span className='text-secondary'>Hong Kong</span> </p>
            
        </div>

        <div className="col-md-4 col-12 my-5 ">
        <h3 className='fs-4 mb-3'>International Sites</h3>
               
        <div className='row gx-2'>
            <div className='col-md-6 col-12'>
              <p className='text-secondary'>billege fibiletter</p>
              <p className='text-secondary'>Cheap Flights</p>
              <p className='text-secondary'>Flights</p>
              <p className='text-secondary'>Cheap Flights</p>
              <p className='text-secondary'>Vuelos baratos</p>
              <p className='text-secondary'>Halvot Lennot</p>
              <p className='text-secondary'>vol pas cher</p>
            </div>
            <div className='col-md-6 col-12 mt-2'>
              <p className='text-secondary'>billege fibiletter</p>
              <p className='text-secondary'>Cheap Flights</p>
              <p className='text-secondary'>Flights</p>
              <p className='text-secondary'>Cheap Flights</p>
              <p className='text-secondary'>Vuelos baratos</p>
              
            </div>
            </div>
            

        </div>

        </div>

        <div className="row">
          <div className="col-md-9 col-lg-9 col-12 d-flex align-items-start text-white justify-content-start">
          <img src={foot1} alt="" className='img-fluid foot1' />
          <div className="content_footer">
            <ul>
              <li>About Us</li>
              <li>Jobs</li>
              <li>Press</li>
              <li>Affilates</li>
              <li>Terms of Use</li>
              <li>Privacy Policy</li>
              <li>Cookies</li>
              <li>Airlines</li>
              <li>Apps</li>
              <li>Helps</li>
            </ul>
            <p className='text-secondary ms-4 py-2'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Ut dolores dignissimos odio quaerat expedita amet  </p>
          </div>
          </div>

          <div className="col-md-2 col-12 ms-5">
            <div className=' icon'>
            <FaTwitter className='icons' size={24} />
            <FaFacebookF className='icons' size={24} />
            <FaGooglePlusG className='icons' size={24} />
            </div>
          </div>

        </div>

        </div>
    </footer>
  )
}

export default FooterHelp