import React, { lazy, Suspense } from 'react';

const LazyResultJs = lazy(() => import('./ResultJs'));

const ResultJs = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyResultJs {...props} />
  </Suspense>
);

export default ResultJs;
