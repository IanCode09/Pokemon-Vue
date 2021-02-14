<template>
  <div class="container">
    <router-link :to="{ name: 'Home'}">
      <h1>POKEMON</h1>
    </router-link>

    <PokemonSearch />
  </div>
</template>

<script>
import PokemonSearch from '../components/PokemonSearch.vue'
export default {
    components: { PokemonSearch }
}
</script>

<style>

</style>