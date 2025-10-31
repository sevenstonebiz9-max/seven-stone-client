
import { NumberTicker } from "@/components/ui/number-ticker";

interface NumberTickerValueProp {
  numberTickerValue: number;
  color?: string; 
}

const NumberTickerContainer = ({ numberTickerValue, color = "text-black/80" }: NumberTickerValueProp) => {
  return (
    <NumberTicker
      value={numberTickerValue}
      className={`whitespace-pre-wrap text-4xl lg:text-4xl font-semibold tracking-tighter ${color}`}
    />
  );
};

export default NumberTickerContainer;
