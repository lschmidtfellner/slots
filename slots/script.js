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

function getResults(el, arr) {
  arr.push(...el.innerText.split(' '))
}


function spinWheel(arr1, arr2, el, a = 0) {
  const time = Math.floor(Math.random() * 1000) + 4000 // Generate a random time between 2s and 4s

  const interval = setInterval(() => {
    let b = a + 1
    let c = a + 3
    el.innerText = `${arr1[c % arr1.length]} ${arr1[b % arr1.length]} ${
      arr1[a % arr1.length]
    }`
    a++
  }, 100)

  setTimeout(() => {
    getResults(el, arr2)

    clearInterval(interval) // Stop the interval after the random time has passed
  }, time)
}

spin.addEventListener('click', function () {
  spinWheel(slot1, results1, firstWheel)
  spinWheel(slot2, results2, secondWheel)
  spinWheel(slot3, results3, thirdWheel)
})
