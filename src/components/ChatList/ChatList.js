import React from 'react'
// import PropTypes from 'prop-types'
import classNames from '../../utilities/classNames'
import Header from './Header'
import Item from './Item'

const ChatList = props => {
  const {
    className,
    children,
    ...rest
  } = props

  const componentClassName = classNames(
    'c-ChatList',
    className
  )

  return (
    <div className={componentClassName} {...rest}>
      {children}
    </div>
  )
}

ChatList.displayName = 'ChatList'
ChatList.Header = Header
ChatList.Item = Item

export default ChatList
