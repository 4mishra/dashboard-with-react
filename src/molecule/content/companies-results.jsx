import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faEye, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'

import {
  Accordion,
  AccordionContent,
  AccordionHeader,
  AccordionIcon,
  ButtonIcon,
  Table
} from '../../atom'
import styled from 'styled-components'

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

const CompaniesResults = ({
  companies,
  handleCompanyDetails
}) => {
  return (
    <>
      {
        companies.map((data) => {
          return (
            <Accordion key={data.id}>
              <AccordionHeader>
                <AccordionIcon className="accordion__header-icon">
                  <FontAwesomeIcon icon={ faChevronDown } />
                </AccordionIcon>
                { data.companyName }
              </AccordionHeader>
              <AccordionContent>
                <List>
                  <ListHeaderItem>Slogan</ListHeaderItem>
                  <ListItem>{ data.cp }</ListItem>
                </List>
                <List>
                  <ListHeaderItem>Action</ListHeaderItem>
                  <ListItem>
                    <ButtonIcon buttonType="error" rounded onClick={(e) => {handleCompanyDetails(e, data, 'delete')}}>
                      <FontAwesomeIcon icon={ faTrashAlt } />
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
          <th>Company</th>
          <th>Slogan</th>
          <th>Action</th>
        </tr>
        </thead>
        <tbody>
        {
          companies.map((data) => {
            return (
              <tr key={ data.id }>
                <td>{ data.id }</td>
                <td>{ data.companyName }</td>
                <td>{ data.cp }</td>
                <td>
                  <ButtonIcon buttonType="error" rounded onClick={(e) => {handleCompanyDetails(e, data, 'delete')}}>
                    <FontAwesomeIcon icon={ faTrashAlt } />
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

export default CompaniesResults