import React, { FC } from 'react';
import { EditQuestionJsWrapper } from './EditQuestion.js.styled';

interface EditQuestionJsProps {}

const EditQuestionJs: FC<EditQuestionJsProps> = () => (
 <EditQuestionJsWrapper data-testid="EditQuestionJs">
    EditQuestionJs Component
 </EditQuestionJsWrapper>
);

export default EditQuestionJs;
