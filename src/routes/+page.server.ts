import type { Actions } from "./$types.js";

export const actions = {
  default: async ({request}) => {
    const formData = await request.formData()
    const data = {
      siteName: formData.get('name'),
      url: formData.get('url'),
      description: formData.get('description'),
    }
    return {
      success: true
    }
  }
}satisfies Actions