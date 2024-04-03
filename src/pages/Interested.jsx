import { useNavigate } from "react-router-dom"; 


const Interested = () => {

  const navigate = useNavigate();
  return (
    <div>
      <div className="w-full h-full flex flex-col items-center gap-6">
        <div className="flex flex-col gap-2 items-center justify-center">
          <h1 className="text-3xl font-bold">
            Which are you most interested in?
          </h1>
          <p className="text-lg p-3">
            Choose just one. This will help us get you started (but won&apos;t
            limit your experience).
          </p>
        </div>

        <div className="flex flex-col gap-3 w-full items-center">
          <span className="flex items-center gap-3 cursor-pointer w-[90%] border-2 border-gray-300 rounded-md p-3">
            <img
              src="/icons/graph.png"
              alt="icon1"
              className="w-8 h-8 object-cover"
            />
            <span className="text-lg font-semibold">
              Learning specific skiils to advance my career
            </span>
          </span>
          <span className="flex items-center gap-3 cursor-pointer w-[90%] border-2 border-gray-300 rounded-md p-3">
            <img
              src="/icons/earth.png"
              alt="icon1"
              className="w-8 h-8 object-cover"
            />
            <span className="text-lg font-semibold">
              Exploring new topic I&apos;m interested in
            </span>
          </span>
          <span className="flex items-center gap-3 cursor-pointer w-[90%] border-2 border-gray-300 rounded-md p-3">
            <img
              src="/icons/arrow.png"
              alt="icon1"
              className="w-8 h-8 object-cover"
            />
            <span className="text-lg font-semibold">
              Refreshing my math foundations
            </span>
          </span>
          <span className="flex items-center gap-3 cursor-pointer w-[90%] border-2 border-gray-300 rounded-md p-3">
            <img
              src="/icons/target.png"
              alt="icon1"
              className="w-8 h-8 object-cover"
            />
            <span className="text-lg font-semibold">
              Exercising my brain to stay sharp
            </span>
          </span>
          <span className="flex items-center gap-3 cursor-pointer w-[90%] border-2 border-gray-300 rounded-md p-3">
            <img
              src="/icons/eyes.png"
              alt="icon1"
              className="w-8 h-8 object-cover"
            />
            <span className="text-lg font-semibold">
              Something else
            </span>
          </span>
          <div className="flex items-center justify-center mt-5">
            <button className="text-white bg-black py-2 px-10 text-lg rounded-md" onClick={()=>navigate("/right-place")}>
              Continue
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Interested