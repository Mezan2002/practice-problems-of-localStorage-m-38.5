let value = parseInt(document.getElementById("number").innerText);
// localStorage.setItem("count", 0);
function incrementValue() {
  value++;
  document.getElementById("number").innerText = value;
  localStorage.setItem("count", value);
}
function decrementValue() {
  value--;
  document.getElementById("number").innerText = value;
  localStorage.setItem("count", value);
}
document.getElementById("number").innerText = localStorage.getItem("count");
