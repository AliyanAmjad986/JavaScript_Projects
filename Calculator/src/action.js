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
let values = [];
let sum = 0;
// let operators = [];
let temp_operator;
let arraypoint_index = 0;
let ans = 0;

function operation_performed() {
  for (let i = arraypoint_index; i < values.length; i++) {
    if (temp_operator === "+") {
      ans = ans + values[i];
    }
    if (temp_operator === "-") {
      ans = ans - value[i];
    }
  }
  arraypoint_index++;
  console.log(ans);
  inputbox.value = ans;
}

btn7.addEventListener("click", () => {
  inputbox.value = inputbox.value + "7";
});
btnAC.addEventListener("click", () => {
  inputbox.value = "";
  values.length = 0;
  ans = 0;
  arraypoint_index = 0;
});
btn8.addEventListener("click", () => {
  inputbox.value = inputbox.value + "8";
});
btn9.addEventListener("click", () => {
  inputbox.value = inputbox.value + "9";
});
btn0.addEventListener("click", () => {
  inputbox.value = inputbox.value + "0";
});
btndot.addEventListener("click", () => {
  inputbox.value = inputbox.value + ".";
});
btnmix.addEventListener("click", () => {
  inputbox.value = inputbox.value + "8";
});
btn3.addEventListener("click", () => {
  inputbox.value = inputbox.value + "3";
});
btn2.addEventListener("click", () => {
  if (temp_operator === "+" || temp_operator === "-") {
    inputbox.value = "";
  }
  inputbox.value = inputbox.value + "2";
});
btn1.addEventListener("click", () => {
  if (temp_operator === "+" || temp_operator === "-") {
    inputbox.value = "";
  }
  inputbox.value = inputbox.value + "1";
});
btn6.addEventListener("click", () => {
  inputbox.value = inputbox.value + "6";
});
btn4.addEventListener("click", () => {
  inputbox.value = inputbox.value + "4";
});
btn5.addEventListener("click", () => {
  inputbox.value = inputbox.value + "5";
});
btnmodule.addEventListener("click", () => {
  inputbox.value = inputbox.value + "8";
});

btndivide.addEventListener("click", () => {});
btnsquare.addEventListener("click", () => {
  inputbox.value = inputbox.value + "8";
});

function display() {
  for (let i = 0; i < values.length; i++) {
    console.log(values[i]);
  }
}
// forplus button
btnplus.addEventListener("click", () => {
  values.push(Number(inputbox.value));
  //   operators.push("+");
  display();
  temp_operator = "+";
  operation_performed();
});

//minusbutton
btnminus.addEventListener("click", () => {});
