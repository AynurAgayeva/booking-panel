const serviceItems = document.querySelectorAll('.list-group-item');
const selectButton = document.querySelector('.select-btn');
const nextButton = document.querySelector('.next-btn');
const backButton = document.querySelector('.back-btn');



serviceItems.forEach(item => {
    item.addEventListener('click', () => {
        serviceItems.forEach(item => item.classList.remove('selected'));
        item.classList.add('selected');

        nextButton.disabled = false;


        const selectedService = {
            name: item.querySelector('.head').textContent,
            duration: item.querySelector('span:nth-of-type(1)').textContent,
            price: item.querySelector('.price').textContent
        };
        localStorage.setItem('selectedService', JSON.stringify(selectedService));
    });
});


nextButton.addEventListener('click', () => {
    const selectedService = localStorage.getItem('selectedService');
    if (!selectedService) {
        selectButton.style.display = 'block';
        return false;
    } else {
        location.href = './date.html';
    }
});


backButton.addEventListener('click', () => {
    const selectedStaff = localStorage.getItem('selectedStaff');
    if (selectedStaff) {
        const staffItems = document.querySelectorAll('.list-group-item');
        staffItems.forEach(item => {
            if (item.querySelector('.head').textContent === parsedStaff.name) {
                item.classList.add('selected');
            }
        });
    }

    location.href = './index.html';

});