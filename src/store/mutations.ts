import {IHero, ICache, IState} from './index'
import { ADD_HERO, DELETE_HERO, INITIAL_HERONAME, CHANGE_HERONAME, UPDATE_HERO, INSERT_CACHE, CLEAR_CACHES } from './mutations_type'
export default {
  [ADD_HERO] (state: IState, heroName: string) {
    let id: IHero['id']
    if(state.heroes.length){
      id =  state.heroes.slice(-1)[0].id
    }else{
      id = 0
    }
    state.heroes.push({id: id +1, name: heroName})
  },
  [DELETE_HERO] (state: IState, id: IHero['id']) {
    state.heroes = state.heroes.filter(hero => hero.id !== id)
  },
  //change state.heroes[].name by state.heroname
  [UPDATE_HERO] (state: IState, heroInfo: IHero){
    let hero = state.heroes.filter(hero => hero.id === heroInfo.id)[0];
    hero.name = heroInfo.name
  },
  //initial state.heroname by state.heroes[].name
  [INITIAL_HERONAME] (state: IState, id: IHero['id']): void {
    if(state.heroes.some(hero => hero.id === id)) {
      let hero: IHero = state.heroes.filter(hero => hero.id === id)[0];
      state.heroName = hero.name;
    }
  },
  //change state.heroname by typeValue of input
  [CHANGE_HERONAME] (state: IState, heroName: string) {
    state.heroName = heroName;
  },
  [INSERT_CACHE] (state: IState, cacheInfo: ICache) {
    state.caches.push({type: cacheInfo.type, message: cacheInfo.message});
  },
  [CLEAR_CACHES] (state: IState) {
    state.caches = [];
  }
}