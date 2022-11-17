import React, { useContext } from 'react'
import { ColorPicker, useColor } from "react-color-palette";
import "react-color-palette/lib/css/styles.css";
import './colorPickerFont.css'
import { AppContext } from '../../App';



function ColorPickersFont(props) {
    const [color, setColor] = useColor("hex", "#121212");
    // const { sethaxColor } = useContext(AppContext)
    let onChangeComplete = () => { props.sethaxColor(color.hex) }

    return (
        <div className='cp'>
            <ColorPicker width={456} height={228}
                color={color}
                onChange={setColor} onChangeComplete={onChangeComplete} hideHSV dark />;
        </div>
    )
}

export default ColorPickersFont