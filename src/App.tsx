import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'

export function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
    
    <BrowserRouter>
      <Router/>
    </BrowserRouter>

    <GlobalStyle />
    </ThemeProvider>
  )
}