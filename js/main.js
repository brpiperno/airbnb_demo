const inTitle = document.querySelector("#input-title");
const inPrice = document.querySelector("#input-price");
const inDescription = document.querySelector("#input-description");
const btnCancel = document.querySelector("#button-cancel");



inTitle.value = "Ben edited this!";
inPrice.value = 123;
inDescription.value = "enter description here!";


const onClickCancel = (evt) => {
	evt.preventDefault(); //don't navigate to a different page
	inTitle.value = "";
	inPrice.value = "";
	inDescription.value = "";
};
btnCancel.addEventListener("click", onClickCancel);