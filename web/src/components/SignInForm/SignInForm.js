import React, { PureComponent } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import PropTypes from 'prop-types'
import LoadingOverlay from '../../components/LoadingOverlay'

class SignInForm extends PureComponent {

    constructor(props) {
        super(props)
        this.state = { email: '', password: '' }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange({ target }) {
        const { name, value } = target
        this.setState({
            [name]: value
        })
    }

    handleSubmit(event) {
        event.preventDefault()
        const { onSubmit } = this.props
        const { email, password } = this.state
        onSubmit({ email, password })
    }

    render() {
        const { email, password } = this.state
        const { loading } = this.props
        return (
            <Form onSubmit={this.handleSubmit} className="auth-form">
                <LoadingOverlay color={'#7d7d7d'} active={loading} />
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        value={email}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Type your email"
                        autoComplete="username"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Password</Label>
                    <Input
                        value={password}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Type your password"
                        autoComplete="current-password"
                        onChange={this.handleChange} />
                </FormGroup>
                <div className="form-button-container">
                    <Button color="link" className="mbutton default raised">Sign In</Button>
                </div>
            </Form>
        )
    }
}

SignInForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
}

export default SignInForm
