import {useNavigate} from "react-router-dom";


const ComfortLevel = () => {

  const navigate = useNavigate();

  return (
    <div className="w-full h-full flex flex-col items-center gap-6">
      <div className="flex flex-col gap-2 items-center justify-center">
        <h1 className="text-3xl font-bold">
          Which is your math comfort level?
        </h1>
        <p className="text-lg p-3">
          Choose the highest level you feel confident in - you can always adjust
          later.
        </p>
      </div>

      <div className="flex flex-wrap gap-5 items-center justify-center">
        <div className="flex flex-col cursor-pointer items-center justify-center border-2 rounded-lg border-gray-300 p-5 w-60 h-60">
          <img
            src="/icons/image.png"
            alt="img1"
            className="object-cover h-50"
          />
          <span className="font-semibold text-lg mt-2">Arithmetic</span>
          <p className="text-gray-500 text-base">Introductory</p>
        </div>
        <div className="flex flex-col cursor-pointer items-center justify-center border-2 rounded-lg border-gray-300 p-5 w-60 h-60">
          <img
            src="/icons/image1.png"
            alt="img2"
            className="object-cover h-50"
          />
          <span className="font-semibold text-lg mt-2">Basic Algebra</span>
          <p className="text-gray-500 text-base">Foundational</p>
        </div>
        <div className="flex flex-col cursor-pointer items-center justify-center border-2 rounded-lg border-gray-300 p-5 w-60 h-60">
          <img
            src="/icons/image2.png"
            alt="img3"
            className="object-cover h-50"
          />
          <span className="font-semibold text-lg mt-2">
            Intermediate Algebra
          </span>
          <p className="text-gray-500 text-base">Intermediate</p>
        </div>
        <div className="flex flex-col cursor-pointer items-center justify-center border-2 rounded-lg border-gray-300 p-5 w-60 h-60">
          <img
            src="/icons/image3.png"
            alt="img4"
            className="object-cover h-50"
          />
          <span className="font-semibold text-lg mt-2">
            Calculus
          </span>
          <p className="text-gray-500 text-base">Advanced</p>
        </div>
      </div>

      <div className="flex items-center justify-center mt-5">
        <button className="text-white bg-black py-2 px-10 text-lg rounded-md" onClick={()=>navigate("/on-a-way")}>
          Continue
        </button>
      </div>
    </div>
  );
}

export default ComfortLevel