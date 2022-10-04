import { Box, TextField, Button } from '@mui/material'
import React from 'react'
import { Link } from 'react-router-dom'

export class Login extends React.Component<{}, {}> {
  render(): React.ReactNode {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <h1 className="text-black text-2xl font-bold">Login</h1>
        <form className="flex flex-col items-center justify-center">
          <Box
            component="div"
            sx={{
              '& > :not(style)': { m: 1, width: '25ch' },
            }}
            className="flex flex-col items-center justify-center">
            <TextField id="email" label="Email" variant="outlined" />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
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
}
