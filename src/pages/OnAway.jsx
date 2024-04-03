import {useNavigate} from "react-router-dom";

const OnAway = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="p-10 flex flex-col gap-10 lg:flex-row justify-between items-center w-full">
        <img src="/icons/cheers.png" className="w-[24rem] h-[24rem]" />
        <div className="flex flex-col gap-3 lg:w-[60%]">
          <h1 className="text-4xl font-semibold">You&apos;re on way!</h1>
          <span className="text-3xl mt-5">⭐⭐⭐⭐⭐</span>
          <p className="text-lg font-normal lg:w-[70%]">
            &quot;
            <i>
              Through it&apos;s engaging and well-structured courses, Brilliant
              has taught me mathematical concepts that i previously struggled to
              understand. I now feel confident approaching both technical job
              interviews and real world problem solving situations.
            </i>
            &quot;
          </p>
          <span className="mt-5 font-semibold">
            <i>-Jacob S.</i>
          </span>
        </div>
      </div>
      <div className="flex items-center justify-center mt-3">
        <button className="text-white bg-black py-2 px-10 text-lg rounded-md" onClick={()=>navigate("/finding-path")}>
          Continue
        </button>
      </div>
    </>
  );
}

export default OnAway