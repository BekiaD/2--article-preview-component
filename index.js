// Grabbing the elements
const btn = document.getElementById('button-reverse')
const infoDiv = document.querySelector('.info')
const avatar = document.querySelector('.avatar')
const shareDiv = document.getElementById('share-act')
const authorDiv = document.querySelector('.author-date')
let isClicked = false

btn.addEventListener('click', () => {
    if (!isClicked) {
        isClicked = true
        infoDiv.id = 'share-inactive'
        avatar.style.display = 'none'
        shareDiv.style.display = 'flex'
        authorDiv.style.display = 'none'
    }
    else {
        isClicked = false
        infoDiv.removeAttribute('id')
        avatar.style.display = 'block'
        shareDiv.style.display = 'none'
        authorDiv.style.display = 'flex'
    }

})

// I really want to do in a better, shorter way - sort of like React states

// let enabled = false; // Initialize the enabled flag

// btn.addEventListener('click', turnOnOff);

// function changeDOM() {
//     infoDiv.id = 'share-inactive';
//     avatar.style.display = 'none';
//     shareDiv.style.display = 'flex';
//     authorDiv.style.display = 'none';
// }

// function turnOnOff() {
//     console.log('getting called');
//     enabled = !enabled; // Toggle the enabled state
//     if (enabled) {
//         changeDOM();
//     }
// }

// function turnOnOff() {
//     console.log('getting called')
//     if (isClicked === false) {
//         isClicked = false
//         changeDOM()
//     } else {
//         isClicked = true
//     } return
// }
