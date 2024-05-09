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
import Adminlogin from "./Pages/login/signin/adminlogin";
import Updatechapter from "./Pages/updatechapter/Updatechapter";

function App() {
  const user = localStorage.getItem("token") || null;
  return (
    <>
      <Router>
        <Header item={user} />
        <Routes>
          <Route path="/" element={<Home />} />
          {user && <Route path="/addchapter" element={<Addchapter />} />}
          {user && (
            <Route path="/updatechapter/:id" element={<Updatechapter />} />
          )}
          {!user && <Route path="/admin" element={<Adminlogin />} />}
          <Route path="/chapter/:Chapterno" element={<Chapter user={user} />} />
          <Route path="*" element={<h1>page not found</h1>} />
        </Routes>
      </Router>
    </>
  );
}

export default App;
