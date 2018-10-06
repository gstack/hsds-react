// @flow
import React, { PureComponent as Component } from 'react'
import Choice from '../Choice'
import { classNames } from '../../utilities/classNames.ts'
import { namespaceComponent } from '../../utilities/component.ts'
import { COMPONENT_KEY } from './utils'

type Props = {
  className?: string,
}

class Checkbox extends Component<Props> {
  render() {
    const { className, ...rest } = this.props

    const componentClassName = classNames('c-Checkbox')

    return (
      <Choice
        {...rest}
        className={componentClassName}
        componentID="Checkbox"
        type="checkbox"
      />
    )
  }
}

namespaceComponent(COMPONENT_KEY)(Checkbox)

export default Checkbox
