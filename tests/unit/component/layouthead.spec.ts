import { shallowMount } from '@vue/test-utils'
import layouthead from '@/views/layout/components/layouthead.vue'

describe('layouthead.vue', () => {
  it('renders  ', () => {
    const wrapper = shallowMount(layouthead, {
      stubs: ['router-view','router-link']
    })
    expect(wrapper.find('h1').element.textContent).toMatch('Tour of Heroes')
  })

})
