import React from 'react';
// import { Link, Route } from 'react-router-dom';
import Section from '../components/Section';


export default function Blackjack(props) {
  console.log(props);
  return (
    <Section
      color='#4286f4'
      heading='Blackjack'
      content={`${props.player} will be playing Blackjack.`}
    >
    </Section>
  );
}
