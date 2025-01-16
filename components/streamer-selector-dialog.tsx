'use client'

import { useState } from 'react'
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from '@/components/ui/dialog'
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select'
import { Button } from '@/components/ui/button'
import { StreamViewer } from './stream-viewer'
import { Trash2 } from 'lucide-react'

// Lista de streamers predefinidos
const predefinedStreamers = [
  { id: '1', name: 'Agustabell', channelId: 'Agustabell212' },
  { id: '2', name: 'M2Cg', channelId: 'M2Cg' },
  { id: '3', name: 'aLudovici', channelId: 'aLudovici' },
  { id: '4', name: 'DEOWASD', channelId: 'DEOWASD' },
  { id: '5', name: 'NotoriusPig', channelId: 'notoriuspig_' },
  { id: '6', name: 'v2unstoppable', channelId: 'v2unstoppable' }
]

export function StreamerSelectorDialog() {
  const [selectedStreamers, setSelectedStreamers] = useState<string[]>([])
  const [isOpen, setIsOpen] = useState(false)
  const [showStreams, setShowStreams] = useState(false)
  const [streamerCount, setStreamerCount] = useState<number>(2)

  const handleStreamerSelect = (position: number, streamerId: string) => {
    const newSelection = [...selectedStreamers]
    newSelection[position] = streamerId
    setSelectedStreamers(newSelection.slice(0, streamerCount).filter(Boolean))
  }

  const handleConfirm = () => {
    setIsOpen(false)
    setShowStreams(true)
  }

  const handleClear = () => {
    setSelectedStreamers([])
  }

  const isSelectionValid = selectedStreamers.length === streamerCount

  return (
    <>
      <Dialog open={isOpen} onOpenChange={setIsOpen}>
        <DialogTrigger asChild>
          <Button
            variant='outline'
            className='px-10 py-2 rounded-lg hover:text-purple-800 dark:hover:text-purple-300 text-sm font-bold transition-colors bg-white text-purple-700 shadow-sm dark:bg-gray-800 border-4 dark:border-gray-700 dark:text-purple-400'
          >
            CREAR MULTI-STREAM
          </Button>
        </DialogTrigger>

        <DialogContent className='text-xl text-gray-700 dark:text-gray-300 leading-relaxed mt-10 p-5 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-lg shadow-lg'>
          <DialogHeader>
            <DialogTitle className='text-gray-700 dark:text-gray-300'>CREAR MULTI-STREAM</DialogTitle>
          </DialogHeader>
          <div className='text-sm text-gray-700 dark:text-gray-200'>
            Si ves la web en un navegador donde tienes iniciada tu sesión de Twitch, el reproductor detecta la sesión. Si tienes Twitch Turbo o estás suscrito a un canal, no verás
            anuncios. Esto lo gestiona directamente Twitch,{' '}
            <a
              href='https://dev.twitch.tv/docs/embed/video-and-clips/'
              target='_blank'
              rel='noopener noreferrer'
              className='decoration-sky-500 dark:text-white font-bold underline'
            >
              ver documentación.
            </a>
          </div>
          <div className='grid gap-4 py-4'>
            <div className='flex gap-2'>
              <Select
                value={streamerCount.toString()}
                onValueChange={(value) => {
                  setStreamerCount(Number(value))
                  setSelectedStreamers([])
                }}
              >
                <SelectTrigger className='w-full bg-transparent border-purple-600 text-gray-800 dark:text-gray-300'>
                  <SelectValue placeholder='Cantidad de streamers' />
                </SelectTrigger>
                <SelectContent className='bg-gray-200 dark:bg-gray-800 border-purple-600'>
                  <SelectItem value='2'>2 Streamers</SelectItem>
                  <SelectItem value='3'>3 Streamers</SelectItem>
                  <SelectItem value='4'>4 Streamers</SelectItem>
                </SelectContent>
              </Select>
              <Button
                variant='outline'
                size='icon'
                onClick={handleClear}
                className='border-purple-600 hover:bg-purple-900 hover:bg-opacity-20'
                disabled={selectedStreamers.length === 0}
              >
                <Trash2 className='h-4 w-4 ' />
              </Button>
            </div>
            {Array.from({ length: streamerCount }).map((_, index) => (
              <Select key={index} value={selectedStreamers[index] || ''} onValueChange={(value) => handleStreamerSelect(index, value)}>
                <SelectTrigger className='w-full bg-transparent border-purple-600 text-gray-800 dark:text-gray-300'>
                  <SelectValue placeholder={`Selecciona streamer ${index + 1}`} />
                </SelectTrigger>
                <SelectContent className='bg-gray-200 dark:bg-gray-800 border-purple-600'>
                  {predefinedStreamers.map((streamer) => (
                    <SelectItem key={streamer.id} value={streamer.id}>
                      {streamer.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            ))}
          </div>
          <div className='flex justify-end gap-2'>
            <Button onClick={handleConfirm} disabled={!isSelectionValid} className='bg-purple-600 hover:bg-purple-700 text-white'>
              Ver Streams
            </Button>
          </div>
        </DialogContent>
      </Dialog>
      {showStreams && <StreamViewer streamers={selectedStreamers.map((id) => predefinedStreamers.find((s) => s.id === id)!)} onClose={() => setShowStreams(false)} />}
    </>
  )
}
