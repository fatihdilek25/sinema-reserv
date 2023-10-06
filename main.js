const container = document.querySelector('.container');
const infoText = document.querySelector('.info-text');
const count = document.querySelector('#count');
const amount = document.querySelector('#amount');
const movie = document.querySelector('#movie');
const btnReserv = document.querySelector('.btn-reserv');
const chairs = document.querySelectorAll(".chair:not(.reserved)");


movie.addEventListener('change', () => {
    priceCalculator();
})

btnReserv.addEventListener('click', () => {
    const selectedChairs = container.querySelectorAll('.chair.selected');
    if (selectedChairs.length > 0) {
        selectedChairs.forEach(chair => {
            chair.classList.add('reserved');
            chair.classList.remove('selected');
        });

    }

})


container.addEventListener('click', (pointerEvent) => {
    const chairSelect = pointerEvent.target.offsetParent;
    if (chairSelect.classList.contains('chair') && !chairSelect.classList.contains('reserved')) {
        chairSelect.classList.toggle('selected')
    }
    // 
    priceCalculator();



})

const priceCalculator = () => {
    //! hesaplama işlemleri
    const price = movie.value;
    const selectedCaunt = container.querySelectorAll('.chair.selected').length;
    if (selectedCaunt > 0) {
        infoText.style.display = 'block'

    } else {
        infoText.style.display = 'none'
    }
    count.innerText = selectedCaunt
    amount.innerText = selectedCaunt * price;



}


priceCalculator();