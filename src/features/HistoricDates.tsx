import React, { useRef, useEffect, useState } from "react";

import Spinner from "./historicDates/components/Spinner/Spinner";
import DateRange from "./historicDates/components/DateRange/DateRange";
import Navigation from "./historicDates/components/Navigation/Navigation";
import Slider from "./historicDates/components/Slider/Slider";
import EventsButton from "./historicDates/components/EventsButton/EventsButton";

import { dates } from "../shared/assets/dates";

import "./HistoricDates.scss";

function HistoricDates() {
  const numberEvents = dates.length;
  const pointAngle = 360 / numberEvents;

  const [angle, setAngle] = useState<number>(pointAngle);
  const [currentEvent, setCurrentEvent] = useState<number>(0);
  const [startDate, setStartDate] = useState<number>(Number(dates[0].events[0].date));
  const [endDate, setEndDate] = useState<number>(Number(dates[0].events[dates[0].events.length - 1].date));

  const sliderRef = useRef<HTMLDivElement>(null);
  const circleRef = useRef<HTMLDivElement | null>(null);
  const startDateRef = React.useRef<HTMLDivElement | null>(null);
  const endDateRef = React.useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      sliderRef.current?.classList.add("slider_show");
    }, 320);

    return () => clearTimeout(timer);
  }, [currentEvent]);

  function count(length: number, index: number): string {
    return `${String(index + 1)}/${String(length)}`;
  }

  function hiding(fn: Function): void {
    sliderRef.current?.classList.remove("slider_show");

    const timer = setTimeout(() => {
      fn();
      clearTimeout(timer);
    }, 300);
  }

  function loading(index: number): void {
    dateAnimation(index);

    Array.from(circleRef.current?.children || []).forEach((child, idx) => {
      child.classList.toggle("spinner__shoulder_active", idx === index);
    });
    const angleRotation = pointAngle - index * pointAngle;

    hiding(() => {
      setCurrentEvent(index);
      setAngle(angleRotation);
    });
  }

  function dateAnimation(index: number): void {
    const newStartDate = Number(dates[index].events[0].date);
    const newEndDate = Number(
      dates[index].events[dates[index].events.length - 1].date
    );

    setStartDate(newStartDate);
    setEndDate(newEndDate);
  }

  return (
    <main className="main">
      <section className="history-dates">
        <h1 className="history-dates__heading">Исторические даты</h1>
        <DateRange
          startDate={startDate}
          endDate={endDate}
          startDateRef={startDateRef}
          endDateRef={endDateRef}
        />
        <Spinner
          circleRef={circleRef}
          currentEvent={currentEvent}
          numberOfEvents={numberEvents}
          angle={angle}
          dates={dates}
          loading={loading}
        />
        <Navigation
          currentEvent={currentEvent}
          numberEvents={numberEvents}
          loading={loading}
          count={count}
        />
        <Slider
          dates={dates}
          currentEvent={currentEvent}
          sliderRef={sliderRef}
        />
        <EventsButton dates={dates} currentEvent={currentEvent} loading={loading} />
      </section>
    </main>
  );
}

export default HistoricDates;