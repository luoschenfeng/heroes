import Vue from 'vue'
import Vuex from 'vuex'
import mutations from './mutations'
import getters from './getters'
import actions from './actions'
Vue.use(Vuex)

export interface IHero {
  id: number;
  name: string
}
export interface ICache {
  type: string;
  message: string;
}
export interface IState {
  heroes: IHero[];
  caches: ICache[];
  heroName: string
}
let heroes: IHero[] = [
  {
    id: 11,
    name: 'Nchi'
  },
  {
    id: 12,
    name: 'Bocj'
  },
  {
    id: 13,
    name: 'Nmer'
  },
  {
    id: 14,
    name: 'Lgick'
  },
  {
    id: 15,
    name: 'Mutl'
  },
  {
    id: 16,
    name: 'Hnmv'
  }

]
export let initState: IState = {
  heroes: heroes,
  caches: [],
  heroName: ''
}
export default new Vuex.Store({
  state: initState,
  getters: getters,
  mutations: mutations,
  actions: actions
})
