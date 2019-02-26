import React from 'react';
import { Link, Route } from 'react-router-dom';
import Section from '../components/Section';


export default function Blackjack(props) {
  return (
    <Section
      color='#4286f4'
      heading='Blackjack'
      content={`${props.player} will be playing Blackjack.`}
    >
      <Link to={`${props.match.url}/rock1`}>Rock1</Link> <br />
      <Link to={`${props.match.url}/rock2`}>Rock2</Link>

      <Route
        path={`${props.match.path}/rock1`}
        render={() => <h1>sub route 1</h1>}
      />

      <Route
        path={`${props.match.path}/rock2`}
        render={() => <h1>sub route 2</h1>}
      />
    </Section>
  );
}
