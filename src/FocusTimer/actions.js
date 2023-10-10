import * as timer from './timer.js'
import * as el from './elements.js'
import * as sounds from './sounds.js'
import state from './state.js'


export function toggleRunning(){
    state.isRunning = document.documentElement.
    classList.toggle('running');
 
     timer.countDown();
     sounds.buttonPressAudio.play();
 }

 export function increaseMinutes(){
    if(state.minutes < 60){  
    state.minutes = Number(state.minutes)+5;
    timer.updateDisplay();
    }
    sounds.buttonPressAudio.play();
    
}


export function decreaseMinutes(){
    if(state.minutes > 0){
    state.minutes = Number(state.minutes)-5;
    timer.updateDisplay();
    }
    sounds.buttonPressAudio.play();
}
