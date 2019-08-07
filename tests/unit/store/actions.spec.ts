import actions from '@/store/actions'
import { initState, IHero } from '@/store'
test('test actions.deleteHero', () => {
  const deleteId = 12
  const commit = jest.fn()
  actions.deleteHero({commit}, deleteId)
  expect(commit.mock.calls.length).toBe(2)
  expect(commit.mock.calls[0][1]).toBe(deleteId)
  expect(commit.mock.calls[1][1].type).toBe('deleted')
  expect(commit.mock.calls[1][1].message).toBe(`hero id=${deleteId}`)
})

test('test actions.updateHero', () => {
  const hero = {id: 19, name: 'cc'}
  const commit = jest.fn()
  actions.updateHero({commit}, hero)
  expect(commit.mock.calls.length).toBe(2)
  expect(commit.mock.calls[0][1]).toBe(hero)
  expect(commit.mock.calls[1][1].type).toBe('updated')
  expect(commit.mock.calls[1][1].message).toBe(`hero id=${hero.id}`)
})

test('test actions.addHero', async () => {
  const heroName = 'mm'
  const state = {
    heroes: [{
      id: 12, name: 'mcks'
    }],
    heroName: '',
    caches: []
  }
  const commit = jest.fn()
  await actions.addHero({commit, state}, heroName)
  expect(commit.mock.calls.length).toBe(2)
  expect(commit.mock.calls[0][1]).toBe('Mm')
  expect(commit.mock.calls[1][1].type).toBe('added')
})

test('test actions.addHero', async () => {
  const heroName = '1jjj'
  const state = {
    heroes: [{
      id: 12, name: 'mcks'
    }],
    heroName: '',
    caches: []
  }
  const commit = jest.fn()
  await actions.addHero({commit, state}, heroName)
  expect(commit.mock.calls.length).toBe(2)
  expect(commit.mock.calls[0][1]).toBe('1jjj')
  expect(commit.mock.calls[1][1].type).toBe('added')
})
