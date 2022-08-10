import React, { useContext, useEffect, useState } from 'react'
import axios from 'axios'

import {
  MainTitle,
  Section
} from '../atom'
import {
  LoadingScreen,
  UserResults,
  UserSearch,
  UserModal
} from '../molecule'
import { environment } from '../static'

const Users = () => {
  const [allUsers, setAllUsers] = useState([])
  const [displayModal, setDisplayModal] = useState(false)
  const [loading, setLoading] = useState(true)
  const [modalAction, setModalAction] = useState('')
  const [searchInput, setSearchInput] = useState('')
  const [users, setUsers] = useState([])
  const [userDetails, setUserDetails] = useState({})

  const getAllUsers = () => {
    axios.get(`${environment.apiRest}/users`).then((response) => {
      setLoading(false)
      setUsers(response.data)
    }).catch((err) => {
      setLoading(false)
      alert("Retrieving all users...: " + err.message)
    })
  }

  const handleSearchInput = (value) => {
    setSearchInput(value)
    if (searchInput.length > 2) {
      const filtered = users.filter((user) => {
        return Object.values(user).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setAllUsers(filtered)
    } else {
      setAllUsers(users)
    }
  }

  const handleUserDetails = (e, details, action) => {
    e.stopPropagation()

    if (e.key && e.key.toLowerCase() === 'escape') {
      setUserDetails(null)
    } else if (e.key) return

    setModalAction(action)
    setUserDetails(details)
    setDisplayModal(true)
  }

  useEffect(() => {
    setTimeout(() => getAllUsers(), 500)
  }, [])

  useEffect(() => {
    if (!users.length) return
    if (users.length > allUsers.length) setAllUsers(users)
    else if (users.length <= allUsers.length) setAllUsers(users)
  }, [users])

  return (
    <>
      <MainTitle>
        <h4>Last updated: Feb 2, 2022</h4>
        <h1>Users</h1>
      </MainTitle>
      <Section className="section__results">
        <UserSearch setLoading={setLoading}
                    searchInput={searchInput}
                    handleSearchInput={handleSearchInput}
                    handleUserDetails={handleUserDetails} />
        <UserResults users={allUsers}
                     handleUserDetails={handleUserDetails} />
        { loading && <LoadingScreen/> }
      </Section>
      { displayModal && <UserModal modalAction={modalAction}
                                   setAllUsers={setAllUsers}
                                   setDisplayModal={setDisplayModal}
                                   setLoading={setLoading}
                                   userDetails={userDetails}
                                   getAllUsers={getAllUsers} /> }
    </>
  )
}

export default Users