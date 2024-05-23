"use client";

import { colorToCss } from "@/lib/utils";
import { Color } from "@/types/canvas";

interface ColorPickerProps {
    onChange: (color: Color) => void
}

export const ColorPicker = ({onChange}: ColorPickerProps) => {
    return (
        <div 
            className="flex flex-wrap gap-2 items-center max-w-[164px] pr-2 mr-2 border-r border-neutral-200"
        >
            <ColorButton color={{ r: 143, g: 243, b: 130 }} onClick={onChange} />
            <ColorButton color={{ r: 255, g: 249, b: 177 }} onClick={onChange} />
            <ColorButton color={{ r: 255, g: 255, b: 255 }} onClick={onChange} />
            <ColorButton color={{ r: 246, g: 157, b: 225 }} onClick={onChange} />
            <ColorButton color={{ r: 155, g: 105, b: 245 }} onClick={onChange} />
            <ColorButton color={{ r: 193, g: 21, b: 206 }} onClick={onChange} />
            <ColorButton color={{ r: 39, g: 142, b: 237 }} onClick={onChange} />
            <ColorButton color={{ r: 13, g: 17, b: 114 }} onClick={onChange} />
            <ColorButton color={{ r: 252, g: 142, b: 42 }} onClick={onChange} />
            <ColorButton color={{ r: 204, g: 25, b: 25 }} onClick={onChange} />
            <ColorButton color={{ r: 155, g: 155, b: 155 }} onClick={onChange} />
            <ColorButton color={{ r: 0, g: 0, b: 0 }} onClick={onChange} />




        </div>
    )
}

interface ColorButtonProps {
    onClick: (color: Color) => void
    color: Color
}

const ColorButton = ({onClick, color}: ColorButtonProps) => {
    return(
        <button
            className="w-8 h-8 items-center flex justify-center hover:opacity-75 transition"
            onClick={() => onClick(color)}
        >
            <div 
                className="h-8 w-8 rounded-md border border-neutral-200"
                style={{background: colorToCss(color)}}
            >

            </div>
        </button>

    )
}