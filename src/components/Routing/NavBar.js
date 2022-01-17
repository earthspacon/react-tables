import { Link } from 'react-router-dom'
import { nav } from '../../routes/routes'

export const NavBar = () => (
  <nav className='nav'>
    {nav.map(({ path, element }) => (
      <Link key={path} to={path}>
        {element} {''}
      </Link>
    ))}
  </nav>
)
