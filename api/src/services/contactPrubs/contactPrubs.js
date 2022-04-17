import { db } from 'src/lib/db'

export const contactPrubs = () => {
  return db.contactPrub.findMany()
}
