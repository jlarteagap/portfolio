import { NextApiRequest, NextApiResponse } from 'next'

const apiAbout = (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({
    social: {
      github: 'https://github.com/jlarteagap',
      linkedin: 'https://www.linkedin.com/in/jorge-luis-arteaga-perez/',
      twitter: 'https://twitter.com/jlarteagap'
    },
    contact: {
      email: 'jorgelarteagap@gmail.com',
      phone: '77633551'
    },
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

export default apiAbout
