const Foop = document.querySelector('#Foop');
const FocusRoom = document.querySelector('#FocusRoom');
const buttonOpen = document.getElementById('modalOpen');
const FoopModal = document.getElementById('foopModal');
const buttonClose = document.getElementsByClassName('modalClose')[0];

Foop.addEventListener('click', () => {
    FoopModal.style.display = 'block';
})

// バツ印がクリックされた時
buttonClose.addEventListener('click', () => {
    FoopModal.style.display = 'none';
})

// モーダルコンテンツ以外がクリックされた時
addEventListener('click', outsideClose);
function outsideClose(e) {
    if (e.target == modal) {
        FoopModal.style.display = 'none';
    }
}