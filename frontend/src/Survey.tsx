import { useState } from 'react';
import ReactDOM from 'react-dom';

export const Survey = () => {
  const [questions, setQuestions] = useState([
    {
      id: 1,
      question: 'What is your name?',
      answers: [
        'John Doe',
        'Jane Doe'
      ],
      answer: ''
    },
    {
      id: 2,
      question: 'How old are you?',
      answers: [
        '18-24',
        '25-34',
        '35-44',
        '45+'
      ],
      answer: ''
    },
    {
      id: 3,
      question: 'What is your favorite color?',
      answers: [
        'Red',
        'Blue',
        'Green',
        'Black'
      ],
      answer: ''
    }
  ]);

  const handleNext = () => {
    const nextQuestion = questions[questions.indexOf(currentQuestion) + 1];
    setCurrentQuestion(nextQuestion);
  };

  const handlePrevious = () => {
    const previousQuestion = questions[questions.indexOf(currentQuestion) - 1];
    setCurrentQuestion(previousQuestion);
  };

  const [currentQuestion, setCurrentQuestion] = useState(questions[0]);

  return (
    <div>
      <h1>{currentQuestion.question}</h1>
      <ul>
        {currentQuestion.answers.map((answer) => (
          <li key={answer}>
            <input
              type="radio"
              name="answer"
              value={answer}
              checked={currentQuestion.answer === answer}
              onChange={() => setCurrentQuestion({ ...currentQuestion, answer })}
            />
            {answer}
          </li>
        ))}
      </ul>
      <div>
        <button onClick={handlePrevious}>Previous</button>
        <button onClick={handleNext}>Next</button>
      </div>
    </div>
  );
};

ReactDOM.render(<Survey />, document.getElementById('root'));