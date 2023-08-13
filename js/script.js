const staffItems = document.querySelectorAll('.list-group-item');
const selectButton = document.querySelector('.select-btn');
const nextButton = document.querySelector('.next-btn');


selectButton.style.display = 'none';

staffItems.forEach(item => {
    item.addEventListener('click', () => {
        staffItems.forEach(item => item.classList.remove('selected'));
        item.classList.add('selected');

        selectButton.style.display = 'none';
        nextButton.disabled = false;


        const selectedStaff = {
            name: item.querySelector('.head').textContent,
            email: item.querySelector('#email').textContent
        };
        localStorage.setItem('selectedStaff', JSON.stringify(selectedStaff));
    });
});


nextButton.addEventListener('click', () => {
    const selectedStaff = localStorage.getItem('selectedStaff');
    if (!selectedStaff) {
        selectButton.style.display = 'block';
        return false;
    } else {

        window.location.href = './service.html';
    }
});