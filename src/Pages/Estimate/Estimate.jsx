import React from 'react';
import "./estimate.css";
import est2 from "../../assets/est2.png"

const Estimate = () => {
  return (
    <div className='esti'>
        <div className="container">
        <img className='img-fluid' src={est2} alt="" />
            <div className="row mb-2">
                <div className="col-12 mt-4">
                    <h1 className='text-white fw-normal fs-2 mt-3 mb-0'>GET A QUICK ESTIMATE!</h1>
                    <h5 className="under text-white fw-normal"> PROFESSIONAL HELP</h5>
                </div>
            </div>
            <div className="row">
               
                <div className="form col-md-12 col-sm-6">
                    <select name="travel" id="travel">
                        <option selected>Travel Purpose</option>
                        <option value="Educational">Educational</option>
                        <option value="Service">Service</option>
                        <option value="Tourist">Tourist</option>
                        <option value="Function">Function</option>
                        <option value="Shooting">Shooting</option>
                    </select>
                    <input type="date" name="date" id="date" />
                    <select name="travel" id="travel">
                        <option selected>No of People</option>
                        <option value="Educational">Educational</option>
                    </select>
                    <input type="email" name="email" placeholder='Your Email' />
                    <input type="button" value="Calculate Now" />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Estimate