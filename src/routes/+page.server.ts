import { browser } from "$app/environment";
import type { Actions } from "./$types.js";
import { type dataType } from "./runes/site.svelte.js";

export const actions = {
  default: async ({request}) => {
    const formData = await request.formData()
    const data:dataType = {
      id: Date.now(),
      name: String(formData.get('name')),
      url: String(formData.get('url')),
      description:String(formData.get('description')),
    }
  
    return {
      success: true,
      data
    }
  }
}satisfies Actions