"use strict"

setInterval( () => {
      let date =  new Date();
      let hourTime = date.getHours();
      let minuteTime = date.getMinutes();
      let secondTime = date.getSeconds();

      let hourRotation = 30 * hourTime + minuteTime / 2;
      let minuteRotation = 6 * minuteTime;
      let secondRotation = 6 * secondTime;

      hour.style.transform = `rotate( ${hourRotation}deg)`;
      minute.style.transform = `rotate( ${minuteRotation}deg)`;
      second.style.transform = `rotate( ${secondRotation}deg)`;


}, 1000);