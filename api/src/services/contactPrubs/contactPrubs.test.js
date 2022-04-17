import { contactPrubs } from './contactPrubs'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('contactPrubs', () => {
  scenario('returns all contactPrubs', async (scenario) => {
    const result = await contactPrubs()

    expect(result.length).toEqual(Object.keys(scenario.contactPrub).length)
  })
})
