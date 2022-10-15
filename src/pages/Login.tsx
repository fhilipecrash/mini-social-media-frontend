import { Box, TextField, Button } from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthService } from '@services/auth.service'
import { Navigate } from 'react-router-dom'
import type { User } from '@models/User'

export function Login(): React.ReactElement {
  document.title = 'Login'

  const authService = new AuthService()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [currentUser, setCurrentUser] = useState<User>()
  const user = localStorage.getItem('user')
    ? localStorage.getItem('user')
    : currentUser

  function handleLogin(event: React.SyntheticEvent): void {
    event.preventDefault()
    authService.login(email, password).then((res) => {
      console.log(res.data)
      const { token, user } = res.data
      setCurrentUser(user)
      localStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
    })
  }

  if (user) {
    return <Navigate to="/dashboard" replace={true} />
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-black text-2xl font-bold">Login</h1>
      <form
        className="flex flex-col items-center justify-center"
        onSubmit={handleLogin}>
        <Box
          component="div"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          className="flex flex-col items-center justify-center">
          <TextField
            id="email"
            label="Email"
            variant="outlined"
            type="email"
            onChange={(event) => setEmail(event.target.value)}
          />
          <TextField
            id="password"
            label="Password"
            variant="outlined"
            type="password"
            onChange={(event) => setPassword(event.target.value)}
          />
        </Box>
        <Button variant="contained" type="submit" className="bg-white">
          Login
        </Button>
      </form>
      <div className="mt-2">
        <Link to="/register" className="text-blue-600 hover:underline">
          Don't have an account? Sign in
        </Link>
      </div>
    </div>
  )
}
