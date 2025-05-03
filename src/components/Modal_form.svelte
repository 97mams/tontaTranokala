<button class="btn" onclick={my_modal_1.showModal()}>open modal</button>

<dialog id="my_modal_1" class="modal">
  <div class="modal-box">
    <h3 class="text-lg font-bold">Ajouter!</h3>
    <div class="modal-box">
      <form action="">
        <fieldset class="fieldset">
          <legend class="fieldset-legend">Nom du site</legend>
          <input type="text" class="input" placeholder="Type here" />
        </fieldset>
        <fieldset class="fieldset">
          <legend class="fieldset-legend">URL</legend>
          <input type="text" class="input" placeholder="Type here" />
        </fieldset>
        <fieldset class="fieldset">
          <legend class="fieldset-legend">Déscription</legend>
          <textarea class="textarea h-24" placeholder="Déscription"></textarea>
        </fieldset>
        <button class="btn btn-sm btn-outline btn-secondary" onclick="{my_modal_1.close()}">enregister</button>
      </form>
    </div>
  </div>
</dialog>