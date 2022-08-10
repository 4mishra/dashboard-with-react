import styled from 'styled-components'

const Circle = styled.circle`
  stroke: ${({ hasFill }) => hasFill ? 'var(--rd-primary-color)' : 'var(--rd-border-secondary-color)'};
  fill: ${({ hasFill }) => hasFill ? 'var(--rd-primary-color)' : null};
`

export default Circle
