import { shallowMount, createLocalVue } from '@vue/test-utils'
import dashboard from '@/components/dashboard.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()
localVue.use(Vuex)
describe('dashboard.vue test', () => {
  let $router: any
  let store: any
  let mutations: any
  let getters: any
  let datas = [
    { id: 12, name: 'nich' },
    { id: 13, name: 'mucn' },
    { id: 14, name: 'bull' },
    { id: 15, name: 'muct' }
  ]
  beforeEach(() => {
    getters = {
      getHeroes: () => datas.slice(0, 4),
      filterHeroes: () => (value: string) => datas.filter(data => data.name.toLowerCase().search(value.toLowerCase()) > -1)
    }
    mutations = {
      INSERT_CACHE: jest.fn()
    }
    store = new Vuex.Store({
      state: {
        heroes: datas,

      },
      getters,
      mutations
    })
    $router = [{
      path: '/detail/12'
    }]
  })

  it('用户输入得到匹配的英雄',  () => {
    const wrapper = shallowMount(dashboard, {
      store,
      localVue,
      mocks: { $router },
      stubs:['router-link', 'router-view']
    })
    const input = wrapper.findAll('input')
    input.setValue('n')
    input.trigger('input')
    wrapper.setData({typeValue: 'n'})
    expect(wrapper.findAll('.heroline').length).toBe(2)
  })

  // it('typeValue不为空,调用insertCache',  (done) => {
  //   const wrapper = shallowMount(dashboard, {
  //     store,
  //     localVue,

  //     mocks: { $router },
  //     stubs:['router-link', 'router-view']
  //   })
  //   wrapper.setData({typeValue: 'mm'})
  //   const cacheAdd = jest.fn()
  //   wrapper.setMethods({addCache: cacheAdd})
  //   cacheAdd.call(wrapper)
  //   wrapper.vm.$nextTick(() => {
  //     jest.setTimeout(1000)
  //     expect(mutations.INSERT_CACHE).toBeCalled()
  //     done()
  //   })
  // })
})
