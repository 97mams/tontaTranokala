import { createFileRoute } from '@tanstack/react-router'
import { SingupForm } from '@/components/singup-form'

export const Route = createFileRoute('/tranokala/singup')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="h-150 w-150 felx justify-center items-end">
      <SingupForm />
    </div>
}
