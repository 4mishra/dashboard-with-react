import styled from 'styled-components'
import { deviceBreakpoint, zindex } from '../../../tokens'

const DashboardSidebarTopContainer = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  width: auto;
  padding: 1.5rem;
  
  ${deviceBreakpoint.desktop.lg} {
    button {
      display: none !important;
    }
  }
`

export default DashboardSidebarTopContainer
