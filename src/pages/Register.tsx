import React, { useState } from 'react'
import { Button, Box, TextField } from '@mui/material'
import { UsersService } from '@services/users.service'
import { Link, Navigate } from 'react-router-dom'

export function Register(): React.ReactElement {
  document.title = 'Register'

  const usersService = new UsersService()
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')
  const [name, setName] = useState('')

  function handleLogin(event: React.SyntheticEvent): void {
    event.preventDefault()
    usersService.create({ name, email, password }).then((res) => {
      console.log(res)
    })
  }

  if (localStorage.getItem('user')) {
    return <Navigate to="/dashboard" replace={true} />
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-black text-2xl font-bold">Sign up</h1>
      <form
        onSubmit={handleLogin}
        className="flex flex-col items-center justify-center">
        <Box
          component="div"
          sx={{
            '& > :not(style)': { m: 1, width: '25ch' },
          }}
          className="flex flex-col items-center justify-center">
          <TextField
            id="name"
            label="Name"
            variant="outlined"
            onChange={(event) => setName(event.target.value)}
          />
          <TextField
            id="email"
            label="Email"
            variant="outlined"
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
          Sign up
        </Button>
      </form>
      <div className="mt-2">
        <Link to="/login" className="text-blue-600 hover:underline">
          Already registered? Login
        </Link>
      </div>
    </div>
  )
}
