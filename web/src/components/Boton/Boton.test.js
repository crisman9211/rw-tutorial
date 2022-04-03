import { render } from '@redwoodjs/testing/web'

import Boton from './Boton'

//   Improve this test with help from the Redwood Testing Doc:
//    https://redwoodjs.com/docs/testing#testing-components

describe('Boton', () => {
  it('renders successfully', () => {
    expect(() => {
      render(<Boton />)
    }).not.toThrow()
  })
})
