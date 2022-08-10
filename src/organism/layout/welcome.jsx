import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faChevronRight } from '@fortawesome/free-solid-svg-icons'

import {
    DashboardWelcomeContainer,
    ButtonBase,
    Logo,
    LogoContainer,
} from '../../atom'

const DashboardWelcome = ({ hideOverlay, handleWelcomeOverlay }) => {
    return (
        <DashboardWelcomeContainer hideOverlay={hideOverlay}>
            <LogoContainer>
                <Logo width={250} height={150} fill={'#717c92'} />
            </LogoContainer>
            <h1>Random Dashboard</h1>
            <p>Want to know where you can find random api's? Click <a href="https://random-data-api.com/documentation" target="_blank">here</a></p>
            <ButtonBase
                buttonType="primary"
                hasIcon
                onClick={handleWelcomeOverlay}>
                Get Started
                <FontAwesomeIcon icon={ faChevronRight } />
            </ButtonBase>
        </DashboardWelcomeContainer>
    )
}

export default DashboardWelcome
