import React from 'react'
import './Statistics.css'
import PropTypes from 'prop-types'
export const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
    return (
        <>
            <p className='Statistics__text'>Good: <span className='Value'>{good}</span></p>
            <p className='Statistics__text'>Neutral: <span className='Value'>{neutral}</span></p>
            <p className='Statistics__text'>Bad: <span className='Value'>{bad}</span></p>
            <p className='Statistics__text'>Total: <span className='Value'>{total}</span></p>
            <p className='Statistics__text'>Positive feedback: <span className='Value'>{positivePercentage}%</span> </p>
        </>
    )
}

Statistics.propTypes = {
    good: PropTypes.number.isRequired,
    neutral: PropTypes.number.isRequired,
    bad: PropTypes.number.isRequired,
    total: PropTypes.number.isRequired,
    percentage: PropTypes.number.isRequired,
};