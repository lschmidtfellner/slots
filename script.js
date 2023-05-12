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
const slot1text = document.getElementById('slot1text')
const slot2text = document.getElementById('slot2text')
const slot3text = document.getElementById('slot3text')
const mainDiv = document.querySelector('main')
const spinAudio = new Audio('assets/spinning.mp3')
const stopAudio = new Audio('assets/stop.wav')
const winAudio = new Audio('assets/win.wav')
const btnAudio = new Audio('assets/button.wav')
const btnPushAudio = function () {
  btnAudio.currentTime = 0
  btnAudio.play()
}
winAudio.volume = 0.5
let wager = 0
let winnings
let balance = 10
let spinning = false

//** event listeners** //

//clicking out of a modal closes it
popOverlay.onclick = function () {
  popOverlay.style.display = 'none'
  rulesWindow.style.display = 'none'
  moneyWindow.style.display = 'none'
}

//open money management and overlay
btnPushAudio()
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

spin.addEventListener('click', function () {
  btnPushAudio()
  if (spinning === false && wager > 0) {
    spinAudio.play()
    spinning = true
    resetResults()
    spinAll()
    msg.innerText = ':0'
    setTimeout(() => {
      checkWin()
      spinAudio.pause()
      spinAudio.currentTime = 0
    }, 4000)
  } else if (wager === 0) {
    msg.innerText = 'Make a wager'
  }
})

//** wagering system **

// add funds
addBtn.onclick = function () {
  if (addValue.value > 0) {
    balance += parseInt(addValue.value)
    addValue.value = ''
    balanceDisplay.innerText = balance
  }
}

// withdraw funds
cashBtn.onclick = function () {
  if (cashValue.value > 0) {
    balance -= parseInt(cashValue.value)
    cashValue.value = ''
    balanceDisplay.innerText = balance
  }
}

//wager button

wagerBtn.onclick = function () {
  btnPushAudio()
  if (spinning === false) {
    wagerCounter()
  }
}

//increase wager
function wagerCounter() {
  if (balance >= 1) {
    if (wager === 0) {
      balance--
      balanceDisplay.innerText = balance
      lightOne.style.backgroundColor = '#fc472b'
      lightOne.style.boxShadow =
        '0px 0px 10px #ff6562, inset -2px -2px 7px #ff7145'
      wager++
    } else if (wager === 1) {
      balance--
      balanceDisplay.innerText = balance
      lightTwo.style.backgroundColor = '#fc472b'
      lightTwo.style.boxShadow =
        '0px 0px 10px #ff6562, inset -2px -2px 7px #ff7145'
      wager++
    } else if (wager === 2) {
      balance--
      balanceDisplay.innerText = balance
      lightThree.style.backgroundColor = '#fc472b'
      lightThree.style.boxShadow =
        '0px 0px 10px #ff6562, inset -2px -2px 7px #ff7145'
      wager++
    } else if (wager === 3) {
      balance--
      balanceDisplay.innerText = balance
      lightFour.style.backgroundColor = '#fc472b'
      lightFour.style.boxShadow =
        '0px 0px 10px #ff6562, inset -2px -2px 7px #ff7145'
      wager++
    }
  } else {
    msg.innerText = 'Add funds'
  }
}

//different wager multipliers per symbol
function checkWin() {
  if (spinning === true) {
    winAudio.currentTime = 0
    if (results1[2] === results2[2] && results1[2] === results3[2]) {
      if (results1[2] === '🍒') {
        winnings = wager * 5
      } else if (results1[2] === '🍈') {
        winnings = wager * 8
      } else if (results1[2] === '🍇' || results1[2] === '🍉') {
        winnings = wager * 8
      } else if (results1[2] === '🍀' || results1[2] === '🍊') {
        winnings = wager * 100
      }
      msg.innerText = `You won $${winnings}!`
      balance += winnings
      balanceDisplay.innerText = balance
      winAudio.play()
    } else if (results1[1] === results2[1] && results1[1] === results3[1]) {
      if (results1[1] === '🍒') {
        winnings = wager * 5
      } else if (results1[1] === '🍈') {
        winnings = wager * 8
      } else if (results1[1] === '🍇' || results1[1] === '🍉') {
        winnings = wager * 8
      } else if (results1[1] === '🍀' || results1[1] === '🍊') {
        winnings = wager * 100
      }
      msg.innerText = `You won $${winnings}!`
      balance += winnings
      balanceDisplay.innerText = balance
      winAudio.play()
    } else if (results1[3] === results2[3] && results1[3] === results3[3]) {
      if (results1[3] === '🍒') {
        winnings = wager * 5
      } else if (results1[3] === '🍈') {
        winnings = wager * 8
      } else if (results1[3] === '🍇' || results1[3] === '🍉') {
        winnings = wager * 8
      } else if (results1[3] === '🍀' || results1[3] === '🍊') {
        winnings = wager * 100
      }
      msg.innerText = `You won $${winnings}!`
      balance += winnings
      balanceDisplay.innerText = balance
      winAudio.play()
    } else if (results1[1] === results2[2] && results1[1] === results3[3]) {
      if (results1[1] === '🍒') {
        winnings = wager * 5
      } else if (results1[1] === '🍈') {
        winnings = wager * 8
      } else if (results1[1] === '🍇' || results1[1] === '🍉') {
        winnings = wager * 8
      } else if (results1[1] === '🍀' || results1[1] === '🍊') {
        winnings = wager * 100
      }
      msg.innerText = `You won $${winnings}!`
      balance += winnings
      balanceDisplay.innerText = balance
      winAudio.play()
    } else if (results1[3] === results2[2] && results1[3] === results3[1]) {
      if (results1[3] === '🍒') {
        winnings = wager * 5
      } else if (results1[3] === '🍈') {
        winnings = wager * 8
      } else if (results1[3] === '🍇' || results1[3] === '🍉') {
        winnings = wager * 8
      } else if (results1[3] === '🍀' || results1[3] === '🍊') {
        winnings = wager * 100
      }
      msg.innerText = `You won $${winnings}!`
      balance += winnings
      balanceDisplay.innerText = balance
      winAudio.play()
    } else {
      msg.innerText = ':('
    }
    winnings = 0
    wager = 0
  }
  spinning = false
}

//**  slot wheel code  **

//declare variables
const items = [
  '🍒',
  '🍉',
  '🍇',
  '🍈',
  '🍒',
  '🍀',
  '🍒',
  '🍈',
  '🍇',
  '🍀',
  '🍒',
  '🍒',
  '🍈',
  '🍉',
  '🍒',
  '🍈',
  '🍉'
]

let results1 = []
let results2 = []
let results3 = []

function resetResults() {
  results1 = []
  results2 = []
  results3 = []
  lightOne.style.backgroundColor = '#721c1c'
  lightTwo.style.backgroundColor = '#721c1c'
  lightThree.style.backgroundColor = '#721c1c'
  lightFour.style.backgroundColor = '#721c1c'
  lightOne.style.boxShadow = 'inset -2px -2px 7px #382b2b'
  lightTwo.style.boxShadow = 'inset -2px -2px 7px #382b2b'
  lightThree.style.boxShadow = 'inset -2px -2px 7px #382b2b'
  lightFour.style.boxShadow = 'inset -2px -2px 7px #382b2b'
}

//break the innertext of each wheel into an array after done spinning
function getResults(el, arr) {
  arr.push(...el.innerText.split(' '))
}

//spin a wheel div for a fixed rate at a random time between 3 and 6 seconds
function spinWheel(arr1, arr2, el, a = Math.floor(Math.random() * 10) + 1) {
  const time = Math.floor(Math.random() * 1000) + 3000

  const interval = setInterval(() => {
    let b = a + 1
    let c = a + 2
    let z = a - 1
    el.innerText = `${arr1[z % arr1.length]} ${arr1[c % arr1.length]} ${
      arr1[b % arr1.length]
    } ${arr1[a % arr1.length]}`
    a++
    el.style.filter = 'blur(3px)'
    
    setTimeout(() => {
      el.style.transform = 'translateY(-97px)'
    }, 25)
    setTimeout(() => {
      el.style.transform = 'translateY(-66px)'
    }, 50)
    setTimeout(() => {
      el.style.transform = 'translateY(-34px)'
    }, 75)
    setTimeout(() => {
      el.style.transform = 'translateY(-127px)'
    }, 97)
  }, 100)
  setTimeout(() => {
    el.style.filter = 'none'
    getResults(el, arr2)
    clearInterval(interval)
    stopAudio.play()
    shake()
  }, time)
}

function spinAll() {
  msg.innerText = ' '
  spinWheel(items, results1, slot1text)
  spinWheel(items, results2, slot2text)
  spinWheel(items, results3, slot3text)
}

function shake() {
  mainDiv.style.transform = 'translateY(10px'
  setTimeout(() => {
    mainDiv.style.transform = 'translateY(-10px'
  },50)
  setTimeout(() => {
    mainDiv.style.transform = 'translateY(6px'
  },100)
  setTimeout(() => {
    mainDiv.style.transform = 'translateY(-6px'
  },150)
  setTimeout(() => {
    mainDiv.style.transform = 'translateY(3px'
  },200)
  setTimeout(() => {
    mainDiv.style.transform = 'translateY(0px'
  },250)
}

// **sounds through tone.js**
