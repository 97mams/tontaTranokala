import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tranokala/admin/users')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>Hello "/tranokala/admin/users"!</div>
}
