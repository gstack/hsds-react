import React from 'react'
import { MemoryRouter } from 'react-router'
import { mount } from 'enzyme'
import Card from '../Card'
import Link from '../../Link'

describe('ClassName', () => {
  test('Has default className', () => {
    const wrapper = mount(<Card />)

    expect(wrapper.hasClass('c-Card')).toBe(true)
  })

  test('Accepts custom className', () => {
    const wrapper = mount(<Card className="not-metro-man" />)

    expect(wrapper.prop('className')).toContain('not-metro-man')
  })
})

describe('Block', () => {
  test('Does not render a Card.Block by default', () => {
    const wrapper = mount(<Card />)
    const o = wrapper.find(Card.Block)

    expect(o.length).toBeFalsy()
  })

  test('Can render a Card.Block', () => {
    const wrapper = mount(
      <Card>
        <Card.Block>MegaMind</Card.Block>
      </Card>
    )
    const o = wrapper.find(Card.Block)

    expect(o.length).toBe(1)
    expect(o.instance().props.children).toBe('MegaMind')
  })

  test('Can render a multiple Card.Block', () => {
    const wrapper = mount(
      <Card>
        <Card.Block>Mega</Card.Block>
        <Card.Block>Mind</Card.Block>
      </Card>
    )
    const o = wrapper.find(Card.Block)

    expect(o.length).toBe(2)
  })
})

describe('Content', () => {
  test('Renders child content', () => {
    const wrapper = mount(<Card>Megamind</Card>)

    expect(wrapper.text()).toBe('Megamind')
  })

  test('Render child components', () => {
    const wrapper = mount(
      <Card className="mega">
        <Card className="mind">Megamind</Card>
      </Card>
    )

    const innerCard = wrapper.childAt(0)

    expect(innerCard.exists()).toBeTruthy()
    expect(innerCard.prop('className')).toContain('mind')
    expect(innerCard.text()).toBe('Megamind')
  })
})

describe('Link', () => {
  const link = 'https://www.helpscout.net'

  test('Adds link styles if href is specified', () => {
    const wrapper = mount(<Card href={link} />)

    expect(wrapper.hasClass('is-clickable')).toBe(true)
    expect(wrapper.hasClass('is-hoverable')).toBe(true)
  })

  test('Renders a Link component if href is defined', () => {
    const wrapper = mount(<Card href={link} />)
    const o = wrapper.find(Link)

    expect(o.length).toBe(1)
    expect(o.instance().props.block).toBeTruthy()
    expect(o.instance().props.href).toBe(link)
  })

  test('Renders a Link component if to is defined', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Card to={link} />
      </MemoryRouter>
    )
    const o = wrapper.find(Link)

    expect(o.length).toBe(1)
    expect(o.instance().props.block).toBeTruthy()
    expect(o.instance().props.to).toBe(link)
  })

  test('Renders a Link component with target="_blank"', () => {
    const wrapper = mount(
      <MemoryRouter>
        <Card href={link} external />
      </MemoryRouter>
    )
    const o = wrapper.find(Link)
    const p = o.instance().props

    expect(o.length).toBe(1)
    expect(p.block).toBeTruthy()
    expect(p.href).toBe(link)
    expect(o.html()).toContain('_blank')
  })

  test('Renders a Link, with a Card.Block child', () => {
    const wrapper = mount(
      <Card href={link}>
        <Card.Block>MegaMind</Card.Block>
      </Card>
    )
    const b = wrapper.find(Card.Block)
    const o = wrapper.find(Link)

    expect(o.length).toBe(1)
    expect(o.instance().props.children.type).toBe(Card.Block)
    expect(b.length).toBe(1)
    expect(b.node.props.children).toBe('MegaMind')
  })

  test('onBlur fires for a Link', () => {
    const spy = jest.fn()
    const wrapper = mount(<Card href={link} onBlur={spy} />)
    wrapper.simulate('blur')

    expect(spy).toHaveBeenCalled()
  })

  test('onClick fires for a Link', () => {
    const spy = jest.fn()
    const wrapper = mount(<Card href={link} onClick={spy} />)
    wrapper.simulate('click')

    expect(spy).toHaveBeenCalled()
  })

  test('onFocus fires for a Link', () => {
    const spy = jest.fn()
    const wrapper = mount(<Card href={link} onFocus={spy} />)
    wrapper.simulate('focus')

    expect(spy).toHaveBeenCalled()
  })

  test('Does not pass autoWordWrap prop to div', () => {
    const wrapper = mount(<Card autoWordWrap />)
    const o = wrapper.find('.c-Card')

    expect(o.props().autoWordWrap).toBeFalsy()
  })

  test('Can pass autoWordWrap to Link', () => {
    const wrapper = mount(<Card href={link} autoWordWrap />)
    const o = wrapper.find(Link)

    expect(o.props().autoWordWrap).toBeTruthy()
  })
})

describe('Click', () => {
  test('Can trigger onClick callback', () => {
    let value = false
    const onClick = () => {
      value = true
    }
    const wrapper = mount(<Card onClick={onClick} />)

    wrapper.simulate('click')

    expect(value).toBeTruthy()
  })

  test('Adds clickable styles if onClick is specified', () => {
    const noop = () => {}
    const wrapper = mount(<Card onClick={noop} />)

    expect(wrapper.hasClass('is-clickable')).toBe(true)
  })
})

describe('Selector', () => {
  test('Renders a div selector by default', () => {
    const wrapper = mount(<Card />)
    const o = wrapper.find('.c-Card')

    expect(o.instance().tagName).toBe('DIV')
  })

  test('Renders a custom selector, if specified', () => {
    const wrapper = mount(<Card selector="span" />)
    const o = wrapper.find('.c-Card')

    expect(o.instance().tagName).toBe('SPAN')
  })
})

describe('Styles', () => {
  test('Renders borderless styles, if specified', () => {
    const wrapper = mount(<Card borderless />)

    expect(wrapper.hasClass('is-borderless')).toBeTruthy()
  })

  test('Renders flex styles, if specified', () => {
    const wrapper = mount(<Card flex />)

    expect(wrapper.hasClass('is-flex')).toBeTruthy()
  })

  test('Renders fullHeight styles, if specified', () => {
    const wrapper = mount(<Card fullHeight />)

    expect(wrapper.hasClass('is-fullHeight')).toBeTruthy()
  })

  test('Renders floating styles, if specified', () => {
    const wrapper = mount(<Card floating />)

    expect(wrapper.hasClass('is-floating')).toBeTruthy()
  })

  test('Renders seamless styles, if specified', () => {
    const wrapper = mount(<Card seamless />)

    expect(wrapper.hasClass('is-seamless')).toBeTruthy()
  })
})
