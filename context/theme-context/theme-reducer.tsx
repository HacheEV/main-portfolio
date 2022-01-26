import React from "react";
import {Colors} from "./theme-context";
import MediumGreen from "../../public/assets/medium-green.png";
import MediumPink from "../../public/assets/medium-pink.png";
import MediumRed from "../../public/assets/medium-red.png";
import MediumYellow from "../../public/assets/medium-yellow.png";

const themeAccents = {
    color: [Colors.GREEN, Colors.PINK, Colors.RED, Colors.YELLOW],
    bg: [ "bg-accent-green", "bg-accent-pink", "bg-accent-red", "bg-accent-yellow"],
    border: [ "border-accent-green", "border-accent-pink", "border-accent-red", "border-accent-yellow"],
    shadow: [ "shadow-accent-green", "shadow-accent-pink", "shadow-accent-red", "shadow-accent-yellow"],
    text: [ "text-accent-green", "text-accent-pink", "text-accent-red", "text-accent-yellow"],
    image: [ MediumGreen, MediumPink, MediumRed, MediumYellow],
}
export const initialState = {
    color:themeAccents.color[0],
    bg:themeAccents.bg[0],
    border:themeAccents.border[0],
    shadow:themeAccents.shadow[0],
    text:themeAccents.text[0],
    image:themeAccents.image[0]
}

export const reducer = (state:any, action:any) =>{
    switch (action){
        case Colors.GREEN:
            return state = {
                color:themeAccents.color[0],
                bg:themeAccents.bg[0],
                border:themeAccents.border[0],
                shadow:themeAccents.shadow[0],
                text:themeAccents.text[0],
                image:themeAccents.image[0]
            }
        case Colors.PINK:
            return state = {
                color:themeAccents.color[1],
                bg:themeAccents.bg[1],
                border:themeAccents.border[1],
                shadow:themeAccents.shadow[1],
                text:themeAccents.text[1],
                image:themeAccents.image[1]
        }
        case Colors.RED:
            return state = {
                color:themeAccents.color[2],
                bg:themeAccents.bg[2],
                border:themeAccents.border[2],
                shadow:themeAccents.shadow[2],
                text:themeAccents.text[2],
                image:themeAccents.image[2]
            }
        case Colors.YELLOW:
            return state = {
                color:themeAccents.color[3],
                bg:themeAccents.bg[3],
                border:themeAccents.border[3],
                shadow:themeAccents.shadow[3],
                text:themeAccents.text[3],
                image:themeAccents.image[3]
            }
        default:
            return state = initialState
    }
}
