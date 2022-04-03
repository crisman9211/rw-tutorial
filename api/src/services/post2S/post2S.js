import { db } from 'src/lib/db'

export const post2S = () => {
  return db.post2.findMany()
}

export const post2 = ({ id }) => {
  return db.post2.findUnique({
    where: { id },
  })
}

export const createPost2 = ({ input }) => {
  return db.post2.create({
    data: input,
  })
}

export const updatePost2 = ({ id, input }) => {
  return db.post2.update({
    data: input,
    where: { id },
  })
}

export const deletePost2 = ({ id }) => {
  return db.post2.delete({
    where: { id },
  })
}
