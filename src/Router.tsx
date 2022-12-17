import { Route, Routes } from 'react-router-dom'
import { Home } from '@/pages/Home'
import { Register } from '@/pages/Register'
import { Login } from '@/pages/Login'
import { Dashboard } from '@/pages/Dashboard'

export default function Router() {
  return (
    <Routes>
      <Route index element={<Home />} />
      <Route path="login" element={<Login />} />
      <Route path="register" element={<Register />} />
      <Route path="dashboard" element={<Dashboard />}>
        <Route path="profile" element={<h1>Profile</h1>} />
        <Route path="settings" element={<h1>Settings</h1>} />
      </Route>
      <Route path="*" element={<div>404</div>} />
    </Routes>
  )
}
