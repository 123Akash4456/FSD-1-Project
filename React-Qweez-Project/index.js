import ReactDOM from 'react-dom/client';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';






import React, { useState } from 'react';
function Quiz() {
	const questions = [
		{
			questionText: 'Who is the mentor of our Training class?',
			answerOptions: [
				{ answerText: 'Swati Mam', isCorrect: true },
				{ answerText: 'Suresh Sir', isCorrect: false },
				{ answerText: 'Naresh Sir ', isCorrect: false },
				{ answerText: 'Mukesh Sir ', isCorrect: false },
			],
		},
		{
			questionText: 'Who is our dought session mentor ',
			answerOptions: [
				{ answerText: 'faran Dharmalingam', isCorrect: false },
				{ answerText: 'karan Dharmalingam', isCorrect: true },
				{ answerText: 'paran Dharmalingam ', isCorrect: false },
				{ answerText: 'Saran Dharmalingam', isCorrect: false },
			],
		},
		{
			questionText: 'Who is Topper of our Class?',
			answerOptions: [
				{ answerText: 'Dinesh', isCorrect: false },
				{ answerText: 'Hari-priya', isCorrect: false },
				{ answerText: 'Kunal', isCorrect: true },
				{ answerText: 'Akash', isCorrect: false },
			],
		},
		{
			questionText: 'What is the Good Habit ',
			answerOptions: [
				{ answerText: 'Give Respect ', isCorrect: false },
				{ answerText: 'Give empathy ', isCorrect: false },
				{ answerText: 'Having a good Manner ', isCorrect: false },
				{ answerText: 'All of these options ', isCorrect: true },
			],
		},
	];

const [currentQuestion, setCurrentQuestion] = React.useState(0);

const [showScore, setShowScore] = React.useState(false);

const [score, setScore] = React.useState(0);
const handleAnswerButton = (isCorrect) => {
	if (isCorrect===true) {
		setScore(score + 1);
	}

	const nextQuestion = currentQuestion + 1;
	if(nextQuestion < questions.length) {
		setCurrentQuestion(nextQuestion);
	} else {
		setShowScore(true);
	}
};

	return (
		<div className='qweej'>
      {showScore ? (
				<div className='score-section'>You scored {score} out of {questions.length}</div>
			) : (
				<>
					<div className='question'>
						<div className='quest-count'>
							<span>Question {currentQuestion + 1}</span>/{questions.length}
						</div>
						<div className='question-text'>{questions[currentQuestion].questionText}</div>
					</div>
					<div className='answer-section'>
						{questions[currentQuestion].answerOptions.map((answerOption) => (
						<button onClick={() => handleAnswerButton(answerOption.isCorrect)}>{answerOption.answerText}</button>))}
					</div>
				</>
			)}
		</div>
	);
}


const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Quiz />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
