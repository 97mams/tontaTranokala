import { createFileRoute } from '@tanstack/react-router'
import { SingupForm } from '@/components/singup-form'

export const Route = createFileRoute('/tranokala/singup')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="h-  w-full bg-background backdrop-blur-lg z-100  m-auto flex justify-center items-center">
      <SingupForm />
    </div>
}
