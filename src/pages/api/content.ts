import { NextApiRequest, NextApiResponse } from 'next'
import * as faker from 'faker'

export default function handler(req: NextApiRequest, res: NextApiResponse) {
  const content = faker.lorem.paragraphs(4)
  return res.status(200).json({
    data: content,
  })
}
