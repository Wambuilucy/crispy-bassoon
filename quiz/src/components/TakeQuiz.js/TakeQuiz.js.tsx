import React, { FC } from 'react';
import { TakeQuizJsWrapper } from './TakeQuiz.js.styled';

interface TakeQuizJsProps {}

const TakeQuizJs: FC<TakeQuizJsProps> = () => (
 <TakeQuizJsWrapper data-testid="TakeQuizJs">
    TakeQuizJs Component
 </TakeQuizJsWrapper>
);

export default TakeQuizJs;
