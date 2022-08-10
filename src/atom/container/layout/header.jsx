import styled from 'styled-components'
import { deviceBreakpoint, zindex } from '../../../tokens'

const DashboardHeaderContainer = styled.header`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;

  position: relative;
  padding: 1.5rem;

  border-bottom-left-radius: 40px;
  border-bottom-right-radius: 40px;
  
  background-color: var(--rd-theme-color);
  
  ${ deviceBreakpoint.desktop.lg } { 
    position: absolute;
    opacity: 0;
    padding: 0;
    z-index: ${zindex['hidden']};
  }
`

export default DashboardHeaderContainer
