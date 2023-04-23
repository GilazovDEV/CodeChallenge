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

const iProject1 = document.querySelector('.percente-project1');
const iProject2 = document.querySelector('.percente-project2');

const pQuantity = document.querySelector('.p-quantity');
const planQuantity = document.querySelector('.plan-quantity');
const wQuantity = document.querySelector('.w-quantity');

var pDone = document.querySelector(".p-done");
const planDone = document.querySelector('.plan-done');


const PPI = document.querySelector('.projects-progress-info');


circle1.style.strokeDasharray = `${circumference1} ${circumference1}`;
circle1.style.strokeDashoffset = circumference1;

circle2.style.strokeDasharray = `${circumference2} ${circumference2}`;
circle2.style.strokeDashoffset = circumference2;

circle3.style.strokeDasharray = `${circumference3} ${circumference3}`;
circle3.style.strokeDashoffset = circumference3;

function updateProjectProgress() {
  var infoPercent = iProject1.value;
  pQuantity.textContent = infoPercent;
}

function updateProjectProgressTwo() {
  var infoPercent2 = iProject2.value;
  planQuantity.textContent = infoPercent2;
}

iProject1.addEventListener('input', updateProjectProgress);
iProject2.addEventListener('input', updateProjectProgressTwo);



function setProgress1(percent) {
  const offset1 = circumference1 - percent / pQuantity.textContent * circumference1;
  circle1.style.strokeDashoffset = offset1;
  pDone.textContent = percent; // обновляем значение в pdone
  PPI.textContent = percent;
}


function setProgress2(percent) {
  const offset2 = circumference2 - percent / planQuantity.textContent * circumference2;
  circle2.style.strokeDashoffset = offset2;
  planDone.textContent = percent; // обновляем значение в planQuantity
}

function setProgress3(percent) {
  const offset3 = circumference3 - percent / 100 * circumference3;
  circle3.style.strokeDashoffset = offset3;
  wQuantity.textContent = percent; // обновляем значение в wQuantity
}

setProgress1(0);
setProgress2(0);
setProgress3(0);


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

// Назначаем обработчик события на окно для закрытия модального окна
window.onclick = function(event) {
if (event.target.classList.contains('modal')) {
event.target.style.display = 'none';
}
};