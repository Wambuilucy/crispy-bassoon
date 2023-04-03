import React, { lazy, Suspense } from 'react';

const LazyEditQuestionJs = lazy(() => import('./EditQuestionJs'));

const EditQuestionJs = (props: JSX.IntrinsicAttributes & { children?: React.ReactNode; }) => (
  <Suspense fallback={null}>
    <LazyEditQuestionJs {...props} />
  </Suspense>
);

export default EditQuestionJs;
