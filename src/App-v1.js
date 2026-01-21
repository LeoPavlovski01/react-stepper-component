import React, { useState } from "react";

const messages = [
  "Learn React ⚛️",
  "Apply for jobs 💼",
  "Invest your new income 🤑",
];
export default function App() {
  return (
    <div>
      <Steps></Steps>
      {/*<Steps></Steps>*/}
    </div>
  );
}

function Steps() {
  const [step, setStep] = useState(1);
  const [visible, setVisible] = useState(true);

  function HandlePrevious() {
    if (step > 1) setStep((prev) => prev - 1);
  }
  function HandleNext() {
    if (step < 3) setStep((prev) => prev + 1);
  }
  // function handleVisibility() {
  //   return setVisible(!visible);
  // }
  return (
    <div>
      <button className="close" onClick={() => setVisible((is) => !is)}>
        &times;
      </button>

      {visible && (
        <div className="steps">
          <div className="numbers">
            <div className={step >= 1 ? "active" : ""}>1</div>
            <div className={step >= 2 ? "active" : ""}>2</div>
            <div className={step >= 3 ? "active" : ""}>3</div>
          </div>
          <p className="message">
            Step {step}: {messages[step - 1]}
          </p>
          <div className="buttons">
            <Button
              textColor="#fff"
              backgroundColor="#7950f2"
              onClick={HandlePrevious}
            >
              ⏮<span>Previous</span>
            </Button>
            <Button
              textColor="#fff"
              backgroundColor="#7950f2"
              onClick={HandleNext}
            >
              <span>Next</span>⏭
            </Button>
          </div>
        </div>
      )}
    </div>
  );
}

function Button({ textColor, backgroundColor, onClick, children }) {
  return (
    <button
      onClick={onClick}
      style={{ backgroundColor: backgroundColor, color: textColor }}
    >
      {children}
    </button>
  );
}
