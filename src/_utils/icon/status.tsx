import React, { Fragment } from 'react'

import BaseIcon from '_utils/icon'
import { color } from '_utils/branding'
import { BaseIconDefaultProps, IconProps } from '_utils/icon/BaseIcon'

export enum status {
  ON = 'on',
  OFF = 'off',
  DEFAULT = 'default',
}

export interface StatusProps extends IconProps {
  readonly status?: status
}

const StatusIcon = (props: StatusProps) => {
  const finalProps = {
    ...props,
    iconColor: props.status === status.ON ? color.iconHighlight : props.iconColor,
  }

  return (
    <BaseIcon {...finalProps}>
      <Fragment>
        {props.children}
        {props.status === status.OFF && (
          <g fillRule="nonzero" strokeLinecap="round" strokeLinejoin="round">
            <path stroke={color.white} d="M1,24.5 L23.5,2" />
            <path stroke={color.danger} d="M1,23.5 L23.5,1" />
          </g>
        )}
      </Fragment>
    </BaseIcon>
  )
}

StatusIcon.defaultProps = {
  ...BaseIconDefaultProps,
  status: status.DEFAULT,
}

export default StatusIcon
