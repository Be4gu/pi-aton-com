import { ProfileCard } from './profile-card'

const profiles = [
  {
    name: 'M2cG',
    reliability: 0.98,
    price: '50€',
    completedOrders: 156,
    rating: 5,
    reviews: 89,
    description:
      'Especialista en diseño de bases y estrategias de raid en Rust. Más de 3 años de experiencia en servidores competitivos.',
    images: ['m1.png', 'm2.jpeg', 'm3.jpeg']
  },
  {
    name: 'aLudovici',
    reliability: 0.95,
    price: '55€',
    completedOrders: 203,
    rating: 5,
    reviews: 98,
    description:
      'Experto en PvP y tácticas de combate. Ofrezco entrenamiento personalizado y estrategias avanzadas de juego.',
    images: ['l1.png', 'l2.jpeg', 'l3.jpeg']
  },
  {
    name: 'Agustabell212',
    reliability: 0.97,
    price: '55€',
    completedOrders: 134,
    rating: 5,
    reviews: 98,
    description:
      'Especializado en farmeo eficiente y gestión de recursos. Enseño las mejores rutas y técnicas de recolección.',
    images: ['/a1.png', '/a2.png', '/a3.png']
  }
]

export function Store() {
  return (
    <div className='grid gap-6 md:grid-cols-2 lg:grid-cols-3'>
      {profiles.map((profile, index) => (
        <ProfileCard key={index} profile={profile} />
      ))}
    </div>
  )
}
