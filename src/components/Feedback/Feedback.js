import { Component } from 'react';

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

  handleIncrementTotal = ({ good, neutral, bad }) => {
    // this.setState(
    //  const total:  good + neutral + bad
    // );
  };

  render() {
    const { good, neutral, bad, total } = this.state;
    return (
      <div>
        <div>
          <h2>Please leave feedback</h2>
          <button type="button" onClick={this.handleIncrementGood}>
            Good
          </button>
          <button type="button" onClick={this.handleIncrementNeutral}>
            Neutral
          </button>
          <button type="button" onClick={this.handleIncrementBad}>
            Bad
          </button>
        </div>
        <div>
          <h2>Statistics</h2>
          <p>Good: {good}</p>
          <p>Neutral: {neutral}</p>
          <p>Bad: {bad}</p>
          <p>Total: {total}</p>
          <p>Positive feedback: {}%</p>
        </div>
      </div>
    );
  }

  //  return ();
}

export default Feedback;
