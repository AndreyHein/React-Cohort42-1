import { useState } from "react";

import "./styles.css";
import Button from "../../components/Button/Button";

function Feedback() {
  const [countY, setCountY] = useState(0);
  const [countN, setCountN] = useState(0);

  const countLike = () => {
    setCountY((prevValue) => {
      return prevValue + 1;
    });
  };

  const countDislike = () => {
    setCountN((prevValue) => {
      return prevValue + 1;
    });
  };

  const resetResult = () => {
    countLike(0);
    countDislike(0);
  };

  return (
    <div className="feedback-wrapper">
      <div className="button-wraper">
        <div className="button-control">
          <Button name="Like" onClick={countLike} />
        </div>
        <p className="count">{countY}</p>
      </div>
      <div className="button-wraper">
        <div className="button-control">
          <Button name="Dislike" onClick={countDislike} />
        </div>
        <p className="count">{countN}</p>
      </div>
      <div className="button-wraper">
        <div className="button-control">
          <Button name="Reset Result" onClick={resetResult} />
        </div>
      </div>
    </div>
  );
}

export default Feedback;
