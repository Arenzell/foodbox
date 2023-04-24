import React, { PureComponent } from 'react'
import { Button, Form, FormGroup, Label, Input } from 'reactstrap'
import PropTypes from 'prop-types'
import LoadingOverlay from '../../components/LoadingOverlay'

class SignUpForm extends PureComponent {

    constructor(props) {
        super(props)
        this.state = { fullname: '', phone: '', email: '', password: '', confirmPassword: '' }
        this.handleSubmit = this.handleSubmit.bind(this)
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange({ target }) {
        const { name, value } = target
        this.setState({
            [name]: value
        })
    }

    async handleSubmit(event) {
        event.preventDefault()
        const { onSubmit } = this.props
        const { fullname, phone, email, password, confirmPassword } = this.state
        onSubmit({ fullname, phone, email, password, confirmPassword })
    }

    render() {
        const { fullname, phone, email, password, confirmPassword } = this.state
        const { loading } = this.props
        return (
            <Form onSubmit={this.handleSubmit} className="register-form">
                <LoadingOverlay color={'#7d7d7d'} active={loading} />
                <FormGroup>
                    <Label for="email">Full Name</Label>
                    <Input
                        value={fullname}
                        type="text"
                        name="fullname"
                        id="fullname"
                        placeholder="Type your full name"
                        autoComplete="name"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Phone Number</Label>
                    <Input
                        value={phone}
                        type="tel"
                        name="phone"
                        id="phone"
                        placeholder="Type your phone number"
                        autoComplete="tel"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="email">Email</Label>
                    <Input
                        value={email}
                        type="email"
                        name="email"
                        id="email"
                        placeholder="Type your email"
                        autoComplete="email"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="confirmPassword">Password</Label>
                    <Input
                        value={confirmPassword}
                        type="password"
                        name="confirmPassword"
                        id="confirmPassword"
                        placeholder="Retype your password"
                        autoComplete="new-password"
                        onChange={this.handleChange} />
                </FormGroup>
                <FormGroup>
                    <Label for="password">Confirm Password</Label>
                    <Input
                        value={password}
                        type="password"
                        name="password"
                        id="password"
                        placeholder="Type your password"
                        autoComplete="new-password"
                        onChange={this.handleChange} />
                </FormGroup>
                <div className="form-button-container">
                    <Button color="link" className="mbutton default raised">Sign Up</Button>
                </div>
            </Form>
        )
    }
}

SignUpForm.propTypes = {
    onSubmit: PropTypes.func.isRequired,
    loading: PropTypes.bool.isRequired
}

export default SignUpForm
