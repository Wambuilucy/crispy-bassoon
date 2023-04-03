import React from 'react';
import { render, screen } from '@testing-library/react';
import '@testing-library/jest-dom/extend-expect';
import NavbarJs from './NavbarJs';

describe('<NavbarJs />', () => {
  test('it should mount', () => {
    render(<NavbarJs />);
    
    const navbarJs = screen.getByTestId('NavbarJs');

    expect(navbarJs).toBeInTheDocument();
  });
});