import { render } from '@testing-library/react'
import { Login } from '.'
import { BrowserRouter } from 'react-router-dom'

test('Verify if Login text exists', () => {
  const { getAllByText } = render(
    <BrowserRouter>
      <Login />
    </BrowserRouter>
  )

  expect(getAllByText('Password')).toBeTruthy()
})
