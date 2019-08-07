import { ADD_HERO, DELETE_HERO, UPDATE_HERO, INSERT_CACHE } from './mutations_type'
import { Commit } from 'vuex'
import { IHero, IState } from '.'

export default {
  deleteHero ({commit}: { commit: Commit}, id: number)  {
    commit(DELETE_HERO, id);
    commit(INSERT_CACHE, {type: 'deleted', message: `hero id=${id}`})
  },
  updateHero ({commit}: { commit: Commit}, heroInfo: IHero)  {
    commit(UPDATE_HERO, heroInfo);
    commit(INSERT_CACHE, {type: 'updated', message: `hero id=${heroInfo.id}`})
  },
  async addHero({ commit, state }: { commit: Commit, state: IState }, heroName: IHero['name']) {
    let name: string
    if(/[a-z]/.test(heroName[0])){
      name = heroName[0].toUpperCase()+heroName.substr(1)
    }else{
      name = heroName;
    }
    const id = await new Promise((resolve) => {
        commit(ADD_HERO, name);
        resolve(state.heroes.slice(-1)[0].id)
    });
    await new Promise((resolve) => {
      commit(INSERT_CACHE, {type: 'added', message: `hero w/id=${id}`})
      resolve()
   });
  },
  searchHeroes(){},
}