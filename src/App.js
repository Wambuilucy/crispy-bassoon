import React from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import AddQuestion from './components/AddQuestion';
import CreateQuiz from './components/CreateQuiz';
import EditQuestion from './components/EditQuestion';
import EditQuiz from './components/EditQuiz';
import Instructions from './components/Instructions';
import Navbar from './components/Navbar';
import Result from './components/Result';
import StartQuiz from './components/StartQuiz';
import TakeQuiz from './components/TakeQuiz';
import {QuizProvider} from './Context';

function App() {
	return (
        <Router>
            <>
                <Navbar/>
                <QuizProvider>
                    <Switch>
                        <Route path='/' component={Instructions} exact/>
                        <Route path='/createquiz' component={CreateQuiz} exact/>
                        <Route path='/editquiz' component={EditQuiz} exact/>
                        <Route path='/addquestion/:id' component={AddQuestion} exact/>
                        <Route path='/editquestion/:id' component={EditQuestion} exact/>
                        <Route path='/takequiz' component={TakeQuiz} exact/>
                        <Route path='/startquiz/:id' component={StartQuiz} exact/>
                        <Route path='/result' component={Result} exact/>
                    </Switch>
                </QuizProvider>
            </>
        </Router>
	);
}

export default App;
