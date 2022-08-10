import styled from 'styled-components'
import { deviceBreakpoint } from '../../tokens'

const Section = styled.section`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  padding: 0;
  
  width: 100%;

  ${ deviceBreakpoint.desktop.lg } {
    &.section {
      &__results {
        details {
          display: none;
        }
      }
    }
  }
`

export default Section