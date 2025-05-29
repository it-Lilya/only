interface SliderProps {
  dates: { title: string; events: { date: string; description: string; }[] }[];
  currentEvent: number;
  sliderRef: React.RefObject<HTMLDivElement | null>
}

export default SliderProps;