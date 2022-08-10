import React from 'react'
import styled from 'styled-components'
import  { deviceBreakpoint } from '../tokens'

const TilesBase = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  
  ${deviceBreakpoint.desktop.lg} {
    display: grid;
    grid-template: auto / auto 1fr auto;
    gap: 1.5rem;
    transition: 0.35s;
  }
`

const TilesItem = styled.div`
  display: flex;
`

const Tiles = () => {
    return (
        <TilesBase>
            <TilesItem>

            </TilesItem>
            <TilesItem>

            </TilesItem>
            <TilesItem>

            </TilesItem>
            <TilesItem>

            </TilesItem>
        </TilesBase>
    )
}

export default Tiles