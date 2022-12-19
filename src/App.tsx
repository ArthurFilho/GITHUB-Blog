import { ThemeProvider } from 'styled-components'
import { DefaultTheme } from './styles/themes/default'
import { GlobalStyle } from './styles/global'
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { Header } from './components/Header'
import { ContextProvider } from './context/Context'

export function App() {

  return (
    <ThemeProvider theme={DefaultTheme}>
    
    <BrowserRouter>
    <ContextProvider>
    <Header />
      <Router/>
    </ContextProvider>
    </BrowserRouter>

    <GlobalStyle />
    </ThemeProvider>
  )
}