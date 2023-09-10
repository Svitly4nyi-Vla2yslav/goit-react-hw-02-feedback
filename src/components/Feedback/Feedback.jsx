import React from 'react'
import './Feedback.module.css'
import PropTypes from 'prop-types'

export class Feedback extends React.Component {
    static defaultProps = {
        initialValueGood: 0,
        initialValueNeutral: 0,
        initialValueBad: 0,
        total: 0,
        positivePercentage: 0
    }

    static propTypes = {
        initialValueGood: PropTypes.number.isRequired,
        initialValueNeutral: PropTypes.number.isRequired,
        initialValueBad: PropTypes.number.isRequired,
        total: PropTypes.number.isRequired,
        positivePercentage: PropTypes.number.isRequired
    }

    state = {
        good: 0,
        neutral: 0,
        bad: 0
    }

    handleGoodFeedback = () => {
        this.setState(prevState => ({
            good: prevState.good + 1,
        }));

    }
    handleNeutralFeedback = () => {
        this.setState(prevState => ({
            neutral: prevState.neutral + 1,
        }));

    }

    handleBadFeedback = () => {
        this.setState(prevState => ({
            bad: prevState.bad + 1,
        }));
    }
    countTotalFeedback = () => {
        const { good, neutral, bad } = this.state;
        return good + neutral + bad;
    }
    calculatePositiveFeedbackPercentage = () => {
        const totalFeedback = this.countTotalFeedback();
        if (totalFeedback === 0) {
            return 0;
        }
        return Math.round((this.state.good / totalFeedback) * 100);
    }
    render() {
        const totalFeedback = this.countTotalFeedback();
        const positivePercentage = this.calculatePositiveFeedbackPercentage();
        return (
            <div className='Container'>
                <h1 className='Feedback__title'>Please leave feedback</h1>
                <ul className='Feedback__list'>
                    <li><button type='button' onClick={this.handleGoodFeedback}>Good</button></li>
                    <li><button type='button' onClick={this.handleNeutralFeedback}>Neutral</button></li>
                    <li><button type='button' onClick={this.handleBadFeedback}>Bad</button></li>
                </ul>
                <h2>Statistics</h2>
                <p>Good: {this.state.good}</p>
                <p>Neutral: {this.state.neutral}</p>
                <p>Bad: {this.state.bad}</p>
                <p>Total: {totalFeedback}</p>
                <p>Positive feedback: {positivePercentage} %</p>
            </div>
        )
    }
}
