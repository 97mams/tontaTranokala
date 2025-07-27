import { GroupSiteForm } from "@/components/group-site-form";

export default function Page() {
  return (
    <div>
      <h1>Ajouter</h1>
      <p>Ajouter ici le nom du techno que vous voulez construire</p>
      <div>
        <GroupSiteForm />
      </div>
    </div>
  )
}