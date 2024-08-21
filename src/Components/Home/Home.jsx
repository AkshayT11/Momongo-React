import React from 'react'
import Layout from '../Layout/Layout';
import banner from "../../assets/banner.jpg";

import "./home.css";
import Fun from './Fun';
import Popular from './Popular';
import NewsLetter from '../../Pages/News/NewsLetter';
import Estimate from '../../Pages/Estimate/Estimate';
import Blog from '../../Pages/Blog/Blog';

import FooterHelp from '../../Pages/FooterHelp/FooterHelp';
import TabForm from '../../Pages/Tabs/Tabs';


function Home() {
  return (
    <Layout>
      <div style={{ background: `URL(${banner})`, backgroundSize: "cover",width: "100%", minHeight:"590px" }}>
        <div className="container">
          <div className="row">
            <div className="col-md-6 py-5">
              <h1 className='fw-normal text-white pt-4 pb-2'>The best place to Need find <br /> the Very Fast airfares</h1>
              <h3 className="fw-bold">-every single time</h3>
            </div>
          </div>

          {/* <div className="row pb-3">
            <div className="bg-purple px-2 pb-3 pt-1 ">
              <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist">
                <li className="nav-item" role="presentation">
                  <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true"> <i className="fa fa-plane"></i> Flights</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Profile</button>
                </li>
                <li className="nav-item" role="presentation">
                  <button className="nav-link" id="pills-contact-tab" data-bs-toggle="pill" data-bs-target="#pills-contact" type="button" role="tab" aria-controls="pills-contact" aria-selected="false">Contact</button>
                </li>

              </ul>
              <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab" tabindex="0">
                  <div className="row ">
                    <div className="col">
                      <input type="text" className="form-control" placeholder="First name" aria-label="First name"/>
                    </div>
                    <div className="col">
                      <input type="text" className="form-control" placeholder="Last name" aria-label="Last name"/>
                    </div>
                  </div>
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab" tabindex="0">Hotels</div>
                <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab" tabindex="0">Cars</div>

              </div>

            </div>

          </div> */}

          <TabForm/>

        </div>
        {/* another */}
      </div>
        <Fun/>
        <NewsLetter/>
        <Popular/>
        <Estimate/>
        <Blog/>
        {/* <FooterHelp/> */}
    </Layout>
  )
}

export default Home