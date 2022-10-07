import Stack from '@mui/material/Stack'
import Button from '@mui/material/Button'
import React from 'react'
import { Helmet } from 'react-helmet'
import { useNavigate } from 'react-router-dom'

function Buttons(): React.ReactElement {
  const navigate = useNavigate()
  return (
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
  )
}

export class Home extends React.Component<{}, {}> {
  constructor(props: React.ComponentProps<any>) {
    super(props)
  }

  render(): React.ReactNode {
    return (
      <div className="flex flex-col items-center justify-center h-screen text-white">
        <Helmet>
          <title>Home</title>
        </Helmet>
        <Buttons />
      </div>
    )
  }
}
