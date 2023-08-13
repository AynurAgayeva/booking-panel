function validateAndConfirm() {
    const firstName = document.getElementById("firstName").value;
    const lastName = document.getElementById("lastName").value;
    const email = document.getElementById("email").value;

    if (!firstName || !lastName || !email) {
        $('#errorModal').modal('show');
    } else {
        $('#confirmModal').modal('show');
    }
}

document.addEventListener("DOMContentLoaded", function () {
    const storedData = JSON.parse(localStorage.getItem("selectedStaff"));
    const serviceData = JSON.parse(localStorage.getItem("selectedService"));
    const dateData = localStorage.getItem("selectedDate");
    const hourData = localStorage.getItem("selectedTime");


    if (dateData) {
        const dateTimeElement = document.getElementById("date");
        const combinedValue = `${dateData} `;
        dateTimeElement.textContent = combinedValue;
    }


    if (serviceData && serviceData.name) {
        const serviceNameElement = document.getElementById("service");
        serviceNameElement.textContent = serviceData.name;
    }


    if (serviceData && serviceData.price) {
        const serviceNameElement = document.getElementById("pric");
        serviceNameElement.textContent = serviceData.price;
    }

    if (storedData && storedData.name) {
        const staffNameElement = document.getElementById("name");
        staffNameElement.textContent = storedData.name;
    }
});


