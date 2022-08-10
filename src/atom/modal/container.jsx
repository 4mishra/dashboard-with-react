import styled from 'styled-components'
import { zindex } from '../../tokens'

const ModalContainer = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  z-index: ${zindex[4]};
  width: 100%;
  height: 100%;
  overflow-x: hidden;
  overflow-y: auto;
  outline: 0;
  pointer-events: all;
  transition: all 0.35s;

  display: flex;
  justify-content: center;
  align-items: flex-start;
`

export default ModalContainer