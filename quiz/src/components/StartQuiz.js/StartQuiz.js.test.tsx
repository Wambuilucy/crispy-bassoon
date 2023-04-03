import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import StartQuizJs from './StartQuizJs';

describe('<StartQuizJs />', () => {
  test('it should mount', () => {
    render(<StartQuizJs />);
    
    const startQuizJs = screen.getByTestId('StartQuizJs');

    expect(startQuizJs).toBeInTheDocument();
  });
});