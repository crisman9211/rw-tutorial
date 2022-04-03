import { render } from '@redwoodjs/testing/web'

import GeneralButton from './GeneralButton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('GeneralButton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<GeneralButton />)
    }).not.toThrow()
  })
})
