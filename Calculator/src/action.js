let btnAC = document.getElementById("btn_ac");
let btnsquare = document.getElementById("btn_square");
let btnmodule = document.getElementById("btn_module");
let btndivide = document.getElementById("btn_divide");
let btn7 = document.getElementById("btn_7");
let btn8 = document.getElementById("btn_8");
let btn9 = document.getElementById("btn_9");
let btnmultiply = document.getElementById("btn_multiply");
let btn4 = document.getElementById("btn_4");
let btn5 = document.getElementById("btn_5");
let btn6 = document.getElementById("btn_6");
let btnminus = document.getElementById("btn_minus");
let btn1 = document.getElementById("btn_1");
let btn2 = document.getElementById("btn_2");
let btn3 = document.getElementById("btn_3");
let btnplus = document.getElementById("btn_plus");
let btn0 = document.getElementById("btn_0");
let btndot = document.getElementById("btn_dot");
let btnmix = document.getElementById("btn_mix");
let btnequal = document.getElementById("btn_equal");
let inputbox = document.getElementById("input_bar");
let addvalues = [];
let sum = 0;
btn7.addEventListener("click", () => {
  inputbox.value = inputbox.value + "7";
});
btnAC.addEventListener("click", () => {
  inputbox.value = "";
  addvalues.length = 0;
  sum = 0;
});
btn8.addEventListener("click", () => {
  inputbox.value = inputbox.value + "8";
});
function addval() {
  addvalues.push(inputbox.value);
  for (let i = 0; i < addvalues.length; i++) {
    addvalues[i] = Number(inputbox.value);
  }
  inputbox.value = "";
  for (let i = 0; i < addvalues.length; i++) {
    sum = sum + addvalues[i];
  }

  // for(let j = 0; j < addvalues.length; j++ ){
  //     console.log(addvalues[j]);
  // }
  console.log(addvalues.length);
}
btnplus.addEventListener("click", () => {
  addval();
});
btnequal.addEventListener("click", () => {
  addval();
  inputbox.value = "";
  inputbox.value = sum;
  console.log(sum);
});
console.dir(inputbox);
console.log("geo");
