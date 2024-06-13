import { Routes, Route } from 'react-router-dom'
import Root from '../../views/root'

const RoutesComponent = () => {
    return (
        <Routes>
            <Route path="/" element={<Root />} />
            {/* TODO(anyone): Add the element that will lead to these pages*/}
            <Route path="/markets" />
            <Route path="/governance" />
            <Route path="/comp" />
            <Route path="/support" />
            <Route path="/terms" />
            <Route path="/about" />
        </Routes>
    )
}

export default RoutesComponent