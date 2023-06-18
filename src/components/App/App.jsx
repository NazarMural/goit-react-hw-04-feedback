import React, { useState } from 'react';
import FeedbackOptions from 'components/FeedbackOptions';
import { Container } from './App.styled';
import Statistics from 'components/Statistics';
import Section from 'components/Section';
import Notification from 'components/Notification';

export function App() {
  const [good, setGood] = useState(0);
  const [neutral, setNeutrual] = useState(0);
  const [bad, setBad] = useState(0);
  const nameButtons = ['good', 'neutral', 'bad'];

  const onLeaveFeedback = value => {
    // console.log(value);
    switch (value) {
      case 'good': {
        setGood(prevGood => prevGood + 1);
        break;
      }
      case 'neutral': {
        setNeutrual(prevNeutral => prevNeutral + 1);
        break;
      }
      case 'bad': {
        setBad(prevBad => prevBad + 1);
        break;
      }
      default:
        break;
    }
    // console.log('good', good);
    // console.log('neutral', neutral);
    // console.log('bad', bad);
  };

  const countTotalFeedback = () => {
    return good + neutral + bad;
  };

  const countPositiveFeedbackPercentage = () => {
    return Math.floor((good * 100) / (good + neutral + bad));
  };

  const removeStatistics = () => {
    setGood(0);
    setNeutrual(0);
    setBad(0);
  };

  return (
    <Container>
      <Section title="Please leave feedback">
        <FeedbackOptions
          nameButtons={nameButtons}
          onLeaveFeedback={onLeaveFeedback}
        />
      </Section>
      <Section title="Statistics">
        {countTotalFeedback() !== 0 ? (
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={countTotalFeedback()}
            positivePercentage={countPositiveFeedbackPercentage()}
            removeStatistics={removeStatistics}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </Section>
    </Container>
  );
}

// export class App extends Component {
//   state = {
//     good: 0,
//     neutral: 0,
//     bad: 0,
//   };

//   countTotalFeedback = () => {
//     const { good, neutral, bad } = this.state;
//     return good + neutral + bad;
//   };

//   countPositiveFeedbackPercentage = () => {
//     const { good, neutral, bad } = this.state;
//     return Math.floor((good * 100) / (good + neutral + bad));
//   };

//   onLeaveFeedback = value => {
//     this.setState({ [value]: this.state[value] + 1 });
//   };

//   removeStatistics = () => {
//     this.setState(state => ({
//       good: (state.good = 0),
//       neutral: (state.neutral = 0),
//       bad: (state.bad = 0),
//     }));
//   };

//   render() {
//     const { good, neutral, bad } = this.state;
//     console.log(this.state);
//     return (
//       <Container>
//         <Section title="Please leave feedback">
//           <FeedbackOptions
//             options={Object.keys(this.state)}
//             onLeaveFeedback={this.onLeaveFeedback}
//           />
//         </Section>
//         <Section title="Statistics">
//           {this.countTotalFeedback() !== 0 ? (
//             <Statistics
//               good={good}
//               neutral={neutral}
//               bad={bad}
//               total={this.countTotalFeedback()}
//               positivePercentage={this.countPositiveFeedbackPercentage()}
//               removeStatistics={this.removeStatistics}
//             />
//           ) : (
//             <Notification message="There is no feedback" />
//           )}
//         </Section>
//       </Container>
//     );
//   }
// }
