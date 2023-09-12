
import React, { Component } from 'react'
import { Notification } from "./Notification/Notification";
import { Section } from "./Section/Section";
import { FeedbackOptions } from "./FeedbackOptions/FeedbackOptions";
import { Statistics } from "./Statistics/Statistics";
import './AppStyle/AppStyle.module.css'
// import PropTypes from 'prop-types'

export class App extends Component {

  // static defaultProps = {
  //   good: 0,
  //   neutral: 0,
  //   bad: 0,
  //   total: 0,
  //   positivePercentage: 0
  // }

  // static propTypes = {
  //   good: PropTypes.number.isRequired,
  //   neutral: PropTypes.number.isRequired,
  //   bad: PropTypes.number.isRequired,
  //   total: PropTypes.number.isRequired,
  //   positivePercentage: PropTypes.number.isRequired
  // }

  state = {
    good: 0,
    neutral: 0,
    bad: 0
  }

  handleLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }))
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
    const { good, neutral, bad } = this.state;
    const totalFeedback = this.countTotalFeedback();
    const positivePercentage = this.calculatePositiveFeedbackPercentage();
    return (
      <div
        className="App"
        // style={{
        //   height: '100vh',
        //   justifyContent: 'center',
        //   alignItems: 'center',
        //   fontSize: 40,
        //   color: '#010101',
        //  display: 'flex'
        
        // }}
      >
        <Section title='Please leave feedback'>
          <FeedbackOptions
            // options={['good', 'neutral', 'bad']}
            options={[...Object.keys(this.state)]}
            onLeaveFeedback={this.handleLeaveFeedback}
          />
        </Section>

        <Section title='Statistics'>
          {totalFeedback === 0 ? (
            <Notification message="There is no feedback" />
          ) : (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              total={totalFeedback}
              positivePercentage={positivePercentage} />)}
        </Section>

      </div >
    );
  }
};
