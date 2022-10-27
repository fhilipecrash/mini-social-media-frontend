import type { Meta, StoryObj } from '@storybook/react'
import { BrowserRouter } from 'react-router-dom'
import { Dashboard } from '@pages/Dashboard'

export default {
  title: 'Pages/Dashboard',
  component: Dashboard,
  decorators: [
    (Story) => {
      return <BrowserRouter>{Story()}</BrowserRouter>
    },
  ],
} as Meta

export const Default: StoryObj = {}
