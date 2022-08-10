import React, { useEffect, useState } from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

import { MainTitle, Section } from '../atom'
import { deviceBreakpoint } from '../tokens'
import { defaultAddressesData, defaultCompaniesData, defaultMenuItems, defaultUsersData } from '../static'

const List = styled.ul`
  display: grid;
  grid-template-columns: auto;
  gap: 1.5rem;
  
  margin: 0;
  padding: 0;
  width: 100%;
  
  ${ deviceBreakpoint.desktop.lg } {
    grid-template-columns: auto auto auto;
  }
`

const ListItems = styled.li`
  display: flex;
  flex-direction: column;
  position: relative;
  
  min-height: 5rem;
  list-style-type: none;
  background-color: ${({ colorType }) =>
          colorType === 'error' ? 'var(--rd-error-color)' :
                  (colorType === 'info' ? 'var(--rd-info-color)' :
                          (colorType === 'success' ? 'var(--rd-success-color)' :
                                  (colorType === 'primary' ? 'var(--rd-primary-color)' : 'transparent')))};
  box-shadow: 0 0.16rem 0.36rem 0 rgb(0 0 0 / 13%), 0 0.03rem 0.09rem 0 rgb(0 0 0 / 11%);
  transition: color 0.35s ease-in-out;
  border-radius: 10px;
  
  overflow: hidden;
`

const ListItemsLink = styled.a`
  display: flex;
  align-items: center;
  justify-content: space-between;
  
  font-size: 20px;
  font-weight: 500;
  padding: 1rem;
  color: var(--rd-white-color);

  pointer-events: all;
  cursor: pointer;
  
  width: calc(100% - 2rem);
  
  &:hover,
  &:focus {
    color: var(--rd-white-color);
    border-bottom: none;
  }
`

const ListItemsIcon = styled.div`
  position: absolute;
  top: -.5rem;
  right: -.5rem;
  
  > svg {
    font-size: 100px;
    color: var(--rd-white-color);
    transform: rotate(30deg);
    opacity: .5;
  }
`

const ListItemsDetails = styled.div`
  display: flex;
  flex-direction: column;
  
  padding: 1rem;
`

const ListItemsTitle = styled.div`
  font-size: 20px;
  font-weight: 300;
  color: var(--rd-white-color);
`

const ListItemsCount = styled.div`
  font-size: 50px;
  font-weight: 500;
  color: var(--rd-white-color);
`

const Home = () => {
  const [allAddressesCount, setAllAddressesCount] = useState(0)
  const [allCompaniesCount, setAllCompaniesCount] = useState(0)
  const [allUserCount, setAllUserCount] = useState(0)

  const menuItemCount = (value) => {
    switch (value) {
      case 1:
        return allCompaniesCount
        break
      case 2:
        return allAddressesCount
        break
      case 4:
        return allUserCount
        break
      default:
        return 0
        break
    }
  }

  const menuItemsData = () => {
    let userCount = 0,
      companyCount = 0,
      addressCount = 0

    defaultAddressesData().then(async (response) => {
      await response.data.map(async (index) => {
        addressCount++
        setAllAddressesCount(addressCount)
      })
    }).catch(() => {
      setAllAddressesCount(0)
    })

    defaultCompaniesData().then(async (response) => {
      await response.data.map(async (index) => {
        companyCount++
        setAllCompaniesCount(companyCount)
      })
    }).catch(() => {
      setAllAddressesCount(0)
    })

    defaultUsersData().then(async (response) => {
      await response.data.map(async (index) => {
        userCount++
        setAllUserCount(userCount)
      })
    }).catch(() => {
      setAllAddressesCount(0)
    })
  }

  useEffect( () => {
    setTimeout(() => {
      menuItemsData()
    }, 500)
  }, [])

  return (
    <>
      <MainTitle>
          <h4>Last updated: Feb 6, 2022</h4>
          <h1>Dashboard</h1>
      </MainTitle>
      <Section className="section__results">
        <List>
          {
            defaultMenuItems.filter(item => item.displayOnDashboard === true).map(({ label, value, routeLink, icon, colorType, count }, index) => {
              return (
                <ListItems key={index} colorType={'primary'}>
                  <ListItemsDetails>
                    <ListItemsCount>
                      { menuItemCount(value) }
                    </ListItemsCount>
                    <ListItemsTitle>{ label }</ListItemsTitle>
                  </ListItemsDetails>
                  <ListItemsIcon>
                    <FontAwesomeIcon icon={ icon } />
                  </ListItemsIcon>
                  <ListItemsLink href={routeLink}>
                    View Details
                    <FontAwesomeIcon icon={ faChevronRight } />
                  </ListItemsLink>
                </ListItems>
              )
            })
          }
        </List>
      </Section>
    </>
  )
}

export default Home