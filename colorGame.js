let numSquares = 6;
const squares = document.querySelectorAll('.square');
const colorDisplay = document.getElementById('colorDisplay');
const messageDisplay = document.querySelector('#message');
const h1 = document.querySelector('h1');
const resetButton = document.querySelector('#reset');
const modeButtons = document.querySelectorAll('.mode')



  //mode button Event listeners
  for (let i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener('click', () => {
      modeButtons[0].classList.remove('selected');
      modeButtons[1].classList.remove('selected');
      modeButtons[i].classList.add('selected');
      modeButtons[i].textContent === 'Easy' ? numSquares = 3: numSquares = 6;
      reset();
    });
  }
  function reset(){
    //generate all new Colors
    colors = generateRandomColors(numSquares);
    //pick a new random colors
    picked = pickColor();
    //change colorDisplay to match with picked color
    colorDisplay.textContent = picked;
    messageDisplay.textContent = '';
    resetButton.textContent = 'New Colors';
    //change colors of squares
    for (let i = 0; i < squares.length; i++) {
      if (colors[i]) {
        squares[i].style.display = 'block';
        squares[i].style.backgroundColor = colors[i];
      }else{
        squares[i].style.display = 'none';
      }
    }
    h1.style.backgroundColor = 'steelblue';
  }

  const randomColor = () => {
    //pick a red color from 0 - 255;
    let r = Math.floor(Math.random() * 256);
    //pick a green color from 0 - 255;
    let g = Math.floor(Math.random() * 256);
    //pick a blue color from 0 - 255;
    let b = Math.floor(Math.random() * 256);
    return `rgb(${r}, ${g}, ${b})`;
  }

  const generateRandomColors = num => {
      let arr = [];
      for (let i = 0; i < num; i++) {
        arr.push(randomColor())
      }
      return arr;
    }


  let colors = generateRandomColors(numSquares);
      const pickColor = () => {
      let random = Math.floor(Math.random() * colors.length);
      return colors[random];
    }
let picked = pickColor();
  for (let i = 0; i < squares.length; i++) {
    squares[i].style.backgroundColor = colors[i];
    colorDisplay.textContent = picked;

    squares[i].addEventListener('click', () => {
      let clickedColor = squares[i].style.backgroundColor;
      if(clickedColor === picked){
        messageDisplay.textContent = 'Correct!';
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetButton.textContent = 'Play again?'
      }else{
        squares[i].style.backgroundColor = '#232323';
        messageDisplay.textContent = 'Try again';
      }
    });
  }

  const changeColors = color => {
      for (let i = 0; i < squares.length; i++) {
        squares[i].style.backgroundColor = color;
      }
  }

resetButton.addEventListener('click', () => {
  reset();
});
