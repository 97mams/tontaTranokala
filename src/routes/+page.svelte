<script>
    import { browser } from "$app/environment";
    import ModalForm from "../components/Modal_form.svelte";
    import { createSites } from "./runes/site.svelte.js";
    export let form
    let success = false
    
    if (form && form.succes){
      if (browser) {
        fetch('/api',{
          method: 'POST',
          body:JSON.stringify(form.data),
          headers: {
            'content-type': 'application/json'
          }
        })
    }
    
    success = true
    setTimeout(() => {
        success = false
      },3000)
    }
    let sites = createSites()
   console.log(sites.sites);
</script>
<p class="py-8">
  cliquer le boutton pour enregistrer un site web
  <ModalForm />
</p>
<table class="table">
<thead>
  <tr>
    <th>nom</th>
    <th>lien</th>
    <th>description</th>
  </tr>
</thead>
<tbody>
  {#each sites.sites as site}
  <tr>
    <td>{site.name}</td>
    <td>{site.url}</td>
    <td>{site.description}</td>
  </tr>
  {/each}
</tbody>
</table>

{#if success}
<div class="toast toast-start">
  <div class="alert alert-success">
    <span>Enregistement réussie ! {success}</span>
  </div>
</div>
{/if}

