import { Link } from 'react-router-dom'
import { routes } from '../routes/routes'

export const NavBar = () => (
  <nav>
    {routes.map((route) => (
      <Link key={route.path} to={route.path}>
        {route.element.name} {''}
      </Link>
    ))}
  </nav>
)
