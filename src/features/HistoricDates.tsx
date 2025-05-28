import React, { useRef, useEffect, useState } from "react";

import "./HistoricDates.scss";

import Spinner from "./historicDates/Spinner/Spinner";
import DateRange from "./historicDates/DateRange/DateRange";
import Navigation from "./historicDates/Navigation/Navigation";
import Slider from "./historicDates/Slider/Slider";

import { dates } from "../shared/assets/dates";

function HistoricDates() {
  const numberOfEvents = dates.length;
  const angleBetweenDots = 360 / numberOfEvents;

  const [angle, setAngle] = useState<number>(angleBetweenDots);
  const [currentEvent, setCurrentEvent] = useState<number>(0);
  const [startDate, setStartDate] = useState<number>(
    Number(dates[0].events[0].date)
  );
  const [endDate, setEndDate] = useState<number>(
    Number(dates[0].events[dates[0].events.length - 1].date)
  );

  const sliderRef = useRef<HTMLDivElement>(null);
  const mainCircleRef = useRef<HTMLDivElement | null>(null);
  const startDateRef = React.useRef<HTMLDivElement | null>(null);
  const endDateRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      sliderRef.current?.classList.add("slider_show");
    }, 300);
    return () => clearTimeout(timer);
  }, [currentEvent]);

  function getTotal(length: number, index: number): string {
    return `${String(index + 1).padStart(2, "0")}/${String(length).padStart(
      2,
      "0"
    )}`;
  }

  function fadeIt(fn: Function): void {
    sliderRef.current?.classList.remove("slider_show");
    const timer = setTimeout(() => {
      fn();
      clearTimeout(timer);
    }, 300);
  }

  function animateDatesRange(index: number): void {
    const newStartDate = Number(dates[index].events[0].date);
    const newEndDate = Number(
      dates[index].events[dates[index].events.length - 1].date
    );

    setStartDate(newStartDate);
    setEndDate(newEndDate);
  }

  function loadThis(index: number): void {
    animateDatesRange(index);

    Array.from(mainCircleRef.current?.children || []).forEach((child, idx) => {
      child.classList.toggle("spinner__shoulder_active", idx === index);
    });
    const angleOfRotation = angleBetweenDots - index * angleBetweenDots;

    fadeIt(() => {
      setCurrentEvent(index);
      setAngle(angleOfRotation);
    });
  }

  return (
    <main className="main">
      <section className="historic-dates">
        <h1 className="historic-dates__heading">Исторические даты</h1>
        <DateRange
          startDate={startDate}
          endDate={endDate}
          startDateRef={startDateRef}
          endDateRef={endDateRef}
        />
        <Spinner
          mainCircleRef={mainCircleRef}
          numberOfEvents={numberOfEvents}
          angle={angle}
          dates={dates}
          currentEvent={currentEvent}
          loadThis={loadThis}
        />
        <Navigation
          currentEvent={currentEvent}
          numberOfEvents={numberOfEvents}
          loadThis={loadThis}
          getTotal={getTotal}
        />
        <Slider
          dates={dates}
          currentEvent={currentEvent}
          sliderRef={sliderRef}
        />
        <div className="events__control-buttons">
          {dates.map((_, index) => {
            return (
              <button
                className={
                  "events__button " +
                  (currentEvent === index ? "events__button_active" : "")
                }
                key={index}
                onClick={() => loadThis(index)}
              ></button>
            );
          })}
        </div>
      </section>
    </main>
  );
}


export default HistoricDates;