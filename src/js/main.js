const footerYear = document.querySelector('.footer__year')


const displayCuurentYear = () => {
    const currentYear = new Date().getUTCFullYear()

    footerYear.textContent = currentYear
}


displayCuurentYear()