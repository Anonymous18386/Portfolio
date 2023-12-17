const screen = document.getElementById("output")
const buttonsP = document.querySelectorAll(".printable")

buttonsP.forEach(btn => {
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
function c() {
    screen.innerText = ""
}