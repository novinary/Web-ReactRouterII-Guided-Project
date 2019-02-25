import React from 'react';
import Section from '../components/Section';


export default function Blackjack(props) {
  console.log(props);

  return (
    <Section
      color='#4286f4'
      heading='Blackjack'
      content={`${props.player} will be playing Blackjack.`}
    >
      {JSON.stringify(props.history)}
    </Section>
  );
}
