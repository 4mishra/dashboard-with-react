import React from 'react'
import { ThreeDots } from 'react-loader-spinner'
import { Loading } from '../atom'

const LoadingScreen = ({ width = 100, height = 100, color = "var(--rd-primary-color)"}) => {
  return (
    <Loading>
      <ThreeDots color={color} height={height} width={width} />
    </Loading>
  )
}

export default LoadingScreen