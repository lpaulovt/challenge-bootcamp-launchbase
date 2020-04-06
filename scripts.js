const modalOverlay = document.querySelector('.modal-overlay');
const cards = document.querySelectorAll('.card');

for (let card of cards){
    card.addEventListener("click", function(){
        const siteUrl = card.getAttribute('id');
        modalOverlay.classList.add('active')
        modalOverlay.querySelector("iframe").src=`https://rocketseat.com.br/${siteUrl}`
    });
}

document.querySelector('.close-modal').addEventListener("click", function(){
    modalOverlay.classList.remove('active')
    modalOverlay.querySelector("iframe").src=""
});