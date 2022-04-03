import { post2S, post2, createPost2, updatePost2, deletePost2 } from './post2S'

// Generated boilerplate tests do not account for all circumstances
// and can fail without adjustments, e.g. Float and DateTime types.
//           Please refer to the RedwoodJS Testing Docs:
//       https://redwoodjs.com/docs/testing#testing-services
// https://redwoodjs.com/docs/testing#jest-expect-type-considerations

describe('post2S', () => {
  scenario('returns all post2S', async (scenario) => {
    const result = await post2S()

    expect(result.length).toEqual(Object.keys(scenario.post2).length)
  })

  scenario('returns a single post2', async (scenario) => {
    const result = await post2({ id: scenario.post2.one.id })

    expect(result).toEqual(scenario.post2.one)
  })

  scenario('creates a post2', async () => {
    const result = await createPost2({
      input: { title: 'String', body: 'String' },
    })

    expect(result.title).toEqual('String')
    expect(result.body).toEqual('String')
  })

  scenario('updates a post2', async (scenario) => {
    const original = await post2({ id: scenario.post2.one.id })
    const result = await updatePost2({
      id: original.id,
      input: { title: 'String2' },
    })

    expect(result.title).toEqual('String2')
  })

  scenario('deletes a post2', async (scenario) => {
    const original = await deletePost2({ id: scenario.post2.one.id })
    const result = await post2({ id: original.id })

    expect(result).toEqual(null)
  })
})
