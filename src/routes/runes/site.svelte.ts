import { onMount } from "svelte"
export type dataType = {
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
      .then((value) => (sites = value))
      .finally(() => (isFetch=true))
  })

  return {
    get sites(){
      return sites
    },
    get isFetch(){
      return isFetch
    }, 
    addSite(data:dataType){
      fetch('/api', {
        method: 'POST',
        body:JSON.stringify(data),
        headers: {
          'content-type': 'application/json'
        }
      })
    }
  }
}