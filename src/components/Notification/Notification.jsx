import React from 'react'
import './Notification.css'
import PropTypes from 'prop-types'
export const Notification = ({ message }) => {
    return (
        <p className='Notification__text'>{message} ⛔</p>
    )
}

Notification.propTypes = {
    message: PropTypes.string.isRequired
}