import { BrowserRouter, Route, Routes } from "react-router-dom";

import Splash from "../screens/splash/index";
import Home from "../screens/home";
import Quiz from "../screens/quiz";
import Win from "../screens/win";
import Lose from "../screens/lose";

const Router = () => {
  return (
    <BrowserRouter>
    <Routes>
      <Route path="/" element={<Splash />} />
      <Route path="/home" element={<Home />} />
      <Route path="/quiz" element={<Quiz />} />
      <Route path="/win" element={<Win />} />
      <Route path="/lose" element={<Lose />} />
    </Routes>
  </BrowserRouter>
  )
};

export default Router;
