import React, { useEffect, useRef } from 'react'
import styled from 'styled-components'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { NavLink } from 'react-router-dom'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons'

import {
    DashboardSidebarContainer,
    DashboardSidebarTopContainer,
    ButtonToggle,
    Logo,
} from '../../atom'
import { breakpoints } from '../../tokens'
import { defaultMenuItems } from '../../static'

const DashboardSidebarList = styled.ul`
    display: flex;
    flex-direction: column;

    margin: 0;
    padding: 0;

    > li {
        list-style-type: none;
        width: 100%;
      
        &.divide {
          width: auto;
          height: 1px;
          
          background: var(--rd-border-primary-color);
          margin: 1rem 1.5rem;
        }

        > a {
            color: var(--rd-text-color);
            display: block;
            padding: 1rem 1.5rem;
            font-size: 16px;
            font-weight: 100;
    
            cursor: pointer;
    
            > svg {
                width: 30px !important;
                color: var(--rd-white-color);
                margin-right: .5rem;
                font-size: 16px;
            }
    
            &:hover,
            &:focus,
            &.active {
                color: var(--rd-white-color);
                background: var(--rd-border-primary-color);
                border: none;
                border-right: 2px solid var(--rd-primary-color);
            }
        }
    }
`

const DashboardSidebar = ({ sidebarToggle, setSidebarToggle, dashboardContainerW }) => {
    const sidebarContainer = useRef(null)

    const handleClickOutside = (event) => {
        if (
            (dashboardContainerW <= breakpoints.md &&
                sidebarToggle &&
                sidebarContainer.current &&
                !sidebarContainer.current.contains(event.target)) ||
            (dashboardContainerW <= breakpoints.md &&
                event.key &&
                event.key.toLowerCase() === 'escape')
        ) {
            setSidebarToggle(false)
        }
    }

    const handleSidebarToggle = (e) => {
        e.preventDefault()
        if (sidebarToggle) return
        setSidebarToggle(!sidebarToggle)
    }

    useEffect(() => {
        document.addEventListener('click', handleClickOutside)
        document.addEventListener('keydown', handleClickOutside)

        return () => {
            document.removeEventListener('click', handleClickOutside)
            document.removeEventListener('keydown', handleClickOutside)
        }
    })

    return (
        <DashboardSidebarContainer toggle={sidebarToggle} ref={sidebarContainer}>
            <DashboardSidebarTopContainer>
                <Logo width={65} />
                { sidebarToggle &&
                    <ButtonToggle
                        onClick={(e) => setSidebarToggle(!sidebarToggle)}
                        hasIcon
                        buttonType="primary">
                        <FontAwesomeIcon icon={ faChevronLeft } />
                    </ButtonToggle>
                }
            </DashboardSidebarTopContainer>
            <DashboardSidebarList>
                {
                    defaultMenuItems.filter(m => m.hideFromView !== true).map(({ label, routeLink, icon }, index) => {
                        return (
                          <li key={index}>
                              <NavLink to={routeLink} alt={label} onClick={() => setSidebarToggle(!sidebarToggle)}>
                                  <FontAwesomeIcon icon={ icon } />
                                  {label}
                              </NavLink>
                          </li>
                        )
                    })
                }
            </DashboardSidebarList>
        </DashboardSidebarContainer>
    )
}

export default DashboardSidebar
