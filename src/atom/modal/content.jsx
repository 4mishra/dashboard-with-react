import styled from 'styled-components'
import { deviceBreakpoint } from '../../tokens'

const ModalContent = styled.div`
  position: relative;
  flex: 1 1 auto;
  padding: 1.5rem;
  
  color: var(--rd-heading-color);
  
  ${ deviceBreakpoint.desktop.lg } {
    display: ${({ isGridView }) => isGridView && 'grid'};
    grid-template-columns: ${({ isGridView }) => isGridView && 'auto auto'};
    gap: ${({ isGridView }) => isGridView && '1.5rem'};
  }
`

export default ModalContent