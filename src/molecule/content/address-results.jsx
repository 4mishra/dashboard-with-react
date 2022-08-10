import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faEye } from '@fortawesome/free-solid-svg-icons'
import styled from 'styled-components'

import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionIcon,
  ButtonIcon,
  Table
} from '../../atom'

const List = styled.ul`
  display: flex;
  align-items: center;
  justify-content: space-between;

  margin: 0 0 1.5rem;
  padding: 0;
  
  &:last-of-type {
    margin-bottom: 0;
  }
  
  > li {
    list-style-type: none;
  }
`

const ListHeaderItem = styled.li`
  color: var(--rd-border-primary-color);
  font-size: 14px;
  font-weight: 400;
`

const ListItem = styled.li`
  display: inline-flex;
  align-items: center;
  justify-content: space-between;
  gap: .5rem;
  
  color: var(--rd-heading-color);
  font-size: 14px;
`

const AddressResults = ({
  addresses,
  handleAddressDetails
}) => {
  return (
    <>
      {
        addresses.map(({ id, street_address, city, country, postcode, coordinates }) => {
          const fullAddress = `${street_address}, ${city}, ${country}, ${postcode}`

          return (
            <Accordion key={id}>
              <AccordionHeader>
                <AccordionIcon className="accordion__header-icon">
                  <FontAwesomeIcon icon={ faChevronDown } />
                </AccordionIcon>
                { fullAddress }
              </AccordionHeader>
              <AccordionContent>
                <List>
                  <ListHeaderItem>Latitude</ListHeaderItem>
                  <ListItem>{ coordinates.lat }</ListItem>
                </List>
                <List>
                  <ListHeaderItem>Longitude</ListHeaderItem>
                  <ListItem>{ coordinates.lng }</ListItem>
                </List>
                <List>
                  <ListHeaderItem>Action</ListHeaderItem>
                  <ListItem>
                    <ButtonIcon buttonType="primary" rounded onClick={(e) => {handleAddressDetails(e, id)}}>
                      <FontAwesomeIcon icon={ faEye } />
                    </ButtonIcon>
                  </ListItem>
                </List>
              </AccordionContent>
            </Accordion>
          )
        })
      }
      <Table>
        <thead>
        <tr>
          <th>#</th>
          <th>Full Address</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
          {
            addresses.map(({ id, street_address, city, country, postcode, coordinates }) => {
              const fullAddress = `${street_address}, ${city}, ${country}, ${postcode}`

              return (
                <tr key={ id }>
                  <td>{ id }</td>
                  <td>{ fullAddress }</td>
                  <td>
                    <ButtonIcon buttonType="primary" rounded onClick={(e) => {handleAddressDetails(e, id)}}>
                      <FontAwesomeIcon icon={ faEye } />
                    </ButtonIcon>
                  </td>
                </tr>
              )
            })
          }
        </tbody>
      </Table>
    </>
  )
}

export default AddressResults