import React from 'react'
import { Button } from 'componentLib'
import Flex from './Flex'
import Typography from './typography/Typography'

interface ConfirmationProps {
  buttonText?: string;
  mainText: string;
  onClose?: () => void;
  subText: string;
}

export default function Confirmation (props: ConfirmationProps) {
  return (
    <Flex container spacing={2}>
      <Flex item justifyContent="center" xs={24}>
        <i className={'icon-ok u-colorGreen'} style={{ fontSize: 64 }}></i>
      </Flex>
      <Flex item justifyContent="center" xs={24}>
        <Typography center bold fontSize={20}>
          {props.mainText}
        </Typography>
      </Flex>
      <Flex item justifyContent="center" style={{ paddingBottom: 80 }} xs={24}>
        <Typography center fontSize={16}>
          {props.subText}
        </Typography>
      </Flex>
      {props.buttonText && (
        <Flex
          item
          justifyContent="flex-end"
          style={{ position: 'absolute', bottom: 16, right: 16 }}
          xs={24}
        >
          <Button onClick={() => props.onClose && props.onClose()}>
            {props.buttonText || 'Close'}
          </Button>
        </Flex>
      )}
    </Flex>
  )
}
