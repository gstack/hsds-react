import React from 'react';

import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';
import { linkTo } from '@storybook/addon-links';

import '../src/styles/blue.scss';
import {
  Input,
  Textarea,
} from '../src/index.js';

storiesOf('Input', module)
  .add('default', () => <Input />)
  .add('placeholder', () => <Input placeholder="Hello" autoFocus />)
  .add('prefix + suffix', () => <Input prefix="$" suffix=".00" autoFocus />)
  .add('seamless', () => <Input seamless autoFocus />)
  .add('disabled', () => <Input disabled autoFocus />)
  .add('error', () => <Input error autoFocus />)
  .add('success', () => <Input success="You're Awesome!" autoFocus />)
  .add('warning', () => <Input warning autoFocus />)
  .add('small', () => <Input size="sm" autoFocus />)

storiesOf('Textarea', module)
  .add('default', () => <Textarea />)
  .add('placeholder', () => <Textarea placeholder="Hello" autoFocus />)
