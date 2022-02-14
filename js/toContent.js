function toContent(elemId) {
    let top = $(elemId).offset().top;
    $('body,html').animate({scrollTop: top}, 1000);
}
function toTop() {
    $('body,html').animate({scrollTop: 0}, 1000);
}