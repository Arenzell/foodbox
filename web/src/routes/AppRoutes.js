import React from 'react'
import Routes from './routes'
import DocumentTitle from 'react-document-title'
import { APP_NAME } from '../config/properties'

const AppRoutes = () =>
    <DocumentTitle title={APP_NAME}>
        <Routes/>
    </DocumentTitle>

export default AppRoutes
