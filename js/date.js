 let year = 2023;
        let month = 7; 

     const monthNames = [
            "January", "February", "March", "April", "May", "June",
            "July", "August", "September", "October", "November", "December"
        ];


        const calendarBody = document.getElementById("calendar-body");
        const currentMonthElement = document.getElementById("currentMonth");

function updateCalendar() {
    currentMonthElement.textContent = `${monthNames[month]} ${year}`;

    const prevMonthDays = new Date(year, month, 0).getDate();
    const daysInMonth = new Date(year, month + 1, 0).getDate();
    const firstDay = new Date(year, month, 1).getDay();

    calendarBody.innerHTML = "";

    let date = 1;

    for (let i = 0; i < 6; i++) {
        const row = document.createElement("tr");

        for (let j = 0; j < 7; j++) {
            if (i === 0 && j < firstDay) {
                const cell = document.createElement("td");
                cell.classList.add("empty-cell");
                cell.textContent = prevMonthDays - firstDay + j + 1;
                row.appendChild(cell);
            } else if (date > daysInMonth) {
                break;
            } else {
                const cell = document.createElement("td");
                cell.textContent = date;
                row.appendChild(cell);
                date++;
            }
        }

        calendarBody.appendChild(row);

        if (date > daysInMonth) {
            break;
        }
    }

    const cells = document.querySelectorAll("#calendar-body td");
    cells.forEach(cell => cell.addEventListener("click", cellClicked));

    const selectedDateStr = localStorage.getItem("selectedDate");
    if (selectedDateStr) {
        const [selectedYear, selectedMonth, selectedDate] = selectedDateStr.split("-");
        if (parseInt(selectedYear) === year && parseInt(selectedMonth) - 1 === month) {
            const selectedCell = Array.from(cells).find(cell => cell.textContent === selectedDate);
            if (selectedCell) {
                selectedCell.classList.add("selected");
            }
        }
    }
}


       
        function previousMonth() {
            if (month === 0) {
                year--;
                month = 11;
            } else {
                month--;
            }
            updateCalendar();
        }

    
        function nextMonth() {
            if (month === 11) {
                year++;
                month = 0;
            } else {
                month++;
            }
            updateCalendar();
        }




        let isDateSelected = false;

        function showDatePicker() {
            
            document.getElementById("calendar").style.display = "block";
        }

        function goToNextPage() {
            if (isDateSelected) {
                window.location.href = "confirmation.html";
            } else {
                document.getElementById("selectDateBtn").style.display = "block";
            }
        }


        window.onload = function () {
            updateCalendar();
            const cells = document.querySelectorAll("#calendar-body td");
            cells.forEach(cell => cell.addEventListener("click", cellClicked));

            const selectedDateStr = localStorage.getItem("selectedDate");
            if (selectedDateStr) {
                const [selectedYear, selectedMonth, selectedDate] = selectedDateStr.split("-");
                if (parseInt(selectedYear) === year && parseInt(selectedMonth) - 1 === month) {
                    const selectedCell = Array.from(cells).find(cell => cell.textContent === selectedDate);
                    if (selectedCell) {
                        selectedCell.classList.add("selected");
                    }
                }
            }

            const selectedTimeKey = `selectedTime_${selectedDateStr}`;
            const selectedTime = localStorage.getItem(selectedTimeKey);
            if (selectedTime) {
                const timeButtons = document.querySelectorAll(".hourbtn");
                const selectedTimeButton = Array.from(timeButtons).find(button => button.textContent.includes(selectedTime));
                if (selectedTimeButton) {
                    selectedTimeButton.classList.add("selected");
                }
            }
        };

        function cellClicked(event) {
            const selectedDate = event.target.textContent;

            if (selectedDate) {
                localStorage.setItem("selectedDate", `${year}-${month + 1}-${selectedDate}`);

                const cells = document.querySelectorAll("#calendar-body td");
                cells.forEach(cell => cell.classList.remove("selected"));
                event.target.classList.add("selected");
            }
        }

        function selectTime(selectedTime) {
            const selectedDate = localStorage.getItem("selectedDate");
            if (selectedDate) {
                const key = `selectedTime_${selectedDate}`;
                localStorage.setItem(key, selectedTime);

                const timeButtons = document.querySelectorAll(".hourbtn");
                timeButtons.forEach(button => button.classList.remove("selected"));
                event.target.classList.add("selected");
                document.getElementById("selectDateBtn").style.display = "none";

                isDateSelected = true;
            }
        }
        