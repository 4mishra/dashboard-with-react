import styled from 'styled-components'

const Img = styled.img`
  width: ${({ width }) => (width ? width : '100%')};
  height: ${({ height }) => (height ? height : '100%')};
  object-fit: ${({ objectFit }) => objectFit && objectFit};
`

export default Img
