<template>
    <div class="search">
        <form @submit.prevent="setPokemonUrl">
            <input type="text" v-model="searchValue" placeholder="Search by name...">
        </form>
        <i class="fas fa-search" @click="setPokemonUrl"></i>
    </div>
    
    <div class="pokemon-list">
        <div v-if="pokemon" class="pokemon-card">
            <router-link :to="{ name: 'PokemonDetail', params: { id: pokemon.id } }">
                <img :src="imageUrl + pokemon.id + '.png'" alt="">
                <p>{{pokemon.name}}</p>
            </router-link>
        </div>
        <div v-else>
            <p>Pokemon Not Found</p>
        </div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            pokemonApi: 'https://pokeapi.co/api/v2/pokemon/',
            imageUrl: 'https://raw.githubusercontent.com/PokeAPI/sprites/master/sprites/pokemon/other/official-artwork/',
            searchValue: '',
            newUrl: '',
            pokemon: null
        }
    },
    methods: {
        setPokemonUrl() {   
            const url = this.pokemonApi + this.searchValue
            this.newUrl = url
            fetch(url)
            .then((res) => {
                if(res.status === 200) {
                    return res.json()
                }
            })
            .then((data) => {
                this.pokemon = data
            })
            .catch((error) => {
                console.log(error);
            })

        }
    },
}
</script>

<style>
    .search {
        display: flex;
        justify-content: center;
        align-items: center;
    }
    .search input {
        border-radius: 8px;
        border: none;
        outline: none;
        padding: 8px 20px ;
        margin-right: 20px;
    }
    .search i.fas {
        background-color: rgb(68, 46, 46);
    }
</style>