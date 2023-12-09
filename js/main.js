const introBox = document.getElementById('introBox');
const introCloseBtn = document.getElementById('introClose');

introBox.showModal();

introCloseBtn.addEventListener('click', (e) => {
    introBox.close();
})