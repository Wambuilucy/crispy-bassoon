import React, { FC } from 'react';
import { StartQuizJsWrapper } from './StartQuiz.js.styled';

interface StartQuizJsProps {}

const StartQuizJs: FC<StartQuizJsProps> = () => (
 <StartQuizJsWrapper data-testid="StartQuizJs">
    StartQuizJs Component
 </StartQuizJsWrapper>
);

export default StartQuizJs;
