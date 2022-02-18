import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";

import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavBar from "./components/NavBar";
import Home from "./components/Home";
import Upload from "./components/Upload"
function App() {
  return (
    <div>
      <BrowserRouter>
      <ToastContainer />
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
