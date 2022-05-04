// Inspiration: https://developer.chrome.com/

import React, { forwardRef } from 'react'
import styled from '@emotion/styled'
import { Box } from 'theme-ui'

const InputSearch = forwardRef(({ value, onChange, className, width, maxWidth, inputWidth = '100%', iconSize = 24, ...rest }, ref) => {
  function handleIconClick(e) {
    if (value) {
      e.target.value = ''
      onChange(e)
    } else {
      ref.current.focus()
    }
  }

  const pathIcon = !value ? 'M14.76 13.27L20.49 19 19 20.49l-5.73-5.73C12.2 15.53 10.91 16 9.5 16A6.5 6.5 0 1116 9.5c0 1.41-.47 2.7-1.24 3.77zM9.5 5C7.01 5 5 7.01 5 9.5S7.01 14 9.5 14 14 11.99 14 9.5 11.99 5 9.5 5z' : 'M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12 19 6.41z'

  return (
    <Box sx={{ display: 'grid', width, maxWidth }} className={className}>
      <button className='search-box__btn' onClick={handleIconClick}>
        <svg width={iconSize} height={iconSize} viewBox='0 0 24 24' fill='currentColor'>
          <path d={pathIcon} />
        </svg>
      </button>
      <input ref={ref} className='search-box__input' value={value} onChange={onChange} style={{ width: inputWidth }} {...rest} />
    </Box>
  )
})

InputSearch.displayName = 'InputSearch'

const StyledInputSearch = styled(InputSearch)`
  & > * {
    grid-column: 1;
    grid-row: 1;
  }
  & > .search-box__btn {
    background: 0 0;
    border: 0;
    cursor: pointer;
    text-decoration: none;

    z-index: 10;
    align-items: center;
    display: flex;
    height: 100%;
    justify-content: center;
    width: 3rem;

    color: inherit;
  }
  .search-box__input {
    font-family: inherit;
    font-size: inherit;
    padding: 0.6rem 1rem 0.6rem 3rem;
    color: inherit;

    background-color: ${(props) => props?.theme?.colors?.smoke || '#eeeeee'};
    border: 0;
    border-radius: 6.25rem;

    &::placeholder {
      color: ${(props) => props?.theme?.colors?.muted || '#cccccc'};
    }
    &:focus {
      outline: none;
    }
  }
`

export default StyledInputSearch
