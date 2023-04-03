import React, { lazy, Suspense } from 'react';

const LazyInstructionsJs = lazy(() => import('./InstructionsJs'));

const InstructionsJs = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyInstructionsJs {...props} />
  </Suspense>
);

export default InstructionsJs;
