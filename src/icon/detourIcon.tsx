// tslint:disable:max-line-length
import React from 'react'
import BaseIcon from '_utils/icon'
import { BaseIconDefaultProps } from '_utils/icon/BaseIcon'
import { color } from '_utils/branding'

export const DetourIcon = (props: Icon) => (
  <BaseIcon {...props} viewBox="0 0 20 20">
    <g transform="translate(-2 -2)" fill="none" fillRule="evenodd">
      <circle fill={color.proximityClose} cx="12" cy="12" r="10" />
      <path
        stroke={color.white}
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M16.5 9.5L19 12l-2.5 2.5"
      />
      <path
        d="M19.025 12H12a2 2 0 1 0-4 0H4.5"
        stroke={color.white}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </g>
  </BaseIcon>
)

DetourIcon.defaultProps = BaseIconDefaultProps

export default React.memo(DetourIcon)
