import { Link } from 'react-router-dom'
import { nav } from '../../routes/routes'

export const NavBar = () => (
  <nav className='nav'>
    {nav.map(({ element }) => (
      <Link key={element} to={element}>
        {element} {''}
      </Link>
    ))}
  </nav>
)
