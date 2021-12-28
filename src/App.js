import { Routes, BrowserRouter, Route, Navigate } from 'react-router-dom'
import { BooksTable } from './components/BooksTable'
import { LaptopsTable } from './components/LaptopsTable'
import { UsersTable } from './components/UsersTable'

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path='/' element={<UsersTable />} />
        <Route exact path='/users' element={<UsersTable />} />
        <Route exact path='/books' element={<BooksTable />} />
        <Route exact path='/laptops' element={<LaptopsTable />} />
        <Route path='*' element={<Navigate to={'/'} />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
