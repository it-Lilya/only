import React from "react";

import './Spinner.scss';

interface SpinnerProps {
  mainCircleRef: React.RefObject<HTMLDivElement | null>;
  numberOfEvents: number;
  angle: number;
  dates: { title: string; events: { date: string; description: string; }[] }[];
  currentEvent: number;
  loadThis: (index: number) => void;
}

const Spinner: React.FC<SpinnerProps> = ({ mainCircleRef, numberOfEvents, angle, dates, currentEvent, loadThis}) => {
  return (
    <div className="historic-dates__spinner spinner">
      <div
        ref={mainCircleRef}
        className="spinner__main-circle"
        style={
          {
            "--count": numberOfEvents,
            "--angle": angle + "deg",
          } as React.CSSProperties
        }
      >
        {dates.map((item, index) => {
          const { title } = item;
          const idx = index + 1;
          return (
            <div
              key={index}
              className={
                "spinner__shoulder " +
                (currentEvent === index ? "spinner__shoulder_active" : "")
              }
              style={{ "--i": idx } as React.CSSProperties}
              onClick={() => loadThis(index)}
            >
              <div className="spinner__circle-area">
                <p className="spinner__circle">
                  {idx}
                  <span className="spinner__title">{title}</span>
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