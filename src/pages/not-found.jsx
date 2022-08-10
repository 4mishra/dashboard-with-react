import React from 'react'
import { useLocation } from "react-router-dom";

import { MainTitle } from '../atom'

const NotFound = () => {
  let location = useLocation();

  return (
    <MainTitle>
      <h4>Last updated: Feb 6, 2022</h4>
      <h1>Not Found for <code>{ location.pathname }</code></h1>
    </MainTitle>
  )
}

export default NotFound