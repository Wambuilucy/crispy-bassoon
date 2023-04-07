import React,{ useState } from 'react';
import { GetQuizByID, PutQuizByID } from '../api';
import { useParams, useHistory } from 'react-router-dom';
import '../App.css';

function AddQuestion() {
    let params = useParams();
    let history = useHistory();
    let quizID = +params.id;

    const [question, setQuestion] = useState('');
    const [answer, setAnswer] = useState('');
    const [option1, setOption1 ] = useState('');
    const [option1Points, setOption1Points ] = useState('');
    const [option2, setOption2 ] = useState('');
    const [option2Points, setOption2Points ] = useState('');
    const [option3, setOption3 ] = useState('');
    const [option3Points, setOption3Points ] = useState('');
    const [option4, setOption4 ] = useState('');
    const [option4Points, setOption4Points ] = useState('');
    const questionData = {question, answer, option1, option2, option3, option4, option1Points, option2Points, option3Points, option4Points}

    const handleClick = () => {
        history.push('/editquiz');
    }

    async function getAndPostData(){
        let response = await GetQuizByID(quizID);
        response.data.questions.push(questionData);
        await PutQuizByID(quizID, response.data);
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        getAndPostData();
        setQuestion('');
        setAnswer('');
        setOption1('');
        setOption1Points('');
        setOption2('');
        setOption2Points('');
        setOption3('');
        setOption3Points('');
        setOption4('');
        setOption4Points('');
    }

    return (
        <div className='addquestion'>
            <div className='addquestion_container'>
                <button onClick={handleClick}>Back to Edit Quiz</button>
                <form onSubmit={handleSubmit}>
                    <input required value={question} onChange={(e)=> setQuestion(e.target.value)} type="text" placeholder='Question Title'  />

                    <input required value={option1} onChange={(e)=> setOption1(e.target.value)} type="text" placeholder='Option1'  />
                    <input required value={option1Points} onChange={(e)=> setOption1Points(e.target.value)} type="number" placeholder='Points' min='-1' max='1' step='2' />

                    <input required value={option2} onChange={(e)=> setOption2(e.target.value)} type="text" placeholder='Option2'  />
                    <input required value={option2Points} onChange={(e)=> setOption2Points(e.target.value)} type="number" placeholder='Points' min='-1' max='1' step='2' />

                    <input required value={option3} onChange={(e)=> setOption3(e.target.value)} type="text" placeholder='Option3'  />
                    <input required value={option3Points} onChange={(e)=> setOption3Points(e.target.value)} type="number" placeholder='Points' min='-1' max='1' step='2' />

                    <input required value={option4} onChange={(e)=> setOption4(e.target.value)} type="text" placeholder='Option4'  />
                    <input required value={option4Points} onChange={(e)=> setOption4Points(e.target.value)} type="number" placeholder='Points' min='-1' max='1' step='2' />

                    <input required value={answer} onChange={(e)=> setAnswer(e.target.value)} type="number" placeholder='Correct Option' max='4' min='1' step='1' />

                    <button>Add Question</button>
                </form>
            </div>
        </div>
    )
}

export default AddQuestion
