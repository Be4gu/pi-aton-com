import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger
} from '@/components/ui/alert-dialog'
import { Button } from '@/components/ui/button'
import { Twitch } from 'lucide-react'

export function TwitchLoginButton() {
  return (
    <AlertDialog>
      <AlertDialogTrigger asChild>
        <Button className='bg-purple-600 hover:bg-purple-700 text-white'>
          <Twitch className='w-4 h-4 mr-2' />
          Login with Twitch
        </Button>
      </AlertDialogTrigger>
      <AlertDialogContent className='bg-gradient-to-br from-pink-50 to-purple-100 dark:from-gray-900 dark:to-purple-900'>
        <AlertDialogHeader>
          <AlertDialogTitle>Futura funcionalidad 😊</AlertDialogTitle>
          <AlertDialogDescription className='font-bold text-gray-400'>
            Esta semana intentaré implementar el login con la cuenta de Twitch y la función para dejar reseñas. La idea es que las reseñas registren el nombre de Twitch para que
            estos masones puedan identificarte además de evitar faltar al respeto.
          </AlertDialogDescription>
        </AlertDialogHeader>
        <AlertDialogFooter>
          {/* <AlertDialogCancel>Cancel</AlertDialogCancel> */}
          <AlertDialogAction>Na, na, na, de LOKOSS!!!</AlertDialogAction>
        </AlertDialogFooter>
      </AlertDialogContent>
    </AlertDialog>
  )
}
