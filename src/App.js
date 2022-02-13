import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Login from "./Pages/Login.js";
import Home from "./Pages/Home.js";
import Reserva from "./Pages/Reserva.js";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/">
          <Route index element={<Login />}></Route>
          <Route path="/*" element={<h1>Error</h1>}></Route>
          <Route path="/Home" element={<Home />}></Route>
          <Route path="/Reserva" element={<Reserva />}></Route>
          <Route path="/Login" element={<Login />}></Route>
        </Route>
      </Routes>
    </Router>
  );
}

export default App;
