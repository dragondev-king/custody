import * as React from 'react'
import { useMediaQuery } from 'react-responsive'

import { BREAKPOINTS } from 'utils/index'

const MAX_GRID = 24

interface FlexProps {
  alignItems?: string;
  children?: React.ReactNode;
  container?: boolean;
  flexDirection?: string;
  fullHeight?: boolean;
  id?: string;
  item?: boolean;
  justifyContent?: string;
  lg?: number;
  md?: number;
  onClick?: () => void;
  separator?: boolean;
  sm?: number;
  spacing?: number;
  style?: any;
  xl?: number;
  xs?: number;
}

function Flex (props: FlexProps) {
  const adjustedPadding = getAdjustedPadding(props.spacing || 0)

  const style = { ...props.style }
  if (!style.flexWrap) {
    style.flexWrap = 'wrap'
  }
  if (props.container) {
    if (adjustedPadding !== 0) {
      style.gap = adjustedPadding
    }
    style.flexDirection = props.flexDirection || 'row'
    style.width = '100%'
  }

  let className = 'u-displayFlex'
  if (props.separator) {
    className += ' c-box__separator'
  }
  if (props.fullHeight) {
    className += 'u-height100'
  }

  return (
    <div
      className={`${className}`}
      onClick={props.onClick}
      id={props.id || ''}
      style={{
        ...style,
        alignItems: props.alignItems || 'flex-start',
        justifyContent: props.justifyContent || 'flex-start'
      }}
    >
      {props.container
        ? handleChildren(props.children, adjustedPadding, {
          isExtraLarge: useMediaQuery({ minWidth: BREAKPOINTS.xl }),
          isLargeOrBigger: useMediaQuery({ minWidth: BREAKPOINTS.lg }),
          isMediumOrBigger: useMediaQuery({ minWidth: BREAKPOINTS.md }),
          isSmallOrBigger: useMediaQuery({ minWidth: BREAKPOINTS.sm }),
          isExtraSmall: useMediaQuery({ maxWidth: BREAKPOINTS.xs })
        })
        : props.children}
    </div>
  )
}

export default Flex

const getAdjustedPadding = (padding: number) => {
  return padding * 8
}

/**
 * https://stackoverflow.com/questions/32370994/how-to-pass-props-to-this-props-children
 */
const handleChildren = (children: React.ReactNode, adjustedPadding: number, sizes: any) => {
  /* Finding type: https://stackoverflow.com/a/61846640/3893556 */
  const FlexType = (<Flex />).type
  const childrenWithProps = React.Children.map(children, (child) => {
    if (React.isValidElement(child)) {
      if (child.type === FlexType) {
        const flexProps = child.props as FlexProps
        if (flexProps.item) {
          const style = flexProps.style || {}
          const { width } = convertGridProps(flexProps, sizes)
          if (width === '0%') {
            return <div></div>
          }

          return React.cloneElement(child, {
            style: {
              ...style,
              /* Get spacing correct: https://stackoverflow.com/a/45384426/3893556 */
              flex:
                style.flex || `1 0 calc(${width} - ${adjustedPadding * 2}px)`
              // width: `calc(${width} - ${adjustedPadding}px)`,
            }
          } as FlexProps)
        }
      }
      return React.cloneElement(child)
    }
    return child
  })
  return childrenWithProps
}

/**
 * Function that handles the different breakpoint sizes
 */
const convertGridProps = (props: FlexProps, sizes: any) => {
  const {
    isExtraLarge,
    isLargeOrBigger,
    isMediumOrBigger,
    isSmallOrBigger,
    isExtraSmall
  } = sizes
  let size = 'xs'
  let width = ''
  if (!props.xl || !isNaN(props.xl)) {
    size = 'xl'
    width = isExtraLarge ? `${(props[size as keyof typeof props] / MAX_GRID) * 100}%` : width
  }
  if (!props.lg || !isNaN(props.lg)) {
    size = 'lg'
    width = isLargeOrBigger ? `${(props[size as keyof typeof props] / MAX_GRID) * 100}%` : width
  }
  if (!props.md || !isNaN(props.md)) {
    size = 'md'
    width = isMediumOrBigger ? `${(props[size as keyof typeof props] / MAX_GRID) * 100}%` : width
  }
  if (!props.sm || !isNaN(props.sm)) {
    size = 'sm'
    width = isSmallOrBigger ? `${(props[size as keyof typeof props] / MAX_GRID) * 100}%` : width
  }
  if (!props.xs || !isNaN(props.xs)) {
    size = 'xs'
    width = isExtraSmall ? `${(props[size as keyof typeof props] / MAX_GRID) * 100}%` : width
  }
  if (!width) {
    width = props[size as keyof typeof props] ? `${(props[size as keyof typeof props] / MAX_GRID) * 100}%` : '100%'
  }
  return { count: props[size as keyof typeof props], width }
}
