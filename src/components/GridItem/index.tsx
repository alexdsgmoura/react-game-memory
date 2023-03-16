import * as C from './styles'

import { GridItemType } from '../../types/GridItemType'

import alexSvg from '../../svgs/alex.svg'

import { items } from '../../data/items'

type Props = {
  item: GridItemType,
  onClick: () => void
}

export const GridItem = ({ item, onClick }: Props) => {
  return (
    <C.Container
      showBackground={item.permanentShown || item.shown}
      onClick={onClick}
    >
      {item.permanentShown === false && item.shown === false &&
        <C.Icon src={alexSvg} alt="" opacity={.1} />
      }

      {(item.permanentShown || item.shown) && item.item !== null &&
        <C.Icon src={items[item.item].icon} alt="" />
      }
    </C.Container>
  )
}