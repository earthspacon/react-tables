import { Routes, BrowserRouter, Route, Navigate, Link } from 'react-router-dom'
import { BooksTable } from './components/BooksTable'
import { LaptopsTable } from './components/LaptopsTable'
import { ProductsTable } from './components/ProductsTable'
import { UsersTable } from './components/UsersTable'

function App() {
  return (
    <BrowserRouter>
      <nav>
        <Link to={'/users'}> Users </Link>
        <Link to={'/books'}> Books </Link>
        <Link to={'/laptops'}> Laptops </Link>
        <Link to={'/products'}> Products </Link>
      </nav>
      <Routes>
        <Route exact path='/' element={<Navigate to={'/users'} />} />
        <Route exact path='/users' element={<UsersTable />} />
        <Route exact path='/books' element={<BooksTable />} />
        <Route exact path='/laptops' element={<LaptopsTable />} />
        <Route exact path='/products' element={<ProductsTable />} />
        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
