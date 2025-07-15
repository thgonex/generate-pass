const passwordDisplay = document.getElementById("password")
const generateBtn = document.getElementById("generateBtn")
const counterNum = document.querySelector("#counterNum")
const hideBtn = document.querySelector(".hideBtn")

const useUpper = document.querySelector("#useUpper")
const useDigits = document.querySelector("#useDigits")
const useSymbols = document.querySelector("#useSymbols")


//PASSWORD
function generatePassword(length) {
  let chars = ""

  hideBtn.classList.remove("hideBtn")

if (useUpper.checked) {
  chars += "ABCDEFGHIJKLMNOPQRSTUVWXYZ"
}

if (useDigits.checked) {
  chars += "0123456789"
}

if (useSymbols.checked) {
  chars += "!@#$%&*"
}

chars += "abcdefghijklmnopqrstuvwxyz"

let password = ""
for (let i = 0; i < length; i++) {
  const randomIndex = Math.floor(Math.random() * chars.length)
  password += chars[randomIndex]
}

  return password
}


//GENERATE BTN
generateBtn.addEventListener("click", () => {
  const counterStr = counterNum.value.trim()
  hideBtn.classList.add("hideBtn")

  if (counterStr === "") {
    passwordDisplay.textContent = "Заполните поле!"
    return
  }

  const counterNumberValue = +counterStr

  if (counterNumberValue > 16) {
    passwordDisplay.textContent = "Пароль слишком длинный!"
    return
  } else if (counterNumberValue < 8 && counterNumberValue >= 0) {
    passwordDisplay.textContent = "Пароль слишком короткий!"
    return
  } else if (counterNumberValue < 0) {
    passwordDisplay.textContent = "Такого пароля не может быть!"
    return
  }

  if (
    !useUpper.checked &&
    !useDigits.checked &&
    !useSymbols.checked
  ) {
    passwordDisplay.textContent = "Выберите хотя бы один тип символов!"
    hideBtn.classList.add("hideBtn")
    return
  }

  const newPassword = generatePassword(counterNumberValue)
  passwordDisplay.textContent = newPassword
  hideBtn.classList.remove("hideBtn")
})



//COPY BTN
hideBtn.addEventListener("click", () => {
  const password = passwordDisplay.textContent.trim()

  navigator.clipboard.writeText(password)
    .then(() => {
      hideBtn.textContent = "Скопировано!"
      setTimeout(() => {
        hideBtn.textContent = "Скопировать"
      }, 2000)
    })
    .catch(() => {
      alert("Ошибка при копировании")
    })
})




const projectBtn = document.getElementById('projectLink');
const supportBtn = document.getElementById('supportLink');
const projectPopup = document.getElementById('projectPopup');
const supportPopup = document.getElementById('supportPopup');

function closeAllPopups() {
  projectPopup.classList.add('hidden');
  supportPopup.classList.add('hidden');
}

// Открытие нужного окна и закрытие другого
projectBtn.addEventListener('click', function(e) {
   e.preventDefault();
  const wasVisible = !projectPopup.classList.contains('hidden');
  closeAllPopups();
   if (!wasVisible) projectPopup.classList.remove('hidden');
});

supportBtn.addEventListener('click', function(e) {
   e.preventDefault();
  const wasVisible = !supportPopup.classList.contains('hidden');
   closeAllPopups();
   if (!wasVisible) supportPopup.classList.remove('hidden');
 });

// Закрытие при клике вне модалки
document.addEventListener('click', function(e) {
   const isPopup = e.target.closest('.popup');
   const isNavLink = e.target === projectBtn || e.target === supportBtn;
   if (!isPopup && !isNavLink) {
     closeAllPopups();
   }
});


