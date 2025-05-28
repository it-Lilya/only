import './DateRange.scss';

interface DateRangeProps {
  startDate: number;
  endDate: number;
  startDateRef: React.RefObject<HTMLDivElement | null>;
  endDateRef: React.RefObject<HTMLDivElement | null>;
}

const DateRange: React.FC<DateRangeProps> = ({ startDate, endDate, startDateRef, endDateRef }) => {
  return (
    <div className="historic-dates__range range">
      <p className='range_start' ref={startDateRef}>{startDate}</p>
      <p className='range_end' ref={endDateRef}>{endDate}</p>
    </div> 
  );
}

export default DateRange;