/** @type {import('tailwindcss').Config} */
module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    theme: {
        extend: {
            fontFamily: {
                sans: ["Poppins", "sans-serif"],
            },
            colors: {
                cerise: {
                    DEFAULT: "#D52180",
                    50: "#F4B9D8",
                    100: "#F1A8CF",
                    200: "#EC84BB",
                    300: "#E761A8",
                    400: "#E13E94",
                    500: "#D52180",
                    600: "#A41963",
                    700: "#741246",
                    800: "#430A28",
                    900: "#13030B",
                },
                'custom-black': {
                    DEFAULT: '#050505',
                    '50': '#616161',
                    '100': '#575757',
                    '200': '#424242',
                    '300': '#2E2E2E',
                    '400': '#191919',
                    '500': '#050505',
                    '600': '#000000',
                    '700': '#000000',
                    '800': '#000000',
                    '900': '#000000'
                },
            },
        },
    },
    plugins: [],
};
