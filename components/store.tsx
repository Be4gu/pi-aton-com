import { ProfileCard } from './profile-card'

const profiles = [
  {
    name: 'M2cG',
    reliability: 0.98,
    price: '50€',
    completedOrders: 156,
    rating: 5,
    reviews: 89,
    description: 'Especialista en diseño de bases y estrategias de raid en Rust. Más de 3 años de experiencia en servidores competitivos.',
    images: ['m1.png', 'm2.jpeg', 'm3.jpeg']
  },
  {
    name: 'aLudovici',
    reliability: 0.95,
    price: '55€',
    completedOrders: 203,
    rating: 5,
    reviews: 98,
    description: 'Experto en PvP y tácticas de combate. Ofrezco entrenamiento personalizado y estrategias avanzadas de juego.',
    images: ['l1.png', 'l2.jpeg', 'l3.jpeg']
  },
  {
    name: 'Agustabell212',
    reliability: 0.97,
    price: '55€',
    completedOrders: 134,
    rating: 4,
    reviews: 98,
    description: 'Especialista en ser un decoy. También poseo un doctorado en llevar botas y hacer todo el ruido posible cuando el sigilo es clave. 😎👢',
    images: ['/a1.png', '/a2.png', '/a3.png']
  },
  {
    name: 'DEOWASD',
    reliability: 0.95,
    price: '50€',
    completedOrders: 104,
    rating: 5,
    reviews: 68,
    description: 'Especializado en electricidad y automatización. Enseño a optimizar la generación, almacenamiento y distribución de energía de forma eficiente.',
    images: ['d1.png', 'd2.png', 'd3.png']
  },
  {
    name: 'V2unstoppable',
    reliability: 0.89,
    price: '40€',
    completedOrders: 224,
    rating: 4,
    reviews: 102,
    description:
      'Con más de 10k horas de experiencia, estoy especializado en PvP y en raideo con porras de hueso. Ofrezco enseñar las mejores técnicas de farmeo, aunque admito que tengo dificultades a la hora de backearlo.',
    images: ['v1.png', 'v2.png', 'v3.png']
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
