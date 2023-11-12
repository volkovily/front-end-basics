// task1
const element1 = document.getElementById('element1')
let isClicked = false

element1.addEventListener('click', () => {
  if (!isClicked) {
    element1.style.backgroundColor = 'red'
    element1.style.color = 'white'
    isClicked = true
  } else {
    element1.style.backgroundColor = 'green'
    element1.style.color = 'black'
    isClicked = false
  }
})

const element2 = document.querySelector('#element2');
let isClicked2 = false;

element2.addEventListener('click', () => {
  if (!isClicked2) {
    element2.style.backgroundColor = 'blue';
    element2.style.color = 'white';
    isClicked2 = true;
  } else {
    element2.style.backgroundColor = 'yellow';
    element2.style.color = 'red';
    isClicked2 = false;
  }
});

// task2
const imageContainer = document.getElementById('image-container');
let image = document.getElementById('image');
const addButton = document.getElementById('add');
const increaseButton = document.getElementById('increase');
const decreaseButton = document.getElementById('decrease');
const removeButton = document.getElementById('remove');

addButton.addEventListener('click', function() {
    if (!image) {
        image = document.createElement('img');
        image.id = 'image';
        image.src = 'https://photos.smugmug.com/Europe/Italy/Rome/i-sgm3wGs/0/b26af301/500x500!/IMG_1967-500x500!.jpg';
        image.alt = 'Фото Рим (Італія)';
        imageContainer.appendChild(image);
    }
});

increaseButton.addEventListener('click', function() {
    if (image) {
        image.width = image.width * 1.1;
        image.height = image.height * 1.1;
    }
});

decreaseButton.addEventListener('click', function() {
    if (image) {
        image.width = image.width * 0.9;
        image.height = image.height * 0.9;
    }
});

removeButton.addEventListener('click', function() {
    if (image) {
        image.remove();
        image = null;
    }
});




