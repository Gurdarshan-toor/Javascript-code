document.querySelectorAll(' .stock_wrap')?.forEach((currentElem) => {
    currentElem.addEventListener('click', function() {
        this.classList.toggle('active');
    });
});