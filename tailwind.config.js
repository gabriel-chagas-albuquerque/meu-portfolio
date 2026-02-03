/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    theme: {
        extend: {
            colors: {
                background: 'hsl(255, 38%, 22%)',
                'background-button': 'hsl(254, 38%, 27%)',
                'background-cards': 'rgb(68, 36, 95)',
                primary: 'hsl(300, 70%, 52%)',
                secondary: 'hsl(295, 86%, 39%)',
            },
            fontFamily: {
                primary: ['Poppins', 'sans-serif'],
                secondary: ['Raleway', 'sans-serif'],
                logo: ['Ephesis', 'cursive'],
            },
            fontSize: {
                'giant': '4.5rem',
                'extra-large': '3rem',
                'large': '2.4rem',
                'normal': '1.6rem',
            },
        },
    },
    plugins: [],
}
