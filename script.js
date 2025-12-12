function checkSection() {
    const inicio = document.querySelector('#inicio');
    const top = inicio.getBoundingClientRect().top;
    const bottom = inicio.getBoundingClientRect().bottom;

    if (top <= 50 && bottom >= 150) {
        document.body.id = "inicio-active";
    } else {
        document.body.id = "";
    }
}

document.addEventListener('scroll', checkSection);
checkSection();