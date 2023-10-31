import { useState } from 'react';
import { IQuestions } from './Interfaces/IQuestions';
import { questions } from './static/questions';
import { useNavigate } from 'react-router-dom';
import axios from 'axios';

const widthPercentage = 1 / questions.length

export const Survey: React.FC = () => {
  const [surveyQuestion, setSurveyQuestion] = useState<Array<IQuestions>>(questions);
  const [index, setIndex] = useState<number>(1);
  const [error, setError] = useState<boolean>(false);
  const navigate = useNavigate();

  const progressBar = (element: any) => {
    const width = element.width * widthPercentage * index;
    return (
      <div style={{ "width": Math.ceil(width) }} className={`rounded-full bg-progressBarBG h-full`}></div>
    )
  }

  function next() {
    if(questions[index - 1].input === "") return setError(true);
    setError(false);
    if(index < questions.length) return setIndex(index + 1)
    if(index + 1 > questions.length) navigate("/results")
  }

  function previous() {
    if(index - 1 >= 1) setIndex(index - 1)
  }

  function handleChange(e: any) {
    let newArray = [...surveyQuestion]
    newArray[index - 1].input = e.target.value;

    setSurveyQuestion([...newArray])
  }

  async function handleSubmit() {
    const data = await axios.post("/get-result", {questions: surveyQuestion})
      .then(response => {
        console.log(response.data)
      })
  }

  return (
    <div className='flex flex-col items-center pt-40 w-screen h-screen bg-mainBG relative'>
      <div className='progress-bar h-16 w-1/2 bg-white rounded-full mb-12 overflow-hidden'>
        {document.querySelector(".progress-bar")?.getBoundingClientRect() !== undefined ? progressBar(document.querySelector(".progress-bar")?.getBoundingClientRect()) : null}
      </div>
      <div className='flex flex-col justify-center items-center w-full'>
        <div className='flex flex-col items-center w-full'>
          <h2 className='text-white text-4xl font-bold'>Question {questions[index - 1].id}</h2>
          <p className='text-white my-6 text-xl w-1/2 text-center'>{questions[index - 1].question}</p>
          {questions[index - 1].selections.map((selection, i) => {
            return (
              <div className='text-white flex items-center mb-6' key={i}>
                <div className='mr-4'>
                  {selection !== "" ? selection + ":" : null}
                </div>
                
                {questions[index-1].inputType === "radio" ? 
                  (
                    <input
                      type="radio"
                      name={`question${questions[index - 1].id}`}
                      className="focus:outline-none"
                      checked={questions[index - 1].input === selection}
                      onChange={(e) => handleChange(e)}
                      value={selection} />
                  ) : (
                    <input
                      type="text"
                      className=" text-black focus:outline-none px-4 py-2 rounded-lg"
                      onChange={(e) => handleChange(e)}
                      value={questions[index - 1].input}/>
                  )}
              </div>
            )
          })}
        </div>
        {error ? (
          <p className='text-red-500'>
            Please complete the form before proceeding
          </p>
        ): null}
      </div>

      <div className='absolute bottom-40 left-1/2 -translate-x-1/2'>
        <button className="bg-btnBG text-white w-40 py-3 mr-10 rounded-full" onClick={previous}>Previous</button>
        {index + 1 > questions.length ? (
          <button className="bg-btnBG text-white w-40 py-3 ml-10 rounded-full" onClick={handleSubmit}>Submit</button>
        ) : (
          <button className="bg-btnBG text-white w-40 py-3 ml-10 rounded-full" onClick={next}>Next</button>
        )}
      </div>
    </div>
  );
};