import React, { useState, useEffect } from "react";
import { VariousTitles } from "../data/HeroInfo";

export default function Typed() {
  const [index, setIndex] = useState(0);
  const [subIndex, setSubIndex] = useState(0);
  const [blink, setBlink] = useState(true);
  const [reverse, setReverse] = useState(false);

  // typeWriter
  useEffect(() => {
    if (
      subIndex === VariousTitles[index][0].length + 1 &&
      index !== VariousTitles.length - 1 &&
      !reverse
    ) {
      setReverse(true);
      return;
    }

    if (subIndex === 0 && reverse) {
      setReverse(false);
      setIndex((prev) => prev + 1);
      return;
    }

    if (index === VariousTitles.length - 1) {
      setIndex(0);
      setSubIndex(0);
    }

    const timeout = setTimeout(() => {
      setSubIndex((prev) => prev + (reverse ? -1 : 1));
    }, Math.max(reverse ? 75 : subIndex === VariousTitles[index][0].length ? 1500 : 150, Math.random() * 350));

    return () => clearTimeout(timeout);
  }, [subIndex, index, reverse]);

  // blinker
  useEffect(() => {
    const timeout2 = setTimeout(() => {
      setBlink((prev) => !prev);
    }, 500);
    return () => clearTimeout(timeout2);
  }, [blink]);

  return (
    <>
      <p className={"text-small "}>
        A{" "}
        <span className={VariousTitles[index][1]}>
          {`${VariousTitles[index][0].substring(0, subIndex)}${
            blink ? "|" : " "
          }`}
        </span>
      </p>
    </>
  );
}
