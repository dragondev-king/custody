import * as React from 'react'

import Box from './Box'
import Flex from './Flex'
import Typography from './typography/Typography'

import { isMediumOrSmaller, isSmallOrSmaller, roundFloat } from 'utils'
import { COLOR_MAP } from 'utils/color'

interface StakingSideBarProps {
  apy?: number;
  assetSymbol: string;
  autoStaking: boolean;
  fullWidth?: boolean;
  logo?: any;
  onClick: () => void;
  selected: boolean;
  stakedAmount: string;
  style?: any;
}

export default function StakingSideBar (props: StakingSideBarProps) {
  const smallOrSmaller = isSmallOrSmaller()
  const mediumOrSmaller = isMediumOrSmaller()
  const bannerStyle = {
    backgroundColor: COLOR_MAP.primary,
    borderTopRightRadius: 3,
    borderTopLeftRadius: 3,
    fontWeight: 600,
    padding: '4px 5px'
  } as any
  const style = {
    ...props.style,
    borderTopRightRadius: 0,
    borderTopLeftRadius: 0,
    cursor: 'pointer',
    position: 'relative'
  }
  if (props.fullWidth) {
    style.width = '100%'
  }
  if (props.selected) {
    const border = '1px solid #d816a24d'
    const boxShadow =
      '0px 1px 10px rgb(216 22 162 / 20%), 0px 1px 3px rgb(0 0 0 / 4%)'
    style.boxShadow = boxShadow
    style.borderBottom = border
    style.borderLeft = border
    style.borderRight = border
  }
  return (
    <Flex container onClick={props.onClick}>
      <Flex item justifyContent="center" style={bannerStyle} xs={24}>
        {props.autoStaking
          ? (
          <Typography
            center
            color="white"
            fontSize={14}
            style={{ display: 'inline' }}
          >
            Auto&nbsp;Staked
            {props.apy && (
              <div style={{ display: 'inline' }}>
                &nbsp;&middot;&nbsp;Up&nbsp;to&nbsp;
                {roundFloat(props.apy, 2)}%&nbsp;APY
              </div>
            )}
          </Typography>
            )
          : props.apy
            ? (
          <Typography center color="white" fontSize={14}>
            Up&nbsp;to&nbsp;{roundFloat(props.apy, 2)}%&nbsp;APY
          </Typography>
              )
            : (
          <Typography center color="white" fontSize={14}>
            Manually Staked
          </Typography>
              )}
      </Flex>
      <Flex item xs={24}>
        <Box style={style}>
          <Flex
            alignItems="center"
            container
            justifyContent={smallOrSmaller ? 'center' : 'flex-start'}
            spacing={smallOrSmaller ? 0.5 : 1}
            style={{ padding: smallOrSmaller ? 8 : 16 }}
          >
            <img
              alt={props.assetSymbol + 'Logo'}
              src={props.logo}
              style={{
                height: mediumOrSmaller ? 25 : 40,
                width: mediumOrSmaller ? 25 : 40
              }}
            />
            <div>
              <Typography>{props.assetSymbol.toUpperCase()}</Typography>
              {smallOrSmaller
                ? (
                <div></div>
                  )
                : (
                <Typography bold color="gray" fontSize={14}>
                  {props.stakedAmount} staked
                </Typography>
                  )}
            </div>
          </Flex>
        </Box>
      </Flex>
    </Flex>
  )
}
