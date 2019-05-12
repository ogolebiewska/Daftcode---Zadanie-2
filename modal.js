const btnOpenModal = document.querySelectorAll(".button")[0];
const btnCloseModal = document.querySelectorAll(".button")[1];
let modal = document.querySelector(".modal");
console.log(modal);

const openModal = () => {
    modal.style.display = "inline";
}

const closeModal = () => {
    modal.style.display = "none";
}

btnOpenModal.addEventListener('click', openModal);
btnCloseModal.addEventListener('click', closeModal);