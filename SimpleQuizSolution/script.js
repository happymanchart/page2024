function checkAnswer(answer) {
  const result = document.getElementById("result")
  if (answer === "a") {
    result.textContent = "ถูกต้อง พีไอเอ็ม ย่อมาจาก PIM"
    result.style.color = "green"
  } else {
    result.textContent = "Incorrect! Try again."
    result.style.color = "red"
  }
}
