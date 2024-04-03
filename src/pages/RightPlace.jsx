
import {useNavigate} from "react-router-dom";

const RightPlace = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="p-10 flex flex-col gap-10 lg:flex-row justify-between items-center w-full">
        <img src="/icons/pulley.png" className="w-[22rem] h-[22rem]" />
        <div className="flex flex-col gap-3 lg:w-[60%]">
          <h1 className="text-4xl font-semibold">You&apos;re on right place</h1>
          <p className="text-2xl font-light lg:w-[70%]">
            Brilliant gets you hands-on to help improve your professional skills
            and knowledge. You&apos;ll interact with concepts and solve fun
            problems in math,science nad computer science
          </p>
        </div>
      </div>
      <div className="flex items-center justify-center mt-3">
        <button className="text-white bg-black py-2 px-10 text-lg rounded-md" onClick={()=>navigate("/comfort-level")}>
          Continue
        </button>
      </div>
    </>
  );
}

export default RightPlace