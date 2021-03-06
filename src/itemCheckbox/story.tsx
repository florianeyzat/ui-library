import React from 'react'

import { storiesOf } from '@storybook/react'
import { action } from '@storybook/addon-actions'
import { boolean, select, text, withKnobs } from '@storybook/addon-knobs'

import ItemCheckbox, { ItemCheckboxStatus } from 'itemCheckbox'

import specs from './specifications/index.md'

const stories = storiesOf('ItemCheckbox', module)
stories.addDecorator(withKnobs)

stories.add(
  'Default',
  () => {
    const isMainTitle = boolean('Title', false)
    const isDataInfo = boolean('Secondary info', false)

    return (
      <ItemCheckbox
        label={text('Label', 'Main information')}
        name={text('Name', 'InputName')}
        data={text('Data', 'Data')}
        labelTitle={isMainTitle ? text('Label title', 'Title') : null}
        dataInfo={isDataInfo ? text('Data info', 'Info') : null}
        onChange={action('changed')}
        checked={boolean('isChecked', false)}
        status={select('status', ItemCheckboxStatus, ItemCheckboxStatus.DEFAULT)}
      />
    )
  },
  {
    readme: { content: specs },
  },
)
