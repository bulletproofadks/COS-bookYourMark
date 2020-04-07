console.log("-------------------------------index.js-----------------------")
console.log("--------------------------------------------------------------")
console.log("----DOM ready----")
console.log("--------------------------------------------------------------")

const lightBtn = document.querySelector("#light")
const darkBtn = document.querySelector("#dark")
const blueBtn = document.querySelector("#blue")
const laughBtn = document.querySelector("#laugh")
const theme = document.querySelector("#theme")
const theme2 = document.querySelector("#theme2")
let showTime = document.querySelector('#time')
let showDate = document.querySelector('#timeZone')

let currentTheme = localStorage.getItem('theme');


//----------------function to change the theme----------------------
function changeTheme(e) {
    localStorage.setItem('theme', e.target.id);
    theme.classList = []
    theme2.classList = []
    theme.classList.add(`${e.target.id}`);
    theme2.classList.add(`${e.target.id}`);  
}


//----------------------------eventListeners------------------------
lightBtn.addEventListener('click', (e) => {
    changeTheme(e);
      
})
//-------------
darkBtn.addEventListener('click', (e) => {
    changeTheme(e); 
})
//-------------
blueBtn.addEventListener('click', (e) => {
    changeTheme(e);
})
//------------------------------------------------------------------------------------------------------
// -----------------------------------------2nd part starts---------------------------------------------
// ----------------------------------------show_random_websites------------------------------------------------------

const funArray = [
    'http://www.staggeringbeauty.com/',
    'https://pointerpointer.com/',
    'http://eelslap.com/',
    'http://ninjaflex.com/',
    'http://www.koalastothemax.com/',
    'http://www.rrrgggbbb.com/#',
    'https://www.movie-map.com/kung+fu+panda'
]

laughBtn.addEventListener('click', (e) => {
    let siteNumber = Math.floor( Math.random() * funArray.length );
    location.assign(`${funArray[siteNumber]}`);
})

//------------------------------------------------------------------------------------------------------
// -----------------------------------------3rd part starts---------------------------------------------
// -----------------------------------------show_Time_&_Date--------------------------------------------

setInterval(() => {
    let date = new Date()
    showTime.innerHTML = date.toLocaleTimeString('en-US', { timeZone: 'Asia/Kolkata' })
}, 1000)

const event = new Date();
showDate.innerHTML = event.toDateString()

//------------------------------------------------------------------------------------------------------
// -----------------------------------------4th part starts---------------------------------------------
// -----------------------------------------cache_the_theme--------------------------------------------

function setCacheTheme() {
    theme.classList = [];
    theme2.classList = [];
    theme.classList.add(`${currentTheme}`);
    theme2.classList.add(`${currentTheme}`); 
}
setCacheTheme()
