import React from 'react';
import { Link, Route } from 'react-router-dom';
import Section from '../components/Section';


export default function Blackjack(props) {
  console.log(props);

  const ChooseDecks = props => (
    <>
      <Link to={`${props.match.url}/single_deck`}>Single Deck</Link>
      &nbsp;
      <Link to={`${props.match.url}/double_deck`}>Double Deck</Link>
    </>
  );

  return (
    <Section
      color='#4286f4'
      heading='Blackjack'
      content={`${props.player} will be playing Blackjack.`}
    >

      <Route
        path={`${props.match.url}/:deck`}
        render={pr => (
          pr.match.params.deck === 'single_deck'
            ? <h2>Single Deck</h2>
            : <h2>Double Deck</h2>
        )}
      />

      <Route
        exact
        path={`${props.match.url}`}
        render={pr => <ChooseDecks {...pr} />}
      />
    </Section>
  );
}
