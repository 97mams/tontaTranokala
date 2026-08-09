import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tranokala/')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/tranokala/"!</div>
}
