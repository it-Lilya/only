interface NavigationProps {
  currentEvent: number;
  numberEvents: number;
  loading: (index: number) => void;
  count: (length: number, index: number) => string;
}

export default NavigationProps;
