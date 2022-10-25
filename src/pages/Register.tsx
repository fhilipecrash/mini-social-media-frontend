import React, { useState } from 'react'
import { Button, Box, TextField, Snackbar } from '@mui/material'
import MuiAlert, { AlertProps } from '@mui/material/Alert'
import { UsersService } from '@services/users'
import { Link, Navigate } from 'react-router-dom'
import { UserCreateUpdate } from '@models/UserCreateUpdate'

const Alert = React.forwardRef<HTMLDivElement, AlertProps>(function Alert(
  props,
  ref
) {
  return <MuiAlert elevation={6} ref={ref} variant="filled" {...props} />
})

export function Register() {
  document.title = 'Register'

  if (localStorage.getItem('user')) {
    return <Navigate to="/dashboard" replace={true} />
  }

  const usersService = new UsersService()
  const [toast, setToast] = useState({ open: false, type: '' })
  const [registerForm, setRegisterForm] = useState<UserCreateUpdate>({
    email: '',
    password: '',
    name: '',
  } as UserCreateUpdate)

  function handleRegister(event: React.SyntheticEvent) {
    event.preventDefault()
    console.log(registerForm)
    usersService
      .create(registerForm)
      .then((res) => {
        console.log(res)
        setToast({ open: true, type: 'success' })
      })
      .catch(() => {
        setToast({ open: true, type: 'error' })
      })
  }

  const handleClose = (
    event?: React.SyntheticEvent | Event,
    reason?: string
  ) => {
    if (reason === 'clickaway') {
      return
    }
    setToast({ open: false, type: 'success' })
  }

  let toastMessage
  if (toast.type === 'success') {
    toastMessage = (
      <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
        Successfully registered!
      </Alert>
    )
  } else if (toast.type === 'error') {
    toastMessage = (
      <Alert onClose={handleClose} severity="error" sx={{ width: '100%' }}>
        Error registering user!
      </Alert>
    )
  }

  return (
    <div className="flex flex-col items-center justify-center h-screen text-white">
      <h1 className="text-2xl font-bold">Sign up</h1>
      <Snackbar
        open={toast.open}
        autoHideDuration={4000}
        onClose={handleClose}
        anchorOrigin={{ vertical: 'top', horizontal: 'right' }}>
        {toastMessage}
      </Snackbar>
      <Box
        onSubmit={handleRegister}
        component="form"
        sx={{
          '& > :not(style)': { m: 1 },
        }}
        className="flex flex-col items-center justify-center">
        <TextField
          id="name"
          label="Name"
          variant="outlined"
          onChange={(event) =>
            setRegisterForm({ ...registerForm, name: event.target.value })
          }
        />
        <TextField
          id="email"
          label="Email"
          variant="outlined"
          onChange={(event) =>
            setRegisterForm({ ...registerForm, email: event.target.value })
          }
        />
        <TextField
          id="password"
          label="Password"
          variant="outlined"
          type="password"
          onChange={(event) =>
            setRegisterForm({ ...registerForm, password: event.target.value })
          }
        />
        <Button variant="contained" type="submit" className="bg-white">
          Sign up
        </Button>
      </Box>
      <div className="mt-2">
        <Link to="/login" className="text-blue-600 hover:underline">
          Already registered? Login
        </Link>
      </div>
    </div>
  )
}
