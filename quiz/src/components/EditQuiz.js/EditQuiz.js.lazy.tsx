import React, { lazy, Suspense } from 'react';

const LazyEditQuizJs = lazy(() => import('./EditQuizJs'));

const EditQuizJs = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyEditQuizJs {...props} />
  </Suspense>
);

export default EditQuizJs;
