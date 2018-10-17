import React from 'react'
import { mount as m, shallow } from 'enzyme'

const baseComponentOptions = {
  className: '',
  skipChildrenTest: false,
}

export const baseComponentTest = (
  Component,
  options = baseComponentOptions
) => {
  const mount = c => {
    const wrapper = m(c)
    const el = wrapper.find(`.${options.className}`).hostNodes()

    return el
  }

  describe('ClassName', () => {
    test('Has default className', () => {
      const wrapper = mount(<Component />)

      expect(wrapper.hasClass(options.className)).toBeTruthy()
    })

    test('Applies custom className if specified', () => {
      const customClass = 'piano-key-neck-tie'
      const wrapper = mount(<Component className={customClass} />)

      expect(wrapper.hasClass(customClass)).toBeTruthy()
    })
  })

  if (!options.skipChildrenTest) {
    describe('Children', () => {
      test('Renders child content', () => {
        const wrapper = shallow(
          <Component>
            <div className="child">Hello</div>
          </Component>
        )
        const el = wrapper.find('div.child')

        expect(el.text()).toContain('Hello')
      })
    })
  }

  describe('Style', () => {
    test('Can accept custom styles', () => {
      const wrapper = shallow(<Component style={{ padding: 200 }} />)

      expect(wrapper.props().style.padding).toBe(200)
    })
  })
}
