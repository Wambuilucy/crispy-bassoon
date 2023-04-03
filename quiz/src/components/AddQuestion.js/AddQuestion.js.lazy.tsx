import React, { lazy, Suspense } from 'react';

const LazyAddQuestionJs = lazy(() => import('./AddQuestionJs'));

const AddQuestionJs = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyAddQuestionJs {...props} />
  </Suspense>
);

export default AddQuestionJs;
