import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
*   {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    background-color: ${props => props.theme['blue-1100']};
    }
:focus {
      outline: 0;
}
body {
    -webkit-font-smoothing: antialised;
}
body, input-security, textarea, button {
    font-family: 'Nunito', sans-serif;
}
`
