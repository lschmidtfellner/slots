# Project 1 - Luke Schmidt-Fellner

## Digital Slot Machine

## Project Description

For my app I decided to go with a slot machine game. I wanted to chose something with a lot of extra space for graphics, and a thematically appropriate game for flashy visuals. I'm taking inspiration from the slot machine mini-game from the original pokemon games, as well as existing online slot machines. The goal is to get 3 in a row either across or diagonally from a 3x3 grid of displayed symbols. Payouts scale depending on the symbol matched, with cherry as most common and clover as the least.

## Wire Frames

#### Initial Layout
![screenshot-1](/assets/screenshots/screen1.png)

#### Managing Funds
![screenshot-3](/assets/screenshots/screen3.png)

#### Winning a Pull
![screenshot-2](/assets/screenshots/screen2.png)

#### Losing Screen
![screenshot-4](/assets/screenshots/screen4.png)

#### Mid-Spin
![screenshot-5](/assets/screenshots/screen5.png)

## Getting Started
** [link to the live site](https://legendary-sopapillas-210b1f.netlify.app/)

The game is initialized with a balance of $10. You may in $1 increments up to $4 (amount wagered indicated by the lights underneath the buttons). Should you run out of money, open the "manage funds" menu with the corresponding button in the bottom right. 

Once any amount is wagered, click the spin button to initialize the game. Each wheel will spin at the same rate from a randomized starting point for a random interval of time between 3 and 4 seconds. Winnings will be indicated in the message box at the top.

## Next Steps

There are several improvements I plan on implementing in the future.
1. Allowing for multiple instances of the same soundbite to play at once
1. Replacement of emojis with custom graphics and updating the UI to stylistically match
1. Wager scaling effecting how many win conditions are available to the user (i.e., betting $1 only allows matches on  the center row to win, $2 allows for the top row, $3 for the bottom, $4 for diagonals)
1. Updating how slot divs are structured such that using CSS transitions smooth out the spin animation

## Technologies Used

- HTML
- CSS
- JavaScript
