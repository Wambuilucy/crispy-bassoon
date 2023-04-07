import React,{useState} from 'react';
let QuizContext = React.createContext();
export default QuizContext;

export const QuizProvider = ({children}) => {
    let [score, setScore] = useState(0);
    return <QuizContext.Provider value={{score, setScore}}>
        {children}
    </QuizContext.Provider>
}