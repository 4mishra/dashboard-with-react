import styled from 'styled-components'
import { zindex } from '../../tokens'

const ModalBody = styled.div`
  position: relative;
  top: 1.5rem;
  width: 100%;
  max-width: ${({width}) => width && width + 'px'};
  max-height: 100%;
  z-index: ${zindex[5]};
  
  background: var(--rd-white-color);
  border-radius: 20px;
  overflow: auto;
`

export default ModalBody