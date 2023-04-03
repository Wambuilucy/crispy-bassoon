import React, { FC } from 'react';
import { InstructionsJsWrapper } from './instructions.js.styled';

interface InstructionsJsProps {}

const InstructionsJs: FC<InstructionsJsProps> = () => (
 <InstructionsJsWrapper data-testid="InstructionsJs">
    InstructionsJs Component
 </InstructionsJsWrapper>
);

export default InstructionsJs;
