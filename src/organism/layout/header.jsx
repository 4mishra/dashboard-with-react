import React from 'react'
import styled from 'styled-components'

import {
    DashboardHeaderContainer,
    DashboardHeaderTopContainer
} from '../../atom'

const HeaderNavigationIcon = styled.div`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  
  width: 25px;
  height: 25px;
  transition: all .3s;
  cursor: pointer;
  
  padding: 0.5rem;
  
  > i {
    display: flex;
    height: 2px;
    width: 100%;
    background-color: var(--rd-white-color);
    
    &:nth-of-type(2) {
      margin: .5rem 0 0;
      width: 50%;
      transition-property: margin, height, width;
      transition-delay: .3s, .3s, 0s;
    }
  }

  &:hover,
  &:focus {
    i:nth-of-type(2) {
      width: 100%;
    }
  }
`

const HeaderDetailSection = styled.section`
  display: flex;
  align-items: flex-end;
  flex-direction: column;
  
  small {
    color: var(--rd-heading-color);
    margin-bottom: .5rem;
  }
  
  p {
    color: var(--rd-white-color);
    margin-bottom: 0;
  }
`

const DashboardHeader = ({ sidebarToggle, setSidebarToggle }) => {
    const handleSidebarToggle = (e) => {
        e.preventDefault()
        setSidebarToggle(!sidebarToggle)
    }

    return (
        <DashboardHeaderContainer>
            <DashboardHeaderTopContainer>
                <HeaderNavigationIcon onClick={handleSidebarToggle}>
                    <i></i>
                    <i></i>
                </HeaderNavigationIcon>
                <HeaderDetailSection>
                    <small>Sun, Feb 6, 2022</small>
                    <p>Hello, John!</p>
                </HeaderDetailSection>
            </DashboardHeaderTopContainer>
        </DashboardHeaderContainer>
    )
}

export default DashboardHeader
