module.exports = {
    content: [
        './node_modules/flotiq-components-react/dist/**/*.{js,jsx,ts,tsx}',
        './src/**/*.{js,jsx,ts,tsx}',
    ],
    theme: {
        extend: {
            screens: {
                sm: '480px',
                md: '768px',
                lg: '976px',
                xl: '1440px',
            },
            colors: {
                primary: '#FBB03B',
                gray: '#7f7f7f',
                'light-gray': '#fafafa',
            },
            fontFamily: {
                lato: ['Lato', 'sans-serif'],
                inter: ['Inter', 'sans - serif'],
            },
        },
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/line-clamp'),
    ],
    presets: [
        require('./node_modules/flotiq-components-react/dist/tailwind.preset'),
    ],
    safelist: require('./node_modules/flotiq-components-react/dist/tailwind.safelist'),
};
