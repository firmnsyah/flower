const button = document.querySelector('button')
let hasFocus = false

button.addEventListener('focus', () => hasFocus = true)

const autofocus = () => {
  if (hasFocus) return
  button.focus()
  setTimeout(autofocus, 1000/60)
}

autofocus()