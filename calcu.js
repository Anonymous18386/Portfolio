var screen = document.getElementById("output")
var buttons = document.querySelectorAll(".printable")

buttons.forEach(btn => {
    btn.addEventListener("click", () => printText(btn.innerText))
})
function printText(data) {
    screen.innerText += data
}
function calculate() {
    screen.innerText = eval(screen.innerText)
}
function del() {
    screen.innerText = screen.innerText.slice(0, -1)
}
function ac() {
    screen.innerText = ""
}