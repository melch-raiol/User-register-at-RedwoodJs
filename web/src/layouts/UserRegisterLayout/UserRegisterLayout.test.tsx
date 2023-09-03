import { render } from '@redwoodjs/testing/web'

import UserRegisterLayout from './UserRegisterLayout'

//   Improve this test with help from the Redwood Testing Doc:
//   https://redwoodjs.com/docs/testing#testing-pages-layouts

describe('UserRegisterLayout', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<UserRegisterLayout />)
    }).not.toThrow()
  })
})
