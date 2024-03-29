﻿﻿﻿// https://www.javascripttutorial.net/javascript-dom/javascript-events/

let btn = document.querySelector('#btn');

/*
function display(event) {
    alert('It was clicked!');
    console.log(event.type);
    console.log(event.bubbles);
    console.log(event.cancelable);
    console.log(event.currentTarget);
    //event.currentTarget.innerText = 'Ouch!';
    console.log(event.defaultPrevented);
    console.log(event.detail);
}
btn.addEventListener('click',display);
*/

/*
btn.addEventListener('click',function() {
    alert('It was clicked!');
});
*/

btn.addEventListener('click', (event) => {// 'mousedown' 'mouseup' 'mouseover'
    console.log("event.type: "+event.type);
    console.log("event.bubbles: "+event.bubbles);
    console.log("event.cancelable: "+event.cancelable);
    console.log("event.currentTarget: ",event.currentTarget);
    console.log("event.target: ",event.target);
    //event.currentTarget.innerText = 'Ouch!';
    console.log("event.defaultPrevented (before event.preventDefault()): "+event.defaultPrevented);
    console.log("event.detail: "+event.detail);
    console.log("event.eventPhase: "+event.eventPhase);
    event.preventDefault();
    console.log("event.defaultPrevented (after event.preventDefault()): "+event.defaultPrevented);
});

// https://developer.mozilla.org/en-US/docs/Web/API/Event/currentTarget
function hide(e){
    let currentTarget_ = e.currentTarget;
    //console.log(currentTarget_.tagName);
    if (currentTarget_.tagName == 'P')
        setTimeout(() => {currentTarget_.style.visibility = 'hidden';}, 1000);
    else
        setTimeout(() => {currentTarget_.style.visibility = 'hidden';}, 2000);
    console.log("e.currentTarget: ",e.currentTarget);
    console.log("e.target: ",e.target);
    // When this function is used as an event handler: this === e.currentTarget
  }

const ps = document.getElementsByTagName('p');

for (let i = 0; i < ps.length; i++){
    // console: print the clicked <p> element
    ps[i].addEventListener('click', hide, false);
  }

document.body.addEventListener('click', hide, false);