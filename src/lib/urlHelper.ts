export function UrlHelper(params: string): string {
  return params.replaceAll(" ", "_");
}

export function castToString(params: string): string {
  return params.replaceAll("_", " ");
}

export function stringToObject(params: string): { id: number; title: string } {
  const paramsToArray = params.split("-");
  return { id: Number(paramsToArray[0]), title: paramsToArray[1] };
}
