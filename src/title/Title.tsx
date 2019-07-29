import React, { Fragment } from 'react'
import cc from 'classcat'

interface TitleProps {
  readonly className?: Classcat.Class
  readonly extraClassName?: Classcat.Class
  readonly children: string
  readonly headingLevel?: number|string
}

export const isHeadingAvailable = (level: number) => level >= 1 && level <= 6

const Title = ({ className, extraClassName, children, headingLevel = 1 }: TitleProps) => {
  if (!isHeadingAvailable(Number(headingLevel))) {
    return null
  }
  return React.createElement(
    `h${headingLevel}`,
    {
      className: cc(['kirk-title', className, extraClassName]),
    },
    <Fragment>
      {children}
    </Fragment>,
  )
}
export default Title
