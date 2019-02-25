import React from 'react';
import { BrowserRouter as Router, Route, Link } from 'react-router-dom';
import styled from 'styled-components';
import Blackjack from '../screens/Blackjack';
import RockPaperScissors from '../screens/RockPaperScissors';
import TicTacToe from '../screens/TicTacToe';
import Section from './Section';


const apps = [
  { id: 'blackjack', Component: Blackjack },
  { id: 'rock_paper_scissors', Component: RockPaperScissors },
  { id: 'tic_tac_toe', Component: TicTacToe },
];

const App = props => {
  const { Component } = apps.find(
    app => app.id === props.match.params.id,
  );
  return <Component {...props} />;
};

const StyledContainer = styled.div`
  padding: 20px;
  height: 100%;

  nav {
    padding: 0 20px;
    display: flex;
    justify-content: space-between;
  }
`;

export default function Container({ player }) {
  return (
    <Router>
      <StyledContainer>
        <nav>
          <Link to='/'>Black</Link>
          <Link to='/rock_paper_scissors'>Rock</Link>
          <Link to='/tic_tac_toe'>Tic</Link>
          <Link to='/contact'>Contact</Link>
        </nav>

        <Route
          exact
          path='/'
          render={pr => <Blackjack {...pr} player={player} />}
        />

        <Route
          path='/rock_paper_scissors'
          render={pr => <RockPaperScissors {...pr} player={player} />}
        />

        <Route
          path='/tic_tac_toe'
          render={pr => <TicTacToe {...pr} player={player} />}
        />

        <Section
          color='#d6247a'
          heading='Contact'
          content='Contact me always renders.'
        />
      </StyledContainer>
    </Router>
  );
}

// class Link extends React.Component {
//   navigateTo = () => {
//     history.pushState(null, null, this.props.to);
//   }

//   render() {
//     return (
//       <a onClick={this.navigateTo} href='#'>{this.props.children}</a>
//     );
//   }
// }

// function withPathMatching(Component) {
//   return class WithPathMatching extends React.Component {
//     state = { path: location.pathname }

//     setPath = () => this.setState({ path: location.pathname })

//     componentDidMount() {
//       addEventListener('popstate', this.setPath);
//     }

//     render() {
//       const shouldAlwaysRender = !this.props.path;
//       const pathMatches = this.props.path === this.state.path;

//       if (shouldAlwaysRender || pathMatches) {
//         return <Component {...this.props} />;
//       }
//       return null;
//     }
//   };
// }

// const Blackjack = withPathMatching(BlackjackPlain);
// const RockPaperScissors = withPathMatching(RockPaperScissorsPlain);
// const TicTacToe = withPathMatching(TicTacToePlain);
