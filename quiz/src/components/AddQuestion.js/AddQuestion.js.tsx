import React, { FC } from 'react';
import { AddQuestionJsWrapper } from './AddQuestion.js.styled';

interface AddQuestionJsProps {}

const AddQuestionJs: FC<AddQuestionJsProps> = () => (
 <AddQuestionJsWrapper data-testid="AddQuestionJs">
    AddQuestionJs Component
 </AddQuestionJsWrapper>
);

export default AddQuestionJs;
