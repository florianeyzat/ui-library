import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '~/_utils/branding'

class ComfortIcon extends PureComponent<Icon> {
  static defaultProps: Icon = {
    className: '',
    iconColor: color.icon,
    size: 24,
    title: '',
  }

  render() {
    const { className, iconColor, size, title } = this.props
    return (
      <svg
        viewBox="0 0 24 24"
        xmlns="http://www.w3.org/2000/svg"
        className={cc(['kirk-icon', className])}
        stroke={iconColor}
        width={size}
        height={size}
        aria-hidden={isEmpty(title)}
      >
        {title && <title>{title}</title>}
        <g
          fill="none"
          strokeWidth="1"
          strokeLinecap="round"
          strokeLinejoin="round"
          strokeMiterlimit="10"
        >
          <path
            // tslint:disable-next-line
            d="M9.22618069 9.0429408l-.00028462-.00007396C7.82743395 8.67899715 6.7546224 8.5 5.57615516 8.5c-1.20731888 0-2.51302356.20463937-3.81321944.5429408-.74874646.19434829-1.26113536.83740338-1.26113536 1.5649162 0 .8614291 0 .8614291-.00005576 1.3996098-.04579034 3.0659186.80767638 5.4432745 2.56126466 7.1880948 1.77599725 1.7671173 3.62950633 2.8975921 5.56078302 3.4005323.45618092.1187979 1.04453239.2272721 1.76281212.3242675.054739.0073909.1051053-.0309924.1124962-.0857314A.1000144.1000144 0 0 0 10.5 22.8212476l9e-7-12.2143318c.0013584-.72163072-.51999668-1.36830888-1.27382021-1.563975z" //
          />
          <path
            // tslint:disable-next-line
            d="M22.2261807 9.0429408l-.0002846-.00007396C20.827434 8.67899715 19.7546224 8.5 18.5761552 8.5c-1.2073189 0-2.5130236.20463937-3.8132195.5429408-.7487464.19434829-1.2611353.83740338-1.2611353 1.5649162 0 .8614291 0 .8614291-.0000558 1.3996098-.0457903 3.0659186.8076764 5.4432745 2.5612647 7.1880948 1.7759972 1.7671173 3.6295063 2.8975921 5.560783 3.4005323.4561809.1187979 1.0445324.2272721 1.7628121.3242675.054739.0073909.1051053-.0309924.1124962-.0857314A.1000144.1000144 0 0 0 23.5 22.8212476l9e-7-12.2143318c.0013584-.72163072-.5199967-1.36830888-1.2738202-1.563975z"
            transform="matrix(-1 0 0 1 37.000004 0)"
          />
          <path
            // tslint:disable-next-line
            d="M5.56759528 6.313482c-1.39916306 0-2.53379764-1.08153511-2.53379764-2.41521909v-.48304382C3.03379764 2.08153511 4.16843222 1 5.56759528 1c1.39916305 0 2.53379764 1.08153511 2.53379764 2.41521909v.48304382c0 1.33368398-1.13463459 2.41521909-2.53379764 2.41521909zM18.5337976 6.313482C17.1346346 6.313482 16 5.23194689 16 3.89826291v-.48304382C16 2.08153511 17.1346346 1 18.5337976 1c1.3991631 0 2.5337977 1.08153511 2.5337977 2.41521909v.48304382c0 1.33368398-1.1346346 2.41521909-2.5337977 2.41521909z"
          />
        </g>
      </svg>
    )
  }
}

export default ComfortIcon
