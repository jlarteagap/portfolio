import { NextApiRequest, NextApiResponse } from 'next'

const apiAbout = (req: NextApiRequest, res: NextApiResponse) => {
  return res.status(200).json({
    data: {
      name: 'Jorge Luis Arteaga',
      carrer: 'Frontend Developer',
      description:
        'Soy Frontend Developer con 10 años de experiencia en prototipado, creando diseños atractivos y funcionales.',
      slogan: 'Desarrollo productos, soluciones y experiencias digitales'
    },
    about: {
      title: 'Acerca de mi',
      hero: 'Crear <br /> productos <br /> simples y elegantes',
      resume:
        'Soy Frontend Developer con 10 años de experiencia en prototipado, creando diseños atractivos y funcionales.',
      content:
        '<p>Actualmente, estoy trabajando en <strong>ReactJs y NextJs</strong>, aplicando mis habilidades en la creación de Templates para Wordpress. Me encanta aprender y probar nuevas tecnologías, y estoy interesado en encontrar oportunidades que me permitan seguir desarrollando mis habilidades y conocimientos.</p><p>Si estás buscando un desarrollador Frontend con experiencia en maquetar prototipos y diseño, no dudes en contactarme. Estoy dispuesto a trabajar en proyectos interesantes y desafiantes que me permitan seguir creciendo como profesional</p>'
    },
    social: [
      {
        name: 'github',
        url: 'https://github.com/jlarteagap'
      },
      {
        name: 'linkedin',
        url: 'https://www.linkedin.com/in/jorge-luis-arteaga-perez/'
      },
      {
        name: 'twitter',
        url: 'https://twitter.com/jlarteagap'
      }
    ],
    contact: {
      email: 'jorgelarteagap@gmail.com',
      phone: '59177633551'
    },
    experience: [
      {
        name: 'Digicorp',
        web: 'https://digicorp.com.bo',
        logo: '/images/experiencie/digicorp.jpeg',
        description:
          'Digicorp es una empresa distrubuidora mayorista de productos de video vigilangia y redes en Bolivia, con sucursales en Chile y Perú. Mi trabajo fué ayudar al equipo de marketing a adminsitrar y controlar: banners, cursos, webinars y actualizar productos desde un panel de administración con JavaScript / HTML.',
        projects: [
          {
            name: 'project 1',
            url: 'http://google.com'
          }
        ]
      },
      {
        name: 'Workcore',
        web: 'www.workcore.net',
        logo: '/images/experiencie/workcore.jpeg',
        description:
          'Workcore es un sistema de administración de recursos empresariales "ERP" en el que desarrolle diferentes template/ plantillas en ReactJs para diferentes empresas.',
        projects: [
          {
            name: 'Air.com.bo',
            url: 'https://air.com.bo'
          },
          {
            name: 'We Clean',
            url: 'https://weclean.com.bo'
          }
        ]
      },
      {
        name: 'Multipago / Ticketeg',
        web: 'www.multipago.com',
        logo: '/images/experiencie/ticketeg.jpeg',
        description:
          'Ticketeg es una empresa de control de entradas y Multipago su pasarela de pago. Desarrollé diferentes landing page y web page en HTML/CSS/JS y ReactJs para diferentes eventos que contrataban los servicios.',
        projects: [
          {
            name: 'Celina',
            url: 'https://celina.com.bo'
          }
        ]
      }
    ],
    skills: [
      {
        frontend: [
          'JavaScript/ES6',
          'React',
          'HTML',
          'CSS / SASS',
          'NextJS',
          'Headless CMS',
          'REST API',
          'GraphQL',
          'Bootstrap',
          'Bulma CSS'
        ],
        backend: ['Node Js', 'Mongo DB', 'Django'],
        tools: [
          'Figma',
          'Photoshop',
          'Ilustrator',
          'iTerm',
          'VsCode',
          'Adobe Premier',
          'After Effect'
        ]
      }
    ]
  })
}

export default apiAbout
