"use client"
import Image from 'next/image'
import style from './page.css'
import moment from 'moment';

import { useState, useRef, useEffect } from 'react';

export default function Home() {
  // The state for our timer

  function computeDays(time){
    return Math.floor(time / (3600 * 24));
  }

  function computeHours(time){
    return Math.floor((time % (60 * 60 * 24)) / (3600));
  }

  function computeMinutes(time){
    return Math.floor((time % (60 * 60)) / 60);
  }

  function computeSeconds(time){
    return Math.floor(time % 60);
  }

  function zeroPad(num) {
    
      return num.toString().padStart(2, "0");
    
  }

  const [time, setTime] = useState(777600);
  const [days, setDay] = useState(computeDays(time));
  const [hours, setHour] = useState(computeHours(time));
  const [minutes, setMinutes] = useState(computeMinutes(time));
  const [seconds, setSeconds] = useState(computeSeconds(time));

  const prevCountDay = useRef();
  const prevCountHour = useRef();
  const prevCountMin = useRef();
  const prevCountRef = useRef();

  useEffect(() => {
    if (time > 0) {

      const check = days;
      const timer = setInterval(() => {
        setTime(prevTime => prevTime - 1);
        setDay(prevDay => computeDays(time));
        setHour(prevHour => computeHours(time));
        setMinutes(prevMinutes => computeMinutes(time));
        setSeconds(prevSeconds => computeSeconds(time));

        prevCountDay.current = zeroPad(days);
        prevCountHour.current = zeroPad(hours);
        prevCountMin.current = zeroPad(minutes);
        prevCountRef.current = zeroPad(seconds);
      }, 1000);

      

      return () => clearInterval(timer);
    }
  }, [time, days, hours, minutes, seconds])

  return (
      <main>
          <div className="wrapper">
            <h1>We're launching soon</h1> 
            <div className="timer">
              <div className="days">
                  <div className="card">
                    
                    <div className="card-upper">
                      <p>{zeroPad(days)}</p>
                    </div>
                    <div className="card-lower">
                        <div className={prevCountDay.current != days ? "card-lower-inner fold" : "card-lower-inner"}>
                          <div className="card-lower-front"><p>{prevCountDay.current}</p></div>
                          <div className="card-lower-back"></div>
                          
                        </div>
                        <p>{zeroPad(days)}</p>
                    </div>
                  </div>
                  <p>Days</p>
              </div>
              <div className="hours">
              <div className="card">
                    
                    <div className="card-upper">
                      <p>{zeroPad(hours)}</p>
                    </div>
                    <div className="card-lower">
                        <div className={prevCountHour.current != hours ? "card-lower-inner fold" : "card-lower-inner"}>
                          <div className="card-lower-front"><p>{prevCountHour.current}</p></div>
                          <div className="card-lower-back"></div>
                        </div>
                        <p>{zeroPad(hours)}</p>
                    </div>
                  </div>
                  <p>Hours</p>
              </div>
              <div className="minutes">
              <div className="card">
                    
                    <div className="card-upper">
                      <p>{zeroPad(minutes)}</p>
                    </div>
                    <div className="card-lower">
                        <div className={prevCountMin.current != minutes ? "card-lower-inner fold" : "card-lower-inner"}>
                          <div className="card-lower-front"><p>{prevCountMin.current}</p></div>
                          <div className="card-lower-back"></div>
                        </div>
                        <p>{zeroPad(minutes)}</p>
                    </div>
                  </div>
                  <p>Minutes</p>
              </div>
              <div className="seconds">
              <div className="card">
                    <h1></h1>
                    <div className="card-upper">
                      <p>{zeroPad(seconds)}</p>
                    </div>
                    <div className="card-lower">
                        <div className={prevCountRef.current != seconds ? "card-lower-inner fold" : "card-lower-inner"}>
                          <div className="card-lower-front"><p>{prevCountRef.current}</p></div>
                          <div className="card-lower-back"></div>
                          
                        </div>
                        <p>{zeroPad(seconds)}</p>
                    </div>
                  </div>
                  <p>Seconds</p>
              </div>
            </div>

          </div>
          <footer className='social-media'> 
            <a className="facebook" href=""></a>
            <a className="pinterest" href=""></a>
            <a className="instagram" href=""></a>
        </footer>
      </main>
  )
}
