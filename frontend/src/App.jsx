import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import Header from "./Components/Header";
import Home from "./Pages/Home/Home";
import Chapter from "./Pages/Chapter/Chapter";
import Addchapter from "./Pages/addchapter/Addchapter";

function App() {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/addchapter" element={<Addchapter />} />
          <Route path="/" element={<Home />} />
          <Route path="/" element={<Home />} />
          <Route path="/chapter/:Chapterno" element={<Chapter />} />
          <Route path="*" element={<h1>page not found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
