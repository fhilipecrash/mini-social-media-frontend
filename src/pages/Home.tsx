import { Button, Stack } from '@mui/material'
import React from 'react'
import { Helmet } from 'react-helmet'
import { Navigate, useNavigate } from 'react-router-dom'

export function Home(): React.ReactElement {
  const navigate = useNavigate()
  const user = localStorage.getItem('user')

  if (user) {
    return <Navigate to="/dashboard" replace={true} />
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <Helmet>
        <title>Home</title>
      </Helmet>
      <Stack spacing={2} direction="row">
        <Button
          variant="outlined"
          className="bg-white"
          onClick={() => navigate('/register')}>
          Sign up
        </Button>
        <Button
          variant="contained"
          className="bg-white"
          onClick={() => navigate('/login')}>
          Login
        </Button>
      </Stack>
    </div>
  )
}
