
let skill__percent = $(".skill__percent");
skill__percent.each(function(elem) {
    $(skill__percent[elem]).height($(skill__percent[elem]).text());
});

let skills = $(".skills__list").children();
let selected = skills.first();
selected.addClass("skill--selected");

let descriptions = $(".skills__description").children();
let selected__description = descriptions.first();
selected__description.addClass("skills__description__item--active")

skills.mouseenter(function() {
    selected.removeClass("skill--selected");
    $(this).addClass("skill--selected");
    selected = $(this);
    selected__description.removeClass("skills__description__item--active")
    selected__description = $(`.skills__description__item--content--${$(this).find(".skill__lang").text().toLowerCase()}`);
    console.log(selected__description);
    selected__description.addClass("skills__description__item--active");
});