import React, { Component } from 'react'

import { storiesOf } from '@storybook/react'
import { withKnobs, boolean, text, select } from '@storybook/addon-knobs'
import { action } from '@storybook/addon-actions'

import { ConfirmationModalProps, ConfirmationModalSize } from './ConfirmationModal'
import ConfirmationModal, { ConfirmationModalStatus } from 'confirmationModal'
import confirmationModalDoc from './specifications/confirmationModal.md'

const stories = storiesOf('ConfirmationModal', module)
stories.addDecorator(withKnobs)

class ConfirmationModalOpener extends Component<ConfirmationModalProps> {
  state = {
    confirmationModalOpen: false,
  }

  openConfirmationModal = () => {
    this.setState({ confirmationModalOpen: true })
  }

  closeConfirmationModal = () => {
    this.setState({ confirmationModalOpen: false })
    this.props.onClose()
  }

  confirmConfirmationModal = () => {
    this.setState({ confirmationModalOpen: false })
    this.props.onConfirm()
  }

  render() {
    return (
      <div>
        <button type="button" onClick={this.openConfirmationModal}>
          Open ConfirmationModal
        </button>
        <ConfirmationModal
          {...this.props}
          onClose={this.closeConfirmationModal}
          onConfirm={this.confirmConfirmationModal}
          isOpen={this.state.confirmationModalOpen}
          confirmIsLoading={this.props.confirmIsLoading}
        >
          <div>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </div>
        </ConfirmationModal>
      </div>
    )
  }
}

stories.add(
  'Warning',
  () => (
    <ConfirmationModalOpener
      status={ConfirmationModalStatus.WARNING}
      onClose={action('onClose')}
      onConfirm={action('onConfirm')}
      confirmLabel={text('confirmLabel', 'Fhtagn')}
      size={select('size', ConfirmationModalSize, ConfirmationModalSize.SMALL)}
      closeOnEsc={boolean('closeOnEsc', true)}
      confirmIsLoading={boolean('confirmIsLoading', false)}
    />
  ),
  {
    readme: { content: confirmationModalDoc },
  },
)

stories.add(
  'Reminder',
  () => (
    <ConfirmationModalOpener
      status={ConfirmationModalStatus.REMINDER}
      onClose={action('onClose')}
      confirmLabel={text('confirmLabel', 'Fhtagn')}
      onConfirm={action('onConfirm')}
      size={select('size', ConfirmationModalSize, ConfirmationModalSize.SMALL)}
      closeOnEsc={boolean('closeOnEsc', true)}
    />
  ),
  {
    readme: { content: confirmationModalDoc },
  },
)
