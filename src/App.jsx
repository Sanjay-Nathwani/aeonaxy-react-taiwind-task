import { BrowserRouter,Routes,Route } from "react-router-dom"
import Home from "./pages/Home"
import Interested from "./pages/Interested"
import RightPlace from "./pages/RightPlace"
import Layout from "./components/Layout"
import ComfortLevel from "./pages/ComfortLevel"
import OnAway from "./pages/OnAway"
import FindingPath from "./pages/FindingPath"
import Recommedation from "./pages/Recommedation"


function App() { 
  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={
            <Layout>
              <Home />
            </Layout>
          }
        />
        <Route
          path="/interested"
          element={
            <Layout>
              <Interested />
            </Layout>
          }
        />
        <Route
          path="/right-place"
          element={
            <Layout>
              <RightPlace />
            </Layout>
          }
        />
        <Route
          path="/comfort-level"
          element={
            <Layout>
              <ComfortLevel />
            </Layout>
          }
        />
        <Route
          path="/on-a-way"
          element={
            <Layout>
              <OnAway />
            </Layout>
          }
        />
        <Route path="/finding-path" element={<FindingPath />} />
        <Route path="/recommendation" element={<Recommedation />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App
