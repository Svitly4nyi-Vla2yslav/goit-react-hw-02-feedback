import React from 'react'
import './Section.css'
import PropTypes from 'prop-types'
export const Section = ({title, children}) => {
    return (
        <div>
            <h1 className='Section__title'>{title}</h1>
            {children}
        </div>
    )
}

Section.propTypes = {
title: PropTypes.string.isRequired,
children: PropTypes.element.isRequired
}