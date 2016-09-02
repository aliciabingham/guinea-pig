var pageTitle = document.getElementById('page-title');
var outputTarget = document.getElementById('output-target');
var input = document.getElementById('keypress-input');
var changeColor = document.getElementById('add-color');
var guineaPig = document.getElementById('guinea-pig');
var changeSize = document.getElementById('make-large');
var addBorder = document.getElementById('add-border');
var addRounding = document.getElementById('add-rounding');
var firstElement = document.getElementById('first-section');
var secondElement = document.getElementById('sixth-section');

pageTitle.addEventListener('mouseover', titleFunction);
pageTitle.addEventListener('mouseout', outFunction);
input.addEventListener('keypress', keyFunction);
changeColor.addEventListener('click', colorFunction);
changeSize.addEventListener('click', hulkify);
addBorder.addEventListener('click', border);
addRounding.addEventListener('click', rounding);

function textFun() {
firstElement.classList.add("bold");
}

textFun();

function moreTextFun() {
secondElement.classList.add("bold");
secondElement.classList.add("italicized");
}

moreTextFun();

function titleFunction() {
  outputTarget.innerHTML = "You moved your mouse over the header!";
}

function outFunction() {
  outputTarget.innerHTML = "You left me!!";
}

function keyFunction() {
  outputTarget.innerHTML = input.value;
}

function colorFunction () {
  document.getElementById("guinea-pig").classList.add("blue");
}

function hulkify() {
 document.getElementById("guinea-pig").classList.add("hulkifyTheSecond");
}

function border() {
  guineaPig.classList.add("borderCSSclass");
}

function rounding() {
  guineaPig.classList.add("roundedCSSclass");
}

function displayBlock() {
  changeColor.classList.add("block");
  changeSize.classList.add("block");
  addBorder.classList.add("block");
  addRounding.classList.add("block");
}

displayBlock();