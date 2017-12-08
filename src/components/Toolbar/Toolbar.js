import React from 'react'
import PropTypes from 'prop-types'
import Flexy from '../Flexy'
import Block from './Block'
import Item from './Item'
import Shadow from './Shadow'
import { placementTypes, sizeTypes, themeTypes } from './propTypes'
import classNames from '../../utilities/classNames'

export const propTypes = {
  placement: placementTypes,
  shadow: PropTypes.bool,
  size: sizeTypes,
  theme: themeTypes
}

const defaultProps = {
  placement: 'top',
  shadow: false,
  size: 'sm',
  theme: 'default'
}

const Toolbar = props => {
  const {
    children,
    className,
    placement,
    shadow,
    size,
    theme,
    ...rest
  } = props

  const componentClassName = classNames(
    'c-Toolbar',
    placement && `is-placement-${placement}`,
    shadow && 'has-shadow',
    size && `is-size-${size}`,
    theme && `is-theme-${theme}`,
    className
  )

  const shadowMarkup = shadow ? (
    <Shadow placement={placement} />
  ) : null

  return (
    <div className='c-ToolbarWrapper'>
      <Flexy className={componentClassName} {...rest}>
        {children}
      </Flexy>
      {shadowMarkup}
    </div>
  )
}

Toolbar.propTypes = propTypes
Toolbar.defaultProps = defaultProps
Toolbar.displayName = 'Toolbar'
Toolbar.Block = Block
Toolbar.Item = Item
Toolbar.Shadow = Shadow

export default Toolbar