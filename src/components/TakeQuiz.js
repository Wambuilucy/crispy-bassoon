import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { GetQuiz } from '../api';

function TakeQuiz() {
    let [topics, setTopics] = useState([]);

    async function getCards(){
        let response = await GetQuiz();
        setTopics(response.data);
    }

    useEffect(() =>{
        getCards();
    }, [])

    return (
        <div className='container mt-2'>
            <div className="row">
                {
                    topics.map((topic, index) => (
                        <div className="col-lg-4 col-sm-12 col-md-6 mb-3" key={index}>
                            <div className="card h-100" style={{fontFamily: 'monospace'}}>
                                <div className="card-body">
                                    <h3 className="card-title">{topic.topic}</h3>
                                    <p className="card-text">{topic.description}</p>
                                    {
                                        topic.questions.length > 0 ? (
                                            <Link to={`/startquiz/${topic.id}`} className="btn btn-light mb-1">Start Quiz</Link>
                                        ) : (
                                            <span className="btn btn-light mb-1 disabled">Add Questions in the Quiz</span>
                                        )
                                    }
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default TakeQuiz
