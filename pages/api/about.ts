import { NextApiRequest, NextApiResponse } from 'next'

const apiAbout = (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({
    social: {
      github: 'https://github.com/jlarteagap',
      linkedin: 'https://www.linkedin.com/in/jorge-luis-arteaga-perez/',
      twitter: 'https://twitter.com/jlarteagap'
    }
  })
}

export default apiAbout
