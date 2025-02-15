console.log(screen.availHeight)
console.log(screen.availWidth)
function openWin() {
myWindow = window.open("", "", "width=200, height=100");
}  
function resizeWin() {
myWindow.resizeTo(300, 300);
}