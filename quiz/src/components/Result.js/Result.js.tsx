import React, { FC } from 'react';
import { ResultJsWrapper } from './Result.js.styled';

interface ResultJsProps {}

const ResultJs: FC<ResultJsProps> = () => (
 <ResultJsWrapper data-testid="ResultJs">
    ResultJs Component
 </ResultJsWrapper>
);

export default ResultJs;
