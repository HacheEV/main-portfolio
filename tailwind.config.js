const defaultTheme = require("tailwindcss/defaultTheme")

module.exports = {
    mode: 'jit',
    purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}',  './context/**/*.{js,ts,jsx,tsx}'],
    darkMode: false, // or 'media' or 'class'
    theme: {
        extend: {
            fontFamily: {
                "Bebas": ["Bebas Neue", ...defaultTheme.fontFamily.sans],
                "Montserrat": ["Montserrat", ...defaultTheme.fontFamily.sans],
            },
            backgroundImage: {
                'Hidreco': "url('/img/hidreco.png')",
                'Render': "url('/img/render_props.png')",
                'Blackvil': "url('/img/blackvil.png')",
                'David': "url('/img/david_esteve.png')",
            },
            colors: {
                "white": "#FFFFFF",
                "dark-primary": "#0A0F0D",
                "dark-secondary": "#1E1E1E",
                "dark-third": "#2A2A2A",
                "light-primary": "#EDF1F4",
                "light-secondary": "#C8C8C8",
                "light-third": "#DEDEDE",
                "accent-green": "#519872",
                "accent-yellow": "#EEC643",
                "accent-pink": "#D87CAC",
                "accent-red": "#E53D00"
            }
        }

    },
    plugins: [
        require('@tailwindcss/forms'),
    ],
}