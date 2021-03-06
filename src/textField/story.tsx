import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { withKnobs, text, boolean, number, select } from '@storybook/addon-knobs'

import TextField, { inputTypes, inputModes } from 'textField'
import ArrowIcon from 'icon/arrowIcon'
import Button, { ButtonStatus } from 'button'
import readme from 'textField/specifications/textField.md'

const stories = storiesOf('TextField', module)
stories.addDecorator(withKnobs)

stories.add(
  'specifications',
  () => (
    <TextField
      type={select('type', inputTypes, inputTypes.TEXT)}
      id={text('id')}
      name={text('name', 'inputName')}
      inputMode={select('inputMode', inputModes, inputModes.TEXT)}
      pattern={text('pattern')}
      placeholder={text('placeholder')}
      labelledBy={text('aria label')}
      disabled={boolean('disabled', false)}
      readOnly={boolean('readOnly', false)}
      label={text('label')}
      error={text('error message', '')}
      onChange={action('changed')}
      onFocus={action('focused')}
      onBlur={action('blurred')}
      focus={boolean('focus', false)}
      required={boolean('required', false)}
      maxLength={number('maxLength')}
      autoComplete={select('autocomplete', ['on', 'off'])}
      title={text('title', 'accessibility text')}
    />
  ),
  {
    readme: { content: readme },
  },
)

stories.add('input', () => (
  <TextField
    type={select('type', inputTypes, inputTypes.TEXT)}
    id={text('id')}
    name={text('name', 'inputName')}
    placeholder={text('placeholder')}
    labelledBy={text('aria label')}
    disabled={boolean('disabled', false)}
    readOnly={boolean('readOnly', false)}
    label={text('label')}
    error={text('error message', '')}
    onChange={action('changed')}
    onFocus={action('focused')}
    onBlur={action('blurred')}
    focus={boolean('focus', false)}
    required={boolean('required', false)}
    maxLength={number('maxLength')}
    autoComplete={select('autocomplete', ['on', 'off'])}
    title={text('title', 'accessibility text')}
  />
))

stories.add('input with default value', () => (
  <TextField
    type={select('type', inputTypes, inputTypes.TEXT)}
    id={text('id')}
    defaultValue={text('defaultValue', 'starting value')}
    name={text('name')}
    placeholder={text('placeholder')}
    disabled={boolean('disabled', false)}
    readOnly={boolean('readOnly', false)}
    label={text('label')}
    error={text('error message', '')}
    onChange={action('changed')}
    onFocus={action('focused')}
    onBlur={action('blurred')}
    maxLength={number('maxLength')}
    autoComplete={select('autocomplete', ['on', 'off'])}
  />
))

stories.add('input disabled', () => (
  <TextField
    type={select('type', inputTypes, inputTypes.TEXT)}
    id={text('id')}
    defaultValue="starting value"
    name={text('name')}
    placeholder={text('placeholder')}
    disabled
    readOnly={boolean('readOnly', false)}
    label={text('label')}
    error={text('error message', '')}
    onChange={action('changed')}
    onFocus={action('focused')}
    onBlur={action('blurred')}
    maxLength={number('maxLength')}
    autoComplete={select('autocomplete', ['on', 'off'])}
  />
))

stories.add('input password', () => (
  <TextField
    type={select('type', inputTypes, inputTypes.PASSWORD)}
    id={text('id')}
    defaultValue="starting value"
    name={text('name')}
    placeholder={text('placeholder')}
    readOnly={boolean('readOnly', false)}
    label={text('label')}
    error={text('error message', '')}
    onChange={action('changed')}
    onFocus={action('focused')}
    onBlur={action('blurred')}
    maxLength={number('maxLength')}
    autoComplete={select('autocomplete', ['on', 'off'])}
  />
))

stories.add('input with autofocus', () => (
  <TextField
    type={select('type', inputTypes, inputTypes.TEXT)}
    id={text('id')}
    name={text('name')}
    placeholder={text('placeholder')}
    disabled={boolean('disabled', false)}
    readOnly={boolean('readOnly', false)}
    label={text('label')}
    error={text('error message', '')}
    onChange={action('changed')}
    onFocus={action('focused')}
    onBlur={action('blurred')}
    autoFocus
    maxLength={number('maxLength')}
    autoComplete={select('autocomplete', ['on', 'off'])}
  />
))

const button = (
  <Button status={ButtonStatus.UNSTYLED} isBubble tabIndex="-1">
    <ArrowIcon size="18" />
  </Button>
)

stories.add('input with addon', () => (
  <TextField
    addon={button}
    type={select('type', inputTypes, inputTypes.TEXT)}
    id={text('id')}
    defaultValue="starting value"
    name={text('name')}
    placeholder={text('placeholder')}
    disabled={boolean('disabled', false)}
    readOnly={boolean('readOnly', false)}
    label={text('label')}
    error={text('error message', '')}
    onChange={action('changed')}
    onFocus={action('focused')}
    onBlur={action('blurred')}
    maxLength={number('maxLength')}
    autoComplete={select('autocomplete', ['on', 'off'])}
  />
))

const formatValue = (value: string, previousValue: string) => {
  if (previousValue && value.length < previousValue.length) {
    // Removing character, do not escape
    return value
  }
  if (value.match(/^[0-9]{2}$/) || value.match(/^[0-9]{2}\/[0-9]{2}$/)) {
    return `${value}/`
  }
  return value
}

stories.add('date input ', () => (
  <TextField
    id={text('id')}
    name={text('name')}
    placeholder={text('placeholder')}
    disabled={boolean('disabled', false)}
    readOnly={boolean('readOnly', false)}
    label={text('label')}
    error={text('error message', '')}
    onChange={action('changed')}
    onFocus={action('focused')}
    onBlur={action('blurred')}
    maxLength={number('maxLength', 10)}
    autoComplete={select('autocomplete', ['on', 'off'])}
    format={formatValue}
  />
))
