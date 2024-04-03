import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

const FindingPath = () => {
  const navigate = useNavigate();
  const [coutdown, setCountDown] = useState(5);

  useEffect(() => {
    const timer = setTimeout(() => {
      if (coutdown > 0) {
        setCountDown(coutdown - 1);
      } else {
        navigate("/recommendation");
      }
    }, 1000);

    return () => clearTimeout(timer);
  }, [coutdown, navigate]);

  return (
    <div className="w-screen h-screen flex flex-col items-center justify-center">
      <LoaderCircle
        className="animate-spin w-24 h-24 text-yellow-500"
        strokeWidth={3}
      />
      <span className="font-semibold mt-2 text-3xl p-10 lg:w-[60%] text-center">
        Finding learning path recommendations for you based on your responses
      </span>
      <p className="text-md font-semibold bg-green-400 rounded-full px-10 py-3">
        Please wait for {coutdown} seconds...
      </p>
    </div>
  );
};

export default FindingPath;
