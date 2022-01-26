import React from "react";
import {Language} from "./language-context";

const language = {
    ESP: {
        hero: "Hola soy Hector. Desarrollador ubicado en España. Creador de productos digitales.\n" +
            "Amante de las últimas tecnologías en busca de la mejor experiencia.",
        heroButton: "Descargar CV",
        contactFirst: "Estas listo para contactar conmigo?",
        contactSecond: "Empieza tu proyecto ahora!",
        contactButton: "Contacto"
    },
    EN: {
        hero: "Hi, I'm Hector. Developer located in Spain. Creator of digital products.\n" +
        "Lover of the latest technologies in search of the best experience.",
        heroButton: "Download Resume",
        contactFirst: "Ready to contact me?",
        contactSecond: "Get start your project now!",
        contactButton: "Contact"
    }
}
export const languageInitialState = language.ESP

export const languageReducer = (state:any, action:any) =>{
    switch (action){
        case Language.ESP:
            return state = language.ESP
        case Language.EN:
            return state = language.EN
        default:
            return state = languageInitialState
    }
}
