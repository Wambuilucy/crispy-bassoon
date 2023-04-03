import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EditQuizJs from './EditQuizJs';

describe('<EditQuizJs />', () => {
  test('it should mount', () => {
    render(<EditQuizJs />);
    
    const editQuizJs = screen.getByTestId('EditQuizJs');

    expect(editQuizJs).toBeInTheDocument();
  });
});