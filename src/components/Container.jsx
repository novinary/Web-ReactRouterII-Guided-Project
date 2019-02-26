import React from 'react';
import { BrowserRouter as Router, Route, Link, NavLink } from 'react-router-dom';
import styled from 'styled-components';
import Blackjack from '../screens/Blackjack';
import RockPaperScissors from '../screens/RockPaperScissors';
import TicTacToe from '../screens/TicTacToe';
import Section from './Section';


// const apps = [
//   { id: 'blackjack', label: 'Black', Component: Blackjack },
//   { id: 'rock_paper_scissors', label: 'Rock', Component: RockPaperScissors },
//   { id: 'tic_tac_toe', label: 'Tic', Component: TicTacToe },
// ];

// const App = props => {
//   const { Component } = apps.find(
//     app => app.id === props.match.params.id,
//   );
//   return <Component {...props} />;
// };

const StyledContainer = styled.div`
  padding: 20px;
  height: 100%;

  nav {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;

    .active {
      font-weight: bold;
    }
  }
`;

const StyledLink = styled(Link)`
  color: orange;
`;

export default function Container(props) {
  return (
    <Router>
      <StyledContainer>
        <nav>
          <NavLink to={{
            pathname: '/blackjack',
            state: { from: 'Link at top of page' },
          }}>
            Black
          </NavLink>
          <NavLink to='/rock_paper_scissors'>Rock</NavLink>
          <NavLink to='/tic_tac_toe'>Tic</NavLink>
        </nav>

        <Route
          path='/blackjack'
          render={
            (pr) => (
              <Blackjack
                player={props.player}
                {...pr}
              />
            )
          }
        />

        <Route
          path='/rock_paper_scissors'
          render={pr => <RockPaperScissors player={props.player} {...pr} />}
        />

        <Route
          path='/tic_tac_toe'
          component={TicTacToe}
        />

        <Section
          color='#d6247a'
          heading='Log In'
          content='Log in, please.'
        >
        </Section>
      </StyledContainer>
    </Router>
  );
}
