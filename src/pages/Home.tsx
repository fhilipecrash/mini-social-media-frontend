import { Button, Stack } from '@mui/material'
import React from 'react'
import { Navigate, useNavigate } from 'react-router-dom'

export function Home(): React.ReactElement {
  document.title = 'Home'

  const navigate = useNavigate()

  if (localStorage.getItem('user')) {
    return <Navigate to="/dashboard" replace={true} />
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
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
