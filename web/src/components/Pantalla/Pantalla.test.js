import { render } from '@redwoodjs/testing/web'

import Pantalla from './Pantalla'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Pantalla', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Pantalla />)
    }).not.toThrow()
  })
})
