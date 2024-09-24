import { useState } from "react";

import "./styles.css";
import Button from "../../components/Button/Button";

function Feedback() {
  const [countLike, setCountLike] = useState(0);
  const [countDislike, setCountDislike] = useState(0);

  const onLike = () => {
    setCountLike((prevValue) => {
      return prevValue + 1;
    });
  };

  const onDislike = () => {
    setCountDislike((prevValue) => {
      return prevValue + 1;
    });
  };

  const resetResult = () => {
    setCountLike(0);
    setCountDislike(0);
  };

  return (
    <div className="feedback-wrapper">
      <div className="button-wraper">
        <div className="button-control">
          <Button name="Like" onClick={onLike} />
        </div>
        <p className="count">{countLike}</p>
      </div>
      <div className="button-wraper">
        <div className="button-control">
          <Button name="Dislike" onClick={onDislike} />
        </div>
        <p className="count">{countDislike}</p>
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
