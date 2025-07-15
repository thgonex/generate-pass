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



