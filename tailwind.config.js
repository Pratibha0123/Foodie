/** @type {import('tailwindcss').Config} */
export default {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}",
    ],
    darkMode: "class",
    theme: {
        extend: {
            color: {
                primary: "#fc001",
                secondary: "#ff9c01",
            },

            container: {
                center: true,
                padding: {
                    DEFAULT: "1rem",
                    sm: "3rem"
                }

            }
        },


    },
    plugins: [],
}