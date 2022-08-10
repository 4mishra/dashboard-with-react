import styled from 'styled-components'
import { deviceBreakpoint } from '../../tokens'
import React from "react";

const FormControl = styled.div`
  display: ${({ hideOnMobile }) => (!hideOnMobile ? 'flex' : 'none')};
  flex-direction: column;
  
  > label {
    color: var(--rd-border-primary-color);
    font-size: 16px;
    font-weight: 400;
    margin: 0;
    padding: 0;
  }
  
  ${ deviceBreakpoint.desktop.lg } {
    display: ${({ hideOnDesktop }) => (!hideOnDesktop ? 'flex' : 'none')};
    flex-direction: ${({ showAsColumn }) => (showAsColumn ? 'column' : 'row')};
    align-items: ${({ showAsColumn }) => (showAsColumn ? 'flex-start' : 'center')};
  }
`

export default FormControl
