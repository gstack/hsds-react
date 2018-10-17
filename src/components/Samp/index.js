import React from 'react'
import Text from '../Text'

const Samp = props => {
  const { children } = props

  return (
    <Text {...props} selector="samp">
      {children}
    </Text>
  )
}

export default Samp
