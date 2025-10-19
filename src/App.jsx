import { BrowserRouter, Routes, Route } from "react-router-dom";
import ProfileCard from "./landing/ProfileCard";
import "./App.css";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ProfileCard />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
