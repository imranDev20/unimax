import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const CounterBlock = ({
  target,
  title,
  duration,
  icon,
  symbol,
  first,
  second,
  third,
  fourth,
}) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      className={`text-center flex flex-col items-center bg-white p-10 border-background ${
        first && "border-b-2 border-r-2"
      } ${third && "border-r-2"} ${second && "border-b-2"}`}
      ref={ref}
    >
      <CountUp
        start={0}
        end={inView ? target : 0}
        duration={duration}
        // separator="."
        useEasing={true}
      >
        {({ countUpRef }) => (
          <div className="flex items-center">
            <span
              className="text-6xl font-bold text-primary"
              ref={countUpRef}
            />
            <span className="text-6xl font-semibold ml-1 text-primary">
              {symbol}
            </span>
          </div>
        )}
      </CountUp>
      <p className={`font-medium text-lg animation delay mt-5 text-primary`}>
        {title}
      </p>
    </div>
  );
};

export default CounterBlock;
