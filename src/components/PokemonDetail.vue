<template>
  <div class="container">
    <router-link :to="{ name: 'Home'}">
      <h1>POKEMON</h1>
    </router-link>
  </div>

  <div v-if="pokemon" class="pokemon-detail">
    <router-link :to="{ name: 'Home'}">
      <i class="fas fa-arrow-left"></i>
    </router-link>
    <div class="pokemon-info">
      <div class="pokemon-info_left">
        <img :src="imageUrl + pokemon.id + '.png'" alt="">
        <h1>{{ pokemon.name }}</h1>
      </div>

      <div class="pokemon-info_right">
        <p class="text-light">Base Experience: <span>{{ pokemon.base_experience }}</span></p>
        <p class="text-light">Height: <span>{{ pokemon.height }}</span></p>
        <p class="text-light">Weight: <span>{{ pokemon.weight }}</span></p>

        <div class="pokemon-info-base">
          <div v-for="(stat, index) in stats" :key="index" class="stats-info">
            <div class="stat-info">
              <p class="text-light">{{ stat.stat.name }} : <span>{{ stat.base_stat }}</span></p>
            </div>
          </div>
        </div>
        
        <div class="flex">
            <p class="text-light">Types</p>
            <div v-for="(type, index) in types" :key="index">
              <p class="type">{{type.type.name}}</p>
            </div>
        </div>
        <div class="flex">
          <p class="text-light">Ability</p>
          <div v-for="(ability, index) in abilities" :key="index">
            <p class="ability">{{ ability.ability.name }}</p>
          </div>
        </div>
      </div>
    </div>

    
  </div>

  <div v-else>
    <p>Loading ...</p>
  </div>
</template>

<script>
export default {
  props: ['id'],
  data() {
    return {
        pokemonApi: 'https://pokeapi.co/api/v2/pokemon/',
        imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/',
        pokemon: null,
        types: null,
        abilities: null,
        stats: null
    }
  },

  methods: {
    fetchData() {
      const url = this.pokemonApi + this.id
      fetch(url)
        .then((res) => {
          if(res.status === 200) {
            return res.json()
          }
        })
        .then((data) => {
          this.pokemon = data
          this.types = data.types
          this.abilities = data.abilities
          this.stats = data.stats
        })
    },

  },

  mounted() {
    this.fetchData()
  },

  watch: {
    abilities(val) {
      console.log(val);
    }
  }
}
</script>

<style>
  a {
    text-decoration: none; 
    color: white;
  }
  .flex {
    display: flex;
    align-items: center;
  }
  .flex p {
    margin-right: 10px;
  }
  .pokemon-detail {
    background-color: #323764;
    height: 500px;
    padding: 20px 200px;
    border-radius: 30px 30px 0 0;
    margin-top: 50px;
  }
  .pokemon-info {
    display: flex;
    align-items: center;
    flex-wrap: wrap;
  }
  .pokemon-info_left {
    text-align: center;
  }
  .pokemon-info_left h1 {
    text-transform: uppercase;
    letter-spacing: 7px;
  }
  .pokemon-info_right {
    margin-left: 200px;
  }
  img {
    width: 300px;
  }
  p.type {
    text-transform: capitalize;
    margin-right: 10px;
    background: #8f3797;
    padding: 5px 11px;
    border-radius: 8px;
  }
  p.text-light {
    color: #999797;
  }
  span {
    color: #f6fa00;
    margin-left: 7px;
  }
  p.ability {
    text-transform: capitalize;
    margin-right: 10px;
    background: #308138;
    padding: 5px 11px;
    border-radius: 8px;
  }
  .pokemon-info-base {
    margin-top: 10px;
  }
  .stat-info p {
    margin-right: 5px;
    text-transform: capitalize;
  }
  i.fas {
    background-color: #2e0747;
    font-size: 20px;
    padding: 10px;
    border-radius: 50%;
    color: #f3c0cb;
    cursor: pointer;
  }

  @media (max-width: 1156px) {
    .pokemon-info {
      display: flex;
      align-items: center;
      flex-direction: column;
    }
    .pokemon-info_right {
        margin-left: 0;
    }
    .pokemon-detail {
      height: 1000px;
    }

  }
</style>