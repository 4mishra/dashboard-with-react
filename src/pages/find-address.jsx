import React, {useEffect, useState} from 'react'

import {
  MainTitle,
  Section
} from '../atom'
import {
  AddressResults,
  AddressSearch,
  LoadingScreen,
} from '../molecule'
import axios from "axios";
import { environment } from "../static";

const FindAddress = () => {
  const [allAddresses, setAllAddresses] = useState([])
  const [addresses, setAddresses] = useState([])
  const [addressDetails, setAddressDetails] = useState({})
  const [loading, setLoading] = useState(true)
  const [searchInput, setSearchInput] = useState('')

  const getAllAddresses = () => {
    axios.get(`${environment.apiRest}/addresses`).then((response) => {
      setLoading(false)
      setAddresses(response.data)
    }).catch((err) => {
      setLoading(false)
      alert("Retrieving all addresses...: " + err.message)
    })
  }

  const handleSearchInput = (value) => {
    setSearchInput(value)
    if (searchInput.length > 2) {
      const filtered = addresses.filter((address) => {
        return Object.values(address).join('').toLowerCase().includes(searchInput.toLowerCase())
      })
      setAllAddresses(filtered)
    } else {
      setAllAddresses(addresses)
    }
  }

  const handleAddressDetails = (e, id) => {
    e.stopPropagation()
    window.open(`/find-address/${id}`, '_blank')
  }

  useEffect(() => {
    setTimeout(() => getAllAddresses(), 500)
  }, [])

  useEffect(() => {
    if (!addresses.length) return
    if (addresses.length > allAddresses.length) setAllAddresses(addresses)
    else if (addresses.length <= allAddresses.length) setAllAddresses(addresses)
  }, [addresses])

  return (
    <>
      <MainTitle>
        <h4>Last updated: Feb 6, 2022</h4>
        <h1>Find Address</h1>
      </MainTitle>
      <Section className="section__results">
        <AddressSearch setLoading={setLoading}
                       searchInput={searchInput}
                       handleSearchInput={handleSearchInput} />
        <AddressResults addresses={allAddresses}
                        handleAddressDetails={handleAddressDetails} />
        { loading && <LoadingScreen /> }
      </Section>
    </>
  )
}

export default FindAddress