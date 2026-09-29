let down_button = document.getElementById("slide_arrow_down");
let up_button = document.getElementById("slide_arrow_up");
let min_quantity = "1";

let image_1 = document.getElementById("image_1");
let image_2 = document.getElementById("image_2");
let image_3 = document.getElementById("image_3");
let image_4 = document.getElementById("image_4");
let image_5 = document.getElementById("image_5");
let image_6 = document.getElementById("image_6");
let slide_video = document.getElementById("slide_video");
let image_slide = document.getElementById("images_slide");
let pic_item = document.getElementById("item_image");
let item_video = document.getElementById("item_video");
item_video.style.display = "none";
image_4.addEventListener("mouseover", () => {});

image_2.addEventListener("mouseenter", () => {
  image_slide.style.transform = "translateY(0px)";
  image_slide.style.transition = "transform 500ms ease";
  pic_item.style.display = "block";
  item_video.style.display = "none";
  pic_item.src = image_2.src;
});
image_3.addEventListener("mouseenter", () => {
  image_slide.style.transform = "translateY(-50px)";
  image_slide.style.transition = "transform 500ms ease";
  pic_item.style.display = "block";
  item_video.style.display = "none";
  item_video.pause();
  pic_item.src = image_3.src;
});
image_4.addEventListener("mouseenter", () => {
  image_slide.style.transform = "translateY(-120px)";
  image_slide.style.transition = "transform 500ms ease";
  pic_item.style.display = "block";
  item_video.style.display = "none";
  item_video.pause();
  pic_item.src = image_4.src;
});
image_5.addEventListener("mouseenter", () => {
  image_slide.style.transform = "translateY(-160px)";
  image_slide.style.transition = "transform 500ms ease";
  pic_item.style.display = "block";
  item_video.style.display = "none";
  item_video.pause();
  pic_item.src = image_5.src;
});
image_6.addEventListener("mouseenter", () => {
  image_slide.style.transform = "translateY(-200px)";
  image_slide.style.transition = "transform 500ms ease";
  pic_item.style.display = "block";
  item_video.style.display = "none";
  item_video.pause();
  pic_item.src = image_6.src;
});
slide_video.addEventListener("mouseenter", () => {
  image_slide.style.transform = "translateY(-260px)";
  image_slide.style.transition = "transform 500ms ease";
  slide_video.style.border = "2px solid black";
  pic_item.style.display = "none";
  item_video.style.display = "block";
  item_video.play();

  item_video.src = slide_video.src;
});

console.dir(pic_item);
console.log(pic_item.src);

let video_btn = document.getElementById("video_btn");
video_btn.addEventListener("click", () => {
  image_slide.style.transform = "translateY(-260px)";
  image_slide.style.transition = "transform 500ms ease";
  item_video.src = slide_video.src;
  pic_item.style.display = "none";
  item_video.style.display = "block";
  item_video.play();
});

let photo_btn = document.getElementById("photo_btn");
photo_btn.addEventListener("click", () => {
  image_slide.style.transform = "translateY(0px)";
  image_slide.style.transition = "transform 500ms ease";
  pic_item.src = image_2.src;
  item_video.style.display = "none";
  pic_item.style.display = "block";

  item_video.pause();
});
// quanity_buttons
let increasebtn = document.getElementById("increase_btn");
let decreasebtn = document.getElementById("decrease_btn");
let quantity_input = document.getElementById("quantity_input");

quantity_input.value = min_quantity;
function increase() {
  quantity_input.value = Number(quantity_input.value) + 1;
  console.log("geo");
}
increasebtn.addEventListener("click", () => {
  increase();
});
function decrease() {
  if (quantity_input.value > 1) {
    quantity_input.value = Number(quantity_input.value) - 1;
  }
}
decreasebtn.addEventListener("click", () => {
  decrease();
});
