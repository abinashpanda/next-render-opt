import axios from 'axios'
import { NextApiRequest, NextApiResponse } from 'next'

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  const { data } = await axios.get<object>('https://swapi.dev/api/films/1/')
  return res.status(200).json({
    data: JSON.stringify(data),
  })
}
