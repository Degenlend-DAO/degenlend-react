import React from 'react'
import { Routes, Route } from 'react-router-dom'
import SupplyMarkets from '../Markets/supply_markets'
import Dashboard from '../Dashboard/dashboard'
import Root from '../../views/root'

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Root />} />
        </Routes>
    )
}

export default RoutesComponent