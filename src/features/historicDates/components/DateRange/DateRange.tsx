import dateRangeProps from './dateRangeTypes';

import './DateRange.scss';

const DateRange: React.FC<dateRangeProps> = ({ startDate, endDate, startDateRef, endDateRef }) => {
  return (
    <div className="history-dates__range range">
      <p className='range_start' ref={startDateRef}>{startDate}</p>
      <p className='range_end' ref={endDateRef}>{endDate}</p>
    </div> 
  );
}

export default DateRange;