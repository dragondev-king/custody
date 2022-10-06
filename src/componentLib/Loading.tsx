// This component needs refactoring asap, it's both a visual component (loading
// icon) AND also in charge of making the requests, we need to split this logic.
import * as React from 'react'
import { useEffect } from 'react'

import Flex from './Flex'
import { Icon } from 'componentLib'
import { axiosRequest, RequestType } from 'utils/network'

export interface RequestData {
  data: any;
  type: RequestType;
  url: string;
}

interface LoadingProps {
  loading: boolean;
  handleResponse: (response: any) => void;
  requestData: RequestData;
  spinnerColor?: string;
}

export default function Loading (props: LoadingProps) {
  const { loading } = props

  /* https://stackoverflow.com/questions/53332321/react-hook-warnings-for-async-function-in-useeffect-useeffect-function-must-ret */
  useEffect(() => {
    const makeRequest = async () => {
      const response = await axiosRequest(
        props.requestData.url,
        props.requestData.data,
        props.requestData.type
      )
      props.handleResponse(response)
    }
    loading && makeRequest()
  }, [loading])

  let colorClass = ''
  if (props.spinnerColor === 'white') {
    colorClass = 'u-colorWhite'
  } else {
    colorClass = 'u-colorBrand'
  }
  if (loading) {
    return (
      <Flex alignItems="center" container justifyContent="center">
        <span className={colorClass}>
          <Icon icon="spin6" />
        </span>
      </Flex>
    )
  }

  return <div></div>
}
