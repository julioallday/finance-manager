let modal_el = document.getElementById('form-modal');

let button_el = document.getElementById('open-modal-button');

let span_el = document.getElementsByClassName('close')[0];

button_el.onclick = () => {
  modal_el.style.display = 'block';
};
function closeModal() {
  modal_el.style.display = 'none';
}
