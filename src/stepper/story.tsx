import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, number, select } from '@storybook/addon-knobs'

import spec from './specifications/stepper.md'
import Stepper, { StepperDisplay } from 'stepper'

const stories = storiesOf('Stepper', module)
stories.addDecorator(withKnobs)

stories.add(
  'Default stepper',
  () => (
    <Stepper
      name="stepper1"
      min={number('min', Number.MIN_SAFE_INTEGER)}
      max={number('max', Number.MAX_SAFE_INTEGER)}
      step={number('step', 2)}
      value={number('value', 5)}
      increaseLabel={text('increaseLabel', 'Increment')}
      decreaseLabel={text('decreaseLabel', 'Decrement')}
      onChange={action('changed')}
      display={select('display', StepperDisplay, StepperDisplay.SMALL)}
    >
      {text('children', 'Number of seats')}
    </Stepper>
  ),
  {
    readme: { content: spec },
  },
)

stories.add('Stepper with formatted value', () => (
  <Stepper
    name="stepper2"
    min={number('min', 0)}
    max={number('max', 10)}
    step={number('step', 2)}
    value={number('value', 5)}
    increaseLabel={text('increaseLabel', 'Increment')}
    decreaseLabel={text('decreaseLabel', 'Decrement')}
    format={value => `${value} €`}
    onChange={action('changed')}
    display={select('display', StepperDisplay, StepperDisplay.SMALL)}
  >
    {text('children', 'Edit the price')}
  </Stepper>
))

stories.add('Stepper with large formatted value', () => (
  <Stepper
    name="stepper2"
    min={number('min', 0)}
    max={number('max', 99999)}
    step={number('step', 100)}
    value={number('value', 8400)}
    increaseLabel={text('increaseLabel', 'Increment')}
    decreaseLabel={text('decreaseLabel', 'Decrement')}
    format={value => `${value} грн.`}
    onChange={action('changed')}
    display={select('display', StepperDisplay, StepperDisplay.LARGE)}
  >
    {text('children', 'Edit the price')}
  </Stepper>
))

/* Tests to build */
