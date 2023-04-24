import React, { PureComponent } from 'react'
import { Container, Row, Col } from 'reactstrap'
import Notification from '../../services/notification/NotificationService'
import SignUpForm from '../../components/SignUpForm'
import SecurityAPI from '../../services/api/Security'

class Registration extends PureComponent {

    constructor(props) {
        super(props)
        this.state = { loading: false }
        this.handleSubmit = this.handleSubmit.bind(this)
    }

    async handleSubmit({ fullname, phone, email, password, confirmPassword }) {
        try {
            this.setState({ loading: true })
            if (fullname && phone && email && password && confirmPassword) { // Dummy check
                await SecurityAPI.signup({ fullname, phone, email, password, confirmPassword })
                Notification.toastSuccess('Success', 'You have signed up successfully!')
            } else {
                Notification.toastError('Error', 'Please, check the required fields')
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
            <section className="register-section">
                <Container>
                    <Row>
                        <Col xs={{ size:12 }} md={{ size:8, offset:2 }} lg={{ size:6, offset:3}} xl={{ size:4, offset:4 }}>
                            <h5 className="form-title text-light">Create your account</h5>
                            <div className="register-container">
                                <SignUpForm onSubmit={this.handleSubmit} loading={loading}/>
                            </div>
                        </Col>
                    </Row>
                </Container>
            </section>
        )
    }
}

export default Registration
