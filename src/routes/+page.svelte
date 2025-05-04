<script>
    import { formatPostcssSourceMap } from "vite";
    import ModalForm from "../components/Modal_form.svelte";
    export let form
    let success = false
    $:{
      if (form && form.succes){
        setTimeout(() => {
          success = true
        },3000)
      }

    }

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
  <tr>
    <td>gmail</td>
    <td>https://google.com/mail?c=2117</td>
    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur impedit fugiat quos sunt</td>
  </tr>
  <tr>
    <td>gmail</td>
    <td>https://google.com/mail?c=2117</td>
    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur impedit fugiat quos sunt</td>
  </tr>
  <tr>
    <td>gmail</td>
    <td>https://google.com/mail?c=2117</td>
    <td>Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur impedit fugiat quos sunt</td>
  </tr>
</tbody>
</table>

{#if success}
<div class="toast toast-start">
  <div class="alert alert-success">
    <span>Message sent successfully.</span>
  </div>
</div>
{/if}

