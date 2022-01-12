import { Navigate, Route, Routes } from 'react-router-dom'
import { routes } from '../routes/routes'

export const RoutesList = () => (
  <Routes>
    <Route exact path='/' element={<Navigate to={'/posts'} />} />
    {routes.map((route) => (
      <Route
        exact
        path={route.path}
        element={<route.element />}
        key={route.path}
      />
    ))}
    <Route path='*' element={<Navigate to={'/'} />} />
  </Routes>
)
