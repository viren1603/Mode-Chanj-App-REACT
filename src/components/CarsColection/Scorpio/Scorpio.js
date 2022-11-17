import './scorpio.css';
import React from 'react'
import { Link } from 'react-router-dom';

function Scorpio(props) {
    return (
        <div className='slider' style={{ backgroundColor: props.haxColor }}>
            <div className="container">
                <div className="row">
                    <div className="d1">
                        <div className="d1ImgBox">
                            <img className='imgHome animate__animated animate__bounceInDown ' src={props.scorpio.img} alt="" />
                        </div>
                    </div>
                    <div className="d2" style={{ color: props.haxColor1b ? props.haxColor1b : "#6B026C" }}>
                        <div className="p1 animate__animated animate__bounceInDown">
                            <h1 className=''>{props.scorpio.title}</h1>
                        </div>
                        <div className="p2 animate__animated animate__bounceInDown">
                            <p className='transitionD animate__animated animate__fadeIn'>{props.scorpio.l1}
                                <br></br>
                                <br></br>
                                {props.scorpio.l2}
                                <br></br>
                            </p>
                        </div>
                        <div className="p2 animate__animated animate__backInUp">
                            <b>{props.scorpio.price}    </b>
                        </div>
                        <div className="p3 animate__animated animate__backInUp">
                            <Link to='./audi'>
                                <button className='p3Button' style={{ backgroundColor: props.haxColor1b ? props.haxColor1b : "#6B026C", color: props.haxColor ? props.haxColor : "white" }} > Next</button></Link>

                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Scorpio