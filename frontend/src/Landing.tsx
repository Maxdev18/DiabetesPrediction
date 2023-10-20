import { useNavigate } from "react-router-dom";
import water from "./static/Green-waterfalls.gif";

export const Landing: React.FC = () => {
  const navigate = useNavigate();

  function handleStart() {
    navigate("/survey");
  }

  return (
    <div className="w-screen h-screen flex items-center justify-center relative z-10">
      <img src={water} className="absolute w-screen h-screen -z-10" alt="Waterfall"/>
      <div className="flex flex-col items-center justify-center w-1/2">
        <h2 className="text-4xl text-white font-semibold text-center mb-10">
          This survey predicts if you have diabetes or not.
          Answer each question carefully and you will
          receive your results in the end.
        </h2>

        <button
          className="bg-btnBG text-white font-semibold text-4xl w-1/2 py-4 rounded-xl hover:bg-[#016363] duration-300"
          onClick={handleStart}>Take Survey</button>
      </div>
    </div>
  )
}