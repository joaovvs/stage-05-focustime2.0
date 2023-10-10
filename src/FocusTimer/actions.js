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

export function reset(){
    state.isRunning = false;
    document.documentElement.classList.toggle('running');
    timer.updateDisplay();
}

export function playForest(){
    state.isMute =     
        el.soundCards.querySelector('.forest').classList.toggle('playing');

    if(state.isMute){
        sounds.forestSound.play();
        return
    }
    sounds.forestSound.pause();
}

export function playRain(){
    
    state.isMute = 
    el.soundCards.querySelector('.rain').classList.toggle('playing');
    if(state.isMute){
        sounds.rainSound.play();
        return
    }
    sounds.rainSound.pause();
}

export function playCoffeeShop(){
    
    state.isMute = 
    el.soundCards.querySelector('.coffeeShop').classList.toggle('playing');
    if(state.isMute){
        sounds.coffeeShopSound.play();
        return
    }
    sounds.coffeeShopSound.pause();
}


export function playFirePlace(){
    
    state.isMute = 
    el.soundCards.querySelector('.firePlace').classList.toggle('playing');
    if(state.isMute){
        sounds.fireplaceSound.play();
        return
    }
    sounds.fireplaceSound.pause();
}