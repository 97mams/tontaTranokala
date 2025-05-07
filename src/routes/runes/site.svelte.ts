import { browser } from "$app/environment"
import { onMount } from "svelte"

export type dataType = {
  id: number,
  name:string,
  url: string,
  description: string
}

export function createSites() {
  let sites:dataType[] = $state([])
  let isFetch = $state(false)

  onMount(() => {
    fetch('/api')
      .then((response) => response.json())
      .then((value) =>console.log(value))
      .finally(() => (isFetch=true))
  })

  return {
    get sites(){
      return sites
    },
    get isFetch(){
      return isFetch
    }
  }
}