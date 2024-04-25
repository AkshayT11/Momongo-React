import React from 'react'
import dest1 from "../../assets/dest1.jpg";
import popular from "../../json-api/popular.json";

const Popular = () => {
  return (
    <div className='bg-purple py-5'>
        <div className="container">
            <div className="row">
                <h4 className='text-center text-white pb-4 text-uppercase'>popular destinations</h4>

                {
                    popular.map((item,index)=>{
                        return(
                            <div className="col-lg-3 col-md-6 col-12 mb-2">
                            <div className="card" >
                                <img src={item.image} className="card-img-top" alt="..."/>
                                    <div className="card-body">
                                        <h5 className="card-title">{item.text} </h5>
                                        <p className="card-text text-black">This is the Lowest Price we've seen in our four years for a nine-night</p>
                                        <a href="#" className="btn btn-primary">Go somewhere</a>
                                    </div>
                            </div>
                      </div>
                        )
                    })
                }

            </div>
        </div>
    </div>
  )
}

export default Popular