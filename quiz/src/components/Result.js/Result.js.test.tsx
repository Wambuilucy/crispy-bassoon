import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import ResultJs from './ResultJs';

describe('<ResultJs />', () => {
  test('it should mount', () => {
    render(<ResultJs />);
    
    const resultJs = screen.getByTestId('ResultJs');

    expect(resultJs).toBeInTheDocument();
  });
});