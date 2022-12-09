import { createGlobalStyle } from 'styled-components'


export const GlobalStyle = createGlobalStyle`
*   {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    }
:focus {
      outline: 0;
}
body {
    -webkit-font-smoothing: antialised;
    background-color: ${props => props.theme['blue-1100']};
    overflow-x: hidden;
}
body, input-security, textarea, button {
    font-family: 'Nunito', sans-serif;
}
a {
    text-decoration: none;
}
`
