/*Stepper*/

const steppers = document.querySelectorAll(".stepper");

if (steppers.length > 0) {
  const isNotApple = () => {
    if (!/iPhone|iPad|iPod/i.test(navigator.userAgent)) {
      return false;
    }
    return true;
  };

  function allowNumbersOnly(e) {
    var code = e.which ? e.which : e.keyCode;
    if (code > 31 && (code < 48 || code > 57)) {
      e.preventDefault();
    } else if (code >= 48 && code <= 57) {
      if (!e.target.value) {
        e.target.value = 1;
      }
    }
  }

  steppers.forEach((stepper) => {
    const stepperInput = stepper.querySelector(".stepper__input");
    const stepperBtnUp = stepper.querySelector(".stepper__btn--up");
    const stepperBtnDown = stepper.querySelector(".stepper__btn--down");
    const stepperField = stepper.querySelector(".stepper__field");
    const stepperText = stepper.querySelector(".stepper__text");
    let count = stepperInput.value;

    stepperInput.addEventListener("keyup", (e) => {
      let self = e.currentTarget;

      if (self.value == "0") {
        self.value = 1;
      }

      if (isNotApple()) {
        self.style.width = self.value.length + 0.6 + "ex";
      } else {
        self.style.width = self.value.length + 1.2 + "ex";
      }

      count = stepperInput.value;

      if (count <= 1) {
        // проверяем текущее значение и устанавливаем минимальное значение
        stepperBtnDown.classList.add("stepper__btn--disabled");
        count = 1;
      } else {
        stepperBtnDown.classList.remove("stepper__btn--disabled");
      }
    });

    stepperField.addEventListener("click", () => {
      stepperText.style.display = "none"; // Скрываем элемент stepper__text
      stepperInput.style.minWidth = "2em"; // Добавляем правый отступ в 2em
    });

    stepperInput.addEventListener("keypress", (e) => {
      allowNumbersOnly(e);
    });

    stepperInput.addEventListener("change", (e) => {
      let self = e.currentTarget;

      if (!self.value) {
        self.value = 1;
      }

      count = stepperInput.value;

      if (count <= 1) {
        // проверяем текущее значение и устанавливаем минимальное значение
        stepperBtnDown.classList.add("stepper__btn--disabled");
        count = 1;
      } else {
        stepperBtnDown.classList.remove("stepper__btn--disabled");
      }
    });

    stepperBtnUp.addEventListener("click", (e) => {
      e.preventDefault();

      if (count < 0) count = 0;

      count++;

      if (count <= 1) {
        // проверяем текущее значение и устанавливаем минимальное значение
        stepperBtnDown.classList.add("stepper__btn--disabled");
        count = 1;
      } else {
        stepperBtnDown.classList.remove("stepper__btn--disabled");
      }

      stepperInput.value = count;

      if (isNotApple()) {
        stepperInput.style.width = stepperInput.value.length + 0.6 + "ex";
      } else {
        stepperInput.style.width = stepperInput.value.length + 1.2 + "ex";
      }
    });

    stepperInput.addEventListener("click", () => {
      if (stepperInput.value === "1") {
        stepperInput.value = "12";
      }
    });

    stepperBtnDown.addEventListener("click", (e) => {
      e.preventDefault();

      if (count <= 0) {
        count = 0;
      } else {
        count--;
      }

      if (count <= 1) {
        // проверяем текущее значение и устанавливаем минимальное значение
        stepperBtnDown.classList.add("stepper__btn--disabled");
        count = 1;
      } else {
        stepperBtnDown.classList.remove("stepper__btn--disabled");
      }

      stepperInput.value = count;

      if (isNotApple()) {
        stepperInput.style.width = stepperInput.value.length + 0.6 + "ex";
      } else {
        stepperInput.style.width = stepperInput.value.length + 1.2 + "ex";
      }
    });
  });
}

/*End Stepper*/
