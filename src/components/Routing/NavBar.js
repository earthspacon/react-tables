import { Link } from 'react-router-dom'
import { routes } from '../../routes/routes'

export const NavBar = () => (
  <nav className='nav'>
    {routes.map(({ path, element }) => (
      <Link key={path} to={path}>
        <span>
          {element.name.toString()} {''}
        </span>
      </Link>
    ))}
  </nav>
)
