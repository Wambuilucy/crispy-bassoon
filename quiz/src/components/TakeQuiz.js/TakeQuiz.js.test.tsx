import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import TakeQuizJs from './TakeQuizJs';

describe('<TakeQuizJs />', () => {
  test('it should mount', () => {
    render(<TakeQuizJs />);
    
    const takeQuizJs = screen.getByTestId('TakeQuizJs');

    expect(takeQuizJs).toBeInTheDocument();
  });
});