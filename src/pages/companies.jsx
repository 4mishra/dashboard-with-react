import React, {useEffect, useState} from 'react'

import {
  MainTitle,
  Section
} from '../atom'
import {
  CompaniesResults,
  CompaniesModal,
  CompaniesSort,
  LoadingScreen,
} from '../molecule'
import axios from "axios";
import {environment} from "../static";

const Companies = () => {
  const [allCompanies, setAllCompanies] = useState([])
  const [companies, setCompanies] = useState([])
  const [displayModal, setDisplayModal] = useState(false)
  const [companiesDetails, setCompaniesDetails] = useState({})
  const [loading, setLoading] = useState(true)
  const [modalAction, setModalAction] = useState('')
  const [sortBy, setSortBy] = useState('')

  const getAllCompanies = () => {
    axios.get(`${environment.apiRest}/companies`).then((response) => {
      setLoading(false)
      setCompanies(response.data)
    }).catch((err) => {
      setLoading(false)
      alert("Retrieving all companies...: " + err.message)
    })
  }

  const handleSortBy = (value) => {
    setSortBy(value)
    if (value === 'asc') {
      const sorted = companies.sort((a, b) => (a.companyName > b.companyName) ? 1 : -1)
      setAllCompanies(sorted)
    } else if (value === 'desc') {
      const sorted = companies.sort((a, b) => (b.companyName > a.companyName) ? 1 : -1)
      setAllCompanies(sorted)
    } else {
      const sorted = companies.sort((a, b) => a.id - b.id)
      setAllCompanies(sorted)
    }
  }

  const handleCompanyDetails = (e, details, action) => {
    e.stopPropagation()

    if (e.key && e.key.toLowerCase() === 'escape') {
      setCompaniesDetails(null)
    } else if (e.key) return

    setModalAction(action)
    setCompaniesDetails(details)
    setDisplayModal(true)
  }

  useEffect(() => {
    setTimeout(() => getAllCompanies(), 500)
  }, [])

  useEffect(() => {
    if (!companies.length) return
    if (companies.length > allCompanies.length) setAllCompanies(companies)
    else if (companies.length <= allCompanies.length) setAllCompanies(companies)
  }, [companies])

  return (
        <>
          <MainTitle>
            <h4>Last updated: Feb 6, 2022</h4>
            <h1>Companies</h1>
          </MainTitle>
          <Section className="section__results">
            <CompaniesSort setLoading={setLoading}
                           sortBy={sortBy}
                           handleSortBy={handleSortBy} />
            <CompaniesResults companies={allCompanies}
                              handleCompanyDetails={handleCompanyDetails} />
            { loading && <LoadingScreen /> }
          </Section>
          { displayModal && <CompaniesModal modalAction={modalAction}
                                            setAllCompanies={setAllCompanies}
                                            setDisplayModal={setDisplayModal}
                                            setLoading={setLoading}
                                            companiesDetails={companiesDetails}
                                            getAllCompanies={getAllCompanies} /> }
        </>
    )
}

export default Companies