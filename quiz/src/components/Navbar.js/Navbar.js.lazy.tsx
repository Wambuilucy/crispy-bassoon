import React, { lazy, Suspense } from 'react';

const LazyNavbarJs = lazy(() => import('./NavbarJs'));

const NavbarJs = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyNavbarJs {...props} />
  </Suspense>
);

export default NavbarJs;
