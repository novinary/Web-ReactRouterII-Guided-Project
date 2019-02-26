import React from 'react';
// import { Redirect } from 'react-router-dom';
import Section from '../components/Section';

// 1- change any code in Container
// so that this component receives history, match and location

// 2- on component mount of RockPaperScissors
// check if we have a 'authed' key in localstorage
// with a value of 'true'. If so do nothing else, otherwise use
// history.push() to redirect to the home page
export default class RockPaperScissors extends React.Component {
  componentDidMount() {
    const isAuthed = localStorage.getItem('authed') === 'true';

    if (!isAuthed) {
      this.props.history.replace('/');
    }
  }

  render() {
    console.log(this.props);
    return (
      <Section
        color='#66ad03'
        heading='Rock Paper Scissors'
        content={`${this.props.player} will be playing Rock Paper Scissors.`}
      />
    );
  }
}
