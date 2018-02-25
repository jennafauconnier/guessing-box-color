var monSelect = document.getElementById("mybutton");

var winColor;

var colors = ['yellow', 'green', 'red'];

function getRandomInt(max) {
  return Math.floor(Math.random() * max);
}



function selectColorRandomly() {
  var randomInt = getRandomInt(colors.length);
  winColor = colors[randomInt]
}

function toto(e) {
  var value = document.getElementById("myselect").value;
  console.log(value, winColor);
  if(value === winColor) {
    alert('Gagnant !!!!')
  } else {
    alert('Perdant !')
  }
  selectColorRandomly()
}

selectColorRandomly()
monSelect.addEventListener("click", toto);