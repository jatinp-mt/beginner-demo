import { SliderPicker } from 'react-color';
import { GetColorName } from 'hex-color-to-color-name';
import { useState } from 'react';

const ColorPicker = ({ colorValue, setColorValue, setHexValue }) => {
    const [background, setBackground] = useState(colorValue)
    const handleChangeComplete = (color) => {
        setBackground(color.hex)
    };

    return (
        <SliderPicker
            color={background}
            onChangeComplete={(e) => {
                handleChangeComplete(e);
                setColorValue(GetColorName(e.hex));
                setHexValue(e.hex);
            }
            }
        />
    )
}

export default ColorPicker