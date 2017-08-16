'use strict';

let Park = require('./data_loader');

let currentTime = new Date();
let hours = currentTime.getHours();
let minutes = currentTime.getMinutes();
let currentTotalMinutes = (hours*60) + minutes;
console.log("currentTotalMinutes", currentTotalMinutes);

var Time = {
  loadOpenAttractions: function(){
    Park.attractionsCall().then(function(data) {
      // console.log("data", data);
      $(data).each((index, item)=>{
        if (item.times !== undefined) {
          let eachAttTimes = item.times;
          for (var i = 0; i < eachAttTimes.length; i++) {
            let newTime = eachAttTimes[i].replace(/\:/g, " ");
            let afternoonTimes = _.includes(newTime, "PM");
            let afternoonMinutes = 0;
            let morningMinutes = 0;
            let theseMinutes;

            if (afternoonTimes) {

              newTime = newTime.replace(/\AM/g, "");
              newTime = newTime.replace(/\PM/g, "");

              let splitTime = newTime.split(" ");
              splitTime[0] = Number(splitTime[0]*60 + 720);
              splitTime[1] = Number(splitTime[1]);

              let timeTotalMinutes = splitTime.reduce(function(sum, value){
                return sum + value
              }, 0);
              afternoonMinutes = timeTotalMinutes;

            } else {

              newTime = newTime.replace(/\AM/g, "");
              newTime = newTime.replace(/\PM/g, "");

              let splitTime = newTime.split(" ");
              splitTime[0] = Number(splitTime[0]*60);
              splitTime[1] = Number(splitTime[1]);

              let timeTotalMinutes = splitTime.reduce(function(sum, value){
                return sum + value
              }, 0);
              morningMinutes = timeTotalMinutes;
            }

            theseMinutes = afternoonMinutes + morningMinutes;

            if (theseMinutes - currentTotalMinutes <= 60 && theseMinutes - currentTotalMinutes >= 0) {
              // *************************************
              // CALL THE WRITE T0 SIDEBAR FUNCTION
              // *************************************
              console.log("item" ,item);
            }
          }
        } else {
          // *************************************
          // CALL THE WRITE T0 SIDEBAR FUNCTION
          // *************************************
        }
      })
    });
  }
};


module.exports = Time;