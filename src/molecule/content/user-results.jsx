import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronDown, faEye, faPencilAlt, faTrashAlt } from '@fortawesome/free-solid-svg-icons'
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

const UserResults = ({
  users,
  handleUserDetails
}) => {
  return (
    <>
      {
        users.map((data) => {
          return (
            <Accordion key={data.id}>
              <AccordionHeader>
                <AccordionIcon className="accordion__header-icon">
                  <FontAwesomeIcon icon={ faChevronDown } />
                </AccordionIcon>
                { data.first_name } { data.last_name }
              </AccordionHeader>
              <AccordionContent>
                <List>
                  <ListHeaderItem>Email</ListHeaderItem>
                  <ListItem>{ data.email }</ListItem>
                </List>
                <List>
                  <ListHeaderItem>Account Status</ListHeaderItem>
                  <ListItem>{ data.status ? 'Active' : 'Disabled' }</ListItem>
                </List>
                <List>
                  <ListHeaderItem>Action</ListHeaderItem>
                  <ListItem>
                    <ButtonIcon buttonType="error" rounded onClick={(e) => {handleUserDetails(e, data, 'delete')}}>
                      <FontAwesomeIcon icon={ faTrashAlt } />
                    </ButtonIcon>
                    <ButtonIcon buttonType="primary" rounded onClick={(e) => {handleUserDetails(e, data, 'edit')}}>
                      <FontAwesomeIcon icon={ faPencilAlt } />
                    </ButtonIcon>
                    <ButtonIcon buttonType="primary" rounded onClick={(e) => {handleUserDetails(e, data, 'view')}}>
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
            <th>Name</th>
            <th>Email</th>
            <th>Account Status</th>
            <th>Action</th>
          </tr>
        </thead>
        <tbody>
          {
            users.map((data) => {
              return (
                <tr key={ data.id }>
                  <td>{ data.id }</td>
                  <td>{ data.first_name } { data.last_name }</td>
                  <td>{ data.email }</td>
                  <td>{ data.status ? 'Active' : 'Disabled' }</td>
                  <td>
                    <ButtonIcon buttonType="error" rounded onClick={(e) => {handleUserDetails(e, data, 'delete')}}>
                      <FontAwesomeIcon icon={ faTrashAlt } />
                    </ButtonIcon>
                    <ButtonIcon buttonType="primary" rounded onClick={(e) => {handleUserDetails(e, data, 'edit')}}>
                      <FontAwesomeIcon icon={ faPencilAlt } />
                    </ButtonIcon>
                    <ButtonIcon buttonType="primary" rounded onClick={(e) => {handleUserDetails(e, data, 'view')}}>
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

export default UserResults