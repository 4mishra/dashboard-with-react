import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { MainTitle, Section } from '../atom'
import { environment } from '../static'
import { LoadingScreen } from '../molecule'

const FindAddressDetails = () => {
  const { id } = useParams()
  const [address, setAddress] = useState([])
  const [loading, setLoading] = useState(true)

  const getAddressDetails = (id) => {
    axios.get(`${environment.apiRest}/addresses/${id}`).then((response) => {
      setLoading(false)
      setAddress(response.data)
    }).catch((err) => {
      setLoading(false)
      alert("Retrieving this address...: " + err.message)
    })
  }

  useEffect(() => {
    setTimeout(() => getAddressDetails(id), 500)
  }, [])

  return (
    <>
      {
        loading ? (
          <LoadingScreen/>
        ) : (
          <>
            <MainTitle>
              <h4>Last updated: Feb 6, 2022</h4>
              <h1>{`${address.street_address}, ${address.city}, ${address.country}, ${address.postcode}`}</h1>
            </MainTitle>
            <Section className="section__address">
              <p>{ address.countryDescription }</p>
            </Section>
          </>
        )
      }
    </>
  )
}

export default FindAddressDetails