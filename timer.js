const timerDays = document.querySelector('span[data-value="days"]');
const timerHours = document.querySelector('span[data-value="hours"]');
const timerMins = document.querySelector('span[data-value="mins"]');
const timerSecs = document.querySelector('span[data-value="secs"]');



class CountdownTimer {
    constructor({ selector, targetDate }) {
        this.selector = selector;
        this.targetDate = targetDate;
        this.getCountdown();
    
    }
 

    getCountdown() {
        this.intervalId = setInterval(() => {
            const currentDate = Date.now();
            //console.log('targetDate :>> ', this.targetDate);
            //console.log('currentDate :>> ', currentDate);
            const deltaTime = this.targetDate - currentDate;
            const time = this.getTimerComponents(deltaTime);
            console.log('time :>> ', time);

            this.updateTimerFace(time);
        }, 1000);
    }

    getTimerComponents(time) {
        const days = this.pad(Math.floor(time / (1000 * 60 * 60 * 24)));
        const hours = this.pad(Math.floor((time % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60)));
        const mins = this.pad(Math.floor((time % (1000 * 60 * 60)) / (1000 * 60)));
        const secs = this.pad(Math.floor((time % (1000 * 60)) / 1000));

        return { days, hours, mins, secs };
    }
  
    //Принимает число, приводит к строке и добавляет в начало 0 если число меньше 2-х знаков
    pad(value) {
        return String(value).padStart(2, '0');
    }

    updateTimerFace({ days, hours, mins, secs }) {
        timerDays.textContent = days;
        timerHours.textContent = hours;
        timerMins.textContent = mins;
        timerSecs.textContent = secs;
       
        return { days, hours, mins, secs }
    }
}


const timer = new CountdownTimer({
  selector: '#timer-1',
  targetDate: new Date('Jul 17, 2019'),
});

timer.updateTimerFace();








