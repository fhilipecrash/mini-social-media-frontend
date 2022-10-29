import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { Home } from '@pages/Home'

export default {
  title: 'Pages/Home',
  component: Home,
  decorators: [
    (Story) => {
      return <BrowserRouter>{Story()}</BrowserRouter>
    },
  ],
} as Meta

export const Default: StoryObj = {}
