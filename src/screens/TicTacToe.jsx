import React from 'react';
import Section from '../components/Section';


export default function TicTacToe(props) {
  return (
    <Section
      color='#ffd20c'
      heading='Tic Tac Toe'
      content={`${props.player} will be playing Tic Tac Toe.`}
    />
  );
}
