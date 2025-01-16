'use client'
import { useState } from 'react'

import { Twitch } from 'lucide-react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from '@/components/ui/tabs'
import { Store } from './components/store'
import { ThemeProvider } from 'next-themes'
import { ThemeToggle } from './components/theme-toggle'
import { useSession, signIn, signOut } from 'next-auth/react'
import { StreamerSelectorDialog } from './components/streamer-selector-dialog'
import { TwitchLoginButton } from './components/twitch-login-button'

export default function Home() {
  const [activeTab, setActiveTab] = useState('streams')
  const { data: session } = useSession()
  return (
    <ThemeProvider attribute='class' defaultTheme='dark' enableSystem>
      <main className='min-h-screen w-full bg-gradient-to-br from-pink-50 to-purple-100 dark:from-gray-900 dark:to-purple-900 relative'>
        <div className='container mx-auto px-4 py-12 flex flex-col items-center justify-center min-h-screen'>
          {/* Main Content */}
          <div className='text-center mb-12 space-y-6'>
            <h1 className='text-4xl md:text-6xl font-bold text-gray-900 dark:text-white tracking-tight'>¡EN PIÑATON.COM!</h1>
            <p className='text-2xl text-gray-700 dark:text-gray-300 max-w-6xl mx-auto text-center leading-relaxed mt-10 p-5 bg-gradient-to-r from-blue-50 via-blue-100 to-blue-50 dark:from-gray-800 dark:via-gray-700 dark:to-gray-800 rounded-lg shadow-lg'>
              ¿No puedes ni matar un 🐣 en Rust? ¿Ese roofcamper hijo de la gran pu@#$% te tiene hasta los 🥚🥚? ¡Relájate! Nosotros tenemos a los mejores actores listos para
              conseguir ese loot que tanto necesitas. Por un precio que no te hará llorar (demasiado), nuestros profesionales te ayudarán a conseguier lo que necesitas (sin
              levantar sospechas de que has pagado), para wipear bases como si fueras el 👑 del server . Además, nuestros clientes VIP os ofrecen códigos de descuento para que nos
              des todos los 💵.
            </p>
          </div>
          <Tabs defaultValue='streams' className='w-full max-w-6xl mb-10'>
            <TabsList className='grid h-11 p-1 w-full grid-cols-2 mb-5  bg-gray-200 place-content-center dark:bg-gray-700 rounded-lg'>
              <TabsTrigger
                value='streams'
                className='px-4 py-2 rounded-md hover:text-purple-800 dark:hover:text-purple-300 text-sm font-bold transition-colors data-[state=active]:bg-white data-[state=active]:text-purple-700 data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-800 dark:data-[state=active]:text-purple-400'
              >
                Streams
              </TabsTrigger>
              <TabsTrigger
                value='store'
                className='px-4 py-2 rounded-md hover:text-purple-800 dark:hover:text-purple-300 text-sm font-bold transition-colors data-[state=active]:bg-white data-[state=active]:text-purple-700 data-[state=active]:shadow-sm dark:data-[state=active]:bg-gray-800 dark:data-[state=active]:text-purple-400'
              >
                Tienda
              </TabsTrigger>
            </TabsList>
            <TabsContent value='streams'>
              {/* Twitch Streams */}
              <div className='flex items-center justify-center mb-5'>
                <StreamerSelectorDialog />
              </div>
              <div className='grid md:grid-cols-2 lg:grid-cols-3 gap-10 w-full'>
                <div className='space-y-4'>
                  <h2 className='text-2xl font-bold text-purple-700 flex items-center justify-center'>
                    <Twitch className='mr-2' /> M2Cg
                  </h2>
                  <div className='aspect-video w-full'>
                    <iframe
                      src={`https://player.twitch.tv/?channel=m2cg&parent=piñaton.com`}
                      frameBorder='0'
                      allowFullScreen
                      scrolling='no'
                      height='100%'
                      width='100%'
                      className='rounded-lg shadow-lg'
                    ></iframe>
                  </div>
                  <div className='bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300'>
                    <p className='text-sm text-gray-700 text-center font-semibold'>¡Atención Piñateros! 🎉 Usa el código mágico</p>
                    <p className='text-lg text-purple-600 dark:text-purple-400 text-center font-bold mt-2'>"m2Mimoso"</p>
                    <p className='text-sm text-gray-700 text-center mt-2'>
                      y desbloquea un épico <span className='text-green-500 font-bold'>50% de descuento</span> en tu primera compra
                    </p>
                  </div>
                </div>
                <div className='space-y-4'>
                  <h2 className='text-2xl font-bold text-purple-700 flex items-center justify-center'>
                    <Twitch className='mr-2' /> aLudovici
                  </h2>
                  <div className='aspect-video w-full'>
                    <iframe
                      src={`https://player.twitch.tv/?channel=aludovici&parent=piñaton.com`}
                      frameBorder='0'
                      allowFullScreen
                      scrolling='no'
                      height='100%'
                      width='100%'
                      className='rounded-lg shadow-lg'
                    ></iframe>
                  </div>
                  <div className='bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300'>
                    <p className='text-sm text-gray-700 text-center font-semibold'>¡Rusteros, prepárense! 🦀 Activen el código legendario</p>
                    <p className='text-lg text-purple-600 dark:text-purple-400 text-center font-bold mt-2'>"cangrejoDiabólico"</p>
                    <p className='text-sm text-gray-700 text-center mt-2'>
                      y obtengan un increíble <span className='text-green-500 font-bold'>50% de descuento</span> en su primera adquisición
                    </p>
                  </div>
                </div>
                <div className='space-y-4'>
                  <h2 className='text-2xl font-bold text-purple-700 flex items-center justify-center'>
                    <Twitch className='mr-2' /> Agustabell212
                  </h2>
                  <div className='aspect-video w-full'>
                    <iframe
                      src={`https://player.twitch.tv/?channel=agustabell212&parent=piñaton.com`}
                      frameBorder='0'
                      allowFullScreen
                      scrolling='no'
                      height='100%'
                      width='100%'
                      className='rounded-lg shadow-lg'
                    ></iframe>
                  </div>
                  <div className='bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300'>
                    <p className='text-sm text-gray-700 text-center font-semibold'>¡Únete a la revolución! 🎮 Utiliza el código especial</p>
                    <p className='text-lg text-purple-600 dark:text-purple-400 text-center font-bold mt-2'>"agusCalvo"</p>
                    <p className='text-sm text-gray-700 text-center mt-2'>
                      y consigue un fantástico <span className='text-green-500 font-bold'>75% de descuento</span> en tu primera compra
                    </p>
                  </div>
                </div>
                <div className='space-y-4'>
                  <h2 className='text-2xl font-bold text-purple-700 flex items-center justify-center'>
                    <Twitch className='mr-2' /> DEOWASD
                  </h2>
                  <div className='aspect-video w-full'>
                    <iframe
                      src={`https://player.twitch.tv/?channel=deowasd&parent=piñaton.com`}
                      frameBorder='0'
                      allowFullScreen
                      scrolling='no'
                      height='100%'
                      width='100%'
                      className='rounded-lg shadow-lg'
                    ></iframe>
                  </div>
                  <div className='bg-white p-4 rounded-lg shadow-md transform hover:scale-105 transition-transform duration-300'>
                    <p className='text-sm text-gray-700 text-center font-semibold'>¡Únete a la revolución! 🎮 Utiliza el código especial</p>
                    <p className='text-lg text-purple-600 dark:text-purple-400 text-center font-bold mt-2'>"deoPato"</p>
                    <p className='text-sm text-gray-700 text-center mt-2'>
                      y consigue un fantástico <span className='text-green-500 font-bold'>50% de descuento</span> en tu primera compra
                    </p>
                  </div>
                </div>
              </div>
            </TabsContent>
            <TabsContent value='store'>
              <Store />
            </TabsContent>
          </Tabs>
          <div className='absolute top-4 right-4 flex items-center space-x-4'>
            <TwitchLoginButton />

            <ThemeToggle />
          </div>
        </div>

        {/* Footer */}
        <footer className='absolute bottom-0 w-full py-4 text-center bg-white/50 dark:bg-gray-800/50 backdrop-blur-sm'>
          <a
            href='https://www.twitch.tv/entrellaves'
            target='_blank'
            rel='noopener noreferrer'
            className='text-purple-600 dark:text-purple-300 hover:text-purple-800 dark:hover:text-purple-300 font-medium flex items-center justify-center gap-2 transition-colors'
          >
            <Twitch className='w-4 h-4' />
            Created by Entrellaves
          </a>
        </footer>
      </main>
    </ThemeProvider>
  )
}
