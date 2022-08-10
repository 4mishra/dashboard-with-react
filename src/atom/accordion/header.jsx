import styled from 'styled-components'

const AccordionHeader = styled.summary`
  display: grid;
  grid-template-columns: auto 1fr;
  align-items: center;
  gap: 1.5rem;
  
  color: var(--rd-border-primary-color);
  font-size: 14px;
  font-weight: 400;
  cursor: pointer;
  list-style-type: none;
  padding: 1rem;
`

export default AccordionHeader