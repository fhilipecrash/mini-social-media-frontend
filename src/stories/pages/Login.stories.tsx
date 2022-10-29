import { ComponentMeta, ComponentStory } from '@storybook/react'
import { rest } from 'msw'
import { BrowserRouter } from 'react-router-dom'
import { Login } from '@pages/Login'

export default {
  title: 'Pages/Login',
  component: Login,
  decorators: [
    (Story) => {
      return (
        <BrowserRouter>
          <Story />
        </BrowserRouter>
      )
    },
  ],
  argsTypes: {
    onSubmit: { action: 'onSubmit' },
  },
  parameters: {
    msw: {
      handlers: [
        rest.post('/auth', (req, res, ctx) => {
          return res(
            ctx.json({
              user: {
                id: 0,
                email: 'test@mail.com',
                name: 'John Doe',
              },
              token: 'token',
            })
          )
        }),
      ],
    },
  },
} as ComponentMeta<typeof Login>

export const Default: ComponentStory<typeof Login> = () => <Login />
