import { BrowserRouter } from 'react-router-dom'
import { NavBar } from './components/Routing/NavBar'
import { RoutesList } from './components/Routing/RoutesList'

export const App = () => (
  <BrowserRouter>
    <NavBar />
    <RoutesList />
  </BrowserRouter>
)
