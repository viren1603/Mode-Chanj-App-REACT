import './home.css';


import React from 'react'
import { Link } from 'react-router-dom';

function Home(props) {
    return (
        <div className='slider' style={{ backgroundColor: props.haxColor }}>
            <div className="container">
                <div className="row">
                    <div className="d1">
                        <div className="d1ImgBox animate__animated animate__bounceInLeft">
                            <img className='imgHome' src={props.thar.img} alt="" />
                        </div>
                    </div>
                    <div className="d2 animate__animated animate__bounceInRight" style={{ color: props.haxColor1b ? props.haxColor1b : "#6B026C" }}>
                        <div className="p1">
                            <h1>{props.thar.title}</h1>
                        </div>
                        <div className='lklk animate__animated animate__bounceInRight'>
                            <div className="p2">
                                <p>{props.thar.l1}
                                    <br></br>
                                    <br></br>
                                    {props.thar.l2}
                                    <br></br>
                                </p>
                            </div>
                            <div className="p2">
                                <b>{props.thar.price}</b>
                            </div>
                        </div>

                        <div className="p3">
                            <Link to='./scorpio'>
                                <button className='p3Button' style={{ backgroundColor: props.haxColor1b ? props.haxColor1b : "#6B026C", color: props.haxColor ? props.haxColor : "white" }} > Next</button></Link>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Home