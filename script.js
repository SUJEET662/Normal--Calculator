document.querySelector('#btn1').addEventListener("click", clearResult);
document.querySelector('#btn2').addEventListener("click", () => appendToResult('1'));
document.querySelector("#btn3").addEventListener("click", () => appendToResult('2'));
document.querySelector("#btn4").addEventListener("click", () => appendToResult('3'));
document.querySelector("#btn5").addEventListener("click", () => appendToResult('/'));
document.querySelector("#btn6").addEventListener("click", () => appendToResult('4'));
document.querySelector("#btn7").addEventListener("click", () => appendToResult('5'));
document.querySelector("#btn8").addEventListener("click", () => appendToResult('6'));
document.querySelector("#btn9").addEventListener("click", () => appendToResult('*'));
document.querySelector("#btn10").addEventListener("click", () => appendToResult('7'));
document.querySelector("#btn11").addEventListener("click", () => appendToResult('8'));
document.querySelector("#btn12").addEventListener("click", () => appendToResult('9'));
document.querySelector("#btn13").addEventListener("click", () => appendToResult('-'));
document.querySelector("#btn14").addEventListener("click", () => appendToResult('0'));
document.querySelector("#btn15").addEventListener("click", () => appendToResult('.'));
document.querySelector("#btn16").addEventListener("click", calculateResult);
document.querySelector("#btn17").addEventListener("click", () => appendToResult('+'));
document.querySelector("#btn18").addEventListener("click", deletet);
document.querySelector("#btn19").addEventListener("click", () => appendToResult('%'));
document.querySelector("#btn20").addEventListener("click", () => appendToResult('00'));




let ans = "";
function deletet() {
    let ans = document.getElementById("result");
    ans.value = ans.value.slice(0, -1);
}
function appendToResult(value) {
    ans += value;
    document.getElementById('result').value = ans;
}

function clearResult() {
    ans = '';
    document.getElementById('result').value = ans;
}

function calculateResult() {
    ans = eval(ans);
    document.getElementById('result').value = ans;

}
