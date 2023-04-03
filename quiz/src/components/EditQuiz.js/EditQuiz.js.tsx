import React, { FC } from 'react';
import { EditQuizJsWrapper } from './EditQuiz.js.styled';

interface EditQuizJsProps {}

const EditQuizJs: FC<EditQuizJsProps> = () => (
 <EditQuizJsWrapper data-testid="EditQuizJs">
    EditQuizJs Component
 </EditQuizJsWrapper>
);

export default EditQuizJs;
