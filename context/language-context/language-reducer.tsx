import React from "react";
import {Language} from "./language-context";

const language = {
    ESP: {
        language: 'ESP',
        hero: "Hola soy Hector. Desarrollador ubicado en España. Creador de productos digitales.\n" +
            "Amante de las últimas tecnologías en busca de la mejor experiencia.",
        heroButton: "Currículum",
        contactFirst: "Listo para contactar?",
        contactSecond: "Empieza tu proyecto ahora!",
        contactButton: "Contacto",
        navbar: ["Habilidades", "Trabajos", "Contacto"],
        contact: ["Nombre completo", "Teléfono", "Correo electrónico", "Razón", "Cuéntame tu idea"],
        contactSelect: ["Nueva web", "Crear un producto digital", "Transformación digital", "Mejorar mi web", "Consultoría" ],
        formMessage: {
            check: "Formulario enviado correctamente",
            message: "En breves me pondré en contacto contigo para poner en marcha tu idea!",
            error: "Algo salió mal",
            errorMessage: "Lo siento, vuelve a intentarlo más tarde."
        }
    },
    EN: {
        language: 'ENG',
        hero: "Hi, I'm Hector. Developer located in Spain. Creator of digital products.\n" +
        "Lover of the latest technologies in search of the best experience.",
        heroButton: "Resume",
        contactFirst: "Ready to contact me?",
        contactSecond: "Get start your project now!",
        contactButton: "Contact",
        navbar: ["Skills", "Works", "Contact"],
        contact: ["Full name", "Phone", "Email address", "Reason", "Tell me your idea"],
        contactSelect: ["New web", "Create a digital product", "Digital transformation", "Upgrade my web", "Consultancy" ],
        formMessage: {
            check: "Form sended successfully!",
            message: "As soon as possible I will contact you to start your project!",
            error: "Something went wrong!",
            errorMessage: "Sorry, try again later please."
        }
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
