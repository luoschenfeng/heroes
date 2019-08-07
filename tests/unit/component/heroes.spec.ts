import { shallowMount, createLocalVue } from '@vue/test-utils'
import heroes from '@/components/heroes.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()
localVue.use(Vuex)
describe('detail.vue test', () => {
  let $route: any
  let store: any
  let actions: any
  let datas = [
    { id: 12, name: 'nich' },
    { id: 13, name: 'mucn' },
    { id: 14, name: 'bull' }
  ]
  beforeEach(() => {
    actions = {
      addHero: jest.fn(),
      deleteHero: jest.fn()
    }
    store = new Vuex.Store({
      state: {
        heroes: datas
      },
      actions
    })
    $route = {
      name: 'detail',
      params: { id: '123' }
    }
  })


  it('点击添加，方法被调用',  () => {
    let heroAdd = jest.fn()
    const wrapper = shallowMount(heroes, {
      store,
      localVue,
      mocks: { $route },
      stubs: ['v-icon','router-link']
    })
    wrapper.setMethods({toAddHero: heroAdd})
    const button = wrapper.find('button')
    button.trigger('click')
    expect(heroAdd).toBeCalled()
  })

  it('typeValue为空，不添加英雄', async () => {
    let heroAdd = jest.fn()
    const wrapper = shallowMount(heroes, {
      store,
      localVue,
      mocks: { $route },
      stubs: ['v-icon','router-link']
    })
    wrapper.setMethods({toAddHero: heroAdd})
    await heroAdd.call(wrapper.vm)
    expect(actions.addHero).not.toBeCalled()
  })


  it('点击删除，删除方法调用',  () => {
    const wrapper = shallowMount(heroes, {
      store,
      localVue,
      mocks: { $route },
      stubs: ['v-icon','router-link']
    })
    const button = wrapper.find('span.cancelhero')
    button.trigger('click')
    expect(actions.deleteHero).toBeCalled()
  })

  it('删除英雄数据,相应英雄条目删除', () => {
    const wrapper = shallowMount(heroes, {
      store,
      localVue,
      mocks: { $route },
      stubs: ['v-icon','router-link']
    })
    store.state.heroes.splice(2,1)
    expect(wrapper.findAll('.heronav').length).toBe(2)
  })
})
