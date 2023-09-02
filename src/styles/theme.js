import { createTheme } from "@mui/material";

const theme = createTheme({
    palette: {
        primary: {
            main: '#FFFDF7',
            light:'#FFFBFF'
        },
        secondary: {
            main:  '#221C1F',
            light: '#0B090A'
        },
        typography: {
            fontFamily: '"Roboto", "Helvetica", "Arial", sans-serif'     
        },
        text: {
            primary: '#FFFBFF',
            secondary: '#FFFDF7'
        },
        background: {
            defult: '#221C1F',
            paper: '#0B090A'
        }
    }
})

export {
    theme
}