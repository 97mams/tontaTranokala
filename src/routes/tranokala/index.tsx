import { SingButton } from '#/components/SingButton.tsx'
import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tranokala/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div><SingButton /></div>
}
