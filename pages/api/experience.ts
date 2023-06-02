import { NextApiRequest, NextApiResponse } from 'next'

const apiExperience = (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({
    experience: [
      {
        name: 'work 1',
        web: 'http://google.com',
        description: 'lorem',
        projects: [
          {
            name: 'project 1',
            url: 'http://google.com'
          }
        ]
      },
      {
        name: 'work 2',
        web: 'http://google.com',
        description: 'lorem',
        projects: [
          {
            name: 'project 2',
            url: 'http://google.com'
          }
        ]
      }
    ]
  })
}

export default apiExperience
