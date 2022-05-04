import React from 'react'
import { Button } from 'theme-ui'
import styled from '@emotion/styled'

const ThemedButton = React.forwardRef(({ children, ...rest }, ref) => {
  return <Button {...rest} ref={ref}>{children}</Button>
})

ThemedButton.displayName = 'Button'

const StyledThemedButton = styled(ThemedButton)`
  appearance: none;
  cursor: pointer;
  position: relative;
  user-select: none;
  outline: none;
  line-height: 1;
  font-family: inherit;
  font-size: inherit;
`

export default StyledThemedButton
