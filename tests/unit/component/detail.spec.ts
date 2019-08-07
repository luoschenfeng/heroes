import { shallowMount, createLocalVue } from '@vue/test-utils'
import detail from '@/components/detail.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()
localVue.use(Vuex)
describe('detail.vue test', () => {
  let $route :any
  let store: any
  let mutations: any
  let actions: any

  beforeEach(() => {
    mutations = {
      INITIAL_HERONAME: jest.fn(),
      CHANGE_HERONAME: jest.fn(),
      INSERT_CACHE: jest.fn()
    }
    actions = {
      updateHero: jest.fn()
    }

    store = new Vuex.Store({
      state: {
        heroes: [{ id: 12, name: 'Nich' }],
        heroName: ''
      },
      mutations,
      actions
    })
    $route = {
      path: '/detail/12'
    }
  })

  it('rander id 为给定值', () => {
    const wrapper = shallowMount(detail, {
      store,
      localVue,
      propsData: {
        'id': 12
      },
      mocks: { $route }
    })
    expect(wrapper.find('p').text()).toBe('id: 12')
  })
  it('test 路由地址', () => {
    const wrapper = shallowMount(detail, {
      store,
      localVue,
      propsData: {
        'id': 12
      },
      mocks: { $route }
    })
    expect(wrapper.vm.$route.path).toBe('/detail/12')
  })
  it('input输入值时改变heroName的函数被调用', () => {
    const wrapper = shallowMount(detail, {
      store,
      localVue,
      propsData: {
        'id': 12
      },
      mocks: { $route }
    })
    const input = wrapper.find('#inputname')
    input.setValue('Nchies')
    expect(mutations.CHANGE_HERONAME).toBeCalled()
  })

  it('save按钮按压updateHero方法被调用', () => {
    const wrapper = shallowMount(detail, {
      store,
      localVue,
      propsData: {
        'id': 12
      },
      mocks: { $route }
    })
    const input = wrapper.find('#inputname')
    input.setValue('nchies')
    const save = wrapper.findAll('.changepage').at(1)
    save.trigger('click')
    expect(actions.updateHero).toBeCalled()
  })
})
