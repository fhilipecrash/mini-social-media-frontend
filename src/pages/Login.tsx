import { Box, TextField, Button } from '@mui/material'
import React from 'react'
import { Link, NavigateFunction } from 'react-router-dom'
import { Helmet } from 'react-helmet'
import { AuthService } from '@services/auth.service'
import { Navigate } from 'react-router-dom'
import type { User } from '@models/User'

export class Login extends React.Component<
  {},
  { email: string; password: string; user: any }
> {
  constructor(props: React.FC<any>, private authService: AuthService) {
    super(props)
    this.state = {
      email: '',
      password: '',
      user: '',
    }

    this.authService = new AuthService()
    this.handleLogin = this.handleLogin.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handleLogin(event: React.SyntheticEvent): void {
    event.preventDefault()
    this.authService
      .login(this.state.email, this.state.password)
      .then((res) => {
        console.log(res.data)
        const { token, user } = res.data
        this.setState({ user: user })
        localStorage.setItem('token', token)
        localStorage.setItem('user', JSON.stringify(user))
      })
  }

  handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ password: event.target.value })
  }

  handleEmailChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ email: event.target.value })
  }

  render(): React.ReactNode {
    const user = localStorage.getItem('user')
      ? localStorage.getItem('user')
      : this.state.user
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <Helmet>
          <title>Login</title>
        </Helmet>
        {user && <Navigate to="/dashboard" replace={true} />}
        <h1 className="text-black text-2xl font-bold">Login</h1>
        <form
          className="flex flex-col items-center justify-center"
          onSubmit={this.handleLogin}>
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
              onChange={this.handleEmailChange}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              onChange={this.handlePasswordChange}
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
