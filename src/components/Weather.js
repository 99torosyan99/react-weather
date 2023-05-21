import Form from "./Form";
import Info from "./Info";
import { useState } from "react";
import Days from "./Days";

import './../style/weather.css'

export default function Weather() {
const [info, setInfo] = useState({
  show:false
})

  return (
    <div className={`weather ${info.img}`} >
      <div className="weather-container">
          {info.show ? ( 
            <Info info={info} />
          ) : (
          <div className="err">{info?.err}</div>
          )}  
          {info.show? <Days info={info} setInfo={setInfo} now={{...info}}/> : null}
          <Form setInfo={setInfo}/>
        </div>
      </div>
  );
}
