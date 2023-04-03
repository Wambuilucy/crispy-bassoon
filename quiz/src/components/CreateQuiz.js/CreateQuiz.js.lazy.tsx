import React, { lazy, Suspense } from 'react';

const LazyCreateQuizJs = lazy(() => import('./CreateQuizJs'));

const CreateQuizJs = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyCreateQuizJs {...props} />
  </Suspense>
);

export default CreateQuizJs;
