var slider = document.getElementById("myRange");
var output = document.querySelector(`#bpm`);
output.innerHTML = slider.value; // Display the default slider value

// Update the current slider value (each time you drag the slider handle)
slider.oninput = function() {
  output.innerHTML = `${this.value} BPM`
  counter = (60000/this.value)
}

//////////////////////////////////////////

// Assign variables to SVG elements
let pianoAKey = document.querySelector(`#a-key`)
let pianoSKey = document.querySelector(`#s-key`)
let pianoDKey = document.querySelector(`#d-key`)
let pianoFKey = document.querySelector(`#f-key`)
let pianoGKey = document.querySelector(`#g-key`)
let pianoHKey = document.querySelector(`#h-key`)
let pianoJKey = document.querySelector(`#j-key`)
let pianoKKey = document.querySelector(`#k-key`)
let pianoLKey = document.querySelector(`#l-key`)
let pianoEndKey = document.querySelector(`#end-key`)


//Piano key functions
let playThePianoA = function() {
    let url = pianoAKey.getAttribute(`data-sfx`)
    let sfx = new Audio(url)
    sfx.play()
}

let playThePianoS = function() {
  let url = pianoSKey.getAttribute(`data-sfx`)
  let sfx = new Audio(url)
  sfx.play()
}

let playThePianoD = function() {
  let url = pianoDKey.getAttribute(`data-sfx`)
  let sfx = new Audio(url)
  sfx.play()
}

let playThePianoF = function() {
  let url = pianoFKey.getAttribute(`data-sfx`)
  let sfx = new Audio(url)
  sfx.play()
}

let playThePianoG = function() {
  let url = pianoGKey.getAttribute(`data-sfx`)
  let sfx = new Audio(url)
  sfx.play()
}

let playThePianoH = function() {
  let url = pianoHKey.getAttribute(`data-sfx`)
  let sfx = new Audio(url)
  sfx.play()
}

let playThePianoJ = function() {
  let url = pianoJKey.getAttribute(`data-sfx`)
  let sfx = new Audio(url)
  sfx.play()
}

let playThePianoK = function() {
  let url = pianoKKey.getAttribute(`data-sfx`)
  let sfx = new Audio(url)
  sfx.play()
}

let playThePianoL = function() {
  let url = pianoLKey.getAttribute(`data-sfx`)
  let sfx = new Audio(url)
  sfx.play()
}

let playThePianoSemicolon = function() {
  let url = pianoEndKey.getAttribute(`data-sfx`)
  let sfx = new Audio(url)
  sfx.play()
}

// Clickable piano keys
pianoAKey.addEventListener(`mousedown`, playThePianoA)
pianoSKey.addEventListener(`mousedown`, playThePianoS)
pianoDKey.addEventListener(`mousedown`, playThePianoD)
pianoFKey.addEventListener(`mousedown`, playThePianoF)
pianoGKey.addEventListener(`mousedown`, playThePianoG)
pianoHKey.addEventListener(`mousedown`, playThePianoH)
pianoJKey.addEventListener(`mousedown`, playThePianoJ)
pianoKKey.addEventListener(`mousedown`, playThePianoK)
pianoLKey.addEventListener(`mousedown`, playThePianoL)
pianoEndKey.addEventListener(`mousedown`, playThePianoSemicolon)


let counter = (500);
let timerToggle = 1;

//Metronome function
let metronome = function() {
  if (timerToggle == 1) {
    setTimeout(metronome, counter);
    let sfx = new Audio(`audio/tik.wav`);
    sfx.play()

  if (slider.style.background =='white')
    slider.style.background='#d3d3d3'
  else
    slider.style.background='white'
  }
}

setTimeout(metronome, counter);



/////Key Code/////

let keyPress = function(event) {

if (event.code === `KeyA`) {
    let sfx = new Audio (`audio/Piano A.wav`)
    sfx.play()
    pianoAKey.style.fill=`#d3d3d3`
    setTimeout(() => { pianoAKey.style.fill=`white`; }, 200);

} else if (event.code === `KeyS`) {
    let sfx = new Audio (`audio/Piano S.wav`)
    sfx.play()
    pianoSKey.style.fill=`#d3d3d3`
    setTimeout(() => { pianoSKey.style.fill=`white`; }, 200);

} else if (event.code === `KeyD`) {
    let sfx = new Audio (`audio/Piano D.wav`)
    sfx.play()
    pianoDKey.style.fill=`#d3d3d3`
    setTimeout(() => { pianoDKey.style.fill=`white`; }, 200);

} else if (event.code === `KeyF`) {
    let sfx = new Audio (`audio/Piano F.wav`)
    sfx.play()
    pianoFKey.style.fill=`#d3d3d3`
    setTimeout(() => { pianoFKey.style.fill=`white`; }, 200);

} else if (event.code === `KeyG`) {
    let sfx = new Audio (`audio/Piano G.wav`)
    sfx.play()
    pianoGKey.style.fill=`#d3d3d3`
    setTimeout(() => { pianoGKey.style.fill=`white`; }, 200);

} else if (event.code === `KeyH`) {
    let sfx = new Audio (`audio/Piano H.wav`)
    sfx.play()
    pianoHKey.style.fill=`#d3d3d3`
    setTimeout(() => { pianoHKey.style.fill='white'; }, 200);

} else if (event.code === `KeyJ`) {
    let sfx = new Audio (`audio/Piano J.wav`)
    sfx.play()
    pianoJKey.style.fill=`#d3d3d3`
    setTimeout(() => { pianoJKey.style.fill=`white`; }, 200);

} else if (event.code === `KeyK`) {
    let sfx = new Audio (`audio/Piano K.wav`)
    sfx.play()
    pianoKKey.style.fill=`#d3d3d3`
    setTimeout(() => { pianoKKey.style.fill=`white`; }, 200);

} else if (event.code === `KeyL`) {
    let sfx = new Audio (`audio/Piano L.wav`)
    sfx.play()
    pianoLKey.style.fill=`#d3d3d3`
    setTimeout(() => { pianoLKey.style.fill=`white`; }, 200);

} else if (event.code === `Semicolon`) {
    let sfx = new Audio (`audio/Piano End.wav`)
    sfx.play()
    pianoEndKey.style.fill=`#d3d3d3`
    setTimeout(() => { pianoEndKey.style.fill=`white`; }, 200);
} 
}

document.addEventListener(`keydown`, keyPress);