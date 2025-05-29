import React from "react";

import SpinnerProps from "./spinnerTypes";

import './Spinner.scss';

const Spinner: React.FC<SpinnerProps> = ({ circleRef, numberOfEvents, angle, dates, currentEvent, loading}) => {
  const spinnerStyle: React.CSSProperties = {
    "--count": numberOfEvents,
    "--angle": `${angle}deg`,
  } as React.CSSProperties;
  
  return (
    <div className="history-dates__spinner spinner">
      <div ref={circleRef} className="spinner__main-circle" style={spinnerStyle}>
        {dates.map((item, index) => {
          const isActive = currentEvent === index;
          const idx = (index + 1).toString();
          return (
            <div
              key={index}
              className={`spinner__shoulder ${isActive ? "spinner__shoulder_active" : ""}`}
              style={{ "--index": idx } as React.CSSProperties}
              onClick={() => loading(index)}
            >
              <div className="spinner__circle-area">
                <p className="spinner__circle">
                  {idx}
                  <span className="spinner__title">{item.title}</span>
                </p>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Spinner;