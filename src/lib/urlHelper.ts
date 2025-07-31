export function UrlHelper(params:string):string {
 return params.replaceAll(' ', '_')
}

export function castToString(params:string):string {
  return params.replaceAll('_', ' ')
}

export function stringToArray(params:string): string[] {
  return params.split('-')
}