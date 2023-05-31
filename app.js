//variable declaration
const showNotesBtn = document.querySelector("#showNotes");
const pianoKeys = document.querySelectorAll(".paino-key");
let audio = new Audio("audio/ckey.wav");

//show notes button functionality
showNotesBtn.addEventListener("change", ()=>{
    pianoKeys.forEach((key)=>{
        key.classList.toggle("hide-notes");
    })
})

//play music
pianoKeys.forEach((key)=>{
    key.addEventListener('click', ()=>{
        audio.src = `audio/${key.dataset.name}key.wav`;
        audio.play();
    })   
})
