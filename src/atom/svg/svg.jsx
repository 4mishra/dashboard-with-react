import styled from 'styled-components'

const Svg = styled.svg`
  height: ${({ fullScreen }) => fullScreen && '100%'};
  width: ${({ fullScreen }) => fullScreen && '100%'};
`

export default Svg
