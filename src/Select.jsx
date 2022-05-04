import React from 'react'
import styled from '@emotion/styled'
import { css } from '@emotion/react'

const Select = ({ children, placeholder = null, width, maxWidth, invalid, ...rest }) => {
  return (
    <select {...rest}>
      {placeholder && <option value=''>{placeholder}</option>}
      {children}
    </select>
  )
}

const StyledSelect = styled(Select)`
  -moz-appearance: none;
  -webkit-appearance: none;
  appearance: none;
  outline: 0;
  cursor: pointer;

  font-family: inherit;
  font-size: inherit;
  padding: 0.5em 2em 0.5em 0.8em;
  color: inherit;

  background-color: ${(props) => props?.theme?.colors?.snow || '#eeeeee'};
  background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20fill%3D%22${(props) => props.theme && props.theme.colors && props.theme.colors.grey200 ? encodeURIComponent(props.theme.colors.grey200) : 'grey'}%22%20d%3D%22M16.59%208.59L12%2013.17%207.41%208.59%206%2010l6%206%206-6z%22%2F%3E%3C%2Fsvg%3E');
  background-repeat: no-repeat, repeat;
  background-position: right 0.3em top 50%;
  background-size: 1.25em auto;
  ${(props) => props.maxWidth && css`max-width: ${props.maxWidth};`}
  ${(props) => props.width && css`width: ${props.width};`}
  border: 1px solid ${(props) => props?.theme?.colors?.hairline || '#eeeeee'};
  ${(props) => props.invalid && css`border-color: ${props?.theme?.colors?.danger || 'red'} !important;`}
  &:focus {
    outline: 3px solid ${(props) => (props?.theme?.colors?.smoke || 'lightgrey')};
  }
  &:disabled {
    background-color: ${(props) => (props?.theme?.colors?.smoke || 'lightgrey')};
    background-image: url('data:image/svg+xml;charset=US-ASCII,%3Csvg%20xmlns%3D%22http%3A%2F%2Fwww.w3.org%2F2000%2Fsvg%22%20viewBox%3D%220%200%2024%2024%22%20width%3D%2232%22%20height%3D%2232%22%3E%3Cpath%20fill%3D%22grey%22%20d%3D%22M16.59%208.59L12%2013.17%207.41%208.59%206%2010l6%206%206-6z%22%2F%3E%3C%2Fsvg%3E');
    border: 1px solid ${(props) => (props?.theme?.colors?.smoke || 'lightgrey')};
    cursor: not-allowed;
  }
`

export default StyledSelect
