import React, { lazy, Suspense } from 'react';

const LazyTakeQuizJs = lazy(() => import('./TakeQuizJs'));

const TakeQuizJs = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyTakeQuizJs {...props} />
  </Suspense>
);

export default TakeQuizJs;
