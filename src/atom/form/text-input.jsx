import React from 'react'
import styled from 'styled-components'
import { deviceBreakpoint } from '../../tokens';

const TextInput = styled.input`
  background: var(--rd-white-color);
  border: none;
  border-bottom: 1px solid var(--rd-border-tertiary-color);
  transition: color 0.35s ease-in-out;
  cursor: pointer;

  width: 100%;
  padding: 1rem 0;
  
  color: var(--rd-heading-color);

  &:disabled {
    cursor: not-allowed;
    user-select: none;
    opacity: 0.5;
  }
  
  &::placeholder {
    color: var(--rd-heading-color);
  }

  &:last-of-type {
    margin-bottom: 0;
  }

  &:hover,
  &:focus {
    color: var(--rd-black-color);
    background: none;
    outline: none;
    border-bottom-color: var(--rd-black-color);
    
    &::placeholder {
      color: var(--rd-black-color);
    }
  }
  
  ${ deviceBreakpoint.desktop.lg } {
    width: ${({ width }) => (width ? width + '%' : '100%')};
  }
`

export default TextInput
