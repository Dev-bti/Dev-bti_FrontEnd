import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import StartPage from "./components/StartPage";
import QuestionPage from "./components/QuestionPage";
import ResultPage from "./components/ResultPage";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<StartPage />} />
        <Route exact path="/question/:question_id" element={<QuestionPage />} />
        <Route exact path="/result" element={<ResultPage />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
