// ** storing variables for fetched document elements **

const popOverlay = document.getElementById('pop-overlay')
const rulesWindow = document.getElementById('rules-window')
const closeRules = document.getElementById('close-rules')
const openRules = document.getElementById('how-to')
const moneyWindow = document.getElementById('money-window')
const openMoney = document.getElementById('open-money')
const closeMoney = document.getElementById('close-money')
const firstWheel = document.getElementById('slot1')
const secondWheel = document.getElementById('slot2')
const thirdWheel = document.getElementById('slot3')
const spin = document.getElementById('spin')

//** event listeners** //

//clicking out of a modal closes it
popOverlay.onclick = function () {
  popOverlay.style.display = 'none'
  rulesWindow.style.display = 'none'
  moneyWindow.style.display = 'none'
}

//open money management and overlay
openMoney.onclick = function () {
  popOverlay.style.display = 'block'
  moneyWindow.style.display = 'block'
}

//open rules window and transparent overlay
openRules.onclick = function () {
  popOverlay.style.display = 'block'
  rulesWindow.style.display = 'block'
}

//close rules
closeRules.onclick = function () {
  popOverlay.style.display = 'none'
  rulesWindow.style.display = 'none'
}

//close money management
closeMoney.onclick = function () {
  popOverlay.style.display = 'none'
  moneyWindow.style.display = 'none'
}

//**  slot wheel code  **

//declare constants
const items = [
  '🍊',
  '🍒',
  '🍉',
  '🍇',
  '🍈',
  '🍑',
  '🍒',
  '🍀',
  '🍊',
  '🍒',
  '🍇',
  '🍀',
  '🍒',
  '🍑',
  '🍒',
  '🍈',
  '🍈',
  '🍑',
  '🍉',
  '🍒'
]

let results1 = []
let results2 = []
let results3 = []

// function resetResults() {
//   results1 = []
//   results2 = []
//   results3 = []
// }

const slot1 = ['🍊', '🍉', '🍒', '🍑', '🍈']
const slot2 = ['🍈', '🍊', '🍉', '🍒', '🍑']
const slot3 = ['🍉', '🍒', '🍑', '🍈', '🍊']

function getResults1(string) {
  console.log(firstWheel.innerText)
  results1.push(...firstWheel.innerText.split(' '))
}

function getResults2(string) {
  console.log(secondWheel.innerText)
  results2.push(...secondWheel.innerText.split(' '))
}

function getResults3(string) {
  console.log(thirdWheel.innerText)
  results3.push(...thirdWheel.innerText.split(' '))
}


function spinWheel(arr, el, a = 0) {
  const time = Math.floor(Math.random() * 1000) + 4000 // Generate a random time between 2s and 4s

  const interval = setInterval(() => {
    let b = a + 1
    let c = a + 3
    el.innerText = `${arr[c % arr.length]} ${arr[b % arr.length]} ${
      arr[a % arr.length]
    }`
    a++
  }, 100)

  setTimeout(() => {
    getResults1(firstWheel.innerText)
    getResults2(secondWheel.innerText)
    getResults3(thirdWheel.innerText)

    clearInterval(interval) // Stop the interval after the random time has passed
  }, time)
}

spin.addEventListener('click', function () {
  spinWheel(slot1, firstWheel)
  spinWheel(slot2, secondWheel)
  spinWheel(slot3, thirdWheel)
})
