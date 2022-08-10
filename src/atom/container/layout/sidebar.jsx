import styled from 'styled-components'
import { deviceBreakpoint, zindex } from '../../../tokens'

const DashboardSidebarContainer = styled.nav`
  position: fixed;
  top: 0;
  bottom: 0;
  left: ${({ toggle }) => (toggle ? 0 : '-100%')};
  width: ${({ toggle }) => (toggle ? '50%' : 0)};
  opacity: ${({ toggle }) => (toggle ? 1 : 0)};
  height: ${({ toggle }) => (toggle ? '100%' : 0)};
  z-index: ${zindex[4]};
  
  transition: all 0.35s;
  background-color: var(--rd-black-color);
  box-shadow: 0px 4px 4px var(--rd-theme-color);
  border-top-right-radius: 25px;
  border-bottom-right-radius: 25px;
  
  display: flex;
  flex-direction: column;
  
  ${ deviceBreakpoint.desktop.lg } { 
    position: static;
    width: 250px;
    opacity: 1;
    height: 100%;
  }
`

export default DashboardSidebarContainer
