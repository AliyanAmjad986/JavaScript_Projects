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

let cards = [];
let titles = [];
let imagesrc = [];
for (let i = 1; i <= 5; i++) {
  cards[i] = document.getElementById(`card_${i}`);
  titles[i] = document.getElementById(`title_${i}`);
  imagesrc[i] = document.getElementById(`itemimage_${i}`);

  cards[i].addEventListener("click", () => {
    localStorage.setItem(`title`, titles[i].innerText);
    localStorage.setItem(`imagesrc`, imagesrc[i].src);
    localStorage.setItem(`iteration_value`, i);
  });
}


