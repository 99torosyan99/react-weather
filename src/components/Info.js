import { useEffect, useRef, useState } from "react";
import {
  faWind,
  faDroplet,
  faSun,
  faMoon,
  faEarthAfrica,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

import "./../style/info.css";

export default function Info({ info }) {
  const [show, setShow] = useState(true);
  const ref = useRef();

  function scrollPosition() {
    const time = info.time.slice(0, 2);
    if (time <= 8) {
      ref.current.scrollLeft = 0;
    } else if (time >= 9 && time <= 18) {
      ref.current.scrollLeft = ref.current.scrollWidth / 2.5;
    } else if (time > 18) {
      ref.current.scrollLeft = ref.current.scrollWidth;
    }
  }

  useEffect(() => {
    ref.current.scrollLeft = 0;
    if (info.time) {
      scrollPosition();
    }
  });
  console.log(info);
  return (
    <div className="info">
      <div className="info-content">
        <div className="info-content-top">
          <p className="info__city">
            <FontAwesomeIcon icon={faEarthAfrica} /> {info?.name}
          </p>
        </div>
        <div className="info-content-main">
          <div className="info-content-main__one">
            <p className="info__time">
              {info.time ? `Time : ${info.time}` : null}
            </p>
            <img src={`./icons/${info?.icon}.svg`} className="info__icon" />
          </div>
          <div className="info-content-main__two">
            <p className="info__main">{info?.main}</p>
            <p className="info__gradus">
              {show ? info.tempC : info?.tempF}
              <sup>
                <span
                  onClick={() => setShow(true)}
                  className={show ? null : "disable"}
                >
                  °C |
                </span>
                <span
                  onClick={() => setShow(false)}
                  className={show ? "disable" : null}
                >
                  °F
                </span>
              </sup>
            </p>
          </div>
          <div className="info-content-main__three">
            <span>
              <FontAwesomeIcon icon={faWind} /> Wind : {info.speed} km/h
            </span>
            <span>
              <FontAwesomeIcon icon={faDroplet} /> Humidity : {info.humidity} %
            </span>
            <span>
              <FontAwesomeIcon icon={faSun} /> Sunrise : {info.sunrise}
            </span>
            <span>
              <FontAwesomeIcon icon={faMoon} /> Sunset : {info.sunset}
            </span>
          </div>
        </div>
        <div className="info-content-bottom" ref={ref}>
          {info.list.map((elem) => {
            return (
              <div
                className={`info-content-bottom__item${
                  info.time &&
                  info.time.slice(0, 2) == elem.datetime.slice(0, 2)
                    ? " active"
                    : ""
                }`}
              >
                <img
                  src={`./icons/${elem.icon}.svg`}
                  className="info-content-bottom__icon"
                />
                <p>{elem.datetime.slice(0, 5)}</p>
              </div>
            );
          })}
        </div>
      </div>
    </div>
  );
}

// <div className="info-content-center">
{
  /* <div className="info-content__gradus"> </div>
  {show ? info.tempC : info.tempF}
  <sup>
    <span
      onClick={() => setShow(true)}
      className={show ? null : "disable"}
    >
      °C |
    </span>
    <span
      onClick={() => setShow(false)}
      className={show ? "disable" : null}
    >
      °F
    </span>
  </sup>
<img src={`./icons/${info.icon}.svg`} className="info-content__icon" />
<div className="info-content__other">
  <p>{info.main}</p>
</div>
</div> */
}
