import { useState } from 'react';

import "./tabs.css";
import { FaPlaneDeparture, FaHotel } from "react-icons/fa";
import { IoCarSport } from "react-icons/io5";
import Col from 'react-bootstrap/Col';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import { CiLocationOn } from "react-icons/ci";
import { Button } from 'react-bootstrap';


function TabForm() {
    const [toggle, setToggle] = useState(1);
    const [active, setActive] = useState(false);


    const updateToggle = (id) => {
        setToggle(id);
        setActive(!active)
    }

    return (
        <>
            <div className="tabs ">
                <div className="container">
                    <div className="row">
                        <div className="col-md-2 col-12">
                            <ul className='d-flex '>
                                <li className={toggle === 1 ? "active" : ""}
                                    onClick={() => updateToggle(1)}><FaPlaneDeparture size={20} /> Flights</li>
                                <li className={toggle === 2 ? "active" : ""} onClick={() => updateToggle(2)}><FaHotel size={20} /> Hotels</li>
                                <li className={toggle === 3 ? "active" : ""} onClick={() => updateToggle(3)}> <IoCarSport size={20} /> Cars</li>
                            </ul>
                        </div>
                    </div>

                    <div className={toggle === 1 ? "show-content " : "content"}>
                        <div className="row">
                            <div className="col-md-12 col-6">
                                <Form >
                                    <Row>
                                        <Col xs="auto" className='mt-3'>
                                            <Form.Control placeholder="Enter Origin City" />
                                        </Col>
                                        <Col xs="auto" className='mt-3'>
                                            <Form.Control placeholder="Ener Destination City" />
                                        </Col>
                                        <Col xs="auto" className='mt-3'>
                                            <Form.Control type='date' placeholder="date" />
                                        </Col>
                                        <Col xs="auto" className='mt-3'>
                                            <Form.Control type='date' placeholder="date" />
                                        </Col>
                                        <Col xs="auto" className='mt-3'>
                                            <Form.Select defaultValue="1 Passenger">
                                                <option>1 Passenger </option>

                                            </Form.Select>
                                        </Col>

                                        <Col xs="auto">
                                            <Button variant='danger'> Search
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </div>

                    <div className={toggle === 2 ? "show-content " : "content"}>
                        <div className="row ">
                            <div className="col-md-12 col-6">
                                <Form >
                                    <Row>
                                        <Col xs="auto" className='mt-3'>
                                            <Form.Control placeholder="Enter  City" />
                                        </Col>

                                        <Col xs="auto" className='mt-3'>
                                            <Form.Control type='text' placeholder="Check In" />
                                        </Col>
                                        <Col xs="auto" className='mt-3'>
                                            <Form.Control type='text' placeholder="Check Out" />
                                        </Col>
                                        <Col xs="auto" className='mt-3'>
                                            <Form.Select defaultValue="1 Rooms">
                                                <option>1 Rooms </option>
                                                <option>2 Rooms </option>
                                                <option>3 Rooms </option>
                                                <option>5 Rooms </option>

                                            </Form.Select>
                                        </Col>

                                        <Col xs="auto">
                                            <Button variant='danger'> Search
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </div>

                    <div className={toggle === 3 ? "show-content " : "content"}>
                        <div className="row ">
                            <div className="col-md-12 col-6">
                                <Form >
                                    <Row>
                                        <Col xs="auto" className='mt-3'>
                                            <Form.Control placeholder="Advance Booking" />
                                        </Col>
                                        <Col xs="auto" className='mt-3'>
                                            <Form.Control placeholder="Driving Liscence" />
                                        </Col>
                                        <Col xs="auto" className='mt-3'>
                                            <Form.Control type='date' placeholder="date" />
                                        </Col>

                                        <Col xs="auto" className='mt-3'>
                                            <Form.Select defaultValue="Maruti Swift Desire">
                                                <option> Ertiga </option>
                                                <option> Thar </option>
                                                <option> Innova </option>
                                                <option> Harrior </option>

                                            </Form.Select>
                                        </Col>

                                        <Col xs="auto">
                                            <Button variant='danger'> Search
                                            </Button>
                                        </Col>
                                    </Row>
                                </Form>
                            </div>
                        </div>
                    </div>

                    <div className="row px:0px">
                        <div className="col-sm-6 col-xl-3 col-lg-4 " style={{ color: 'white', fontFamily: "'Roboto', sans-serif,FontAwesome", outline: "none" }}>
                            &#xf021; Trip type:

                            <select style={{ backgroundColor: "transparent", color: "#8daece", border: "0px", fontSize: '16px' }} defaultValue="Return trip">
                                <option> Return trip </option>
                                <option> One way trip </option>
                            </select>

                        </div>
                        <div className="col-sm-6 col-xl-3 col-lg-4 " style={{ color: 'white', fontFamily: "'Roboto', sans-serif,FontAwesome", outline: "none" }}>
                            &#xf145; Ticket Class

                            <select style={{ backgroundColor: "transparent", color: "#8daece", border: "0px", fontSize: '16px' }} defaultValue="Return trip">
                                <option> Return trip </option>
                                <option> One way trip </option>
                            </select>

                        </div>

                        <div className="col-sm-6 col-xl-2 col-lg-3 mt-1" style={{ color: 'white' }}>
                            Direct Flights Only &#9744;
                        </div>
                        <div className="col-sm-6 col-xl-2 col-lg-3 mt-1" style={{ color: 'white' }}>
                            Include Nearby Airports &#9744;
                        </div>

                    </div>
                </div>
            </div>
        </>
    );
}

export default TabForm;