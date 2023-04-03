import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import InstructionsJs from './InstructionsJs';

describe('<InstructionsJs />', () => {
  test('it should mount', () => {
    render(<InstructionsJs />);
    
    const instructionsJs = screen.getByTestId('InstructionsJs');

    expect(instructionsJs).toBeInTheDocument();
  });
});