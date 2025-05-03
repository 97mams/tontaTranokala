

<button class="btn btn-primary btn-sm" onclick={my_modal_1.showModal()}>+</button>

<dialog id="my_modal_1" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Ajouter!</h3>
    <div class="modal-box">
      <form method="POST" action="?/register">
        <fieldset class="fieldset">
          <legend class="fieldset-legend">Nom du site</legend>
          <input type="text" name="name" class="input" placeholder="Tapez ici" />
        </fieldset>
        <fieldset class="fieldset">
          <legend class="fieldset-legend">URL</legend>
          <input type="text" name="url" class="input" placeholder="Tapez ici" />
        </fieldset>
        <fieldset class="fieldset">
          <legend class="fieldset-legend">Déscription</legend>
          <textarea name="description" class="textarea h-24" placeholder="Déscription"></textarea>
        </fieldset>
        <button class="btn btn-sm btn-outline btn-secondary" onclick="{my_modal_1.close()}">enregister</button>
      </form>
    </div>
  </div>
</dialog>