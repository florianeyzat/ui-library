import React, { PureComponent } from 'react'
import cc from 'classcat'
import isEmpty from 'lodash.isempty'

import { color } from '~/_utils/branding'

class PinterestIcon extends PureComponent<Icon> {
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
        width={size}
        height={size}
        aria-hidden={isEmpty(title)}
      >
        {title && <title>{title}</title>}
        <path
          // tslint:disable-next-line
          d="M11 0C4.925 0 0 4.924 0 11c0 4.66 2.9 8.64 6.991 10.243-.096-.87-.183-2.205.039-3.154.2-.86 1.29-5.468 1.29-5.468s-.33-.66-.33-1.634c0-1.529.887-2.671 1.99-2.671.938 0 1.392.705 1.392 1.55 0 .942-.6 2.353-.911 3.661-.26 1.095.55 1.989 1.629 1.989 1.955 0 3.458-2.062 3.458-5.038 0-2.633-1.892-4.475-4.595-4.475-3.13 0-4.966 2.348-4.966 4.773 0 .945.364 1.96.818 2.51a.33.33 0 0 1 .076.316l-.305 1.247c-.048.202-.16.245-.368.148-1.374-.64-2.233-2.649-2.233-4.262 0-3.47 2.52-6.657 7.268-6.657 3.816 0 6.781 2.72 6.781 6.354 0 3.791-2.39 6.842-5.708 6.842-1.114 0-2.162-.579-2.52-1.263l-.686 2.615c-.249.956-.919 2.154-1.368 2.884 1.03.318 2.124.49 3.258.49 6.075 0 11-4.925 11-11 0-6.076-4.925-11-11-11z"
          fill={iconColor}
        />
      </svg>
    )
  }
}

export default PinterestIcon
