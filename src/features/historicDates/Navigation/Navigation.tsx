import "./Navigation.scss";

interface NavigationProps {
  currentEvent: number;
  numberOfEvents: number;
  loadThis: (index: number) => void;
  getTotal: (length: number, index: number) => string;
}

const Navigation: React.FC<NavigationProps> = ({
  currentEvent,
  numberOfEvents,
  loadThis,
  getTotal,
}) => {
  return (
    <div className="historic-dates__navigation navigation">
      <p className="navigation__total">
        {getTotal(numberOfEvents, currentEvent)}
      </p>
      <div className="navigation__buttons control-buttons">
        <button
          className="control-buttons__default control-buttons__prev"
          onClick={() => currentEvent > 0 && loadThis(currentEvent - 1)}
          disabled={currentEvent === 0 ? true : false}
        ></button>
        <button
          className="control-buttons__default control-buttons__next"
          onClick={() =>
            currentEvent < numberOfEvents - 1 && loadThis(currentEvent + 1)
          }
          disabled={currentEvent === numberOfEvents - 1 ? true : false}
        ></button>
      </div>
    </div>
  );
};


export default Navigation;