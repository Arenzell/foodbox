import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import { Navbar, Nav, NavItem } from 'reactstrap'
import { ToastContainer } from 'react-toastify'
import { APP_NAME } from '../../config/properties'
import FaBeer from 'react-icons/lib/fa/beer'
import 'bootstrap/dist/css/bootstrap.css'

const DefaultLayout = ({ component: Component, ...rest }) =>
    <Route {...rest} render={matchProps => (
        <div className="app-container">
            <Navbar className="app-header navbar-fixed-top" color="faded" light expand="md">
                <Link to="/" className="navbar-brand">{APP_NAME}</Link>
                <Nav className="ml-auto" navbar>
                    <NavItem><Link to="/auth" className="nav-link menu-link">Auth <FaBeer /></Link></NavItem>
                    <NavItem><Link to="/stores" className="nav-link menu-link">Stores</Link></NavItem>
                </Nav>
            </Navbar>
            <div className="app-content">
                <Component {...matchProps} />
            </div> 
            <footer><p></p></footer>
            <ToastContainer
                position="bottom-left"
                hideProgressBar={true}
                closeButton={false}
                toastClassName="toast-container" />
        </div>
    )}>
    </Route>

DefaultLayout.propTypes = {
    component: PropTypes.any.isRequired
}

export default DefaultLayout
