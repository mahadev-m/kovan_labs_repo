const sample = document.getElementsByClassName("cls");
console.log(sample);
function color() {
  sample[1].style.color = "red";
}
document.getElementsByClassName("btn")[0].addEventListener("click", () => {
  sample[0].style.color = "green";
});
document.getElementsByClassName("btn")[1].addEventListener("click", color);
