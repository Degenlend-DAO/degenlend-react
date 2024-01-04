import React from 'react'
import { Routes, Route } from 'react-router-dom'

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<div> The Dashboard goes here! </div>} />
            <Route path="/markets" element={<div>  View the markets details here!</div>} />
            <Route path="/vote" element={<div> Go here to Vote!</div>} />
        </Routes>
    )
}

export default RoutesComponent