import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import EditQuestionJs from './EditQuestionJs';

describe('<EditQuestionJs />', () => {
  test('it should mount', () => {
    render(<EditQuestionJs />);
    
    const editQuestionJs = screen.getByTestId('EditQuestionJs');

    expect(editQuestionJs).toBeInTheDocument();
  });
});