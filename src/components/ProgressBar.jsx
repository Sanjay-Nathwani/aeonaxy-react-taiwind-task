import LinearProgress from "@mui/material/LinearProgress";
import Box from "@mui/material/Box";
import { useLocation,useNavigate } from "react-router-dom";
import { ChevronLeft } from "lucide-react";

const progress = {
  "/": {
    progress: 20,
  },
  "/interested": {
    progress: 40,
  },
  "/right-place": {
    progress: 60,
  },
  "/comfort-level": {
    progress: 80,
  },
  "/on-a-way": {
    progress: 100,
  },
};

const ProgressBar = () => {
  const location = useLocation();
  const navigate = useNavigate();

  return (
    <Box
      sx={{ width: "100%" }}
      className="flex items-center justify-center px-6"
    >
      {location.pathname !== "/" && (
        <ChevronLeft className="mr-2 w-10 h-10 text-gray-600 cursor-pointer" strokeWidth={2} onClick={()=>navigate(-1)} />
      )}
      <LinearProgress
        variant="determinate"
        value={progress[location.pathname].progress}
        className="w-full lg:w-[80%]"
        color="success"
      />
    </Box>
  );
};

export default ProgressBar;
