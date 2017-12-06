import React from 'react'
import classNames from '../../utilities/classNames'

const Block = props => {
  const {
    children,
    className,
    ...rest
  } = props

  const componentClassName = classNames(
    'c-Flexy__block',
    className
  )

  return (
    <div className={componentClassName} {...rest}>
      {children}
    </div>
  )
}

Block.displayName = 'FlexyBlock'

export default Block
