import styled from 'styled-components'
import { deviceBreakpoint } from '../../tokens'

const Select = styled.select`
  background: var(--rd-white-color);
  border-top: none;
  border-right: none;
  border-left: none;
  border-bottom: 1px solid var(--rd-border-tertiary-color);
  transition: color 0.35s ease-in-out;
  cursor: pointer;
  
  width: 100%;
  
  padding: 1rem 0;
  margin-bottom: 1.5rem;
  
  color: var(--rd-heading-color);
  
  &:last-of-type {
    margin-bottom: 0;
  }
  
  &:hover,
  &:focus {
    color: var(--rd-black-color);
    background: none;
    outline: none;
    border-bottom-color: var(--rd-black-color);
  }
  
  ${ deviceBreakpoint.desktop.lg } {
    width: ${({ width }) => (width ? width + '%' : '100%')};
  }
`

export default Select
