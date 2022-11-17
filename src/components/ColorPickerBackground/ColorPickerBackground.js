import React from 'react'
import './ColorPickerBackground'
import { ColorPicker, useColor } from "react-color-palette";


function ColorPickersBackground(props) {
    const [color, setColor] = useColor("hex", "");
    let onChangeComplete = () => { props.sethaxColor1b(color.hex) }


    return (
        <>
            <div className='cp'>
                <ColorPicker width={456} height={228}
                    color={color}
                    onChange={setColor} onChangeComplete={onChangeComplete} hideHSV dark />;
            </div>
        </>
    )
}

export default ColorPickersBackground