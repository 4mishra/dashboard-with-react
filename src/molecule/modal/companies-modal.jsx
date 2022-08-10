import React, { useState } from 'react'
import { Modal } from '../../organism'
import {
  Form,
  FormControl,
  Label,
  TextInput,
  Select
} from '../../atom'
import axios from 'axios'
import { environment } from '../../static'

const CompaniesModal = ({
 modalAction,
 setAllCompanies,
 setDisplayModal,
 setLoading,
 companiesDetails,
 getAllCompanies
}) => {
  const [companiesEdit, setCompaniesEdit] = useState({})

  const handleCompaniesAction = (action) => {
    setAllCompanies([])
    setDisplayModal(false)
    setLoading(true)

    switch (action) {
      case 'delete':
        axios.delete(`${environment.apiRest}/companies/${companiesDetails.id}`).then(() => (
          getAllCompanies()
        )).catch((err) => {
          alert("Deleting company...: " + err.message)
        })
        break
      default:
        break
    }
  }

  const handleChange = (event) => {
    setCompaniesEdit({ ...companiesEdit, [event.target.name]: event.target.value})
  }

  switch (modalAction) {
    case 'delete':
      return (
        <Modal hideAction={false}
               handleAction={() => handleCompaniesAction(modalAction)}
               handleModal={() => setDisplayModal(false)}
               heading={'You are about to delete a company'}
               actionTitle={'Delete'}
               actionButtonType={'error'}>
          This will delete {companiesDetails.companyName} from the results table? Are you sure?
        </Modal>
      )
      break
    default:
      break
  }
}

export default CompaniesModal