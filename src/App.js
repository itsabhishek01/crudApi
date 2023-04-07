import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Read from "./components/Read/Read";
import Edit from "./components/Edit/Edit";
import Crud from "./components/CRUD/Crud";
function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Crud />} />
        <Route path="/data" element={<Read />} />
        <Route path="/edit" element={<Edit />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
