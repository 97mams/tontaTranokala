import { json } from "@sveltejs/kit";
import type { RequestHandler } from "./$types.js";

export function GET() {
  return json([{name:'maiosa', url:'28', description:'lorem impsum dolor'}])
}

export const POST:RequestHandler =({request}) => {
  return json('ok')
} 