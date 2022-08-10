import styled from 'styled-components'

const Accordion = styled.details`
  background: var(--rd-white-color);
  box-shadow: 0 0.16rem 0.36rem 0 rgb(0 0 0 / 13%), 0 0.03rem 0.09rem 0 rgb(0 0 0 / 11%);
  transition: color 0.35s ease-in-out;

  border-radius: 10px;
  margin-bottom: 1.5rem;
  
  width: 100%;
  
  &:last-of-type {
    margin-bottom: 0;
  }
  
  .accordion__header-icon > svg {
    transition: transform 0.35s;
    transform-origin: center;
  }

  &[open] .accordion__header-icon > svg {
    transform: rotate(180deg);
    transition: transform 0.35s;
    transform-origin: center;
  }
`

export default Accordion