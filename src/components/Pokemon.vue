<template>
  <div>
     <PokemonData 
        :pokemonApi = "pokemonApi" 
        :imageUrl="imageUrl" 
    />
  </div>
</template>

<script>
import PokemonData from './PokemonData.vue'

export default {
    components: {
        PokemonData,
    },
    data() {
        return {
            pokemonApi: 'https://pokeapi.co/api/v2/pokemon/',
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/',
            pokemonUrl: ''
        }
    },
    methods: {
    },

    mounted() {
        
    },
}
</script>

<style>

</style>