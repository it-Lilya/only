import NavigationProps from "./navigationTypes";

import "./Navigation.scss";

const Navigation: React.FC<NavigationProps> = ({ currentEvent, numberEvents, loading, count }) => {
  return (
    <div className="history-dates__navigation navigation">
      <p className="navigation__total">
        {count(numberEvents, currentEvent)}
      </p>
      <div className="navigation__buttons control">
        <button
          className="control__default control__prev"
          onClick={() => currentEvent > 0 && loading(currentEvent - 1)}
          disabled={currentEvent === 0 ? true : false}
        ></button>
        <button
          className="control__default control__next"
          onClick={() =>
            currentEvent < numberEvents - 1 && loading(currentEvent + 1)
          }
          disabled={currentEvent === numberEvents - 1 ? true : false}
        ></button>
      </div>
    </div>
  );
};


export default Navigation;