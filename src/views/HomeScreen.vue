<template>
  <div class="container">
    <router-link :to="{ name: 'Home'}">
      <h1>POKEMON</h1>
    </router-link>

    <router-link :to="{ name: 'PokemonSearch'}">
      <button>Search Pokemon</button>
    </router-link>

    <Pokemon />
  </div>
</template>

<script>
import Pokemon from '../components/Pokemon.vue'

export default {
  name: 'Home',
  components: {
    Pokemon
  }
}
</script>

<style>
  .container {
    margin-top: 80px;
    text-align: center;
  }
  .container h1 {
    text-align: center;
    letter-spacing: 7px;
  }
  button {
    background-color: #61605f;
    border: none;
    color: white;
    padding: 10px 15px;
    border-radius: 8px;
    cursor: pointer;
  }
  button:hover {
    background-color: #6e6d6b;
  }
</style>