import React, { useEffect, useState, useRef } from 'react'

import {
    DashboardContainer,
    DashboardSidebarOverlayContainer
} from '../atom/'
import {
    DashboardFooter,
    DashboardHeader,
    DashboardMain,
    DashboardSidebar,
    DashboardWelcome
} from '../organism'
import { breakpoints } from '../tokens'

function useOverlay(defaultValue, key) {
    const [value, setValue] = useState(() => {
        const stickyValue = window.localStorage.getItem(key)
        return stickyValue !== null ? JSON.parse(stickyValue) : defaultValue
    })

    useEffect(() => {
        window.localStorage.setItem(key, JSON.stringify(value))
    }, [key, value])

    return [value, setValue]
}

const Layout = () => {
    const [dashboardContainerW, setDashboardContainerW] = useState(0)
    const dashboardContainer = useRef(null)
    const [sidebarToggle, setSidebarToggle] = useState(true)
    const [welcomeOverlay, setWelcomeOverlay] = useOverlay(
        false,
        'hideWelcomeOverlay',
    )

    useEffect(() => {
        const containerW = dashboardContainer.current.offsetWidth
        setSidebarToggle(containerW > breakpoints.md)
        setDashboardContainerW(containerW)
    }, [])

    useEffect(() => {
        window.addEventListener('resize', handleWindowResize)

        return () => {
            window.removeEventListener('resize', handleWindowResize)
        }
    })

    const handleWindowResize = () => {
        const mainContainerW = dashboardContainer.current.offsetWidth
        setDashboardContainerW(mainContainerW)
        setSidebarToggle(mainContainerW > breakpoints.md)
    }

    const handleWelcomeOverlay = (e) => {
        e.preventDefault()
        setWelcomeOverlay(true)
    }

    return (
        <DashboardContainer ref={dashboardContainer}>
            <DashboardWelcome
                hideOverlay={welcomeOverlay}
                handleWelcomeOverlay={handleWelcomeOverlay} />
            <DashboardHeader
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
            />
            <DashboardSidebarOverlayContainer toggle={sidebarToggle} />
            <DashboardSidebar
                sidebarToggle={sidebarToggle}
                setSidebarToggle={setSidebarToggle}
                dashboardContainerW={dashboardContainerW}
            />
            <DashboardMain />
            <DashboardFooter />
        </DashboardContainer>
    )
}

export default Layout