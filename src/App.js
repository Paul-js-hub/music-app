import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Upload from "./components/Upload"
function App() {
  return (
    <div>
      <BrowserRouter>
      <NavBar />
      <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/upload" element={<Upload />} />
      </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
