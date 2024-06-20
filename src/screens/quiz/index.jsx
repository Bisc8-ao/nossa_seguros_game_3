import "./main.scss";

import { useState } from "react";
import { questions } from "../../data/questions";

import Trivia from "../../components/trivia";

function Quiz() {
  const [questionNumber, setQuestionNumber] = useState(1);
  const [stop, setStop] = useState(false);

  return (
    <div className="_qz_wrapper">
      <div className="_qz_container">
        <Trivia
          data={questions}
          setStop={setStop}
          questionNumber={questionNumber }
          setQuestionNumber={setQuestionNumber}
        />
      </div>
    </div>
  );
}

export default Quiz;
