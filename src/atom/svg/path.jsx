import styled from 'styled-components'

const Path = styled.path`
  fill: ${({ hasFill, accent }) =>
    hasFill
      ? accent
        ? 'var(--rd-primary-color)'
        : 'var(--rd-text-color)'
      : null};
  stroke: ${({ hasStroke, accent }) =>
    hasStroke
      ? accent
        ? 'var(--rd-primary-color)'
        : 'var(--rd-text-color)'
      : null};
`

export default Path
