import styled from 'styled-components'
import { deviceBreakpoint, zindex } from '../../../tokens'

const DashboardFooterContainer = styled.footer`
  position: fixed;
  bottom: 1rem;
  right: 1rem;
  left: 1rem;
  
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  padding: 1rem 1.5rem;
  gap: 1.5rem;

  border-radius: 20px;
  
  background: rgba(40, 44, 52, .6);
  backdrop-filter: blur(5px);

  ${deviceBreakpoint.desktop.lg} {
    position: absolute;
    opacity: 0;
    padding: 0;
    z-index: ${zindex['hidden']};
  }
`

export default DashboardFooterContainer
