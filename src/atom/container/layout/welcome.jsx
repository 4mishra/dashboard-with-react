import styled from 'styled-components'
import { deviceBreakpoint, zindex } from '../../../tokens'

const DashboardWelcomeContainer = styled.div`
  display: ${({ hideOverlay }) => (!hideOverlay ? 'flex' : 'none')};
  align-items: center;
  justify-content: flex-start;
  flex-direction: column;
  text-align: center;

  position: fixed;
  z-index: ${zindex[5]};
  
  width: auto;
  height: 100vh;

  padding: 2.5rem;

  background-color: var(--rd-theme-color);
  transition: height 1s ease-in-out, opacity 1s ease-in-out;

  > h1 {
    font-size: 60px;
    letter-spacing: 0.01em;
  }

  > p {
    font-size: 30px;
    letter-spacing: 0.01em;
    font-weight: 200;
  }
`

export default DashboardWelcomeContainer
