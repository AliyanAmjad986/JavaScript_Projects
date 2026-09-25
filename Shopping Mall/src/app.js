// image_5.style.display = "none";
// image_5.style.height = "0";

// image_6.style.display = "none";
// image_6.style.height = "0";

let down_button = document.getElementById("slide_arrow_down");
let up_button = document.getElementById("slide_arrow_up");

// down_button.addEventListener("click", () => {
//   image_1.style.display = "none";
//   image_1.style.height = "0";
//   image_5.style.display = "block";
//   image_5.style.height = "70px";
// });

// up_button.addEventListener("click", () => {
//   image_1.style.display = "block";
//   image_1.style.height = "70px";
//   image_5.style.display = "none";
//   image_5.style.height = "0";
// });

let image_1 = document.getElementById("image_1");
let image_2 = document.getElementById("image_2");
let image_3 = document.getElementById("image_3");
let image_4 = document.getElementById("image_4");
let image_5 = document.getElementById("image_5");
let image_6 = document.getElementById("image_6");
let image_slide = document.getElementById("images_slide");
let pic_item = document.getElementById("item_image");
image_4.addEventListener("mouseover", () => {});

image_2.addEventListener("mouseenter", () => {
  image_slide.style.transform = "translateY(0px)";
  image_slide.style.transition = "transform 500ms ease";
  pic_item.src = image_2.src;
});
image_3.addEventListener("mouseenter", () => {
  image_slide.style.transform = "translateY(-50px)";
  image_slide.style.transition = "transform 500ms ease";
  pic_item.src = image_3.src;
});
image_4.addEventListener("mouseenter", () => {
  image_slide.style.transform = "translateY(-100px)";
  image_slide.style.transition = "transform 500ms ease";
  pic_item.src = image_4.src;
});
image_5.addEventListener("mouseenter", () => {
  image_slide.style.transform = "translateY(-140px)";
  image_slide.style.transition = "transform 500ms ease";
  pic_item.src = image_5.src;
});
image_6.addEventListener("mouseenter", () => {
  image_slide.style.transform = "translateY(-170px)";
  image_slide.style.transition = "transform 500ms ease";
  pic_item.src = image_6.src;
  
});

console.dir(pic_item);
console.log(pic_item.src);
