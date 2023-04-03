import React, { FC } from 'react';
import { NavbarJsWrapper } from './Navbar.js.styled';

interface NavbarJsProps {}

const NavbarJs: FC<NavbarJsProps> = () => (
 <NavbarJsWrapper data-testid="NavbarJs">
    NavbarJs Component
 </NavbarJsWrapper>
);

export default NavbarJs;
