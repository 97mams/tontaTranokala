import { convexQuery } from '@convex-dev/react-query';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'
// import { useMutation } from 'convex/react';
import { api } from '../../../../convex/_generated/api';

export const Route = createFileRoute('/tranokala/admin/users')({
  component: RouteComponent,
})

function RouteComponent() {

  return <div>
    <h1>Liste des utilisateurs</h1>
    
  </div>
}
