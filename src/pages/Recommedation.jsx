
const Recommedation = () => {
  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <h1 className="font-bold text-4xl text-center p-2">
        Learning paths based on your answers
      </h1>
      <p className="mt-5">Choose one to get started. You can switch anytime.</p>
      <div className="flex flex-col md:flex-row gap-4 mt-5 lg:w-[70%] p-6">
        <div className="cursor-pointer flex items-center border-2 rounded-md p-5 relative justify-between flex-1">
          <span className="absolute px-3 py-1 text-sm rounded-2xl font-bold bg-yellow-500 top-0 -translate-y-1/2 left-1/2 -translate-x-1/2">
            MOST POPULAR
          </span>
          <span className="text-lg w-[48%] ml-3">
            <b>Foundational Math</b> Build your foundational skills in
            algebra,geometry and probabilty.
          </span>
          <img src="/icons/recommend.png" className="w-36 h-36" />
        </div>
        <div className="cursor-pointer flex items-center justify-between border-2 rounded-md p-5 flex-1">
          <span className="text-lg w-[48%] ml-3">
            <b>Mathematical Thinking</b> Build your foundational skills in
            algebra,geometry and probabilty.
          </span>
          <img src="/icons/recommend.png" className="w-36 h-36" />
        </div>
      </div>
    </div>
  );
}

export default Recommedation