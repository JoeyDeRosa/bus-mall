'use strict';

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
