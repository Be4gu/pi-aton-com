import { useState } from 'react'
import { Star, Heart } from 'lucide-react'
import { Card, CardContent, CardHeader } from '@/components/ui/card'
import { Button } from '@/components/ui/button'
import Image from 'next/image'
import { ImagePreview } from './image-preview'
import { VideoModal } from './video-modal'

type Profile = {
  name: string
  reliability: number
  price: string
  completedOrders: number
  rating: number
  reviews: number
  images: string[]
  description: string
}

export function ProfileCard({ profile }: { profile: Profile }) {
  const [selectedImage, setSelectedImage] = useState<string | null>(null)
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false)

  return (
    <>
      <Card className='overflow-hidden dark:bg-gray-800'>
        <CardHeader className='border-b bg-gray-50/50 dark:bg-gray-700/50'>
          <div className='flex justify-between items-start'>
            <div>
              <h3 className='text-xl font-bold'>{profile.name}</h3>
              <div className='flex items-center gap-2 mt-1'>
                <div className='flex items-center'>
                  {Array.from({ length: 5 }).map((_, i) => (
                    <Star key={i} className={`w-4 h-4 ${i < profile.rating ? 'fill-yellow-400 text-yellow-400' : 'text-gray-300'}`} />
                  ))}
                  <span className='ml-2 text-sm text-gray-600 dark:text-gray-300'>({profile.reviews} reseñas)</span>
                </div>
              </div>
            </div>
            <div className='text-right'>
              <div className='text-2xl font-bold text-purple-600 dark:text-purple-400'>{profile.price}</div>
              <div className='text-sm text-gray-500 dark:text-gray-400'>por servicio</div>
            </div>
          </div>
        </CardHeader>
        <CardContent className='p-6'>
          <div className='space-y-4'>
            <div className='flex justify-between text-sm'>
              <div>
                <div className='font-semibold'>Fiabilidad</div>
                <div className='flex items-center gap-1 text-yellow-600 dark:text-yellow-400'>
                  {Math.round(profile.reliability * 100)}%
                  <Star className='w-4 h-4 fill-yellow-400' />
                </div>
              </div>
              <div>
                <div className='font-semibold'>Encargos Completados</div>
                <div className='text-right text-purple-600 dark:text-purple-400 font-medium'>{profile.completedOrders}</div>
              </div>
            </div>

            <p className='text-gray-600 h-[120px] dark:text-gray-300'>{profile.description}</p>

            <div className='grid grid-cols-3 gap-2 mt-4'>
              {profile.images.map((image, index) => (
                <button
                  key={index}
                  className='aspect-square relative rounded-lg overflow-hidden cursor-pointer transform transition-transform hover:scale-105 focus:outline-none focus:ring-2 focus:ring-purple-500'
                  onClick={() => setSelectedImage(image)}
                >
                  <Image src={image} alt={`Trabajo de ${profile.name} ${index + 1}`} fill className='object-cover' />
                </button>
              ))}
            </div>

            <div className='flex gap-2 mt-6'>
              <Button className='flex-1 dark:bg-purple-600 dark:text-white dark:hover:bg-purple-700' onClick={() => setIsVideoModalOpen(true)}>
                Contactar
              </Button>
              <Button variant='outline' size='icon' className='dark:border-gray-600 dark:text-gray-300'>
                <Heart className='w-4 h-4' />
              </Button>
            </div>
          </div>
        </CardContent>
      </Card>

      <ImagePreview isOpen={!!selectedImage} onClose={() => setSelectedImage(null)} imageUrl={selectedImage || ''} alt={`Trabajo de ${profile.name}`} />

      <VideoModal isOpen={isVideoModalOpen} onClose={() => setIsVideoModalOpen(false)} />
    </>
  )
}
