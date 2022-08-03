import { useCallback, useState } from "react"
import { generateRandomHexColor, hexToRgb } from "../utils/colorUtils"
import ColorText from "./ColorText"
import ColorWindow from "./ColorWindow"

const generateColor = () => {
    const hex = generateRandomHexColor()
    const rgb = hexToRgb(hex)
    
    return {
        hex,
        rgb
    }
}

const RandomColor = () => {
    const [color, setColor] = useState(generateColor())

    return color && <>
        <ColorWindow color={color.hex} onClick={() => setColor(generateColor())} />
        <br />
        <ColorText color={color.hex} />
        <ColorText color={color.rgb.toString()} />
    </>
}

export default RandomColor