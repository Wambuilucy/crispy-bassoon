import React from 'react'
import '../App.css';

function Instructions() {
    return (
        <div className='instructions'>
            <div className='instructions_container'>
                <h3>General Instructions</h3>
                <h4>Create Quiz</h4>
                <ul>
                    <li>Enter the subject, description</li>
                    <li>After clicking Submit, head over to Edit Quiz</li>
                </ul>
                <h4>Edit Quiz</h4>
                <ul>
                    <li>You can Add/Edit Questions by clicking on respective buttons</li>
                    <li>Enter valid inputs while adding/editing questions because the form is validated</li>
                    <li>You can also delete the quiz</li>
                </ul>
                <h4>Take Quiz</h4>
                <ul>
                    <li>Each quiz has a time limit of 60 seconds, feel free to play around with this timer</li>
                    <li>Options are displayed as buttons, change your option any number of times before going to next question</li>
                    <li>Upon finishing the quiz, your score will be displayed</li>
                </ul>
            </div>
        </div>
    )
}

export default Instructions
