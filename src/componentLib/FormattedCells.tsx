import * as React from 'react'

import Flex from './Flex'
import { Label } from 'componentLib'
import Typography from './typography/Typography'

interface Cells {
  cells: Array<any>;
  cellPadding?: number;
  /* TODO -- refactor this */
  parentSpacing: number;
  style?: any;
  textAlign?: string;
}

const borderColor = '1px solid #EAEDF3'

export default function FormattedCells (props: Cells) {
  return (
    <Flex
      container
      separator
      style={{
        borderLeft: borderColor,
        padding: 0,
        borderTop: borderColor,
        borderRadius: 6,
        ...props.style
      }}
    >
      <Flex alignItems="stretch" container>
        {props.cells.map(({ labelText, value }, index) => (
          <Flex
            item
            key={index.toString()}
            style={{
              borderRight: borderColor,
              padding: props.cellPadding || 16,
              /* TODO -- refactor this */
              flex: `1 0 calc(${24 / props.cells.length}% - ${
                8 * props.parentSpacing
              }px)`,
              textAlign: 'center'
            }}
            xs={24 / props.cells.length}
          >
            <Flex container justifyContent="center">
              <Label>{labelText}</Label>
              <Typography center>{value}</Typography>
            </Flex>
          </Flex>
        ))}
      </Flex>
    </Flex>
  )
}
