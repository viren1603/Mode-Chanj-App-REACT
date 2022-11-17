
import './navbar.css'
import { GiChessKing } from 'react-icons/gi'
import { TbColorPicker } from 'react-icons/tb'
import { IoMdColorFill } from 'react-icons/io'

import React, { useState, useContext } from 'react'
import ColorPickersFont from '../ColorPickerFont/ColorPickerFont'
import ColorPickersBackground from '../ColorPickerBackground/ColorPickerBackground'
import { Link } from 'react-router-dom'
import { AppContext } from '../../App'
// import ColorPickersBackground from '../ColorPickerBackground/ColorPickerBackground'

// let fontColorChang = () => {
//     console.log("jhgkh");
//     <ColorPickersFont />
// }




function Navbar(props) {
    // const { haxColor } = useContext(AppContext)
    const [isShow, setIsShow] = useState(false)
    const [isShow1, setIsShow1] = useState(false)

    const handler = (event) => {
        setIsShow(current => !current)
        isShow1 && setIsShow1(current => !current)
    }

    let backgroundChang = (event) => {
        setIsShow1(current => !current)
        isShow && setIsShow(current => !current)

    }

    return (
        <>
            {/* {props.haxColor} */}
            {/* {props.haxColor1b} */}
            <div className="navbar" style={{ backgroundColor: props.haxColor1b }}>
                <div className="container">
                    <div className="row align-contain-center">
                        <div className="logoNav" style={{ color: props.haxColor }}>
                            <Link to='/'>
                                <div className="mmm" style={{ color: props.haxColor }}>
                                    <GiChessKing></GiChessKing> King{ }
                                </div>
                            </Link>
                        </div>


                        <div className="colorPicker" style={{ color: props.haxColor ? props.haxColor : "white" }}>
                            <div className="fontColorChang" onClick={handler} >
                                <TbColorPicker></TbColorPicker>
                            </div>
                            <div className="backgroundChang" onClick={backgroundChang}>
                                <IoMdColorFill></IoMdColorFill>
                            </div>
                            {/* <button type='submit' >submit</button> */}
                        </div>
                    </div>
                </div>
                <div className="pickerColor">
                    {isShow && <ColorPickersFont sethaxColor={props.sethaxColor} />}
                </div>

                <div className="pickerColor2">
                    {isShow1 && <ColorPickersBackground sethaxColor1b={props.sethaxColor1b} />}
                </div>
            </div>


        </>





    )
}

export default Navbar