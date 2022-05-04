import React from 'react'
import { css } from '@emotion/react'
import styled from '@emotion/styled'

const OptimisticCheckbox = React.forwardRef(({ checked = false, onChange, className }, ref) => {
  const [checkedState, setCheckedState] = React.useState(false)

  React.useEffect(() => {
    setCheckedState(checked)
  }, [checked])

  const handleClick = () => {
    const newCheckedState = !checkedState
    setCheckedState(newCheckedState)
    setTimeout(() => {
      onChange(newCheckedState)
    }, 10)
    // onChange(newCheckedState)
  }

  return (
    <div
      className={className}
      ref={ref}
      onKeyPress={(e) => ['Enter', ' '].includes(e.key) && handleClick()}
      onClick={handleClick}
      css={css`
        ${(props) => checkedState && `border-color: ${props.theme && props.theme.colors && props.theme.colors.primary ? props.theme.colors.primary : 'hsla(0, 0%, 86%, 1)'} !important;`}
      `}
    >
      <div style={{ opacity: checkedState ? 1 : 0 }} />
    </div>
  )
})

OptimisticCheckbox.displayName = 'OptimisticCheckbox'

const StyledOptimisticCheckbox = styled(OptimisticCheckbox)`
  display: inline-block;
  position: relative;
  cursor: pointer;
  width: 18px;
  height: 18px;
  background-color: transparent;
  border-radius: 2px;
  border: 2px solid ${(props) => (props.theme && props.theme.colors && props.theme.colors.grey200 ? props.theme.colors.grey200 : 'hsla(0, 0%, 86%, 1)')};
  /* transition: background-color 300ms, border-color 300ms; */
  &:hover {
    background-color: ${(props) => (props.theme && props.theme.colors && props.theme.colors.grey100 ? props.theme.colors.grey100 : 'hsla(0, 0%, 96%, 1)')};
    border-color: ${(props) => (props.theme && props.theme.colors && props.theme.colors.primary ? props.theme.colors.primary : 'hsla(0, 0%, 86%, 1)')};
  }
  & > div {
    position: absolute;
    top: 1px;
    left: 4px;
    width: 6px;
    height: 10px;
    border-bottom: 2px solid ${(props) => (props.theme && props.theme.colors && props.theme.colors.primary ? props.theme.colors.primary : 'hsla(0, 0%, 86%, 1)')};
    border-left: none;
    border-right: 2px solid ${(props) => (props.theme && props.theme.colors && props.theme.colors.primary ? props.theme.colors.primary : 'hsla(0, 0%, 86%, 1)')};
    border-top: none;
    transform: rotate(45deg);
    pointer-events: none;
  }
`

export default StyledOptimisticCheckbox
