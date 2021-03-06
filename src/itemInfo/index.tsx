import React from 'react'

import Item from '_utils/item'

export interface ItemInfoProps {
  readonly mainInfo: string
  readonly className?: Classcat.Class
  readonly icon?: React.ReactNode
  readonly mainTitle?: string
  readonly tag?: JSX.Element
}

const ItemInfo = ({ mainInfo, className, mainTitle, icon, tag }: ItemInfoProps) => (
  <Item
    className={className}
    leftTitle={mainTitle}
    leftBody={mainInfo}
    leftAddon={icon}
    tag={tag}
  />
)

export default ItemInfo
