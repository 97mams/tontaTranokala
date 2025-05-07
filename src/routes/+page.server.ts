import type { Actions } from "@sveltejs/kit"

export const actions = {
  default: async ({request}) => {
    const response = await request.formData()
    const data = {
      id: Date.now(),
      name: response.get('name'),
      url: response.get('url'),
      description: response.get('description')
    }
    return {succes: true, data}
  }
} satisfies Actions