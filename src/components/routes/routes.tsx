import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SupplyMarkets from '../Markets/SupplyMarkets'
import Dashboard from '../Dashboard/Dashboard'
import Root from '../../views/root'

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Root />} />
        </Routes>
    )
}

export default RoutesComponent