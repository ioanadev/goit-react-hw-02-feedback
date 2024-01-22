import { Component } from 'react'
import './App.css'
import Section from './Title/Title'
import FeedbackOptions from './feedbackOptions/FeedbackOptions'
import Statistics from './statistics/Statistics'
import Notification from './notification/Notification'

class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0
    
  }

  handleLeaveFeedback = type =>{
  
    this.setState((prevstate=>({[type]: prevstate[type]+1})));
  //   this.setState(prevstate => {[type]: prevstate[type] + 1 ;
  // });
    // this.setState((prevstate=>{
    //   {[type]: prevstate[type] + 1})) 
   
    // console.log(prevstate);}
  }

  countTotalFeedback = () =>{
    const {good, neutral, bad} = this.state;
    return good + neutral + bad;
  }

  countPositiveFeedbackPercentage = ()=>{
    const total = this.countTotalFeedback();
    const {good} = this.state;
    return total === 0 ? 0 : Math.round((good/total)*100);
  }

  render (){ 
    const { good, neutral, bad} = this.state;
    const total = this.countTotalFeedback();
    const percentage = this.countPositiveFeedbackPercentage();

    return (
       <>
     
    <Section title ="Please leave feedback">
    <FeedbackOptions options = {['good', 'neutral', 'bad']} onLeaveFeedback = {this.handleLeaveFeedback}/>
    </Section>
    {total === 0 ? 
    <Notification message="There is no feedback"/> : 
    <Section title = "Statistics">
    <Statistics good = {good} neutral = {neutral} bad = {bad} total = {total} positivePercentage = {percentage}/>
    </Section>}
    
    </>
    )
   
    }
   
  
}

export default App
