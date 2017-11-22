var storedName = localStorage.getItem('name');
var myButton = document.querySelector('button');
var myHeading = document.querySelector('h1');

function setUserName() {
  var myName = prompt('Please enter your name.');
  localStorage.setItem('name', myName);
  myHeading.textContent = 'New York is great!, ' + myName;
}

if(!storedName) {
  setUserName();
} else {
   myHeading.textContent = 'New York is great!, ' + storedName;
}

myButton.onclick = function() {
  setUserName();
}

var myImage = document.querySelector('img');

myImage.onclick = function() {
    var mySrc = myImage.getAttribute('src');
    if(mySrc === 'images/newyork.png') {
      myImage.setAttribute ('src','images/newyork2.png');
    } else {
      myImage.setAttribute ('src','images/newyork.png');
    }
}