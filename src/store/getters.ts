import {IState, IHero} from './index'
export default {
  getHeroes: (state: IState): IHero[] => state.heroes.slice(0,4),
  filterHeroes: (state: IState) => 
    (value: string): IHero[] => 
      state.heroes.filter(hero => hero.name.toLowerCase().search(value.toLowerCase()) > -1),
}