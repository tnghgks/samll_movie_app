import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./routes/Home";
import Detail from "./routes/Detail";
import "./style.css";

function App() {
  const PUBLIC_URL = process.env.PUBLIC_URL ? process.env.PUBLIC_URL : "http://localhost:3000";
  console.log(PUBLIC_URL);
  return (
    <Router>
      <Routes>
        <Route path={`${PUBLIC_URL}/`} element={<Home />} />
        <Route path={`${PUBLIC_URL}/movie/:id`} element={<Detail />} />
      </Routes>
    </Router>
  );
}

export default App;
