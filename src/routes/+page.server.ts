import type { Actions } from "./$types.js";
import { createSites, type dataType } from "./runes/site.svelte.js";

export const actions = {
  default: async ({request}) => {
    const formData = await request.formData()
    const data:dataType = {
      name: String(formData.get('name')),
      url: String(formData.get('url')),
      description:String(formData.get('description')),
    }
    const sites = createSites()
    sites.addSite(data)
    return {
      success: true
    }
  }
}satisfies Actions