import { BrowserRouter } from 'react-router-dom'
import { NavBar } from './components/NavBar'
import { RoutesList } from './components/RoutesList'

export const App = () => (
  <BrowserRouter>
    <NavBar />
    <RoutesList />
  </BrowserRouter>
)
