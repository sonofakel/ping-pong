# _Ping-Pong_

#### _A game similar to Ping-Pong, July 14th, 2017_

#### By _**Charlie Kelson**_

## Description

_This web application takes a number from a user and returns a range of numbers from 1 to the chosen number with the following exceptions:_

- Numbers divisible by 3 are replaced with "ping"
- Numbers divisible by 5 are replaced with "pong"
- Numbers divisible by 15 are replaced with "ping-pong"

_A user should be able to enter a new number and see new results over and over again. [View GitHub page here](https://sonofakel.github.io/ping-pong/)_

## Specifications

|  Behavior | Input  |  Output |
|---|---|---|
|  Can count up to 2 | 2  | 1, 2  |
|  Can count up to n number inputed by user | n | 1....n  |
|  When number 3 is entered return 1, 2, ping | 3  | 1, 2, ping  |
|  When number 4 is entered return 1, 2, ping, 4 |  4 | 1, 2, ping, 4  |
|  When number 5 is entered return 1, 2, ping, 4, pong |  5 | 1, 2, ping, 4, pong  |
|  When number 15 is entered return ping-pong on the number 15 | 15 | 1...14, ping-pong |
|  When input greater than 3 (n > 3) is entered every number divisible by 3 returns ping | n > 3 | each number / 3 = ping |
|  When input greater than 5 (n > 5) is entered every number divisible by 5 returns pong | n > 5 | each number / 5 = pong |
|  When input greater than 15 (n > 15) is entered every number divisible by 15 returns ping-pong | n > 15 | each number / 15 = ping-pong |



## Setup/Installation Requirements

* _A computer that can run a modern web-browser such as Chrome_


## Known Bugs

_No knowns bugs at this time_


## Technologies Used

- Javascript (Vanilla)
- jQuery



Copyright (c) 2016 **_Charlie Kelson_**
