/*

document.querySelector(".btn").addEventListener("click", function () {
  let result = document.querySelector(".result");
  result.classList.remove("d-none");
});

*/

const correctAnswers = ["E", "E", "E", "E"];

const form = document.querySelector(".question-form");
const result = document.querySelector(".result");

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const userAnswers = [
    form.q1.value,
    form.q2.value,
    form.q3.value,
    form.q4.value,
  ];

  let score = 0;

  // forEach Yöntemiyle array karşılaştırma
  /*
  userAnswers.forEach((answer, index) => {
    if (answer === correctAnswers[index]) {
      score += 25;
    }
  });

  */
  //for döngüsüyle array karşılaştırma.
  for (let i = 0; i < correctAnswers.length; i++) {
    if (userAnswers[i] === correctAnswers[i]) {
      score += 25;
    }
  }

  result.classList.remove("d-none");

  //document.getElementById("percentage").textContent = `${score}%`;
  //result.querySelector("#percentage").textContent = `${score}%`;
  document.querySelector("#percentage").textContent = `${score}%`;
});
