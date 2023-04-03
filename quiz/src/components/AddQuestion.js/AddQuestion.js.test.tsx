import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import AddQuestionJs from './AddQuestionJs';

describe('<AddQuestionJs />', () => {
  test('it should mount', () => {
    render(<AddQuestionJs />);
    
    const addQuestionJs = screen.getByTestId('AddQuestionJs');

    expect(addQuestionJs).toBeInTheDocument();
  });
});