import styled from 'styled-components'
import { deviceBreakpoint } from '../../tokens'

const Form = styled.form`
  display: grid;
  gap: 1.5rem;
  
  transition: color 0.35s ease-in-out;
  margin-bottom: 1.5rem;
  
  width: 100%;
  
  > label {
    color: var(--rd-border-primary-color);
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    padding: 0;
  }
  
  ${ deviceBreakpoint.desktop.lg } {
    grid-template-columns: auto auto;
  }
`

export default Form
