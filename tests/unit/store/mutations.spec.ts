import types from '@/store/mutations'
import { initState, IHero } from '@/store'

it('text mutation ADD_HERO', () => {
  const state = initState
  types.ADD_HERO(state, 'mm')
  expect(state.heroes[state.heroes.length -1].id).toBe(17)
})

it('text mutation ADD_HERO if heroes is emply', () => {
  const state =  {
    heroes: [],
    caches: [],
    heroName: ''
  }
  types.ADD_HERO(state, 'mm')
  expect(state.heroes.length).toBe(1)
})

it('text mutation INITIAL_HERONAME', () => {
  const state = initState
  types.INITIAL_HERONAME(state, 14)
  expect(state.heroes.filter(hero => hero.id === 14)[0].name).toBe(state.heroName)
})

it('text mutation INITIAL_HERONAME if id not in the hero id',  () => {
  const state =  {
    heroes: [],
    caches: [],
    heroName: ''
  }
  types.INITIAL_HERONAME(state, 1)
  expect(state.heroName).toBe('')
})

it('text mutation CHANGE_HERONAME', () => {
  const state = initState
  types.CHANGE_HERONAME(state, 'mm')
  expect(state.heroName).toBe('mm')
})

it('text mutation UPDATE_HERO', () => {
  const state = initState
  types.UPDATE_HERO(state, {id: 12, name: 'Nchies'})
  expect(state.heroes.filter(hero => hero.id === 12)[0].name).toBe('Nchies')
})

it('text mutation INSERT_CACHE', () => {
  const state = initState
  types.INSERT_CACHE(state, { type: 'fetched', message: 'hero id = "1"' })
  expect(state.caches[state.caches.length-1]).toEqual({ type: 'fetched', message: 'hero id = "1"' })
})


it('text mutation CLEAR_CACHES', () => {
  const state = initState
  types.CLEAR_CACHES(state)
  expect(state.caches.length).toBe(0)
})

it('text mutation DELETE_HERO', () => {
  const state = initState
  types.DELETE_HERO(state, 14)
  expect(state.heroes.filter(hero => hero.id === 14)).toBeTruthy()
})
