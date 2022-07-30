const correctAnswers = [8, 4, 22, 3];
const form = document.querySelector(".question-form");
const result = document.querySelector(".result");
const bravo = document.querySelector(".bravo");
const button = document.querySelector(".btn");
form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  let score = 0;
  for (let i = 0; i < correctAnswers.length; i++) {
    if (userAnswers[i] == correctAnswers[i]) {
      score += 25;
    }
  }

  if (score === 100) {
    bravo.classList.remove("d-none");
    button.classList.add("disabled");
  } else {
    bravo.classList.add("d-none");
    button.classList.remove("disabled");
  }
  result.classList.remove("d-none");
  document.querySelector("#percentage").textContent = `${score}%`;
});
