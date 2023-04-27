// const circle1 = document.getElementById('progress1');
// const circle2 = document.getElementById('progress2');
// const circle3 = document.getElementById('progress3');

// const r1 = circle1.getAttribute('r');
// const r2 = circle2.getAttribute('r');
// const r3 = circle3.getAttribute('r');

// const circumference1 = 2 * Math.PI * r1;
// const circumference2 = 2 * Math.PI * r2;
// const circumference3 = 2 * Math.PI * r3;

// const input1 = document.querySelector('.percente1');
// const input2 = document.querySelector('.percente2');
// const input3 = document.querySelector('.percente3');

// const iProject1 = document.querySelector('.percente-project1');
// const iProject2 = document.querySelector('.percente-project2');

// const pQuantity = document.querySelector('.p-quantity');
// const planQuantity = document.querySelector('.plan-quantity');
// const wQuantity = document.querySelector('.w-quantity');

// var pDone = document.querySelector(".p-done");
// const planDone = document.querySelector('.plan-done');

// const PPI = document.querySelector('.projects-progress-info');

// circle1.style.strokeDasharray = `${circumference1} ${circumference1}`;
// circle1.style.strokeDashoffset = circumference1;

// circle2.style.strokeDasharray = `${circumference2} ${circumference2}`;
// circle2.style.strokeDashoffset = circumference2;

// circle3.style.strokeDasharray = `${circumference3} ${circumference3}`;
// circle3.style.strokeDashoffset = circumference3;

// function updateProjectProgress() {
//   var infoPercent = iProject1.value;
//   pQuantity.textContent = infoPercent;
// }

// function updateProjectProgressTwo() {
//   var infoPercent2 = iProject2.value;
//   planQuantity.textContent = infoPercent2;
// }

// iProject1.addEventListener('input', updateProjectProgress);
// iProject2.addEventListener('input', updateProjectProgressTwo);

// function setProgress1(percent) {
//   percent = parseInt(percent);
//   const offset1 = percent > pQuantity.textContent ? 0 : circumference1 - percent / pQuantity.textContent * circumference1;
//   circle1.style.strokeDashoffset = offset1;
//   pDone.textContent = percent; // обновляем значение в pdone
//   PPI.textContent = percent;
// }

// function setProgress2(percent) {
//   percent = parseInt(percent);
//   const offset2 = percent > planQuantity.textContent ? 0 : circumference2 - percent / planQuantity.textContent * circumference2;
//   // const offset2 = circumference2 - percent / planQuantity.textContent * circumference2;
//   circle2.style.strokeDashoffset = offset2;
//   planDone.textContent = percent; // обновляем значение в planQuantity
// }

// function setProgress3(percent) {
//   percent = parseInt(percent);
//   const offset3 = percent > pQuantity.textContent ? 0 : circumference3 - percent / pQuantity.textContent * circumference3;
//   // const offset3 = circumference3 - percent / pQuantity.textContent * circumference3;
//   circle3.style.strokeDashoffset = offset3;
//   wQuantity.textContent = percent; // обновляем значение в wQuantity
// }

// setProgress1(0);
// setProgress2(0);
// setProgress3(0);

// input1.addEventListener('input', function () {
//   setProgress1(input1.value);
// });

// input2.addEventListener('input', function () {
//   setProgress2(input2.value);
// });

// input3.addEventListener('input', function () {
//   setProgress3(input3.value);
// });

// // Получаем элементы DOM
// var modals = document.querySelectorAll('.modal');
// var images = document.querySelectorAll('.open-modal');

// // Перебираем все картинки и назначаем им обработчик события
// images.forEach(function(image) {
//   image.onclick = function() {
//     var modalId = image.getAttribute('data-modal');
//     var modal = document.getElementById(modalId);
//     modal.style.display = 'block';
//   }
// });

// // Назначаем обработчик события на все крестики для закрытия модального окна
// var closeButtons = document.querySelectorAll('.close');
// closeButtons.forEach(function(button) {
//   button.onclick = function() {
//     var modal = button.parentElement.parentElement;
//     modal.style.display = 'none';
//   }
// });

// // Назначаем обработчик события на окно для закрытия модального окна
// window.onclick = function(event) {
// if (event.target.classList.contains('modal')) {
// event.target.style.display = 'none';
// }
// };

const circle1 = document.getElementById('progress1');
const circle2 = document.getElementById('progress2');
const circle3 = document.getElementById('progress3');

const r1 = parseInt(circle1.getAttribute('r'));
const r2 = parseInt(circle2.getAttribute('r'));
const r3 = parseInt(circle3.getAttribute('r'));

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

let pDone = document.querySelector(".p-done");
const planDone = document.querySelector('.plan-done');

const PPI = document.querySelector('.projects-progress-info');

circle1.style.strokeDasharray = `${circumference1} ${circumference1}`;
circle1.style.strokeDashoffset = circumference1;

circle2.style.strokeDasharray = `${circumference2} ${circumference2}`;
circle2.style.strokeDashoffset = circumference2;

circle3.style.strokeDasharray = `${circumference3} ${circumference3}`;
circle3.style.strokeDashoffset = circumference3;


function updateProjectProgress() {
  var infoPercent = parseInt(iProject1.value);
  pQuantity.textContent = infoPercent;
  pDone.textContent = parseInt(input1.value);
  localStorage.setItem('pDone1', pDone.textContent);
  localStorage.setItem('pQuantity1', pQuantity.textContent);
  localStorage.setItem('project1', infoPercent);
  setProgress1(infoPercent);
}

function updateProjectProgressTwo() {
  var infoPercent2 = parseInt(iProject2.value);
  planQuantity.textContent = infoPercent2;
  planDone.textContent = parseInt(input2.value);
  localStorage.setItem('planDone2', planDone.textContent);
  localStorage.setItem('planQuantity2', planQuantity.textContent);
  localStorage.setItem('project2', infoPercent2);
  setProgress2(infoPercent2);
}

// iProject1.addEventListener('input', updateProjectProgress);
// iProject2.addEventListener('input', updateProjectProgressTwo);

iProject1.addEventListener('input', function() {
  var infoPercent = parseInt(iProject1.value);
  pQuantity.textContent = infoPercent;
  localStorage.setItem('pQuantity1', pQuantity.textContent);
  setProgress1(localStorage.getItem('project1'));
});

iProject2.addEventListener('input', function() {
  var infoPercent2 = parseInt(iProject2.value);
  planQuantity.textContent = infoPercent2;
  localStorage.setItem('planQuantity2', planQuantity.textContent);
  setProgress2(localStorage.getItem('project2'));
});




// Get the saved values from localStorage and update the progress bars
var savedProject1 = localStorage.getItem('project1');
if (savedProject1 !== null) {
  setProgress1(savedProject1);
  pQuantity.textContent = localStorage.getItem('pQuantity1');
  planDone.textContent = localStorage.getItem('pDone1');
}

var savedProject2 = localStorage.getItem('project2');
if (savedProject2 !== null) {
  setProgress2(savedProject2);
  planQuantity.textContent = localStorage.getItem('planQuantity2');
  planDone.textContent = localStorage.getItem('planDone2');
}


// function setProgress1(percent) {
//   percent = parseInt(percent);
//   const savedPercent = parseInt(localStorage.getItem('project1')) || 0;
//   // const offset1 = circumference1 - percent / 100 * circumference1;
//   const offset1 = percent > pQuantity.textContent ? 0 : circumference1 - percent / pQuantity.textContent * circumference1;
//   circle1.style.strokeDashoffset = offset1;
//   pQuantity.textContent = parseInt(localStorage.getItem('pQuantity1')) || 0;
//   pDone.textContent = parseInt(localStorage.getItem('pDone1')) || 0;
//   PPI.textContent = percent;
//   localStorage.setItem('project1', percent);
// }


// function setProgress2(percent) {
//   percent = parseInt(percent);
//   const savedPercent = parseInt(localStorage.getItem('project2')) || 0;
//   // const offset2 = circumference2 - percent / savedPercent * circumference2;
//   const offset2 = percent > planQuantity.textContent ? 0 : circumference2 - percent / planQuantity.textContent * circumference2;
//   circle2.style.strokeDashoffset = offset2;
//   planDone.textContent = parseInt(localStorage.getItem('planDone2')) || 0;
//   planQuantity.textContent = localStorage.getItem('planQuantity2') || 0;
//   localStorage.setItem('project2', percent);
// }

function setProgress1(percent) {
  percent = parseInt(percent);
  const savedPercent = parseInt(localStorage.getItem('project1')) || 0;
  pQuantity.textContent = parseInt(localStorage.getItem('pQuantity1')) || 0;
  pDone.textContent = parseInt(localStorage.getItem('pDone1')) || 0;
    const offset1 = percent > pQuantity.textContent ? 0 : circumference1 - percent / pQuantity.textContent * circumference1;
  circle1.style.strokeDashoffset = offset1;
  PPI.textContent = percent;
  localStorage.setItem('project1', percent);
}

function setProgress2(percent) {
  percent = parseInt(percent);
  const savedPercent = parseInt(localStorage.getItem('project2')) || 0;
  const offset2 = percent > planQuantity.textContent ? 0 : circumference2 - percent / planQuantity.textContent * circumference2;

  circle2.style.strokeDashoffset = offset2;
  planDone.textContent = parseInt(localStorage.getItem('planDone2')) || 0;
  planQuantity.textContent = localStorage.getItem('planQuantity2') || 0;
  localStorage.setItem('project2', percent);
}

function setProgress3(percent) {
  percent = parseInt(percent);
  const savedPercent = parseInt(localStorage.getItem('wQuantity')) || 0;
  // const offset3 = circumference3 - percent / savedPercent * circumference3;
  const offset3 = percent > pQuantity.textContent ? 0 : circumference3 - percent / pQuantity.textContent * circumference3;
  circle3.style.strokeDashoffset = offset3;
  wQuantity.textContent = percent;
  localStorage.setItem('wQuantity', percent);
}

setProgress1(0);
setProgress2(0);
setProgress3(0);

input1.addEventListener('input', function () {
  setProgress1(input1.value);
  localStorage.setItem('input1', input1.value);
  pDone.textContent = input1.value;
  localStorage.setItem('pDone1', input1.value);
});


input2.addEventListener('input', function () {
  setProgress2(input2.value);
  localStorage.setItem('input2', input2.value);
  planDone.textContent = input2.value;
  localStorage.setItem('planDone2', input2.value);
});

input3.addEventListener('input', function () {
  setProgress3(input3.value);
  localStorage.setItem('input3', input3.value);
});


// Get the saved values from localStorage and update the input fields
var savedInput1 = localStorage.getItem('input1');
if (savedInput1 !== null) {
  input1.value = savedInput1;
  setProgress1(savedInput1);
}

var savedInput2 = localStorage.getItem('input2');
if (savedInput2 !== null) {
  input2.value = savedInput2;
  setProgress2(savedInput2);
}

var savedInput3 = localStorage.getItem('input3');
if (savedInput3 !== null) {
  input3.value = savedInput3;
  setProgress3(savedInput3);
}

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