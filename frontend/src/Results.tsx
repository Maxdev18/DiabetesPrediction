import { useEffect, useState } from "react";

export const Results: React.FC = () => {
  const [result, setResult] = useState<string>("")
  
  useEffect(() => {
    if(localStorage.getItem("result") !== null) {
      setResult(localStorage.getItem("result") as string)
    }
  }, [])

  return (
    <div className='flex flex-col items-center pt-40 w-screen h-screen bg-mainBG relative'>
      <p className="text-white text-3xl font-bold">Results</p>
      <div className="w-2/5 mt-4">
        {parseInt(result) === 1 ? (
          <div className="w-full">
            <p className="text-white text-center">
              Your prediction result is <span> {result} </span>, you are at a risk of possessing diabetes. Please consult a doctor to see whether you have diabetes.
            </p>
          </div>
        ) : (
          <div className="w-full">
            <p className="text-white text-center">
              Your prediction result is <span> {result} </span>, you might not be in a risk group of diabetes, but if you are worried about your health then you should consult a doctor.
            </p>
          </div>
        )}
      </div>

      <a href="/survey" className="bg-btnBG text-white py-3 ml-10 rounded-full font-semibold text-2xl px-4 mt-10">Take another survey</a>
    </div>
  )
}