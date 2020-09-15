class AlarmClock {
    constructor(alarmCollection, timerId) {
      this.alarmCollection = [];
      this.timerId = []
    }
  
    addClock(time, callback, id) {
      if (id === undefined) {
        throw new Error('идентификатор не передан')
      };
      if (AlarmClock.timerId.find(id)) {
        console.error()
      }
      AlarmClock.alarmCollection.push(
        {
          id: id,
          time: time,
          callback: callback()
        }
      )
    }
  
    function removeClock(deleteId) {
      AlarmClock.alarmCollection.filter(return deleteId === id);
    }
  
    getCurrentFormattedTime() => {
      return new Date().toISOString();
  }
  
  function start() {
    checkClock(id){
      if (AlarmClock.alarmCollection.time === getCurrentFormattedTime()) {
        return AlarmClock.alarmCollection.callback
      }
    }
  
    let newInterval = setInterval((function(){
      AlarmClock.alarmCollection.forEach(function(item, i, arr) {
        checkClock();
      });
    }), 1000);
   }
   
  function stop(id){
    if(AlarmClock.alarmCollection.filter(return deleteId === id)) {
      clearInterval(newInterval);
      let stopId = AlarmClock.alarmCollection.findIndex(searchId => searchId.timerId === id)
      AlarmClock.alarmCollection.slice()
      arr.slice(stopId, 1)
    }
  }
  
  function printAlarms(){AlarmClock.alarmCollection.forEach(
    console.log(id, time)
  )
  }
  
  function clearAlarms(id){
    clearInterval(newInterval);
    AlarmClock.alarmCollection = [];
  }
  }
  
  
  let alarm1 = new AlarmClock()
  console.log(alarm1)
  
  alarm1.addClock(1200, 12, 13)
  console.log(alarm1)
  console.log(alarm1)
  
  ///////////////////////////////////////////////////////////
   ////////////////////////////////////////////////////////////
  
  ////////////////////////////////////////////////////////////