'use strict';

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
