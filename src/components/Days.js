import React, { useEffect, useState, useRef } from "react";
import { itemFilter } from "../helpers/itemFilter";

import "./../style/days.css";

export default function ({ info, setInfo }) {
  const [active, setActive] = useState(0);
  const ref = useRef()

  useEffect(() => {
    ref.current.scrollLeft = 0;
    setActive(0);
  }, info.days);

  return (
    <div className="days" ref={ref}>
      {info.days.map((elem, index) => {
        return (
          <div
            className={`days-item${active == index ? " active" : ""}`}
            onClick={() => {
              if (index == 0) {
                setInfo({ ...info.now, now: info.now });
              } else {
                setInfo(itemFilter(elem, info));
              }
              setActive(index);
            }}
          >
            <div className="days-item-content">
              <img src={`./icons/${elem.icon}.svg`} className="days__img" />
              <p className="days__date">
                {index == 0
                  ? `Today`
                  : `Date  ${elem.datetime.slice(-5).replaceAll("-", ".")}`}
              </p>
              <p className="days__gradus">
                {Math.trunc(((elem.temp - 32) * 5) / 9)}
                <sup>°C </sup>
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
}
