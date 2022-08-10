import React from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'

import {
    DashboardFooterContainer,
} from '../../atom'
import { defaultMenuItems } from '../../static'

const FooterList = styled.ul`
  display: inline-flex;
  justify-content: space-between;
  margin: 0;
  padding: 0;

  width: 100%;
`

const FooterListItem = styled.li`
  list-style-type: none;
  border-radius: 40px;

  > a {
    display: flex;
    align-items: center;
    justify-content: center;
    
    border-radius: 20px;
    padding: .5rem;
    color: var(--rd-white-color);
    
    min-width: 40px;

    > svg {
        font-size: 20px;
    }
    
    &:hover,
    &:focus,
    &.active {
      border: none;
      text-decoration: none;
      background: var(--rd-primary-color);
      
      > svg {
        color: var(--rd-white-color);
      }
    }
  }
`

const DashboardFooter = () => {
    return (
      <DashboardFooterContainer>
        <FooterList>
          {
            defaultMenuItems.filter(m => m.hideFromView === false).map(({ label, routeLink, icon }, index) => {
              return (
                <FooterListItem key={index}>
                  <NavLink to={routeLink} alt={label}>
                    <FontAwesomeIcon icon={ icon } />
                  </NavLink>
                </FooterListItem>
              )
            })
          }
        </FooterList>
      </DashboardFooterContainer>
    )
}

export default DashboardFooter
