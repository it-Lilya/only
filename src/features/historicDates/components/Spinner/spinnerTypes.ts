interface SpinnerProps {
  circleRef: React.RefObject<HTMLDivElement | null>;
  numberOfEvents: number;
  angle: number;
  dates: { title: string; events: { date: string; description: string; }[] }[];
  currentEvent: number;
  loading: (index: number) => void;
}

export default SpinnerProps;