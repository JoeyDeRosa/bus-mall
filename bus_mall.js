'use strict';

<<<<<<< HEAD
var displayResults = true;

var totalClicks = 0;

var arrayOfPictures = [];

function loadImages() {
  new ImageConstructor('bag', 'img/bag.jpg', 0, 0);
  new ImageConstructor('banana', 'img/banana.jpg', 0, 0);
  new ImageConstructor('bathroom', 'img/bathroom.jpg', 0, 0);
  new ImageConstructor('boots', 'img/boots.jpg', 0, 0);
  new ImageConstructor('breakfast', 'img/breakfast.jpg', 0, 0);
  new ImageConstructor('bubblegum', 'img/bubblegum.jpg', 0, 0);
  new ImageConstructor('chair', 'img/chair.jpg', 0, 0);
  new ImageConstructor('cthulhu', 'img/cthulhu.jpg', 0, 0);
  new ImageConstructor('dog-duck', 'img/dog-duck.jpg', 0, 0);
  new ImageConstructor('dragon', 'img/dragon.jpg', 0, 0);
  new ImageConstructor('pen', 'img/pen.jpg', 0, 0);
  new ImageConstructor('pet-sweep', 'img/pet-sweep.jpg', 0, 0);
  new ImageConstructor('scissors', 'img/scissors.jpg', 0, 0);
  new ImageConstructor('shark', 'img/shark.jpg', 0, 0);
  new ImageConstructor('sweep', 'img/sweep.jpg', 0, 0);
  new ImageConstructor('tauntaun', 'img/tauntaun.jpg', 0, 0);
  new ImageConstructor('unicorn', 'img/unicorn.jpg', 0, 0);
  new ImageConstructor('usb', 'img/usb.jpg', 0, 0);
  new ImageConstructor('water-can', 'img/water-can.jpg', 0, 0);
  new ImageConstructor('wine-glass', 'img/wine-glass.jpg', 0, 0);
}

loadImages();

function ImageConstructor(id, src, shown, clicked){
  this.src = src;
  this.id = id;
  this.shown = shown;
  this.clicked = clicked;
  arrayOfPictures.push(this);
}

function threepics () {
  var images = [];
  for (var i = 0; i < 3; i++){
    var index = Math.floor(Math.random() * arrayOfPictures.length);
    arrayOfPictures[index].shown++;
    console.log ('shown', arrayOfPictures[index].shown++);
    images.push(arrayOfPictures[index]);
  }
  return images;
}

function renderImg(images){
  console.log('image array', images);
  var container = document.getElementById('threepics');
  for (var i = 0; i < images.length; i++){
    var liEl  = document.createElement('li');
    liEl.innerHTML = '<img src="' + images[i].src + '" ' + 'id="' + images[i].id + '">';
    container.appendChild(liEl);
  }
}

renderImg(threepics());

function results() {
  var resultContainer = document.getElementById('results');
  for (var i = 0; i < arrayOfPictures.length; i++) {
    var li = document.createElement('li');
    li.innerHTML = 'Product ' + arrayOfPictures[i].id + ' was clicked ' + arrayOfPictures[i].clicked + ' times and shown ' + arrayOfPictures[i].shown + ' times.';
    resultContainer.appendChild(li);
  }
}

var imgContainer = document.getElementById('threepics');
imgContainer.addEventListener('click', handleImgClick);

function handleImgClick(event){
  event.preventDefault;
  var imgClicked = event.target.id;
  if (imgClicked === 'threepics') {
    alert('Press on the picture!');
  }
  else if (imgClicked && totalClicks < 25){
    for (var i = 0; i < arrayOfPictures.length; i++){
      if (imgClicked === arrayOfPictures[i].id){
        arrayOfPictures[i].clicked++;
        console.log('clicked', arrayOfPictures[i].clicked++);
      }
    }
    totalClicks++;
    imgContainer.innerHTML = '';
    renderImg(threepics());
  }
  else if (displayResults){
    results();
    displayResults = false;
  }
}
=======
var clicks= 0;


// var picZero = './img/bag.jpg';
// var picOne = './img/banana.jpg';
// var picTwo = './img/bathroom.jpg';
// var picThree = './img/boots.jpg';
// var picFour = './img/breakfast.jpg';
// var picFive = './img/bubblegum.jpg';
// var picSix = './img/chair.jpg';
// var picSeven = './img/cthulhu.jpg';
// var picEight = './img/dog-duck.jpg';
// var picNine = './img/dragon.jpg';
// var picTen = './img/pen.jpg';
// var picEleven = './img/pet-sweep.jpg';
// var picTwelve = './img/scissors.jpg';
// var picThirteen = './img/shark.jpg';
// var picFourteen = './img/sweep.jpg';
// var picFifteen = './img/tauntaun.jpg';
// var picSixteen = './img/unicorn.jpg';
// var picSeventeen = './img/usb.jpg';
// var picEighteen = './img/water-can.jpg';
// var picNineteen = './img/wine-glass.jpg';

var arrayOfPictures = ['./img/bag.jpg', './img/banana.jpg', './img/bathroom.jpg', './img/boots.jpg', './img/breakfast.jpg', './img/bubblegum.jpg', './img/chair.jpg', './img/cthulhu.jpg', './img/dog-duck.jpg', './img/dragon.jpg', './img/pen.jpg', './img/pet-sweep.jpg', './img/scissors.jpg', './img/shark.jpg', './img/sweep.jpg', './img/tauntaun.jpg', './img/unicorn.jpg', './img/usb.jpg', './img/water-can.jpg', './img/wine-glass.jpg'];

var inUseArray = [{}, {}, {}];

var body = document.getElementById('body');

var leftImage = document.getElementById('leftImg');
var middleImage = document.getElementById('middleImg');
var rightImage = document.getElementById('rightImg');

function randomNumberGenerator (array) {
  var randomNumber = Math.floor(Math.random() * (arrayOfPictures.length - array.length));
  for (var i = 0; i < array.length; i++) {
    if(randomNumber >= array[i]){
      randomNumber += 1;
    }
  }
  return randomNumber;
}

function generatePicture () {
  var array = [];
  for (var i = 0; i < inUseArray.length; i++) {
    var rand = randomNumberGenerator(array);
    console.log(rand);
    if (arrayOfPictures[rand] === inUseArray[0] || arrayOfPictures[rand] === inUseArray[1] || arrayOfPictures[rand] === inUseArray[2]){
      i--;
      continue;
    }

    array[i] = arrayOfPictures[rand];
    inUseArray[i] = arrayOfPictures[rand];
    console.log(arrayOfPictures[rand]);
    console.log(array);
  }
  leftImage.src = array[0];
  middleImage.src = array[1];
  rightImage.src = array[2];
}
generatePicture();
>>>>>>> 30187adc16c43eec40546d28f3a192a77c3238db
