import getters from '@/store/getters'
it('test getters.getHeroes', () => {
  const state = {
    heroes: [
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
    ],
    caches: [],
    heroName: ''
  }
  expect(getters.getHeroes(state).length).toBe(4)
})

it('test getters.filterHeroes', () => {
  const state = {
    heroes: [
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
    ],
    caches: [],
    heroName: ''
  }
  expect(getters.filterHeroes(state)('n').length).toBe(3)
})
