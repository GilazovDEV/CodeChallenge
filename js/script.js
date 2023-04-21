const circle1 = document.getElementById('circle1');
const circle2 = document.getElementById('circle2');
const circle3 = document.getElementById('circle3');
const circumference = 2 * Math.PI;

circle1.style.strokeDasharray = `${circumference} ${circumference}`;
circle1.style.strokeDashoffset = circumference;
setProgress(circle1, 0);

circle2.style.strokeDasharray = `${circumference} ${circumference}`;
circle2.style.strokeDashoffset = circumference;
setProgress(circle2, 0);

circle3.style.strokeDasharray = `${circumference} ${circumference}`;
circle3.style.strokeDashoffset = circumference;
setProgress(circle3, 0);

function setProgress(circle, percent) {
  const r = circle.r.baseVal.value;
  const offset = circumference - percent / 100 * circumference;
  circle.style.strokeDashoffset = offset;
}

const input1 = document.getElementById('input1');
input1.addEventListener('input', function () {
  const percent = input1.value;
  setProgress(circle1, percent);
});

const input2 = document.getElementById('input2');
input2.addEventListener('input', function () {
  const percent = input2.value;
  setProgress(circle2, percent);
});

const input3 = document.getElementById('input3');
input3.addEventListener('input', function () {
  const percent = input3.value;
  setProgress(circle3, percent);
});
