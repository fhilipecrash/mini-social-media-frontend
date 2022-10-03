import React from 'react'
import TextField from '@mui/material/TextField'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import UsersService from '@services/users.service'

export class Register extends React.Component<
  {},
  { name: string; email: string; password: string }
> {
  constructor(props: React.ComponentProps<any>) {
    super(props)
    this.state = {
      name: '',
      email: '',
      password: '',
    }

    this.handleLogin = this.handleLogin.bind(this)
    this.handleNameChange = this.handleNameChange.bind(this)
    this.handleEmailChange = this.handleEmailChange.bind(this)
    this.handlePasswordChange = this.handlePasswordChange.bind(this)
  }

  handleLogin(event: any): void {
    event.preventDefault()
    UsersService.create({
      name: this.state.name,
      email: this.state.email,
      password: this.state.password,
    }).then((res) => {
      console.log(res.data)
    })
  }

  handleNameChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ name: event.target.value })
  }

  handlePasswordChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ password: event.target.value })
  }

  handleEmailChange(event: React.ChangeEvent<HTMLInputElement>): void {
    this.setState({ email: event.target.value })
  }

  render(): React.ReactNode {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <h1 className="text-black">Sign up</h1>
        <form
          onSubmit={this.handleLogin}
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
              value={this.state.name}
              onChange={this.handleNameChange}
            />
            <TextField
              id="email"
              label="Email"
              variant="outlined"
              value={this.state.email}
              onChange={this.handleEmailChange}
            />
            <TextField
              id="password"
              label="Password"
              variant="outlined"
              type="password"
              value={this.state.password}
              onChange={this.handlePasswordChange}
            />
          </Box>
          <Button variant="contained" type="submit" className="bg-white">
            Login
          </Button>
        </form>
      </div>
    )
  }
}
