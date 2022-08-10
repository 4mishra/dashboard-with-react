import React from 'react'
import { Route, Routes } from 'react-router-dom'

import {
    DashboardMainContainer,
} from '../../atom'
import {
    Companies,
    FindAddress,
    FindAddressDetails,
    Home,
    NotFound,
    Users
} from '../../pages'

const DashboardMain = () => {
    return (
        <DashboardMainContainer>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/companies" element={<Companies />} />
                <Route path="/find-address" element={<FindAddress />} />
                <Route path="/find-address/:id" element={<FindAddressDetails />} />
                <Route path="/users" element={<Users />} />
                <Route path="*" element={<NotFound />} />
            </Routes>
        </DashboardMainContainer>
    )
}

export default DashboardMain
