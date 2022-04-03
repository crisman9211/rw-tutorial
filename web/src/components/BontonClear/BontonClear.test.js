import { render } from '@redwoodjs/testing/web'

import BontonClear from './BontonClear'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('BontonClear', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<BontonClear />)
    }).not.toThrow()
  })
})
