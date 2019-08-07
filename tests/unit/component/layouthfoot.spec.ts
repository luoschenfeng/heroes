import { shallowMount,createLocalVue } from '@vue/test-utils'
import layoutoutfoot from '@/views/layout/components/layoutfoot.vue'
import Vuex from 'vuex'
const localVue = createLocalVue()
localVue.use(Vuex)
describe('test layoutFoot', () => {
  let store: any
  let mutations: any
  beforeEach(() => {
    mutations = {
      CLEAR_CACHES: jest.fn()
    }

    store =  new Vuex.Store({
      state: {
        heroes: [],
        heroName: '',
        caches: [
          {type: 'fetched', message: 'heroes'}
        ]
      },
      mutations,
    })
  })
  it('缓存条目个数', () => {
    const wrapper = shallowMount(layoutoutfoot,{
      store,
      localVue,
      stubs: ['router-link']
    })
    expect(wrapper.find('#caches').element.childNodes.length).toBe(1)
  })
  it('用户点击clear ,清除缓冲的方法被调用', () => {
    const wrapper = shallowMount(layoutoutfoot,{
      store,
      localVue,
      stubs: ['router-link']
    })
    let button = wrapper.find('button')
    button.trigger('click')
    expect(mutations.CLEAR_CACHES).toBeCalled()
  })
})
