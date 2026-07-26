import { createFileRoute } from '@tanstack/react-router'
import { SinginForm } from "@/components/singin.from"

export const Route = createFileRoute('/tranokala/singin')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div className="h-150 w-150 m-auto flex justify-center items-center">
    <SinginForm />
    </div>
}
