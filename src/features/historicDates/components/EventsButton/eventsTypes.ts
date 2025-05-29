interface EventsButtonProps {
  dates: { title: string; events: { date: string; description: string; }[] }[];
  currentEvent: number;
  loading: (index: number) => void;
}

export default EventsButtonProps;