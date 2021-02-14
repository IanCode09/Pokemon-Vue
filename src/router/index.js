import { createRouter, createWebHistory } from "vue-router";
import HomeScreen from "../views/HomeScreen.vue";
import DetailScreen from "../views/DetailScreen.vue";
import SearchScreen from "../views/SearchScreen.vue";

const routes = [
  {
    path: "/",
    name: "Home",
    component: HomeScreen,
  },
  {
    path: "/pokemon/:id",
    name: "PokemonDetail",
    component: DetailScreen,
    props: true,
  },
  {
    path: "/pokemon/search",
    name: "PokemonSearch",
    component: SearchScreen,
    props: true,
  },
];

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes,
});

export default router;
