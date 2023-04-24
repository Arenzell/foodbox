import React, { Component } from 'react'
import PropTypes from 'prop-types'
import { Navbar } from 'reactstrap'
import classNames from 'classnames'
import './index.css'

class SearchNav extends Component {

    constructor(props) {
        super(props)
        this.state = { value: '' }
        this.handleChange = this.handleChange.bind(this)
        this.handleKeyPress = this.handleKeyPress.bind(this)
    }

    handleChange(event) {
        this.setState({ 'value': event.target.value })
    }

    handleKeyPress(event) {
        if (event.key === 'Enter') {
            const { onSearch } = this.props
            const { value } = this.state
            onSearch(value)
        }
    }

    render() {
        const { value } = this.state
        const { className, placeholder } = this.props
        const containerClass = classNames({ 'nav-search': true, [className]: true })
        return (
            <Navbar className={containerClass} color="faded" light expand="md">
                <input
                    className="search-input"
                    type="text"
                    placeholder={placeholder}
                    value={value}
                    onChange={this.handleChange}
                    onKeyPress={this.handleKeyPress} />
            </Navbar>
        )
    }
}

SearchNav.propTypes = {
    className: PropTypes.string,
    placeholder: PropTypes.string,
    onSearch: PropTypes.func.isRequired
}

export default SearchNav
