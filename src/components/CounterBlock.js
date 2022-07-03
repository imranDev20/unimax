import React from "react";
import { useInView } from "react-intersection-observer";
import CountUp from "react-countup";

const CounterBlock = ({ target, title, duration, icon, symbol }) => {
  const [ref, inView] = useInView({
    threshold: 0.3,
    triggerOnce: true,
  });

  return (
    <div
      className="text-center flex flex-col items-center bg-white p-10 border border-background"
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
            <span className="text-5xl font-semibold" ref={countUpRef} />
            <span className="text-4xl font-semibold ml-1">{symbol}</span>
          </div>
        )}
      </CountUp>
      <p className={`font-medium text-lg animation delay mt-5`}>{title}</p>
    </div>
  );
};

export default CounterBlock;
