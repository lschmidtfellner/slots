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
const addBtn = document.getElementById('add-btn')
const addValue = document.getElementById('deposit-amt')
const cashBtn = document.getElementById('cash-btn')
const cashValue = document.getElementById('withdraw-amt')
const balanceDisplay = document.getElementById('balance-amt')
const lightOne = document.getElementById('light1')
const lightTwo = document.getElementById('light2')
const lightThree = document.getElementById('light3')
const lightFour = document.getElementById('light4')
const msg = document.getElementById('msg')
const wagerBtn = document.getElementById('wager')
let wager = 0
let balance = 0

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

//** wagering system **

addBtn.onclick = function () {
  if (addValue.value > 0) {
    balance += parseInt(addValue.value)
    addValue.value = ''
    balanceDisplay.innerText = balance
  }
}

cashBtn.onclick = function () {
  if (cashValue.value > 0) {
    balance -= parseInt(cashValue.value)
    cashValue.value = ''
    balanceDisplay.innerText = balance
  }
}

wagerBtn.onclick = function () {
  wagerCounter()
}

//increase wager
function wagerCounter() {
  if ((wager === 0)) {
    balance--
    balanceDisplay.innerText = balance
    lightOne.style.backgroundColor = 'red'
    wager++
  } else if ((wager === 1)) {
    balance--
    balanceDisplay.innerText = balance
    lightTwo.style.backgroundColor = 'red'
    wager++
  } else if ((wager === 2)) {
    balance--
    balanceDisplay.innerText = balance
    lightThree.style.backgroundColor = 'red'
    wager++
  } else if ((wager === 3)) {
    balance--
    balanceDisplay.innerText = balance
    lightFour.style.backgroundColor = 'red'
    wager++
  } 
}

//different wager multipliers per symbol

function checkWin() {
  let winnings
  if (results1[1] === results2[1] && results1[1] === results3[1]) {
    if (results1[1] === '🍒') {
      winnings = wager * 3
    } else if (results1[1] === '🍈') {
      winnings = wager * 4
    } else if (results1[1] === '🍇' || results1[1] === '🍉') {
      winnings = wager * 4
    } else if (results1[1] === '🍀' || results1[1] === '🍊') {
      winnings = wager * 8
    }
    msg.innerText = `You won ${winnings}!`
    balance += winnings
  } else {
    msg.innerText = 'Maybe next time!'
  }
  winnings = 0
  wager = 0
}

//**  slot wheel code  **

//declare variables
const items = [
  '🍊',
  '🍒',
  '🍉',
  '🍇',
  '🍈',
  '🍒',
  '🍀',
  '🍊',
  '🍒',
  '🍇',
  '🍀',
  '🍒',
  '🍒',
  '🍈',
  '🍈',
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
  const time = Math.floor(Math.random() * 1000) + 3000

  const interval = setInterval(() => {
    let b = a + 1
    let c = a + 2
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
  checkWin()
})
