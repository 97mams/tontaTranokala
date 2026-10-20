import { convexQuery } from '@convex-dev/react-query';
import { useQueryClient, useSuspenseQuery } from '@tanstack/react-query';
import { createFileRoute } from '@tanstack/react-router'
// import { useMutation } from 'convex/react';
import { api } from '../../../../convex/_generated/api';

export const Route = createFileRoute('/tranokala/admin/users')({
  component: RouteComponent,
})

function RouteComponent() {

  const queryClient = useQueryClient();
    const listKey = convexQuery(api.admin.getusers, {}).queryKey;
    const { data } = useSuspenseQuery(convexQuery(api.admin.getusers, {}));
    // const removeCollection = useMutation(api.admin.removeuser);
  

    console.log(data)


    // const handleDelete = async (id: Id<"collections">) => {
    //   await removeCollection({ id });
    //   queryClient.invalidateQueries({ queryKey: listKey });
    // };

  return <div>
    <h1>Liste des utilisateurs</h1>
    
  </div>
}
