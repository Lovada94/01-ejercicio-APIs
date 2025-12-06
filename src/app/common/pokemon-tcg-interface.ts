
export interface ApiResponsePokemonTCG {
  count: number
  next: string
  previous: any
  results: Pokemons[]
}

export interface Pokemons {
  name: string
  url: string
}
