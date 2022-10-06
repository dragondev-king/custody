import * as React from 'react'

import Flex from './Flex'
import Typography from './typography/Typography'

interface SectionTitleProps {
  style?: any;
  subtitle?: string;
  title: string;
}

export default function SectionTitle (props: SectionTitleProps) {
  return (
    <div style={props.style || {}}>
      <Flex item style={{ marginBottom: 16 }} xs={18}>
        <Typography bold fontSize={34}>
          {props.title}
        </Typography>
      </Flex>
      {props.subtitle && (
        <Flex item xs={18}>
          <Typography>{props.subtitle}</Typography>
        </Flex>
      )}
    </div>
  )
}
