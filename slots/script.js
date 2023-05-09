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

//declare variables
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

function resetResults() {
  results1 = []
  results2 = []
  results3 = []
}

function getResults(el, arr) {
  arr.push(...el.innerText.split(' '))
}

function spinWheel(arr1, arr2, el, a = Math.floor(Math.random() * 10) + 1) {
  const time = Math.floor(Math.random() * 1000) + 4000

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
    clearInterval(interval)
  }, time)
}

spin.addEventListener('click', function () {
  resetResults()
  spinWheel(items, results1, firstWheel)
  spinWheel(items, results2, secondWheel)
  spinWheel(items, results3, thirdWheel)
})
