var faqItems = document.getElementsByClassName("faqItem");

for (var i = 0; i < faqItems.length; i++) {
    faqItems[i].addEventListener("click", function () {
        this.children[0].classList.toggle('is-open');
        var content = this.children[0].nextElementSibling;
        if (content.style.maxHeight) {
        content.style.maxHeight = null;
        } else {
        content.style.maxHeight = content.scrollHeight + "px";
        }
    });
}