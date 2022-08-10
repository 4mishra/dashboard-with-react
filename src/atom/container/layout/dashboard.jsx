import styled from 'styled-components'
import { deviceBreakpoint, zindex } from '../../../tokens'

const DashboardContainer = styled.div`
  display: flex;
  flex-direction: column;
  
  position: relative;
  background-color: var(--rd-white-color);
  min-height: 100vh;

  ${deviceBreakpoint.desktop.lg} {
    display: grid;
    grid-template: auto / auto 1fr auto;
    gap: 1.5rem;
    transition: 0.35s;
  }
`

export default DashboardContainer
