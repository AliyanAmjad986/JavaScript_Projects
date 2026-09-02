let cart_box = document.getElementById("cart_box");
cart_box.style.display = "none";
let cartbtn = document.getElementById("cart_btn");
cartbtn.addEventListener("mouseenter", () => {
  cart_box.style.display = "block";
});
cartbtn.addEventListener("mouseleave", () => {
  cart_box.style.display = "none";
});
cart_box.addEventListener("mouseenter", () => {
  cart_box.style.display = "block";
});
cart_box.addEventListener("mouseleave", () => {
  cart_box.style.display = "none";
});
let searchbar_input = document.getElementById("searchbar_input");
searchbar_input.addEventListener("click", () => {});
