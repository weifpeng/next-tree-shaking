module.exports = {
    content: [
        "./src/**/*.{js,ts,jsx,tsx}",
        "./components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@life/ui/components/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@life/apps-chatgptweb-components/src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@life/apps-chatgptweb-modules/src/**/*.{js,ts,jsx,tsx}",
        "./node_modules/@life/chart/src/**/*.{js,ts,jsx,tsx}"
    ],
    theme: {
        extend: {
            scale:{
                '101':'1.01'
            }
        },
    },
    plugins: [],
}