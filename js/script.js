const circle1 = document.getElementById('progress1');
const circle2 = document.getElementById('progress2');
const circle3 = document.getElementById('progress3');

const r1 = circle1.getAttribute('r');
const r2 = circle2.getAttribute('r');
const r3 = circle3.getAttribute('r');

const circumference1 = 2 * Math.PI * r1;
const circumference2 = 2 * Math.PI * r2;
const circumference3 = 2 * Math.PI * r3;

const input1 = document.querySelector('.percente1');
const input2 = document.querySelector('.percente2');
const input3 = document.querySelector('.percente3');

circle1.style.strokeDasharray = `${circumference1} ${circumference1}`;
circle1.style.strokeDashoffset = circumference1;

circle2.style.strokeDasharray = `${circumference2} ${circumference2}`;
circle2.style.strokeDashoffset = circumference2;

circle3.style.strokeDasharray = `${circumference3} ${circumference3}`;
circle3.style.strokeDashoffset = circumference3;

function setProgress1(percent) {
  const offset1 = circumference1 - percent / 100 * circumference1;
  circle1.style.strokeDashoffset = offset1;
}

function setProgress2(percent) {
  const offset2 = circumference2 - percent / 100 * circumference2;
  circle2.style.strokeDashoffset = offset2;
}

function setProgress3(percent) {
  const offset3 = circumference3 - percent / 100 * circumference3;
  circle3.style.strokeDashoffset = offset3;
}

setProgress1(100);
setProgress2(100);
setProgress3(100);

input1.addEventListener('input', function () {
  setProgress1(input1.value);
});

input2.addEventListener('input', function () {
  setProgress2(input2.value);
});

input3.addEventListener('input', function () {
  setProgress3(input3.value);
});


// Получаем элементы DOM
var modals = document.querySelectorAll('.modal');
var images = document.querySelectorAll('.open-modal');

// Перебираем все картинки и назначаем им обработчик события
images.forEach(function(image) {
  image.onclick = function() {
    var modalId = image.getAttribute('data-modal');
    var modal = document.getElementById(modalId);
    modal.style.display = 'block';
  }
});

// Назначаем обработчик события на все крестики для закрытия модального окна
var closeButtons = document.querySelectorAll('.close');
closeButtons.forEach(function(button) {
  button.onclick = function() {
    var modal = button.parentElement.parentElement;
    modal.style.display = 'none';
  }
});

// Назначаем обработчик события на окно для закрытия мод
