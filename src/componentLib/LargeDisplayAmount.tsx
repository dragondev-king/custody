import * as React from 'react'
import { Label } from 'componentLib'

interface LargeDisplayAmountProps {
  bottomElement?: React.ReactNode;
  error?: boolean;
  mainString: string;
  topLabelText: string;
}

export default function LargeDisplayAmount (props: LargeDisplayAmountProps) {
  return (
    /* https://stackoverflow.com/a/17783233 */
    <div className="u-displayInlineBlock" style={{ width: '100%' }}>
      <div style={{ textAlign: 'end', width: '100%' }}>
        <Label error={props.error} style={{ marginBottom: 0 }}>
          {props.topLabelText}
        </Label>
      </div>
      <div
        style={{
          color: props.error ? '#FF3D00' : '',
          /* https://stackoverflow.com/a/37836926/3893556 */
          fontSize: 'calc(16px + 1.5vw)',
          fontWeight: 600,
          overflow: 'hidden',
          textAlign: 'end',
          textOverflow: 'ellipsis',
          whiteSpace: 'nowrap',
          width: '100%'
        }}
      >
        {props.mainString}
      </div>
      {props.bottomElement && (
        <div style={{ width: '100%', textAlign: 'end' }}>
          {props.bottomElement}
        </div>
      )}
    </div>
  )
}
