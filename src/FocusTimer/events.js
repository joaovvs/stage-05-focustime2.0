import * as el from "./elements.js";
import * as actions from "./actions.js";
import state from "./state.js"
import { updateDisplay } from "./timer.js"


export function registerControls() {

    el.controls.addEventListener('click', (event) => {
       
        console.log(event.target);
        const action = event.target.dataset.action;

        if(typeof actions[action] != "function") {
            return;
        }
        actions[action]();

        console.log (actions);
    })
}