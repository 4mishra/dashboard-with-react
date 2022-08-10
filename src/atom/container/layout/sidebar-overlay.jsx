import styled from 'styled-components'
import { deviceBreakpoint, zindex } from '../../../tokens'

const DashboardSidebarOverlayContainer = styled.div`
  position: absolute;
  top: 0;
  bottom: 0;
  width: ${({ toggle }) => toggle ? '100%' : '0' };
  background-color: var(--rd-theme-color);
  opacity: .3;
  z-index: ${zindex[3]};

  ${deviceBreakpoint.desktop.lg} {
    position: absolute;
    opacity: 0;
    z-index: ${zindex['hidden']};
  }
`

export default DashboardSidebarOverlayContainer
