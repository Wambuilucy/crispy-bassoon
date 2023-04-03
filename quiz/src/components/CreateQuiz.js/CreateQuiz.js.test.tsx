import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import CreateQuizJs from './CreateQuizJs';

describe('<CreateQuizJs />', () => {
  test('it should mount', () => {
    render(<CreateQuizJs />);
    
    const createQuizJs = screen.getByTestId('CreateQuizJs');

    expect(createQuizJs).toBeInTheDocument();
  });
});