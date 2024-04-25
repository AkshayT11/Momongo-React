import React from 'react';
import "./news.css"

const NewsLetter = () => {
  return (
    <div className='news'>
        <div className="container">
            <div className="row">
                <div className="col-md-5"></div>
                <div className="col-md-7 ">
                    <div className='text-center d-flex text-white flex-column justify-content-end  letter'>
                        <h2 className='text-white  text-uppercase mb-5'>subscribe for our travel newsletters</h2>
                        <p className=' mb-3'>join our community over 300,000 global readers who receive emails filled with news, promotions and other good stuffs from G Adventures.</p>
                        <div className='d-flex'>
                        <input className="" type="text" placeholder='Enter your Email Address' />
                        <button className='btn btn-light text-uppercase'>search</button>
                        </div>
                        
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}

export default NewsLetter