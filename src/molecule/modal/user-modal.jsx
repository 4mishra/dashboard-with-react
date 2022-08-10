import React, { useState } from 'react'
import axios from 'axios'
import styled from 'styled-components'

import {
  Form,
  FormControl,
  Img,
  Label,
  TextInput,
  Select
} from '../../atom'
import { Modal } from '../../organism'
import { defaultUserTitles } from '../../static/default.const'
import { environment } from '../../static'

const Profile = styled.div`
  display: grid;
  grid-template-columns: 1fr auto;
  gap: 1.5rem;
  align-items: center;
  margin-bottom: 1.5rem;
`

const ProfileAvatar = styled.div`
  width: 250px;
  height: 250px;

  border-radius: 100%;
  overflow: hidden;
  margin: 0 0 1rem;
  
  border: 2.5px solid var(--rd-black-color);
`

const ProfileInformation = styled.div`
  display: flex;
  flex-direction: column;
  gap: .75rem;
  
  > h3,
  > p {
    margin: 0;
  }
`

const ProfileBio = styled.section`
  display: grid;
  grid-template-columns: auto;
  gap: .75rem;
`

const UserModal = ({
  modalAction,
  setAllUsers,
  setDisplayModal,
  setLoading,
  userDetails,
  getAllUsers
}) => {
  const [userCreate, setUserCreate] = useState({
    title: '',
    firstName: '',
    lastName: '',
    email: ''
  })
  const [userEdit, setUserEdit] = useState({
    title: userDetails.title,
    firstName: userDetails.first_name,
    lastName: userDetails.last_name,
    email: userDetails.email
  })

  const handleChange = (event, action) => {
    if (action === 'edit') setUserEdit({ ...userEdit, [event.target.name]: event.target.value})
    else if (action === 'create') setUserCreate({ ...userCreate, [event.target.name]: event.target.value})
  }

  const handleUserAction = (action) => {
    setAllUsers([])
    setDisplayModal(false)
    setLoading(true)

    switch (action) {
      case 'create':
        axios({
          method: 'POST',
          url: `${environment.apiRest}/users`,
          data: {
            title: userCreate.title,
            first_name: userCreate.firstName,
            last_name: userCreate.lastName,
            email: userCreate.email,
          }
        }).then((res) => {
          getAllUsers()
        }).catch((err) => {
          alert("Creating new user...: " + err.message)
        })
        break
      case 'delete':
        axios.delete(`${environment.apiRest}/users/${userDetails.id}`).then(() => (
          getAllUsers()
        )).catch((err) => {
          alert("Deleting user...: " + err.message)
        })
        break
      case 'edit':
        axios({
          method: 'PUT',
          url: `${environment.apiRest}/users/${userDetails.id}`,
          data: {
            title: userEdit.title,
            first_name: userEdit.firstName,
            last_name: userEdit.lastName,
            email: userEdit.email,
          }
        }).then((res) => {
          getAllUsers()
        }).catch((err) => {
          alert("Updating user...: " + err.message)
        })
        break
      default:
        break
    }
  }

  switch (modalAction) {
    case 'create':
      return (
        <Modal hideAction={false}
             handleAction={() => handleUserAction(modalAction)}
             handleModal={() => setDisplayModal(false)}
             heading={'Create a new user?'}
             actionTitle={'Create'}
             actionButtonType={'primary'}>
          <h2>You are about to create a new user</h2>
        </Modal>
      )
      break
    case 'delete':
      return (
        <Modal hideAction={false}
               handleAction={() => handleUserAction(modalAction)}
               handleModal={() => setDisplayModal(false)}
               heading={'You are about to delete a user'}
               actionTitle={'Delete'}
               actionButtonType={'error'}>
          <p>This will delete {userDetails.first_name} {userDetails.last_name} from the results table? Are you sure?</p>
        </Modal>
      )
      break
    case 'edit':
      return (
        <Modal hideAction={false}
               handleAction={() => handleUserAction(modalAction)}
               handleModal={() => setDisplayModal(false)}
               heading={`Update ${userDetails.first_name + " " + userDetails.last_name} details`}
               actionTitle={'Update'}
               actionButtonType={'primary'}>
          <br />
          <br />
          <Form>
            <FormControl showAsColumn>
              <Label>
                Title
              </Label>
              <Select id="sltTitle"
                      name="title"
                      type="text"
                      onChange={(e) => handleChange(e, modalAction)}
                      value={userEdit.title}>
                <option selected>&lt; Select below &gt;</option>
                {
                  defaultUserTitles.map(({label, value}, index) => (
                    <option key={index} value={value}>{label}</option>
                  ))
                }
              </Select>
            </FormControl>
            <FormControl showAsColumn>
              <Label>
                First Name
              </Label>
              <TextInput id="txtFirstName"
                         name="firstName"
                         type="text"
                         onChange={(e) => handleChange(e, modalAction)}
                         value={userEdit.firstName} />
            </FormControl>
            <FormControl showAsColumn>
              <Label>
                Last Name
              </Label>
              <TextInput id="txtLastName"
                         name="lastName"
                         type="text"
                         onChange={(e) => handleChange(e, modalAction)}
                         value={userEdit.lastName} />
            </FormControl>
            <FormControl showAsColumn>
              <Label>
                Email Address
              </Label>
              <TextInput id="txtEmail"
                         name="email"
                         type="email"
                         onChange={(e) => handleChange(e, modalAction)}
                         value={userEdit.email} />
            </FormControl>
          </Form>
        </Modal>
      )
      break
    case 'view':
      return (
        <Modal modalWidth={750}
               hideAction={true}
               handleModal={() => setDisplayModal(false)}
               heading="Profile"
               actionButtonType={'primary'}>
          <h2>{`${userDetails.first_name + " " + userDetails.last_name}`}</h2>
          <Profile>
            <ProfileAvatar>
              <Img src={userDetails.avatar} objectFit={'cover'} />
            </ProfileAvatar>
            <ProfileInformation>
              <p>
                <b>Gender</b>
                <br />
                { userDetails.gender }
              </p>
              <p>
                <b>Occupation:</b>
                <br />
                {`${userDetails.employment.occupation + " at " + userDetails.employment.company_name}`}
              </p>
              <p>
                <b>Account Status:</b>
                <br />
                { userDetails.status ? 'Active' : 'Disabled' }
              </p>
              <p>
                <b>Email:</b>
                <br />
                { userDetails.email }
              </p>
              <p>
                <b>Address:</b>
                <br />
                {`${userDetails.address.street_address}, 
                ${userDetails.address.city},  
                ${userDetails.address.county}, 
                ${userDetails.address.postcode}, 
                ${userDetails.address.country}`}
              </p>
            </ProfileInformation>
          </Profile>
          <ProfileBio>
            <p>
              <b>Bio:</b>
              <br />
              { userDetails.bio }
            </p>
          </ProfileBio>
        </Modal>
      )
      break
    default:
      break
  }
}

export default UserModal