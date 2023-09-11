import React from 'react'

export const FeedbackOptions = ({options, onLeaveFeedback}) => {
    return (
        <ul>
            {options.map(option => (
                <li key={option}>
                    <button type='button' 
                    onClick={() => onLeaveFeedback(option)}>
                        {option}
                    </button>
                </li>
            ))}
        </ul>
    )
}