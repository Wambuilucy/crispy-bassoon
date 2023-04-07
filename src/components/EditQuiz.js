import React,{ useEffect, useState } from 'react'
import { Link } from 'react-router-dom';
import { DeleteQuiz, GetQuiz } from '../api';

function EditQuiz() {

    let [topics, setTopics] = useState([]);

    async function getCards(){
        let response = await GetQuiz();
        setTopics(response.data);
    }

    useEffect(() =>{
        getCards();
    }, []);

    async function deleteQuiz(id){
        await DeleteQuiz(id);
    }


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
                                    <Link to={`/addquestion/${topic.id}`} className="btn btn-light mb-1">Add Questions</Link><br/>
                                    <Link to={`/editquestion/${topic.id}`} className="btn btn-light mb-1">Edit Questions</Link><br/>
                                    <Link to='/' onClick={() => deleteQuiz(topic.id)} className="btn btn-light mb-1">Delete Quiz</Link>
                                </div>
                            </div>
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default EditQuiz
