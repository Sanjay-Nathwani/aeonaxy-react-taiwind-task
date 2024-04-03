import {useNavigate} from "react-router-dom";

const Home = () => {

  const navigate = useNavigate();

  return (
    <div className="w-full h-full lg:w-[50%] flex flex-col items-center gap-6">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-3xl font-bold">Which describes you best?</h1>
        <p className="text-lg p-3">
          This will help us personalize your experience.
        </p>
      </div>

      <div className="flex flex-col gap-3 w-full">
        <span className="flex items-center cursor-pointer gap-3 w-full border-2 border-gray-300 rounded-md p-3">
          <img
            src="/icons/cartoon.png"
            alt="icon1"
            className="w-8 h-8 object-cover"
          />
          <span className="text-lg">
            <span className="font-semibold">Student</span> or soon to be
            enrolled
          </span>
        </span>
        <span className="flex items-center cursor-pointer gap-3 w-full border-2 border-gray-300 rounded-md p-3">
          <img
            src="/icons/girl.png"
            alt="icon1"
            className="w-8 h-8 object-cover"
          />
          <span className="text-lg">
            <span className="font-semibold">Professional</span> pursuing a
            career
          </span>
        </span>
        <span className="flex items-center cursor-pointer gap-3 w-full border-2 border-gray-300 rounded-md p-3">
          <img
            src="/icons/man.png"
            alt="icon1"
            className="w-8 h-8 object-cover"
          />
          <span className="text-lg">
            <span className="font-semibold">Parent</span> of a school-age child
          </span>
        </span>
        <span className="flex items-center cursor-pointer gap-3 w-full border-2 border-gray-300 rounded-md p-3">
          <img
            src="/icons/boy.png"
            alt="icon1"
            className="w-8 h-8 object-cover"
          />
          <span className="text-lg font-semibold">Lifelong Learner</span>
        </span>
        <span className="flex items-center cursor-pointer gap-3 w-full border-2 border-gray-300 rounded-md p-3">
          <img
            src="/icons/girl1.png"
            alt="icon1"
            className="w-8 h-8 object-cover"
          />
          <span className="text-lg font-semibold">Teacher</span>
        </span>
        <span className="flex items-center cursor-pointer gap-3 w-full border-2 border-gray-300 rounded-md p-3">
          <img
            src="/icons/boy1.png"
            alt="icon1"
            className="w-8 h-8 object-cover"
          />
          <span className="text-lg font-semibold">Other</span>
        </span>
        <div className="flex items-center justify-center">
          <button className="text-white bg-black py-2 px-10 text-lg rounded-md" onClick={() => navigate("/interested")}>
            Continue
          </button>
        </div>
      </div>
    </div>
  );
}

export default Home;