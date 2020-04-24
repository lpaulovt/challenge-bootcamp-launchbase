const cards = document.querySelectorAll('.card');

for (let card of cards){
    card.addEventListener("click", function(){
        const siteUrl = card.getAttribute('id');
        window.location.href=`/courses/${siteUrl}`
    });
}
