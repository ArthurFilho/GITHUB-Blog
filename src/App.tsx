import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'

export function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>


    <GlobalStyle />
    </ThemeProvider>
  )
}