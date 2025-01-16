'use client'

import { useState, useEffect } from 'react'
import { X } from 'lucide-react'
import { Button } from '@/components/ui/button'

interface Streamer {
  id: string
  name: string
  channelId: string
}

interface StreamViewerProps {
  streamers: Streamer[]
  onClose: () => void
}

export function StreamViewer({ streamers, onClose }: StreamViewerProps) {
  const [isMounted, setIsMounted] = useState(false)

  useEffect(() => {
    setIsMounted(true)
  }, [])

  if (!isMounted) {
    return null
  }

  const gridClass = streamers.length === 2 ? 'grid-cols-2' : streamers.length === 3 ? 'grid-rows-[1fr_1fr_auto]' : 'grid-cols-2 grid-rows-2'

  return (
    <div className='fixed inset-0 bg-[rgba(0,0,0,0.95)] z-50 flex flex-col'>
      <div className='flex justify-end p-4'>
        <Button variant='ghost' onClick={onClose} className='text-white hover:bg-purple-900 hover:bg-opacity-20'>
          <X className='h-6 w-6' />
        </Button>
      </div>
      <div className={`grid ${gridClass} gap-4 flex-grow p-4`}>
        {streamers.map((streamer, index) => (
          <div key={streamer.id} className={`relative w-full h-full ${streamers.length === 3 && index === 2 ? 'col-span-2' : ''}`}>
            <iframe
              src={`https://player.twitch.tv/?channel=${streamer.channelId}&parent=${window.location.hostname}`}
              height='100%'
              width='100%'
              allowFullScreen
              className='rounded-lg'
            />
          </div>
        ))}
      </div>
    </div>
  )
}
