import React from 'react'
import PropTypes from 'prop-types'
import { Route } from 'react-router'
import { Link } from 'react-router-dom'
import { Navbar } from 'reactstrap'
import { APP_NAME } from '../../config/properties'
import { ToastContainer } from 'react-toastify'
import 'bootstrap/dist/css/bootstrap.css'

const FrontLayout = ({ component: Component, ...rest }) =>
    <Route {...rest} render={matchProps => (
        <div className="main-content">
            <Navbar className="navbar-fixed-top">
                <Link to="/" className="navbar-brand">{APP_NAME}</Link>
            </Navbar>
            <Component {...matchProps} />
            <ToastContainer
                position="bottom-left"
                hideProgressBar={true}
                closeButton={false}
                toastClassName="toast-container" />
        </div>
    )}>
    </Route>

FrontLayout.propTypes = {
    component: PropTypes.any.isRequired
}

export default FrontLayout
