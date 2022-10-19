import {
  Box,
  TextField,
  Button,
  Checkbox,
  FormControlLabel,
} from '@mui/material'
import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import { AuthService } from '@services/auth.service'
import { Navigate } from 'react-router-dom'
import type { User } from '@models/User'

export function Login() {
  document.title = 'Login'

  const authService = new AuthService()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [remember, setRemember] = useState(false)
  const [currentUser, setCurrentUser] = useState<User>()
  const user = localStorage.getItem('user')
    ? localStorage.getItem('user')
    : currentUser

  function handleLogin(event: React.SyntheticEvent) {
    event.preventDefault()
    authService.login(email, password).then((res) => {
      console.log(res.data)
      const { token, user } = res.data
      setCurrentUser(user)
      remember
        ? localStorage.setItem('token', token)
        : sessionStorage.setItem('token', token)
      localStorage.setItem('user', JSON.stringify(user))
    })
  }

  function getCheckboxValue(event: React.BaseSyntheticEvent) {
    setRemember(event.target.checked)
  }

  if (user) {
    return <Navigate to="/dashboard" replace={true} />
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen">
      <h1 className="text-2xl font-bold">Login</h1>
      <Box
        component="form"
        onSubmit={handleLogin}
        sx={{
          '& > :not(style)': { m: 1 },
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
        <FormControlLabel
          className="text-black text-center"
          label="Remember me"
          control={<Checkbox onChange={getCheckboxValue} />}
        />
        <Button
          variant="contained"
          type="submit"
          className="bg-blue-600 text-white">
          Login
        </Button>
      </Box>
      <div className="mt-2">
        <Link to="/register" className="text-blue-600 hover:underline">
          Don't have an account? Sign in
        </Link>
      </div>
    </div>
  )
}
