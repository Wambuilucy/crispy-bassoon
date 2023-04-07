import React, { useState } from 'react';
import { PostQuiz } from '../api';
import '../App.css';

function CreateQuiz() {

	const [topic, setTopic] = useState('')
	const [description, setDescription] = useState('')

	const handleSubmit = (e) => {
		e.preventDefault();
		const inputData = { topic, description, questions : [] };
		async function getInputData(){
			await PostQuiz(inputData);
		}
		getInputData();
		setTopic('');
		setDescription('');
	}

	return (
		<div className='createQuiz'>
			<div className="createQuiz_container">
				<form onSubmit={handleSubmit}>
					<h1>Create a Quiz</h1>
					<label htmlFor="topic">Enter Topic</label><br/>
					<input required type="text" id='topic' onChange={(e) => setTopic(e.target.value)} value={topic}/> <br/>
					<label htmlFor="description">Enter Description</label> <br/>
					<input required type="text" id='description' onChange={(e) => setDescription(e.target.value)} value={description}/> <br/>
					<button>Submit</button> <br/>
				</form>
			</div>
		</div>
	)
}

export default CreateQuiz
