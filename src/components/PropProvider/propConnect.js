// @flow
import type { PropProviderProps, ConfigGetter } from './types'
import React, { Component } from 'react'
import get from 'lodash.get'
import { getComponentName, hoistNonReactStatics } from '@helpscout/react-utils'
import Context from './Context'
import { getConfigProps, getGlobalApp, propProviderDataAttr } from './utils'
import { isDefined, isString, isObject } from '../../utilities/is'

type Props = Object

/**
 * "Connects" a component with the PropProvider (context). Concept is
 * similar to Redux's connect higher-order function.
 *
 * @param   {string} name The component's config namespace.
 * @returns {React.Component} The connected React component.
 */
function propConnect(name?: ConfigGetter) {
  // $FlowFixMe
  let namespace: string = isString(name) ? name : ''

  return function wrapWithComponent(WrappedComponent: any) {
    if (!isDefined(name)) {
      namespace = getComponentName(WrappedComponent)
    }
    const displayName = `connected(${namespace})`

    class Connect extends Component<Props> {
      static displayName = displayName

      setWrappedInstance: Function
      wrappedInstance: any = null

      setWrappedInstance = ref => {
        this.wrappedInstance = ref
      }

      getMergedProps = (contextProps: PropProviderProps): Object => {
        const namespacedProps = getConfigProps(contextProps, namespace)

        return {
          ...namespacedProps,
          ...this.props,
          [propProviderDataAttr]: getGlobalApp(contextProps),
          ref: !isStateless(WrappedComponent) ? this.setWrappedInstance : null,
        }
      }

      render() {
        return (
          <Context.Consumer>
            {contextProps => (
              <WrappedComponent {...this.getMergedProps(contextProps)} />
            )}
          </Context.Consumer>
        )
      }
    }

    return hoistNonReactStatics(Connect, WrappedComponent)
  }
}

function isStateless(Component: any): boolean {
  return !!(isObject(Component) && !get(Component, 'prototype.render'))
}

export default propConnect
