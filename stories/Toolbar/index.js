import React from 'react'
import { storiesOf } from '@storybook/react'
import { Toolbar } from '../../src/index.js'

const stories = storiesOf('Toolbar', module)

stories.add('default', () => (
  <Toolbar>
    <Toolbar.Item>
      Left Content
    </Toolbar.Item>
    <Toolbar.Item>
      Right Content
    </Toolbar.Item>
  </Toolbar>
))

stories.add('placement', () => (
  <div>
    <Toolbar placement='top'>
      <Toolbar.Item>
        Left Content
      </Toolbar.Item>
      <Toolbar.Item>
        Right Content
      </Toolbar.Item>
    </Toolbar>
    <br />
    <Toolbar placement='bottom'>
      <Toolbar.Item>
        Left Content
      </Toolbar.Item>
      <Toolbar.Item>
        Right Content
      </Toolbar.Item>
    </Toolbar>
  </div>
))

stories.add('shadow', () => (
  <div>
    <Toolbar placement='top' shadow>
      <Toolbar.Item>
        Left Content
      </Toolbar.Item>
      <Toolbar.Item>
        Right Content
      </Toolbar.Item>
    </Toolbar>
    <br />
    <br />
    <br />
    <Toolbar placement='bottom' shadow>
      <Toolbar.Item>
        Left Content
      </Toolbar.Item>
      <Toolbar.Item>
        Right Content
      </Toolbar.Item>
    </Toolbar>
  </div>
))

stories.add('themes', () => (
  <div>
    <Toolbar placement='top' shadow theme='default'>
      <Toolbar.Item>
        Left Content
      </Toolbar.Item>
      <Toolbar.Item>
        Right Content
      </Toolbar.Item>
    </Toolbar>
    <br />
    <br />
    <br />
    <Toolbar placement='bottom' shadow theme='note'>
      <Toolbar.Item>
        Left Content
      </Toolbar.Item>
      <Toolbar.Item>
        Right Content
      </Toolbar.Item>
    </Toolbar>
  </div>
))
