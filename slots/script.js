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
  '7',
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

// const slot1 = ['', '', '', '', '']
// const slot2 = ['', '', '', '', '']
// const slot3 = ['', '', '', '', '']

const slot1 = ['🍊', '🍉', '🍒', '🍑', '🍈']
const slot2 = ['🍈', '🍊', '🍉', '🍒', '🍑']
const slot3 = ['🍉', '🍒', '🍑', '🍈', '🍊']

function spinWheel(arr, el, a = 0) {
  setInterval(() => {
    let b = a+1
    let c = a+2
    el.innerText = `${arr[c % arr.length]} ${arr[b % arr.length]} ${arr[a % arr.length]}`;
    a++;
  }, 100);
}

spin.addEventListener('click', function () {
  spinWheel(slot1, firstWheel)
})
