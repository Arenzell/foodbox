import React from 'react'
import { toast } from 'react-toastify'
import HttpStatus from 'http-status-codes'
import PropTypes from 'prop-types'

/**
 * A Toast message component to display all messages with a title.
 */
const ToastMessage = ({ messages, title }) =>
    <div>
		<span className="toast-title">{title}</span>
		<ul className="toast-list-messages">
			{messages.map((msg, index) =>
				<li key={index}><span className="toast-list-message">{msg}</span></li>
			)}
		</ul>
	</div>

ToastMessage.propTypes = {
    messages: PropTypes.array.isRequired,
    title: PropTypes.string.isRequired
}

/**
 * Show a toast message based on response error.
 * Usually used on catch from axios request.
 */
const toastResponseException = error => {
    const { response } = error
    const { status } = response
    const messages = getErrorsList(response)
    const title = getErrorTitle(status)
    toast.error(<ToastMessage messages={messages} title={title} />)
}

const toastSuccess = (title, ...messages) =>
    toast.success(<ToastMessage messages={messages} title={title} />)

const toastError = (title, ...messages) =>
    toast.error(<ToastMessage messages={messages} title={title} />)

/**
 * Return the list of error messages.
 */
const getErrorsList = response => {
    const { data, statusText } = response
    const messages = []
    if (data.errors) {
        Object.keys(data.errors).forEach(key => {
            const obj = data.errors[key]
            messages.push(obj.msg)
        })
    } else if (data.messages) {
        data.messages.forEach(msg => messages.push(msg))
    } else {
        messages.push(statusText)
    }
    return messages
}

/**
 * Define the toast title base upon Http status code.
 */
const getErrorTitle = status => {
    switch (status) {
        case HttpStatus.UNAUTHORIZED:
            return 'Authorization error'
        case HttpStatus.BAD_REQUEST:
            return 'Validation error'
        case HttpStatus.INTERNAL_SERVER_ERROR:
            return 'Internal error'
        default:
            return 'Unknown error'
    }
}

export default {
    toastResponseException,
    toastSuccess,
    toastError
}
