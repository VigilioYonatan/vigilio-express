/** @type {import('tailwindcss').Config} */
export default {
    content: ["./resources/views/**/*.pug", "./resources/ts/**/*.ts"],
    theme: {
        extend: {
            colors:{
                primary:"#FFFFFF"
            }
        },
    },
    plugins: [],
};
