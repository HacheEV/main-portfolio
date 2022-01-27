import React from "react";
import {Language} from "./language-context";

const language = {
    ESP: {
        hero: "Hola soy Hector. Desarrollador ubicado en España. Creador de productos digitales.\n" +
            "Amante de las últimas tecnologías en busca de la mejor experiencia.",
        heroButton: "Currículum",
        contactFirst: "Listo para contactar?",
        contactSecond: "Empieza tu proyecto ahora!",
        contactButton: "Contacto",
        navbar: ["Habilidades", "Trabajos", "Contacto"],
        contact: ["Nombre", "Apellido", "Correo electrónico", "Razón", "Cuéntame tu idea"],
        contactSelect: ["Nueva web", "Crear un producto digital", "Transformación digital", "Mejorar mi web", "Consultoría" ]
    },
    EN: {
        hero: "Hi, I'm Hector. Developer located in Spain. Creator of digital products.\n" +
        "Lover of the latest technologies in search of the best experience.",
        heroButton: "Resume",
        contactFirst: "Ready to contact me?",
        contactSecond: "Get start your project now!",
        contactButton: "Contact",
        navbar: ["Skills", "Works", "Contact"],
        contact: ["First name", "Last name", "Email address", "Reason", "Tell me your idea"],
        contactSelect: ["New web", "Create a digital product", "Digital transformation", "Upgrade my web", "Consultancy" ]
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
