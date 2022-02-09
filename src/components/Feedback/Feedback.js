import { Component } from 'react';
import s from './Feedback.module.css';
// import Statistics from './Statistics';
// import FeedbackOptions from './FeedbackOptions';

class Feedback extends Component {
  static defaultProps = {
    goodInitial: 0,
    neutralInitial: 0,
    badInitial: 0,
  };

  static propTypes = {
    //
  };

  state = {
    good: this.props.goodInitial,
    neutral: this.props.neutralInitial,
    bad: this.props.badInitial,
  };

  handleIncrementGood = () => {
    this.setState(prevState => ({
      good: prevState.good + 1,
    }));
  };

  handleIncrementNeutral = () => {
    this.setState(prevState => ({
      neutral: prevState.neutral + 1,
    }));
  };

  handleIncrementBad = () => {
    this.setState(prevState => ({
      bad: prevState.bad + 1,
    }));
  };

  // onLeaveFeedback = () => {
  //   this.setState(prevState => ({
  //     options: prevState.options.onClick + 1,
  //   }));
  // };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
    console.log(total);
    return total;
  };

  countPositiveFeedbackPercentage() {
    const { good } = this.state;
    const total = this.countTotalFeedback();
    const positiveFeedback = Math.floor((good * 100) / total);
    return positiveFeedback;
  }

  render() {
    const { good, neutral, bad } = this.state;
    // const { options } = this.state;
    return (
      <div className={s.feedback}>
        <h2>Please leave feedback</h2>
        <div className={s.boxBtn}>
          <button
            className={s.btn}
            type="button"
            onClick={this.handleIncrementGood}
          >
            Good
          </button>
          <button
            className={s.btn}
            type="button"
            onClick={this.handleIncrementNeutral}
          >
            Neutral
          </button>
          <button
            className={s.btn}
            type="button"
            onClick={this.handleIncrementBad}
          >
            Bad
          </button>
        </div>
        <div className={s.statistics}>
          <h3 className={s.title}> Statistics</h3>
          {this.countTotalFeedback() !== 0 ? (
            <ul className={s.list}>
              <li className={s.item}>Good: {good}</li>
              <li className={s.item}>Neutral: {neutral}</li>
              <li className={s.item}>Bad: {bad}</li>
              <li className={s.totalFeedback}>
                Total: {this.countTotalFeedback()}
              </li>
              <li className={s.totalFeedback}>
                Positive feedback: {this.countPositiveFeedbackPercentage()}%
              </li>
            </ul>
          ) : (
            <p className={s.totalFeedback}>No feedback given</p>
          )}
        </div>
      </div>
    );
  }
}

export default Feedback;

// <section title="Please leave feedback">
//   <FeedbackOptions
//     options={options}
//     onLeaveFeedback={this.onLeaveFeedback()}
//   ></FeedbackOptions>
//   <Statistics
//     good={options.good}
//     neutral={options.neutral}
//     bad={options.bad}
//     total={this.countTotalFeedback}
//     positivePercentage={this.countPositiveFeedbackPercentage}
//   ></Statistics>
// </section>
