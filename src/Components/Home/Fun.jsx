import React from 'react'
import "./home.css";
import fun from "../../json-api/fun.json";
import { GiHiking,GiCycling, GiSailboat,GiJungle } from "react-icons/gi";
import { FaMapMarkerAlt } from "react-icons/fa";
import { FaMountainSun } from "react-icons/fa6";



function Fun() {
    return (
        <div className='bg-fun py-5'>
            <div className="container">
                            <div className="row">
                                <h2 className='text-center text-uppercase mt-0 mb-5'>some fun we covered</h2>
                            </div>

                <div className="row">
                                <div className="col-lg-2 col-md-4 col-6 mb-3 ">
                                    <div className="bg-dark p-3 text-center text-white ">
                                         <GiCycling size={50} />
                                        <p className="fw-bold mb-0"> 5670 M </p>
                                        <p className='mt-1'> CYCLING TRACK </p>
                                        <button className='btn btn-info'>Search</button>
                                      
                                      </div>
                                 </div>
                            
                                 <div className="col-lg-2 col-md-4 col-6 mb-3 ">
                                      <div className="bg-dark p-3 text-center text-white">
                                        <div> <FaMapMarkerAlt size={40} className='mb-2' /> </div>
                                        <p className="fw-bold mb-0"> 5670 M </p>
                                        <p className='mt-1'> DISTANCE COVERED </p>
                                        <button className='btn btn-info'>Search</button>
                                      
                                      </div>
                                      </div>  

                                    <div className="col-lg-2 col-md-4 col-6 mb-3 ">
                                      <div className="bg-dark p-3 text-center text-white">
                                        <div> <GiHiking size={50} /> </div>
                                        <p className="fw-bold mb-0"> 5670 M </p>
                                        <p className='mt-1'> ALTITUDE HIKE </p>
                                        <button className='btn btn-info'>Search</button>
                                      
                                      </div>
                                    </div>

                                    <div className="col-lg-2 col-md-4 col-6 mb-3 ">   
                                      <div className="bg-dark p-3 text-center text-white">
                                        <div> <GiSailboat size={50} /> </div>
                                        <p className="fw-bold mb-0"> 180 KM </p>
                                        <p className='mt-1'> SAILING DISTANCE </p>
                                        <button className='btn btn-info'>Search</button>
                                      
                                      </div>
                                    </div>

                                    <div className="col-lg-2 col-md-4 col-6 mb-3 ">    
                                      <div className="bg-dark p-3 text-center text-white">
                                        <div> <FaMountainSun size={50} /> </div>
                                        <p className="fw-bold mb-0"> 560 DAYS </p>
                                        <p className='mt-1'> SPENT ADVENTURE </p>
                                        <button className='btn btn-info'>Search</button>
                                      
                                      </div>
                                    </div>    

                                    <div className="col-lg-2 col-md-4 col-6 mb-3 ">
                                      <div className="bg-dark p-3 text-center text-white">
                                        <div> <GiJungle size={50} /> </div>
                                        <p className="fw-bold mb-0"> 5670 M </p>
                                        <p className='mt-1'> CYCLING TRACK </p>
                                        <button className='btn btn-info'>Search</button>
                                      
                                      </div>
                                    </div> 
                                
                           
                </div>
            </div>
        </div>
    )
}

export default Fun