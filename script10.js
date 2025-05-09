document.addEventListener("DOMContentLoaded", function () {
  const steps = document.querySelectorAll(".step");
  const forms = document.querySelectorAll(".form");
  const prevBtn = document.getElementById("prevBtn");
  const nextBtn = document.getElementById("nextBtn");

  let currentStep = 1;
  const totalSteps = forms.length;

  function showStep(step) {
    // Ajustar paso si es menor a 1 o mayor al total
    if (step < 1) step = totalSteps;
    if (step > totalSteps) step = 1;

    currentStep = step;

    // Actualizar clases de los pasos
    steps.forEach((s, index) => {
      const stepNumber = index + 1;
      s.classList.remove("active", "completed");

      if (stepNumber === step) {
        s.classList.add("active");
      }

      if (stepNumber < step || step === 1 && stepNumber === totalSteps) {
        s.classList.add("completed");
      }
    });

    // Mostrar solo el paso actual
    forms.forEach((form, index) => {
      form.classList.toggle("hidden", index + 1 !== step);
    });
  }

  prevBtn.addEventListener("click", () => {
    showStep(currentStep - 1);
  });

  nextBtn.addEventListener("click", () => {
    showStep(currentStep + 1);
  });

  // Inicializar
  showStep(currentStep);
});