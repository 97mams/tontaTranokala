import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types.js";
import { PATH } from "$env/static/private";

const fileContent = await Bun.file(PATH)
const response = await fileContent.json()

export async function GET() {  
  return json(response)
}

export const POST:RequestHandler = async ({request}) => {
  console.log('mety')
  let data = response
  const resp = await request.json()
  data.push(resp)
  const bun = await Bun.write(PATH, JSON.stringify(data))
  return json(bun)
}
