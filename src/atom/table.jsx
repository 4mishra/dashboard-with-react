import styled from 'styled-components'
import { deviceBreakpoint } from "../tokens";

const Table = styled.table`
  display: none;
  
  ${deviceBreakpoint.desktop.lg} {
    display: table;
    width: 100%;
    background: var(--rd-white-color);
    box-shadow: 0 0.16rem 0.36rem 0 rgb(0 0 0 / 13%), 0 0.03rem 0.09rem 0 rgb(0 0 0 / 11%);
    border-radius: 10px;
    overflow: hidden;
    transition: color 0.35s ease-in-out;
    border-collapse: collapse;

    > thead {
      background-color: var(--rd-border-tertiary-color);

      tr {
        th {
          font-size: 18px;
          padding: 1rem;
          text-align: left;
          color: var(--rd-border-primary-color);

          &:last-child {
            text-align: center;
          }
        }
      }
    }

    > tbody {
      background-color: var(--rd-white-color);

      tr {
        border-bottom: 1px solid var(--rd-border-tertiary-color);

        td {
          color: var(--rd-heading-color);
          padding: 1rem;
          text-align: left;
          
          &:last-child {
            display: flex;
            justify-content: space-evenly;
          }
        }
        
        &:hover,
        &:focus {
          background-color: var(--rd-primary-color);
          
          td {
            color: var(--rd-white-color);
            
            svg {
              color: var(--rd-white-color);
            }
          }
        }
        
        &:last-child {
          border-bottom: none;
        }
      }
    }
  }
`

export default Table