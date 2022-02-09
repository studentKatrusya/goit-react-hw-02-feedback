// import Feedback from './Feedback/Feedback';
import { Component } from 'react';
import Statistics from './Statistics/Statistics';
import FeedbackOptions from './FeedbackOptions/FeedbackOptions';
import s from './Add.module.css';

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };
  // static defaultProps = {
  //   goodInitial: 0,
  //   neutralInitial: 0,
  //   badInitial: 0,
  // };

  // static propTypes = {
  //   //
  // };

  // state = {
  //   good: this.props.goodInitial,
  //   neutral: this.props.neutralInitial,
  //   bad: this.props.badInitial,
  // };

  onLeaveFeedback = option => {
    this.setState(prevState => ({
      [option]: prevState[option] + 1,
    }));
  };
  countTotalFeedback = () => {
    const { good, neutral, bad } = this.state;
    const total = good + neutral + bad;
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
        <FeedbackOptions
          options={Object.keys(this.state)}
          onLeaveFeedback={this.onLeaveFeedback}
        ></FeedbackOptions>

        <div className="{s.statistics}">
          <h3 className={s.feedback}> Statistics</h3>
        </div>

        {this.countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          ></Statistics>
        ) : (
          <p className="{s.totalFeedback}">No feedback given</p>
        )}
      </div>
    );
  }
}

export default App;
// export const App = () => {
//   return (
//     <div
//       style={{
//         height: '100vh',
//         display: 'flex',
//         justifyContent: 'center',
//         alignItems: 'center',
//         fontSize: 40,
//         textTransform: 'uppercase',
//         color: '#010101',
//       }}
//     >
//       <Feedback />
//     </div>
//   );
// };
