import React, { lazy, Suspense } from 'react';

const LazyStartQuizJs = lazy(() => import('./StartQuizJs'));

const StartQuizJs = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyStartQuizJs {...props} />
  </Suspense>
);

export default StartQuizJs;
