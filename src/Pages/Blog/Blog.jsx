import React from 'react';
import blog1 from "../../assets/1.jpg";
import blog2 from "../../assets/baby.jpg";
import "./blog.css";

const Blog = () => {
  return (
    <div className='blog' >
        <div className="container">
            <div className="row my-3 mt-5 text-center">
                <h2 >LATEST BLOG</h2>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Mollitia blanditiis laboriosam iusto aliquam ea possimus nam praesentium eos similique quis. Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sapiente ad exercitationem nihil quia deleniti esse harum temporibus quidem iusto officiis odit ipsa,  </p>    
            </div>   

             <div className="row mt-5 mb-3">
                <div className="col-md-6 col-12 mb-2">
                    <div className="pic1 d-flex justify-content-between ">
                        <img className='img-fluid' src={blog1} alt="" />
                        <div className="content_blog" style={{marginLeft:"28px"}}>
                            <p>Feb 01, 2016</p>
                            <h3 className='fs-5'>10 THINGS TO DO BEFORE TRAVEL</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam dolore eveniet ea tempora sequi iusto, distinctio deserunt architecto!</p>
                        </div>
                    </div>
                </div>

                <div className="col-md-6 col-12">
                    <div className="pic1 d-flex justify-content-between ">
                        <img className='img-fluid' src={blog2} alt="" />
                        <div className="content_blog" style={{marginLeft:"28px"}}>
                            <p>Feb 01, 2016</p>
                            <h3 className='fs-5'>10 THINGS TO DO BEFORE TRAVEL</h3>
                            <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Aliquam dolore eveniet ea tempora sequi iusto, distinctio deserunt architecto!</p>
                        </div>
                    </div>
                </div>

             </div>
        </div>    
    </div>
  )
}

export default Blog