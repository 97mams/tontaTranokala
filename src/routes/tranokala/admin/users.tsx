import { createFileRoute } from '@tanstack/react-router'

export const Route = createFileRoute('/tranokala/admin/users')({
  component: RouteComponent,
})

function RouteComponent() {
  return <div>
    <h1>Liste des utilisateurs</h1>
    
  </div>
}
