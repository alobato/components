import React from 'react'
import styled from '@emotion/styled'

const Input = React.forwardRef(({ width, invalid, ...rest }, ref) => {
  return <input {...rest} ref={ref} />
})

const StyledInput = styled(Input)`
  font-family: inherit;
  font-size: 100%;
  line-height: 1.15;
  margin: 0;
  padding: 0.5em 0.8em;
  color: inherit;
  overflow: visible;
  background: ${(props) => props?.theme?.colors?.snow || '#eee'};
  border: 1px solid ${(props) => props?.theme?.colors?.hairline || '#ccc'};
  ${(props) => props?.width && `width: ${props.width};`}
`

export default StyledInput
