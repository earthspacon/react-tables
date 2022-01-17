import { Posts } from '../pages/Posts'
import { Books } from '../pages/Books'
import { Laptops } from '../pages/Laptops'
import { Products } from '../pages/Products'
import { Users } from '../pages/Users'

export const routes = [
  { path: '/users', element: Users },
  { path: '/books', element: Books },
  { path: '/laptops', element: Laptops },
  { path: '/products', element: Products },
  { path: '/posts', element: Posts },
]

export const nav = routes.map(({ path }) => ({
  element: path.slice(1, path.length).toUpperCase(),
}))
