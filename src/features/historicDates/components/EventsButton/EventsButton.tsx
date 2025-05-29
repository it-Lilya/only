import React from "react";

import EventsButtonProps from "./eventsTypes";

import './EventsButton.scss';

const EventsButton: React.FC<EventsButtonProps> = ({ dates, currentEvent, loading }) => {
  return (
    <div className="events__control-buttons">
      {dates.map((_, index) => {
        return (
          <button
            className = {
              "events__button " +
                (currentEvent === index ? "events__button_active" : "")
            }
            key={index}
            onClick={() => loading(index)}
          ></button>
        );
      })}
    </div>
  );
};

export default EventsButton;