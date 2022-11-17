import React from 'react'
import './audi.css'
// import audi from '../../img/audi.jfif'

function Audi(props) {
    return (
        <div className='slider' style={{ backgroundColor: props.haxColor }}>
            <div className="container animate__animated animate__slideInDown">
                <div className="row ">
                    <div className="d1 timeDile animate__animated animate__rollIn">
                        <div className="d1ImgBox">
                            <img className='imgHome' src={props.audi.img} alt="" />
                        </div>
                    </div>
                    <div className="d2" style={{ color: props.haxColor1b ? props.haxColor1b : "#6B026C" }}>
                        <div className="p1">
                            <h1 className=''>{props.audi.title}</h1>
                        </div>
                        <div className="p2">
                            <p>{props.audi.l1}
                                <br></br>
                                <br></br>
                                {props.audi.l2}
                                <br></br>
                            </p>
                        </div>
                        <div className="p2">
                            <b>{props.audi.price}</b>
                        </div>
                        <div className="p3">
                            <button className='p3Button timeDile ' style={{ backgroundColor: props.haxColor1b ? props.haxColor1b : "#6B026C", color: props.haxColor ? props.haxColor : "white" }} >Next</button>
                        </div>
                    </div>

                </div>
            </div>
        </div >
    )
}

export default Audi