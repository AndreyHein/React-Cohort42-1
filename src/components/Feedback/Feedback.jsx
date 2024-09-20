import { useState } from "react";

import "./styles.css";
import Button from "../../components/Button/Button";

function Feedback() {
  const [countY, setCountY] = useState(0);
  const [countN, setCountN] = useState(0);

  const like = () => {
    setCountY((prevValue) => {
      return prevValue + 1;
    });
  };

  const dislike = () => {
    setCountN((prevValue) => {
      return prevValue + 1;
    });
  };

  const onNull = () => {
    setCountY(0);
    setCountN(0);
  };

  return (
    <div className="feedback-wrapper">
      <div className="button-wraper">
        <div className="button-control">
          <Button name="Like" onClick={like} />
        </div>
        <p className="count">{countY}</p>
      </div>
      <div className="button-wraper">
        <div className="button-control">
          <Button name="Dislike" onClick={dislike} />
        </div>
        <p className="count">{countN}</p>
      </div>
      <div className="button-wraper">
        <div className="button-control">
          <Button name="Reset Result" onClick={onNull} />
        </div>
      </div>
    </div>
  );
}

export default Feedback;
