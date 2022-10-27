import type { Meta, StoryObj } from '@storybook/react'
import { rest } from 'msw'
import { BrowserRouter } from 'react-router-dom'
import { Register } from '@pages/Register'

export default {
  title: 'Pages/Register',
  component: Register,
  decorators: [
    (Story) => {
      return <BrowserRouter>{Story()}</BrowserRouter>
    },
  ],
  parameters: {
    msw: {
      handlers: [
        rest.post('/users', (req, res) => {
          return res()
        }),
      ],
    },
  },
} as Meta

export const Default: StoryObj = {}
