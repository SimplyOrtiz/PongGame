let gameState = 'start'

let paddle_common = document.getElementsByClassName("paddle")[0].getBoundingClientRect()
let paddle1 = document.getElementsByClassName("paddle1")[0]

let paddle_common2 = document.getElementsByClassName("paddle")[1].getBoundingClientRect()
let paddle2 = document.getElementsByClassName("paddle2")[0]

let board = document.getElementsByClassName("board")[0]

let initial_ball = document.querySelector('.ball');
let ball = document.querySelector('.ball');
let initial_ball_coord = ball.getBoundingClientRect();

let score_1 = document.querySelector('.player_1_score');
let score_2 = document.querySelector('.player_2_score');
let message = document.querySelector('.message');

let ball_coord = initial_ball_coord;
let board_coord = board.getBoundingClientRect();

let dx = Math.floor(Math.random() * 4) + 3;
let dy = Math.floor(Math.random() * 4) + 3;
let dxd = Math.floor(Math.random() * 2);
let dyd = Math.floor(Math.random() * 2);