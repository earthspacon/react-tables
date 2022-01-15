import { BrowserRouter } from 'react-router-dom'
import { NavBar } from './components/Routing/NavBar'
import { RoutesList } from './components/Routing/RoutesList'
import { ContextProvider } from './Context/ContextProvider'

export const App = () => (
  <BrowserRouter>
    <NavBar />
    <ContextProvider>
      <RoutesList />
    </ContextProvider>
  </BrowserRouter>
)
