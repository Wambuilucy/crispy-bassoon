import React, { FC } from 'react';
import { CreateQuizJsWrapper } from './CreateQuiz.js.styled';

interface CreateQuizJsProps {}

const CreateQuizJs: FC<CreateQuizJsProps> = () => (
 <CreateQuizJsWrapper data-testid="CreateQuizJs">
    CreateQuizJs Component
 </CreateQuizJsWrapper>
);

export default CreateQuizJs;
