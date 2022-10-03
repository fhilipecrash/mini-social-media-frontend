import { Route, Routes } from 'react-router-dom'
import { Home } from '@pages/Home'
import { Register } from '@pages/Register'
import { Login } from '@pages/Login'

export default function Router() {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/login" element={<Login />} />
      <Route path="/register" element={<Register />} />
    </Routes>
  )
}
