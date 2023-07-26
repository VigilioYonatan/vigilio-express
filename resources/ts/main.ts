import "../css/index.css";

const btnLess = document.getElementById("btnMinus") as HTMLButtonElement;
const btnPlus = document.getElementById("btnPlus") as HTMLButtonElement;
const result = document.getElementById("result") as HTMLParagraphElement;

let numero = 6;

prinResult();

btnPlus.addEventListener("click", () => {
	numero++;
	prinResult();
});
btnLess.addEventListener("click", () => {
	numero--;
	prinResult();
});

function prinResult() {
	result.textContent = numero.toString();
}
