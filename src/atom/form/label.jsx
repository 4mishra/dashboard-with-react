import styled from 'styled-components'
import { deviceBreakpoint } from '../../tokens'

const Label = styled.label`
  color: var(--rd-border-primary-color);
  font-size: 16px;
  font-weight: 400;
  margin: 0;
  padding: 0;
  
  ${ deviceBreakpoint.desktop.lg } {
    display: ${({ hideOnDesktop }) => hideOnDesktop && 'none'};
  }
`

export default Label
