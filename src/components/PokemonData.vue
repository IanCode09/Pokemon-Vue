<template>
    <div v-if="pokemons.length">
        <div class="pokemon-list">
            <div v-for="(pokemon, index) in pokemons" :key="index" class="pokemon-card">
                <router-link :to="{ name: 'PokemonDetail', params: { id: pokemon.id } }">
                    <img :src="imageUrl + pokemon.id + '.png'" alt="">
                    <p>{{pokemon.name}}</p>
                </router-link>
            </div>
        </div>

        <div class="pokemon-page">
            <!-- <p @click="prevPage">Previous</p> -->
            <button @click="nextPage">Next List</button>
            
        </div>
    </div>

    <div v-else>
        <p>Loading...</p>
    </div>
</template>

<script>
export default {
    props: [ 'pokemonApi', 'imageUrl' ],
    data() {
        return {
            pokemons: [],
            nextPageUrl: '',
            prevPageUrl: '',
            currentUrl: ''
        }
    },
    methods: {
        fetchData() {
            // const url = new Request(this.currentUrl)
            let url = this.currentUrl
            fetch(url)
                .then((res) => {
                    if(res.status === 200) {
                        return res.json()
                    }
                })
                .then((data) => {
                    // console.log(data);
                    data.results.forEach(pokemon => {
                        pokemon.id = pokemon.url.split('/')
                            .filter(function(part) {
                                return !!part
                            }).pop()
                        this.pokemons.push(pokemon)
                    })
                    this.nextPageUrl = data.next
                    this.prevPageUrl = data.previous
                })
                .catch((error) => {
                    console.log(error);
                })
        },
        nextPage() {
            this.currentUrl = this.nextPageUrl
            this.fetchData()
        },
        prevPage() {
            this.currentUrl = this.prevPageUrl
            this.fetchData()
        }
    },
    created() {
        this.currentUrl = this.pokemonApi
        this.fetchData()
    },
    mounted() {
        // this.nextPage()
    },
}
</script>

<style>
    .pokemon-list {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        margin-top: 100px;
        margin-bottom: 50px;
        padding: 0 50px;
    }
    .pokemon-card {
        text-align: center;
        margin: 0 15px;
        background-color: #323764;
        margin-bottom: 40px;
        padding: 30px;
        border-radius: 20px;
        box-shadow: 0px 5px 17px -7px rgba(0, 0, 0, 0.75 );
        transition: transform 100ms ease-in;
        cursor: pointer;    
    }
    .pokemon-card:hover {
        transform: scale(1.07);
    }
    .pokemon-list p {
        text-transform: uppercase;
    }
    .pokemon-list a {
        text-decoration: none;
        color: white;
    }
    .pokemon-list img {
        width: 170px;
    }
    .pokemon-page button {
        background-color: rgb(1, 87, 80);
        padding: 8px 20px;
        margin-bottom: 50px;
    }
</style>