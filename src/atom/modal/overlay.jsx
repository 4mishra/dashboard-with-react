import styled from 'styled-components'
import { zindex } from '../../tokens'

const ModalOverlay = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 100%;
  background: var(--rd-theme-color);
  opacity: 0.75;
  z-index: ${zindex[3]};
`

export default ModalOverlay