import React, { useContext } from 'react'
import { useHistory } from 'react-router';
import QuizContext from '../Context';

function Result() {

    const history = useHistory();
    const { score, setScore } = useContext(QuizContext);
    const handleTry = () => {
        history.push('/takequiz');
        setScore(0);
    }

    return (
        <div className='result'>
            <div className="result_container">
                <h1 id='score'>Your score is {score}</h1>
                <button onClick={handleTry}>Try again</button>
            </div>
        </div>
    )
}

export default Result
