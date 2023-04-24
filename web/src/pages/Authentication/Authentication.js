import React, { PureComponent } from 'react'
import { Container, Row, Col } from 'reactstrap'
import { connect } from 'react-redux'
import PropTypes from 'prop-types'
import { userLoggedIn } from '../../actions/actionApi'
import SecurityAPI from '../../services/api/Security'
import Notification from '../../services/notification/NotificationService'
import SignInForm from '../../components/SignInForm'

class Authentication extends PureComponent {

    constructor(props) {
        super(props)
        this.state = { loading: false }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleSubmit({ email, password }) {
        try {
            this.setState({ loading: true })
            const { onSignInSucceeded } = this.props
            if (email && password) {
                const { data } = await SecurityAPI.signin(email, password)
                const { token } = data
                onSignInSucceeded(token)
                Notification.toastSuccess('Success', 'You have signed in successfully!')
            } else {
                Notification.toastError('Error', 'Please, inform your email and password')
            }
        } catch (e) {
            Notification.toastResponseException(e)
        } finally {
            this.setState({ loading: false })
        }
    }

    render() {
        const { loading } = this.state
        return (
            <section className="auth-section">
                <Container>
                    <Row>
                        <Col xs={{ size:12 }} md={{ size:8, offset:2 }} lg={{ size:6, offset:3 }} xl={{ size:4, offset:4 }}>
                            <h5 className="form-title text-light">Access you account</h5>
                            <div className="auth-container">
                                <SignInForm onSubmit={this.handleSubmit} loading={loading} />
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

Authentication.propTypes = {
    onSignInSucceeded: PropTypes.func.isRequired
}

const mapDispatchToProps = dispatch => ({
    onSignInSucceeded: token => dispatch(userLoggedIn(token))
})

export default connect(null, mapDispatchToProps)(Authentication)
